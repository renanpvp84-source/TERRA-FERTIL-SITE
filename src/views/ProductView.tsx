"use client";

import { Component, type FormEvent } from "react";
import ProductMarkup from "@/components/product";
import { products, productById, type Product } from "@/data/products";
import { siteConfig } from "@/data/siteConfig";
import { money, priceParts, whatsappLink } from "@/lib/format";
import { productVM } from "@/lib/productVm";
import { shopStore, type ShopState } from "@/lib/shopStore";
import "@/styles/product.css";

type Props = { id: string };
type State = {
  shop: ShopState;
  qty: number;
  image: number;
  mode: "entrega" | "retirada";
  tab: string;
  bundle: Record<string, boolean>;
  toast: string;
};

const TABS = ["Descrição", "Características", "Informações", "Avaliações"];

/** Página de produto: galeria, compra, abas, "compre junto" e relacionados. */
export default class ProductView extends Component<Props, State> {
  state: State = {
    shop: shopStore.getServerSnapshot(),
    qty: 1,
    image: 0,
    mode: "entrega",
    tab: TABS[0],
    bundle: {},
    toast: "",
  };

  private unsubscribe: (() => void) | null = null;
  private toastTimer: ReturnType<typeof setTimeout> | undefined;

  componentDidMount() {
    shopStore.load();
    this.unsubscribe = shopStore.subscribe(() => this.setState({ shop: shopStore.getSnapshot() }));
    this.setState({ shop: shopStore.getSnapshot() });
  }

  componentWillUnmount() {
    this.unsubscribe?.();
    clearTimeout(this.toastTimer);
  }

  private flash = (toast: string) => {
    clearTimeout(this.toastTimer);
    this.setState({ toast });
    this.toastTimer = setTimeout(() => this.setState({ toast: "" }), 2400);
  };

  private vals() {
    const s = this.state;
    const product = productById(this.props.id) as Product;
    const hasPrice = product.price != null;
    const parts = hasPrice ? priceParts(product.price as number) : { int: "0", cents: "00" };

    const gallery = [
      { label: "Foto da embalagem", img: product.img },
      ...(product.art ? [{ label: "Arte da oferta", img: product.art }] : []),
    ];
    const current = gallery[s.image] || gallery[0];

    // Compre junto: o produto da página + dois cuidados que combinam com qualquer pedido
    const bundleItems = [product, productById("vetmax-plus"), productById("bravecto")]
      .filter((p, i, list): p is Product => !!p && p.price != null && list.findIndex((o) => o?.id === p.id) === i)
      .slice(0, 3);
    const selected = bundleItems.filter((p) => s.bundle[p.id] !== false);
    const bundleTotal = selected.reduce((sum, p) => sum + (p.price as number), 0);

    const related = products
      .filter((p) => p.id !== product.id && p.price != null && p.category === product.category)
      .concat(products.filter((p) => p.id !== product.id && p.price != null && p.category !== product.category))
      .slice(0, 5);

    const specs = [
      { k: "Marca", v: product.brand },
      ...(product.line ? [{ k: "Linha", v: product.line }] : []),
      { k: "Indicação", v: product.audience },
      { k: "Tamanho", v: product.size },
      { k: "Categoria", v: product.category },
    ];

    const added = () => this.flash("Adicionado ao carrinho");

    return {
      cfg: siteConfig,
      prod: {
        pet: product.pet,
        category: product.category,
        brand: product.brand,
        name: product.name,
        size: product.size,
        alt: `${product.name}, ${product.size}`,
        hasBadge: !!product.badge,
        badge: product.badge,
        hasPrice,
        noPrice: !hasPrice,
        pInt: parts.int,
        pCents: parts.cents,
        description: product.description,
        specs,
        waHref: whatsappLink(
          `Olá! Vim pelo site da Terra Fértil e gostaria de consultar o preço de: ${product.name} (${product.size}).`,
        ),
      },

      // busca do topo leva para a home já com o termo
      noop: (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const term = e.currentTarget.querySelector("input")?.value.trim();
        window.location.href = term ? `/?q=${encodeURIComponent(term)}` : "/";
      },
      cartCount: Object.values(s.shop.cart).reduce((sum, n) => sum + n, 0),

      thumbs: gallery.map((g, i) => ({
        label: g.label,
        img: g.img,
        hasImg: !!g.img,
        noImg: !g.img,
        on: s.image === i,
        cls: s.image === i ? "on" : "",
        pick: () => this.setState({ image: i }),
      })),
      mainImg: current.img,
      mainHasImg: !!current.img,
      mainNoImg: !current.img,
      mainLabel: current.label,

      qty: s.qty,
      inc: () => this.setState((prev) => ({ qty: prev.qty + 1 })),
      dec: () => this.setState((prev) => ({ qty: Math.max(1, prev.qty - 1) })),
      add: () => {
        if (!hasPrice) return;
        shopStore.add(product.id, s.qty);
        added();
      },
      buyNow: () => {
        if (!hasPrice) return;
        shopStore.add(product.id, s.qty);
        window.location.href = "/checkout";
      },

      isEntrega: s.mode === "entrega",
      isRetirada: s.mode === "retirada",
      entregaCls: s.mode === "entrega" ? "on" : "",
      retiradaCls: s.mode === "retirada" ? "on" : "",
      setEntrega: () => this.setState({ mode: "entrega" }),
      setRetirada: () => this.setState({ mode: "retirada" }),
      calc: () => this.flash("Cálculo de frete entra na integração"),
      review: () => this.flash("Avaliações entram com a conta do cliente"),

      tabs: TABS.map((label) => ({
        label,
        on: s.tab === label,
        cls: s.tab === label ? "on" : "",
        pick: () => this.setState({ tab: label }),
      })),
      tabDesc: s.tab === TABS[0],
      tabSpec: s.tab === TABS[1],
      tabInfo: s.tab === TABS[2],
      tabRev: s.tab === TABS[3],

      bundle: bundleItems.map((p) => ({
        name: `${p.name}, ${p.size}`,
        img: p.img,
        priceFmt: money(p.price as number),
        on: s.bundle[p.id] !== false,
        toggle: () => this.setState((prev) => ({ bundle: { ...prev.bundle, [p.id]: prev.bundle[p.id] === false } })),
      })),
      bundleCount: selected.length === 1 ? "1 item selecionado" : `${selected.length} itens selecionados`,
      bundleTotal: money(bundleTotal),
      addBundle: () => {
        if (!selected.length) return;
        selected.forEach((p) => shopStore.add(p.id));
        added();
      },

      related: related.map((p, i) => productVM(p, s.shop, { index: i, onAdded: added })),

      waHref: whatsappLink(
        `Olá! Vim pelo site da Terra Fértil e gostaria de informações sobre: ${product.name} (${product.size}).`,
      ),
      toast: s.toast,
      toastShow: !!s.toast,
    };
  }

  render() {
    return <ProductMarkup v={this.vals()} />;
  }
}
