"use client";

import { Component, type ChangeEvent, type FormEvent, type KeyboardEvent } from "react";
import HomeDesktopMarkup from "@/components/home";
import { siteConfig } from "@/data/siteConfig";
import { products, productById, shelves, categories, searchSuggestions, type Product } from "@/data/products";
import { stores, mapsLink } from "@/data/stores";
import { groomingServices, groomingPeriods, samplePets } from "@/data/services";
import { instagramPosts } from "@/data/instagram";
import { reviews } from "@/data/reviews";
import { money, normalize, whatsappLink } from "@/lib/format";
import { productVM } from "@/lib/productVm";
import { shopStore, type ShopState } from "@/lib/shopStore";
import { initMotion, type MotionHandle } from "@/lib/motion";
import "@/styles/home.css";

type State = {
  mounted: boolean;
  shop: ShopState;
  q: string;
  searchFilter: string;
  searchOpen: boolean;
  tab: string;
  cartOpen: boolean;
  waOpen: boolean;
  mode: "entrega" | "retirada";
  service: string;
  pet: string;
  day: number;
  period: string;
  toast: string;
  bump: number;
};

const WEEKDAYS = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];

/** Próximos dias úteis (segunda a sábado) para o agendamento. */
function upcomingDays(count = 6) {
  const out: { wd: string; label: string }[] = [];
  let d = new Date();
  while (out.length < count) {
    d = new Date(d.getTime() + 86400000);
    if (d.getDay() === 0) continue;
    out.push({
      wd: WEEKDAYS[d.getDay()],
      label: String(d.getDate()).padStart(2, "0") + "/" + String(d.getMonth() + 1).padStart(2, "0"),
    });
  }
  return out;
}

const matchesPet = (p: Product, filter: string) =>
  filter === "Todos" || p.pet.startsWith(filter) || p.pet === "Cães e gatos";

export default class HomeDesktop extends Component<object, State> {
  state: State = {
    mounted: false,
    shop: shopStore.getServerSnapshot(),
    q: "",
    searchFilter: "Todos",
    searchOpen: false,
    tab: "Todos",
    cartOpen: false,
    waOpen: false,
    mode: "entrega",
    service: groomingServices[0],
    pet: samplePets[0],
    day: 0,
    period: groomingPeriods[0],
    toast: "",
    bump: 0,
  };

  private root: HTMLDivElement | null = null;
  private motion: MotionHandle | null = null;
  private unsubscribe: (() => void) | null = null;
  private toastTimer: ReturnType<typeof setTimeout> | undefined;
  private mql: MediaQueryList | null = null;

  private setRoot = (el: HTMLDivElement | null) => {
    this.root = el;
  };

  componentDidMount() {
    shopStore.load();
    this.unsubscribe = shopStore.subscribe(() => this.setState({ shop: shopStore.getSnapshot() }));

    // Busca vinda de outra página: /?q=ração
    const q = new URLSearchParams(window.location.search).get("q") || "";
    this.setState({ mounted: true, shop: shopStore.getSnapshot(), q, searchOpen: !!q });

    this.mql = window.matchMedia("(max-width: 760px)");
    this.mql.addEventListener("change", this.syncMotion);
    window.addEventListener("keydown", this.onKey);
    this.syncMotion();
  }

  componentDidUpdate(_: object, prev: State) {
    this.motion?.observe();
    if (prev.cartOpen !== this.state.cartOpen) {
      // com o carrinho aberto, a página atrás não rola
      const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
      if (this.state.cartOpen) lenis?.stop();
      else lenis?.start();
      document.documentElement.style.overflow = this.state.cartOpen ? "hidden" : "";
    }
  }

  componentWillUnmount() {
    this.unsubscribe?.();
    this.motion?.kill();
    this.motion = null;
    this.mql?.removeEventListener("change", this.syncMotion);
    window.removeEventListener("keydown", this.onKey);
    clearTimeout(this.toastTimer);
    document.documentElement.style.overflow = "";
  }

  /** A versão desktop só anima quando está visível (acima de 760px). */
  private syncMotion = () => {
    const visible = !!this.root && this.root.getClientRects().length > 0;
    if (visible && !this.motion) this.motion = initMotion(this.root as HTMLDivElement, { shrinkHeader: true });
    if (!visible && this.motion) {
      this.motion.kill();
      this.motion = null;
    }
  };

  private onKey = (e: globalThis.KeyboardEvent) => {
    if (e.key !== "Escape") return;
    if (this.state.cartOpen) this.setState({ cartOpen: false });
    else if (this.state.waOpen) this.setState({ waOpen: false });
  };

