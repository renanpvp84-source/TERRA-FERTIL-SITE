/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function Header({ v }: { v: Vals }) {
  return (
    <header className="hd">
      <div className="wrap hd-main">
        <a className="hd-logo" href="#topo" aria-label="Terra Fértil — página inicial">
          <img
            src="/images/logo-terra-fertil.png"
            alt="Terra Fértil — Produtos Agropecuários e Pet Shop"
            decoding="async"
          />
        </a>
        <form className="hd-search" role="search" onSubmit={v.onSubmit}>
          <label className="sr" htmlFor="tf-q">
            Buscar na loja
          </label>
          <svg className="ic lead" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.600-3.600" />
          </svg>
          <input
            id="tf-q"
            type="search"
            placeholder="Busque por produto, marca ou categoria"
            value={v.q}
            onChange={v.onQ}
            onFocus={v.openSearch}
            onKeyDown={v.onQKey}
          />
          <button className="go" type="submit" aria-label="Buscar">
            <svg className="ic" style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          {v.searchOpen ? (
            <div className="sd" aria-label="Resultados da busca" data-lenis-prevent="">
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "0 2px 4px" }}>
                {v.sFilters.map((f: any, i0: number) => (
                  <Fragment key={i0}>
                    <button type="button" className={`chip ${f.cls}`} aria-pressed={f.on} onClick={f.pick}>
                      {f.label}
                    </button>
                  </Fragment>
                ))}
              </div>
              {v.sIdle ? (
                <div>
                  <h4>Sugestões</h4>
                  {v.sSuggest.map((g: any, i0: number) => (
                    <Fragment key={i0}>
                      <button type="button" className="sd-row" onClick={g.pick}>
                        <svg
                          className="ic"
                          style={{ width: "18px", height: "18px", color: "#5B6272", margin: "0 6px" }}
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <circle cx="11" cy="11" r="7" />
                          <path d="m20 20-3.600-3.600" />
                        </svg>
                        <span style={{ fontWeight: "600" }}>{g.label}</span>
                      </button>
                    </Fragment>
                  ))}
                </div>
              ) : null}
              {v.sHasProducts ? (
                <div>
                  <h4>Produtos</h4>
                  {v.sProducts.map((p: any, i0: number) => (
                    <Fragment key={i0}>
                      <div className="sd-row">
                        <img src={p.img} alt="" loading="lazy" decoding="async" />
                        <Link href={p.href} style={{ flex: "1", minWidth: "0" }}>
                          <span
                            style={{
                              display: "block",
                              fontSize: "11.5px",
                              fontWeight: "800",
                              letterSpacing: ".08em",
                              textTransform: "uppercase",
                              color: "#5B6272",
                            }}
                          >
                            {p.brand}
                          </span>
                          <span
                            style={{
                              display: "block",
                              fontWeight: "600",
                              fontSize: "15px",
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }}
                          >
                            {p.name}
                            {" · "}
                            {p.size}
                          </span>
                        </Link>
                        <span style={{ fontWeight: "800", fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
                          {p.priceFmt}
                        </span>
                        <button type="button" className="rnd" aria-label={p.addLabel} onClick={p.add}>
                          <svg
                            className="ic"
                            style={{ width: "20px", height: "20px" }}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path d="M12 5v14M5 12h14" />
                          </svg>
                        </button>
                      </div>
                    </Fragment>
                  ))}
                </div>
              ) : null}
              {v.sHasCats ? (
                <div>
                  <h4>Categorias</h4>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "0 2px" }}>
                    {v.sCats.map((c: any, i0: number) => (
                      <Fragment key={i0}>
                        <button type="button" className="chip" onClick={c.pick}>
                          {c.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
              ) : null}
              {v.sHasBrands ? (
                <div>
                  <h4>Marcas</h4>
                  <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", padding: "0 2px" }}>
                    {v.sBrands.map((c: any, i0: number) => (
                      <Fragment key={i0}>
                        <button type="button" className="chip" onClick={c.pick}>
                          {c.label}
                        </button>
                      </Fragment>
                    ))}
                  </div>
                </div>
              ) : null}
              {v.sNone ? (
                <div style={{ padding: "26px 12px 14px", textAlign: "center" }}>
                  <div className="dsp" style={{ fontSize: "24px" }}>
                    {"Nada encontrado para “"}
                    {v.q}
                    {"”"}
                  </div>
                  <p style={{ margin: "8px auto 18px", maxWidth: "380px", color: "#5B6272", fontSize: "15px" }}>
                    Confira a grafia ou tente um termo mais geral. Se preferir, a loja confere o estoque para você.
                  </p>
                  <a className="btn btn-sm btn-line" href={v.waStockHref} target="_blank" rel="noopener">
                    Ver disponibilidade no WhatsApp
                  </a>
                </div>
              ) : null}
            </div>
          ) : null}
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
          <Link className="hd-act" href="/conta#repor" aria-label="Favoritos">
            <span className="hd-ico">
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20s-7-4.400-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" />
              </svg>
              {v.favHas ? <span className="cnt">{v.favCount}</span> : null}
            </span>
            <span>
              <small>Meus</small>
              <b>Favoritos</b>
            </span>
          </Link>
          <button type="button" className="hd-cart" onClick={v.openCart} aria-label="Abrir carrinho">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2.200l2.300 11h10.200l2-8H7" />
              <circle cx="9.500" cy="19" r="1.400" />
              <circle cx="17" cy="19" r="1.400" />
            </svg>
            <span className="amt">{v.subtotalFmt}</span>
            <span className={`cnt ${v.bumpCls}`}>{v.cartCount}</span>
          </button>
        </div>
      </div>
      <div className="hd-navrow">
        <nav className="wrap hd-nav" aria-label="Categorias">
          <a className="nv nv-all" href="#categorias">
            <svg className="ic" style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
            Início
          </a>
          <a className="nv" href="#categorias">
            Pet Shop
          </a>
          <a className="nv" href="#categorias">
            Cães
          </a>
          <a className="nv" href="#categorias">
            Gatos
          </a>
          <a className="nv" href="#mais-vendidos">
            Rações
          </a>
          <a className="nv" href="#categorias">
            Petiscos
          </a>
          <a className="nv" href="#mais-vendidos">
            Medicamentos
          </a>
          <a className="nv" href="#categorias">
            Higiene
          </a>
          <a className="nv" href="#categorias">
            Acessórios
          </a>
          <a className="nv" href="#banho">
            {"Banho & Tosa"}
          </a>
          <a className="nv" href="#veterinario">
            Veterinário
          </a>
          <a className="nv nv-of" href="#ofertas">
            <svg className="ic" style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 12V4h8l10 10-8 8L3 12Z" />
              <circle cx="7.500" cy="8.500" r="1.300" />
            </svg>
            Ofertas
          </a>
        </nav>
      </div>
    </header>
  );
}
