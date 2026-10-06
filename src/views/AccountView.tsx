"use client";

import { Component, type ChangeEvent, type FormEvent } from "react";
import AccountMarkup from "@/components/account";
import { productById, shelves, type Product } from "@/data/products";
import { money, whatsappLink } from "@/lib/format";
import { shopStore } from "@/lib/shopStore";
import "@/styles/account.css";

type Pet = { name: string; species: string; breed: string };
type State = { pets: Pet[]; fName: string; fSpecies: string; fBreed: string; fError: string; toast: string };

const TONES = ["#1E3FA8", "#E0161C", "#0F1A4A"];

/**
 * Área do cliente (demonstração).
 * Os pets e pedidos são dados de exemplo guardados só nesta tela;
 * a estrutura está pronta para receber autenticação e tabelas do Supabase.
 */
export default class AccountView extends Component<object, State> {
  state: State = {
    pets: [
      { name: "Thor", species: "Cachorro", breed: "Golden Retriever" },
      { name: "Mel", species: "Gato", breed: "SRD" },
    ],
    fName: "",
    fSpecies: "Cachorro",
    fBreed: "",
    fError: "",
    toast: "",
  };

  private toastTimer: ReturnType<typeof setTimeout> | undefined;

  componentDidMount() {
    shopStore.load();
  }

  componentWillUnmount() {
    clearTimeout(this.toastTimer);
  }

  private flash = (toast: string) => {
    clearTimeout(this.toastTimer);
    this.setState({ toast });
    this.toastTimer = setTimeout(() => this.setState({ toast: "" }), 2400);
  };

  private vals() {
    const s = this.state;
    const reorderNotes: Record<string, string> = {
      "pro-omega-adulto": "para o Thor",
      "vetmax-plus": "cães e gatos",
      herbalvet: "para a casa",
    };

    return {
      pets: s.pets.map((p, i) => ({
        name: p.name,
        species: p.species,
        breed: p.breed || "Raça não informada",
        initial: p.name.charAt(0).toUpperCase(),
        tone: TONES[i % TONES.length],
      })),
      fName: s.fName,
      fSpecies: s.fSpecies,
      fBreed: s.fBreed,
      fError: s.fError,
      onName: (e: ChangeEvent<HTMLInputElement>) => this.setState({ fName: e.target.value, fError: "" }),
      onSpecies: (e: ChangeEvent<HTMLSelectElement>) => this.setState({ fSpecies: e.target.value }),
      onBreed: (e: ChangeEvent<HTMLInputElement>) => this.setState({ fBreed: e.target.value }),
      addPet: (e: FormEvent) => {
        e.preventDefault();
        const name = s.fName.trim();
        if (!name) {
          this.setState({ fError: "Informe o nome do pet para salvar." });
          return;
        }
        this.setState({
          pets: s.pets.concat([{ name, species: s.fSpecies, breed: s.fBreed.trim() }]),
          fName: "",
          fBreed: "",
          fError: "",
        });
        this.flash("Pet salvo nesta demonstração");
      },
      repor: shelves.reorder
        .map((id) => productById(id))
        .filter((p): p is Product => !!p && p.price != null)
        .map((p) => ({
          name: p.name,
          meta: `${p.size} · ${reorderNotes[p.id] || p.audience}`,
          price: money(p.price as number),
          img: p.img,
          buy: () => {
            shopStore.add(p.id);
            this.flash("Adicionado ao carrinho");
          },
        })),
      waHref: whatsappLink("Olá! Vim pelo site da Terra Fértil e preciso de ajuda com a minha conta."),
      toast: s.toast,
      toastShow: !!s.toast,
    };
  }

  render() {
    return <AccountMarkup v={this.vals()} />;
  }
}