  private flash = (toast: string) => {
    clearTimeout(this.toastTimer);
    this.setState({ toast });
    this.toastTimer = setTimeout(() => this.setState({ toast: "" }), 2400);
  };

  private onAdded = () => {
    this.setState((s) => ({ bump: s.bump + 1 }));
    this.flash("Adicionado ao carrinho");
  };

  private vm = (p: Product, index = 0, columns = 5) =>
    productVM(p, this.state.shop, { index, columns, onAdded: this.onAdded });

  private pick = (ids: string[], columns: number) =>
    ids
      .map((id) => productById(id))
      .filter((p): p is Product => !!p)
      .map((p, i) => this.vm(p, i, columns));

  private chips<K extends keyof State>(labels: string[], current: State[K], key: K, byIndex = false) {
    return labels.map((label, i) => {
      const value = (byIndex ? i : label) as State[K];
      const on = current === value;
      return { label, on, cls: on ? "on" : "", pick: () => this.setState({ [key]: value } as Pick<State, K>) };
    });
  }

  private vals() {
    const s = this.state;
    const { cart, favorites } = s.shop;

    /* ---------- busca ---------- */
    const query = normalize(s.q).trim();
    const pool = products.filter((p) => matchesPet(p, s.searchFilter));
    const found = query
      ? pool.filter((p) => normalize(`${p.brand} ${p.name} ${p.category} ${p.pet}`).includes(query))
      : [];
    const setQuery = (q: string) => () => this.setState({ q, searchOpen: true });
    const sProducts = found.slice(0, 4).map((p, i) => this.vm(p, i, 1));
    const sCats = query
      ? categories
          .filter((c) => normalize(c).includes(query))
          .slice(0, 4)
          .map((c) => ({ label: c, pick: setQuery(c) }))
      : [];
    const brands = Array.from(new Set(products.map((p) => p.brand)));
    const sBrands = query
      ? brands
          .filter((b) => normalize(b).includes(query))
          .slice(0, 4)
          .map((b) => ({ label: b, pick: setQuery(b) }))
      : [];

    /* ---------- carrinho ---------- */
    let subtotal = 0;
    let count = 0;
    const lines = Object.keys(cart)
      .map((id) => ({ product: productById(id), qty: cart[id] }))
      .filter((l): l is { product: Product; qty: number } => !!l.product && l.product.price != null)
      .map(({ product, qty }) => {
        const price = product.price as number;
        subtotal += price * qty;
        count += qty;
        return {
          name: product.name,
          size: product.size,
          img: product.img,
          qty,
          lineFmt: money(price * qty),
          removeLabel: "Remover do carrinho: " + product.name,
          inc: () => shopStore.setQuantity(product.id, qty + 1),
          dec: () => shopStore.setQuantity(product.id, qty - 1),
          remove: () => shopStore.setQuantity(product.id, 0),
        };
      });
    const goal = siteConfig.cartGoal;
    const missing = Math.max(0, goal - subtotal);
    const extras = shelves.cartSuggestions.filter((id) => !cart[id]).slice(0, 2);

    /* ---------- vitrines ---------- */
    const best = shelves.bestSellers.filter((id) => {
      const p = productById(id);
      return !!p && matchesPet(p, s.tab);
    });

    /* ---------- agendamento ---------- */
    const days = s.mounted ? upcomingDays() : [];
    const day = days[s.day] || days[0];
    const summary = [s.service, s.pet, day ? `${day.wd}, ${day.label}` : null, s.period.toLowerCase()]
      .filter(Boolean)
      .join(" · ");

    return {
      cfg: siteConfig,
      year: s.mounted ? new Date().getFullYear() : "",

      q: s.q,
      searchOpen: s.searchOpen,
      onQ: (e: ChangeEvent<HTMLInputElement>) => this.setState({ q: e.target.value, searchOpen: true }),
      onQKey: (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Escape") {
          this.setState({ searchOpen: false });
          e.currentTarget.blur();
        }
      },
      onSubmit: (e: FormEvent) => {
        e.preventDefault();
        this.setState({ searchOpen: true });
      },
      openSearch: () => this.setState({ searchOpen: true }),
      closeSearch: () => this.setState({ searchOpen: false }),
      sFilters: this.chips(["Todos", "Cães", "Gatos"], s.searchFilter, "searchFilter"),
      sIdle: !query,
      sSuggest: searchSuggestions.map((g) => ({ label: g.label, pick: setQuery(g.query) })),
      sProducts,
      sHasProducts: sProducts.length > 0,
      sCats,
      sHasCats: sCats.length > 0,
      sBrands,
      sHasBrands: sBrands.length > 0,
      sNone: !!query && !sProducts.length && !sCats.length && !sBrands.length,
      waStockHref: whatsappLink(`Olá! Vim pelo site da Terra Fértil e gostaria de ver a disponibilidade de: ${s.q}`),

      favCount: Object.keys(favorites).length,
      favHas: Object.keys(favorites).length > 0,
      cartCount: count,
      subtotalFmt: money(subtotal),
      bumpCls: s.bump ? (s.bump % 2 ? "b1" : "b2") : "",
      openCart: () => this.setState({ cartOpen: true, searchOpen: false }),
      closeCart: () => this.setState({ cartOpen: false }),
      cartX: s.cartOpen ? "translateX(0)" : "translateX(105%)",
      cartVis: s.cartOpen ? "visible" : "hidden",
      cartVisDelay: s.cartOpen ? "0s" : ".5s",
      scrimO: s.cartOpen ? 1 : 0,
      scrimPe: s.cartOpen ? "auto" : "none",
      lines,
      cartEmpty: lines.length === 0,
      cartHas: lines.length > 0,
      goalMsg: missing > 0 ? `Faltam ${money(missing)} para completar seu pedido.` : "Pedido completo: meta atingida.",
      goalPct: Math.min(100, Math.round((subtotal / goal) * 100)) + "%",
      extras: this.pick(extras, 1),
      isEntrega: s.mode === "entrega",
      isRetirada: s.mode === "retirada",
      modeEntregaCls: s.mode === "entrega" ? "on" : "",
      modeRetiradaCls: s.mode === "retirada" ? "on" : "",
      setEntrega: () => this.setState({ mode: "entrega" }),
      setRetirada: () => this.setState({ mode: "retirada" }),
      freteLabel: s.mode === "entrega" ? "Entrega" : "Retirada na loja",
      freteValue: s.mode === "entrega" ? "Calculada no checkout" : "Sem frete",
      applyCoupon: () => this.flash("Cupons serão validados na integração"),

      offers: this.pick(shelves.offers, 4),
      best: this.pick(best, 5),
      // nesta vitrine todo produto é recomendado: o selo seria redundante
      picks: this.pick(shelves.picks, 4).map((p) => ({ ...p, hasBadge: false })),
      repor: this.pick(shelves.reorder, 1),
      tabs: this.chips(["Todos", "Cães", "Gatos"], s.tab, "tab"),

      svcs: this.chips(groomingServices, s.service, "service"),
      pets: this.chips(samplePets, s.pet, "pet"),
      days: this.chips(
        days.map((d) => d.label),
        s.day,
        "day",
        true,
      ).map((c, i) => ({ ...c, wd: days[i].wd })),
      pers: this.chips(groomingPeriods, s.period, "period"),
      bookSummary: summary,
      bookHref: whatsappLink(`Olá! Vim pelo site da Terra Fértil e gostaria de agendar: ${summary}.`),

      stores: stores.map((store, i) => ({
        tag: store.tag,
        name: store.name,
        addr: store.address,
        tel: store.phone,
        telHref: store.phoneHref,
        wa: store.whatsapp,
        hours: store.hours,
        tags: store.services.map((label) => ({ label })),
        mapHref: mapsLink(store),
        delay: `${i * 90}ms`,
      })),
      reviews: reviews.map((r) => ({
        ...r,
        stars: "★".repeat(Math.round(r.rating)) + "☆".repeat(5 - Math.round(r.rating)),
        ratingLabel: `Nota ${r.rating} de 5`,
      })),
      reviewsNote: reviews.length
        ? "O que dizem os clientes da Terra Fértil."
        : "Conte como foi sua visita. As primeiras avaliações aparecem aqui.",
      insta: instagramPosts.map((post, i) => ({ ...post, delay: `${(i % 6) * 60}ms` })),

      waHref: whatsappLink(),
      waVetHref: whatsappLink("Olá! Vim pelo site da Terra Fértil e gostaria de agendar um atendimento veterinário."),
      waOpen: s.waOpen,
      toggleWa: () => this.setState((prev) => ({ waOpen: !prev.waOpen })),
      waLinks: siteConfig.whatsappShortcuts.map((w) => ({ label: w.label, href: whatsappLink(w.message) })),

      toast: s.toast,
      toastShow: !!s.toast,
    };
  }

  render() {
    return <HomeDesktopMarkup v={this.vals()} rootRef={this.setRoot} />;
  }
}
