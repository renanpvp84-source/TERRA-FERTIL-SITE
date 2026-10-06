/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function ProductMain({ v }: { v: Vals }) {
  return (
    <main className="wrap" style={{ paddingTop: "22px", paddingBottom: "96px" }}>
      <nav
        aria-label="Você está em"
        style={{ display: "flex", flexWrap: "wrap", gap: "8px", fontSize: "14px", color: "#5B6272" }}
      >
        <Link href="/">Início</Link>
        <span>/</span>
        <Link href="/#categorias">{v.prod.pet}</Link>
        <span>/</span>
        <Link href="/#mais-vendidos">{v.prod.category}</Link>
        <span>/</span>
        <span style={{ color: "#14161C", fontWeight: "600" }}>{v.prod.brand}</span>
      </nav>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 64px", marginTop: "24px" }}>
        <div style={{ flex: "1 1 520px", minWidth: "0", display: "flex", gap: "16px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {v.thumbs.map((t: any, i0: number) => (
              <Fragment key={i0}>
                <button
                  type="button"
                  className={`thumb ${t.cls}`}
                  aria-label={t.label}
                  aria-pressed={t.on}
                  onClick={t.pick}
                >
                  {t.hasImg ? <img src={t.img} alt="" loading="lazy" decoding="async" /> : null}
                  {t.noImg ? <span style={{ padding: "6px" }}>{t.label}</span> : null}
                </button>
              </Fragment>
            ))}
          </div>
          <div
            style={{
              position: "relative",
              flex: "1",
              minWidth: "0",
              aspectRatio: "1 / 1",
              maxWidth: "440px",
              borderRadius: "26px",
              overflow: "hidden",
              background: "#F4F5F8",
            }}
          >
            {v.mainHasImg ? (
              <img
                src={v.mainImg}
                alt={v.prod.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
                decoding="async"
              />
            ) : null}
            {v.mainNoImg ? (
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  display: "grid",
                  placeItems: "center",
                  textAlign: "center",
                  padding: "40px",
                  color: "#5B6272",
                  fontWeight: "600",
                }}
              >
                {"["}
                {v.mainLabel}
                {" — enviar foto do produto]"}
              </div>
            ) : null}
            {v.prod.hasBadge ? (
              <span
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "16px",
                  height: "30px",
                  padding: "0 13px",
                  borderRadius: "999px",
                  background: "#14161C",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "800",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                {v.prod.badge}
              </span>
            ) : null}
          </div>
        </div>
        <div style={{ flex: "1 1 440px", minWidth: "0", maxWidth: "560px" }}>
          <Link
            href="/"
            style={{
              fontSize: "13px",
              fontWeight: "800",
              letterSpacing: ".1em",
              textTransform: "uppercase",
              color: "#1E3FA8",
            }}
          >
            {v.prod.brand}
          </Link>
          <h1 className="dsp" style={{ margin: "8px 0 0", fontSize: "38px", lineHeight: "1.08" }}>
            {v.prod.name}
          </h1>
          <div style={{ marginTop: "8px", fontSize: "16.5px", fontWeight: "600", color: "#3D4350" }}>{v.prod.size}</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "12px",
              fontSize: "14.5px",
              color: "#5B6272",
            }}
          >
            <span style={{ display: "flex", gap: "2px", color: "#CDD3E0" }}>
              <svg className="ic" style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 4 2.400 5.200 5.600.700-4.100 3.900 1 5.600L12 16.700 7.100 19.400l1-5.600L4 9.900l5.600-.700L12 4Z" />
              </svg>
              <svg className="ic" style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 4 2.400 5.200 5.600.700-4.100 3.900 1 5.600L12 16.700 7.100 19.400l1-5.600L4 9.900l5.600-.700L12 4Z" />
              </svg>
              <svg className="ic" style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 4 2.400 5.200 5.600.700-4.100 3.900 1 5.600L12 16.700 7.100 19.400l1-5.600L4 9.900l5.600-.700L12 4Z" />
              </svg>
              <svg className="ic" style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 4 2.400 5.200 5.600.700-4.100 3.900 1 5.600L12 16.700 7.100 19.400l1-5.600L4 9.900l5.600-.700L12 4Z" />
              </svg>
              <svg className="ic" style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m12 4 2.400 5.200 5.600.700-4.100 3.900 1 5.600L12 16.700 7.100 19.400l1-5.600L4 9.900l5.600-.700L12 4Z" />
              </svg>
            </span>
            <span>Ainda sem avaliações</span>
          </div>
          <div style={{ marginTop: "22px", padding: "22px 24px", borderRadius: "22px", background: "#F4F5F8" }}>
            {v.prod.hasPrice ? (
              <div className="price">
                <small style={{ fontSize: "18px" }}>R$</small>
                <b style={{ fontSize: "50px" }}>{v.prod.pInt}</b>
                <sup style={{ fontSize: "22px", top: "-18px" }}>
                  {","}
                  {v.prod.pCents}
                </sup>
              </div>
            ) : null}
            {v.prod.noPrice ? (
              <div className="dsp" style={{ fontSize: "32px", lineHeight: "1.1" }}>
                Consulte o preço
              </div>
            ) : null}
            <div style={{ marginTop: "6px", fontSize: "14.5px", color: "#5B6272" }}>{v.cfg.installmentNote}</div>
            <div style={{ marginTop: "10px", fontSize: "14.5px", color: "#3D4350" }}>{v.cfg.stockNote}</div>
          </div>
          {v.prod.noPrice ? (
            <a
              className="btn btn-red"
              style={{ marginTop: "20px", display: "flex" }}
              href={v.prod.waHref}
              target="_blank"
              rel="noopener"
            >
              Consultar no WhatsApp
            </a>
          ) : null}
          {v.prod.hasPrice ? (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "20px" }}>
              <div className="qty">
                <button type="button" aria-label="Diminuir quantidade" onClick={v.dec}>
                  −
                </button>
                <span>{v.qty}</span>
                <button type="button" aria-label="Aumentar quantidade" onClick={v.inc}>
                  +
                </button>
              </div>
              <button type="button" className="btn btn-red" style={{ flex: "1 1 200px" }} onClick={v.buyNow}>
                Comprar agora
              </button>
              <button type="button" className="btn btn-line" style={{ flex: "1 1 100%" }} onClick={v.add}>
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 4h2.200l2.300 11h10.200l2-8H7" />
                  <circle cx="9.500" cy="19" r="1.400" />
                  <circle cx="17" cy="19" r="1.400" />
                </svg>
                Adicionar ao carrinho
              </button>
            </div>
          ) : null}
          <div
            style={{ marginTop: "22px", padding: "18px", borderRadius: "22px", boxShadow: "inset 0 0 0 1px #E3E6EC" }}
          >
            <div className="seg" role="group" aria-label="Como receber">
              <button type="button" className={v.entregaCls} aria-pressed={v.isEntrega} onClick={v.setEntrega}>
                Receber em casa
              </button>
              <button type="button" className={v.retiradaCls} aria-pressed={v.isRetirada} onClick={v.setRetirada}>
                Retirar na loja
              </button>
            </div>
            {v.isEntrega ? (
              <div style={{ marginTop: "14px" }}>
                <label
                  htmlFor="tf-cep"
                  style={{ display: "block", fontSize: "14px", fontWeight: "700", marginBottom: "6px" }}
                >
                  Calcule a entrega
                </label>
                <div style={{ display: "flex", gap: "8px" }}>
                  <input
                    id="tf-cep"
                    type="text"
                    inputMode="numeric"
                    placeholder="CEP"
                    style={{
                      flex: "1",
                      minWidth: "0",
                      height: "46px",
                      borderRadius: "999px",
                      border: "1.5px solid #CDD3E0",
                      padding: "0 18px",
                    }}
                  />
                  <button type="button" className="btn btn-sm btn-line" onClick={v.calc}>
                    Calcular
                  </button>
                </div>
                <div style={{ marginTop: "8px", fontSize: "13.5px", color: "#5B6272" }}>{v.cfg.deliveryNote}</div>
              </div>
            ) : null}
            {v.isRetirada ? (
              <ul style={{ listStyle: "none", margin: "14px 0 0", padding: "0", fontSize: "14.5px" }}>
                <li style={{ padding: "9px 2px", borderTop: "1px solid #E3E6EC" }}>
                  <b>Asa Branca</b>
                  {" · Av. General Ataíde Teive, 5337"}
                </li>
                <li style={{ padding: "9px 2px", borderTop: "1px solid #E3E6EC" }}>
                  <b>Sílvio Botelho</b>
                  {" · Rua Pedro Aldemar Bantim, 1715"}
                </li>
                <li style={{ padding: "9px 2px", borderTop: "1px solid #E3E6EC" }}>
                  <b>Buritis</b>
                  {" · Av. Mário Homem de Melo, 3572"}
                </li>
              </ul>
            ) : null}
          </div>
          <a
            href={v.waHref}
            target="_blank"
            rel="noopener"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "16px",
              minHeight: "44px",
              fontWeight: "700",
              fontSize: "15px",
              color: "#0B7A3E",
            }}
          >
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3Z" />
            </svg>
            Dúvidas sobre este produto? Fale com a Terra Fértil
          </a>
        </div>
      </div>
      <section style={{ marginTop: "64px" }}>
        <div
          role="tablist"
          aria-label="Detalhes do produto"
          style={{ display: "flex", flexWrap: "wrap", borderBottom: "1px solid #E3E6EC" }}
        >
          {v.tabs.map((t: any, i0: number) => (
            <Fragment key={i0}>
              <button type="button" role="tab" className={`tab ${t.cls}`} aria-selected={t.on} onClick={t.pick}>
                {t.label}
              </button>
            </Fragment>
          ))}
        </div>
        <div style={{ maxWidth: "820px", paddingTop: "26px", fontSize: "17px", color: "#3D4350", minHeight: "230px" }}>
          {v.tabDesc ? (
            <div>
              <p style={{ margin: "0 0 12px" }}>{v.prod.description}</p>
              <p style={{ margin: "0", color: "#5B6272" }}>{v.cfg.productDescriptionNote}</p>
            </div>
          ) : null}
          {v.tabSpec ? (
            <div>
              {v.prod.specs.map((sp: any, i0: number) => (
                <Fragment key={i0}>
                  <div className="spec">
                    <b>{sp.k}</b>
                    <span>{sp.v}</span>
                  </div>
                </Fragment>
              ))}
              <div style={{ borderTop: "1px solid #E3E6EC" }} />
            </div>
          ) : null}
          {v.tabInfo ? (
            <div>
              <div className="spec">
                <b>Entrega</b>
                <span>{v.cfg.deliveryNote}</span>
              </div>
              <div className="spec">
                <b>Retirada</b>
                <span>Nas lojas Asa Branca, Sílvio Botelho e Buritis.</span>
              </div>
              <div className="spec" style={{ borderBottom: "1px solid #E3E6EC" }}>
                <b>Trocas</b>
                <span style={{ color: "#5B6272" }}>{v.cfg.exchangeNote}</span>
              </div>
            </div>
          ) : null}
          {v.tabRev ? (
            <div style={{ padding: "28px", borderRadius: "22px", border: "1.5px dashed #CDD3E0" }}>
              <div className="dsp" style={{ fontSize: "24px", color: "#14161C" }}>
                Este produto ainda não tem avaliações
              </div>
              <p style={{ margin: "8px 0 18px", fontSize: "16px" }}>
                Comprou na Terra Fértil? Sua opinião ajuda outros tutores.
              </p>
              <button type="button" className="btn btn-sm btn-line" onClick={v.review}>
                Avaliar produto
              </button>
            </div>
          ) : null}
        </div>
      </section>
      <section style={{ marginTop: "56px", padding: "32px", borderRadius: "26px", background: "#F4F5F8" }}>
        <h2 className="dsp" style={{ margin: "0 0 20px", fontSize: "32px" }}>
          Compre junto
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "16px" }}>
          {v.bundle.map((b: any, i0: number) => (
            <Fragment key={i0}>
              <label
                style={{
                  position: "relative",
                  flex: "1 1 220px",
                  minWidth: "0",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px",
                  borderRadius: "18px",
                  background: "#ffffff",
                  boxShadow: "0 0 0 1px #E3E6EC",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={b.on}
                  onChange={b.toggle}
                  style={{ width: "22px", height: "22px", accentColor: "#E0161C", flex: "none" }}
                />
                <img
                  src={b.img}
                  alt=""
                  style={{ width: "76px", height: "76px", borderRadius: "12px", objectFit: "cover", flex: "none" }}
                  loading="lazy"
                  decoding="async"
                />
                <span style={{ minWidth: "0" }}>
                  <span style={{ display: "block", fontWeight: "600", fontSize: "15px", lineHeight: "1.3" }}>
                    {b.name}
                  </span>
                  <span style={{ display: "block", fontWeight: "800", marginTop: "4px" }}>{b.priceFmt}</span>
                </span>
              </label>
            </Fragment>
          ))}
          <div style={{ flex: "1 1 240px", minWidth: "0", paddingLeft: "8px" }}>
            <div style={{ fontSize: "14px", color: "#5B6272" }}>{v.bundleCount}</div>
            <div
              style={{
                fontSize: "30px",
                fontWeight: "800",
                letterSpacing: "-.015em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {v.bundleTotal}
            </div>
            <button type="button" className="btn btn-sm btn-red" style={{ marginTop: "10px" }} onClick={v.addBundle}>
              Adicionar ao carrinho
            </button>
          </div>
        </div>
      </section>
      <section style={{ marginTop: "64px" }}>
        <h2 className="dsp" style={{ margin: "0 0 24px", fontSize: "32px" }}>
          Produtos relacionados
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(224px, 46%), 1fr))",
            gap: "20px",
          }}
        >
          {v.related.map((p: any, i0: number) => (
            <Fragment key={i0}>
              <article className="pc">
                <Link className="pc-img" href={p.href}>
                  <img src={p.img} alt={p.name} loading="lazy" decoding="async" />
                </Link>
                <div className="pc-brand">{p.brand}</div>
                <Link className="pc-name" href={p.href}>
                  {p.name}
                </Link>
                <div className="pc-meta">{p.size}</div>
                <div style={{ marginTop: "auto", paddingTop: "12px" }}>
                  <div className="price">
                    <small>R$</small>
                    <b>{p.pInt}</b>
                    <sup>
                      {","}
                      {p.pCents}
                    </sup>
                  </div>
                  <button type="button" className="add" onClick={p.add}>
                    Adicionar
                  </button>
                </div>
              </article>
            </Fragment>
          ))}
        </div>
      </section>
    </main>
  );
}
