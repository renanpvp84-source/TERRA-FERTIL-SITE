"use client";

import { Component, type ChangeEvent, type FormEvent } from "react";
import HomeMobileMarkup from "@/components/mobile";
import { siteConfig } from "@/data/siteConfig";
import { products, productById, shelves, type Product } from "@/data/products";
import { stores, mapsLink } from "@/data/stores";
import { instagramPosts } from "@/data/instagram";
import { normalize, whatsappLink } from "@/lib/format";
import { productVM } from "@/lib/productVm";
import { shopStore, type ShopState } from "@/lib/shopStore";
import { initMotion, type MotionHandle } from "@/lib/motion";
import "@/styles/mobile.css";

type State = { mounted: boolean; shop: ShopState; q: string; toast: string };

/** Home pensada para o celular: busca no topo, vitrines compactas e navegação inferior. */
export default class HomeMobile extends Component<object, State> {
  state: State = { mounted: false, shop: shopStore.getServerSnapshot(), q: "", toast: "" };

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
    const q = new URLSearchParams(window.location.search).get("q") || "";
    this.setState({ mounted: true, shop: shopStore.getSnapshot(), q });
    this.mql = window.matchMedia("(max-width: 760px)");
    this.mql.addEventListener("change", this.syncMotion);
    this.syncMotion();
  }

  componentDidUpdate() {
    this.motion?.observe();
  }

  componentWillUnmount() {
    this.unsubscribe?.();
    this.motion?.kill();
    this.motion = null;
    this.mql?.removeEventListener("change", this.syncMotion);
    clearTimeout(this.toastTimer);
  }

  private syncMotion = () => {
    const visible = !!this.root && this.root.getClientRects().length > 0;
    if (visible && !this.motion) this.motion = initMotion(this.root as HTMLDivElement);
    if (!visible && this.motion) {
      this.motion.kill();
      this.motion = null;
    }
  };

  private flash = (toast: string) => {
    clearTimeout(this.toastTimer);
    this.setState({ toast });
    this.toastTimer = setTimeout(() => this.setState({ toast: "" }), 2200);
  };

  private vm = (p: Product, index = 0) =>
    productVM(p, this.state.shop, { index, columns: 2, onAdded: () => this.flash("Adicionado ao carrinho") });

  private pick = (ids: string[]) =>
    ids
      .map((id) => productById(id))
      .filter((p): p is Product => !!p)
      .map((p, i) => this.vm(p, i));

  private scrollToResults = () => {
    const target = document.getElementById("m-vendidos");
    if (!target) return;
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: HTMLElement, o?: object) => void } }).__lenis;
    if (lenis) lenis.scrollTo(target, { offset: -120 });
    else target.scrollIntoView();
  };

  private vals() {
    const s = this.state;
    const cartCount = Object.values(s.shop.cart).reduce((sum, n) => sum + n, 0);

    // Com texto na busca, a vitrine vira a lista de resultados.
    const query = normalize(s.q).trim();
    const results = query
      ? products.filter((p) => normalize(`${p.brand} ${p.name} ${p.category} ${p.pet}`).includes(query))
      : [];
    const best = query
      ? results.filter((p) => p.price != null).map((p, i) => this.vm(p, i))
      : this.pick(shelves.mobileBestSellers);

    return {
      cfg: siteConfig,
      year: s.mounted ? new Date().getFullYear() : "",
      q: s.q,
      onQ: (e: ChangeEvent<HTMLInputElement>) => this.setState({ q: e.target.value }),
      onSearch: (e: FormEvent) => {
        e.preventDefault();
        (document.activeElement as HTMLElement | null)?.blur();
        this.scrollToResults();
      },
      focusSearch: () => document.getElementById("m-q")?.focus(),
      cartCount,
      cartHas: cartCount > 0,
      offers: this.pick(shelves.mobileOffers),
      best,
      bestTitle: query ? `Resultados para “${s.q.trim()}”` : "Mais vendidos",
      bestEmpty: !!query && best.length === 0,
      stores: stores.map((store) => ({
        name: store.name,
        tag: store.id === "buritis" ? `${store.tag} · Banho & Tosa` : store.tag.replace("Loja 1 · ", ""),
        addr: store.address.split(" — ")[0],
        tel: store.phone,
        telHref: store.phoneHref,
        mapHref: mapsLink(store),
      })),
      insta: instagramPosts.slice(0, 5).concat(instagramPosts[6]),
      waHref: whatsappLink(),
      waBanhoHref: whatsappLink("Olá! Vim pelo site da Terra Fértil e gostaria de agendar banho e tosa."),
      waVetHref: whatsappLink("Olá! Vim pelo site da Terra Fértil e gostaria de agendar um atendimento veterinário."),
      toast: s.toast,
      toastShow: !!s.toast,
    };
  }

  render() {
    return <HomeMobileMarkup v={this.vals()} rootRef={this.setRoot} />;
  }
}
