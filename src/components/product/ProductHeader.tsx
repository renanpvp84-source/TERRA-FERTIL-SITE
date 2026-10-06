/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function ProductHeader({ v }: { v: Vals }) {
  return (
    <header className="hd">
      <div className="wrap hd-main">
        <Link className="hd-logo" href="/" aria-label="Terra Fértil — página inicial">
          <img
            src="/images/logo-terra-fertil.png"
            alt="Terra Fértil — Produtos Agropecuários e Pet Shop"
            decoding="async"
          />
        </Link>
        <form className="hd-search" role="search" onSubmit={v.noop}>
          <label className="sr" htmlFor="tf-q2">
            Buscar na loja
          </label>
          <svg className="ic lead" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.600-3.600" />
          </svg>
          <input id="tf-q2" type="search" placeholder="Busque por produto, marca ou categoria" />
          <button className="go" type="submit" aria-label="Buscar">
            <svg className="ic" style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </form>
        <div className="hd-acts">
          <Link className="hd-act" href="/conta">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.500-3.500 4.500-5 8-5s6.500 1.500 8 5" />
            </svg>
            <span>
              <small>Olá, entre ou cadastre-se</small>
              <b>Minha conta</b>
            </span>
          </Link>
          <Link className="hd-cart" href="/checkout" aria-label="Ir para o carrinho">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2.200l2.300 11h10.200l2-8H7" />
              <circle cx="9.500" cy="19" r="1.400" />
              <circle cx="17" cy="19" r="1.400" />
            </svg>
            <span>Carrinho</span>
            <span className="cnt">{v.cartCount}</span>
          </Link>
        </div>
      </div>
      <nav className="wrap hd-nav" aria-label="Categorias">
        <Link className="nv" style={{ paddingLeft: "0", fontWeight: "800" }} href="/">
          Início
        </Link>
        <Link className="nv" href="/#categorias">
          Cães
        </Link>
        <Link className="nv" href="/#categorias">
          Gatos
        </Link>
        <Link className="nv" href="/#mais-vendidos">
          Rações
        </Link>
        <Link className="nv" href="/#categorias">
          Petiscos
        </Link>
        <Link className="nv" href="/#mais-vendidos">
          Medicamentos
        </Link>
        <Link className="nv" href="/#categorias">
          Higiene
        </Link>
        <Link className="nv" href="/#categorias">
          Acessórios
        </Link>
        <Link className="nv" href="/#banho">
          {"Banho & Tosa"}
        </Link>
        <Link className="nv" href="/#veterinario">
          Veterinário
        </Link>
        <Link className="nv" style={{ marginLeft: "auto", fontWeight: "800", color: "#B80F16" }} href="/#ofertas">
          Ofertas
        </Link>
      </nav>
    </header>
  );
}
