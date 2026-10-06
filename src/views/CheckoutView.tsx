"use client";

import { Component } from "react";
import CheckoutMarkup from "@/components/checkout";
import { productById, type Product } from "@/data/products";
import { stores } from "@/data/stores";
import { money } from "@/lib/format";
import { shopStore, type ShopState } from "@/lib/shopStore";
import "@/styles/checkout.css";

type State = { shop: ShopState; step: number; ship: number; pay: number };

const STEPS = ["Identificação", "Endereço", "Entrega", "Pagamento", "Revisão", "Confirmação"];

const PAYMENTS = [
  ["Pix", "[Condições a configurar]"],
  ["Cartão de crédito", "[Parcelamento a configurar]"],
  ["Pagar na retirada", "Disponível ao escolher retirada na loja"],
];

/**
 * Checkout em etapas (estrutura).
 * Nenhum pagamento é processado: o gateway entra depois, na etapa "Pagamento".
 */
export default class CheckoutView extends Component<object, State> {
  state: State = { shop: shopStore.getServerSnapshot(), step: 1, ship: 0, pay: 0 };

  private unsubscribe: (() => void) | null = null;

  componentDidMount() {
    shopStore.load();
    this.unsubscribe = shopStore.subscribe(() => this.setState({ shop: shopStore.getSnapshot() }));
    this.setState({ shop: shopStore.getSnapshot() });
  }

  componentWillUnmount() {
    this.unsubscribe?.();
  }

  private goTo = (step: number) => () => {
    // ao confirmar, o pedido "sai" do carrinho
    if (step === 6 && this.state.step === 5) shopStore.clearCart();
    this.setState({ step });
    window.scrollTo({ top: 0 });
  };

  private vals() {
    const s = this.state;
    const ships = [
      ["Receber em casa", "Delivery em Boa Vista. [Prazo e taxa a configurar]"],
      ...stores.map((store) => [`Retirar na loja ${store.name}`, store.address.split(" — ")[0]]),
    ];

    let subtotal = 0;
    const lines = Object.keys(s.shop.cart)
      .map((id) => ({ product: productById(id), qty: s.shop.cart[id] }))
      .filter((l): l is { product: Product; qty: number } => !!l.product && l.product.price != null)
      .map(({ product, qty }) => {
        const total = (product.price as number) * qty;
        subtotal += total;
        return { name: product.name, meta: `${product.size} · ${qty} un.`, total: money(total), img: product.img };
      });

    return {
      steps: STEPS.map((label, i) => {
        const n = i + 1;
        return {
          n,
          label,
          cls: n === s.step ? "on" : n < s.step ? "done" : "",
          current: n === s.step ? "step" : undefined,
          go: this.goTo(n),
        };
      }),
      is1: s.step === 1,
      is2: s.step === 2,
      is3: s.step === 3,
      is4: s.step === 4,
      is5: s.step === 5,
      is6: s.step === 6,
      showNav: s.step < 6,
      back: this.goTo(Math.max(1, s.step - 1)),
      backVis: s.step > 1 ? "visible" : "hidden",
      next: this.goTo(Math.min(6, s.step + 1)),
      nextLabel: s.step === 5 ? "Confirmar pedido" : "Continuar",
      ships: ships.map((o, i) => ({
        title: o[0],
        sub: o[1],
        on: s.ship === i,
        cls: s.ship === i ? "on" : "",
        pick: () => this.setState({ ship: i }),
      })),
      pays: PAYMENTS.map((o, i) => ({
        title: o[0],
        sub: o[1],
        on: s.pay === i,
        cls: s.pay === i ? "on" : "",
        pick: () => this.setState({ pay: i }),
      })),
      shipTitle: `${ships[s.ship][0]} — ${ships[s.ship][1]}`,
      payTitle: PAYMENTS[s.pay][0],
      shipLabel: s.ship === 0 ? "Entrega" : "Retirada na loja",
      shipValue: s.ship === 0 ? "[a calcular]" : "Sem frete",
      lines,
      cartEmpty: lines.length === 0 && s.step < 6,
      subtotalFmt: money(subtotal),
    };
  }

  render() {
    return <CheckoutMarkup v={this.vals()} />;
  }
}
