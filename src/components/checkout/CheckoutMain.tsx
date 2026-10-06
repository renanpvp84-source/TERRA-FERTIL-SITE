/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function CheckoutMain({ v }: { v: Vals }) {
  return (
    <main className="wrap" style={{ paddingTop: "32px", paddingBottom: "96px" }}>
      <h1 className="dsp" style={{ margin: "0 0 22px", fontSize: "40px", lineHeight: "1.05" }}>
        Finalizar compra
      </h1>
      <ol
        style={{
          listStyle: "none",
          margin: "0 0 24px",
          padding: "14px 20px",
          display: "flex",
          gap: "10px",
          borderRadius: "18px",
          background: "#ffffff",
          boxShadow: "0 0 0 1px #E3E6EC",
        }}
      >
        {v.steps.map((t: any, i0: number) => (
          <Fragment key={i0}>
            <li style={{ display: "flex", flex: "1 1 0", minWidth: "0" }}>
              <button type="button" className={`step ${t.cls}`} aria-current={t.current} onClick={t.go}>
                <i>{t.n}</i>
                <span>{t.label}</span>
              </button>
            </li>
          </Fragment>
        ))}
      </ol>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "24px" }}>
        <div
          className="card"
          style={{ flex: "3 1 560px", minWidth: "0", minHeight: "520px", display: "flex", flexDirection: "column" }}
        >
          {v.is1 ? (
            <div className="pane">
              <h2 className="dsp" style={{ margin: "0 0 6px", fontSize: "28px" }}>
                Identificação
              </h2>
              <p style={{ margin: "0 0 22px", color: "#5B6272" }}>
                {"Já tem conta? "}
                <Link href="/conta" style={{ color: "#1E3FA8", fontWeight: "700", textDecoration: "underline" }}>
                  Entrar
                </Link>
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
                  gap: "18px",
                }}
              >
                <div>
                  <label className="lbl" htmlFor="ck-email">
                    E-mail
                  </label>
                  <input className="inp" id="ck-email" type="email" autoComplete="email" placeholder="voce@email.com" />
                </div>
                <div>
                  <label className="lbl" htmlFor="ck-nome">
                    Nome completo
                  </label>
                  <input className="inp" id="ck-nome" type="text" autoComplete="name" />
                </div>
                <div>
                  <label className="lbl" htmlFor="ck-cpf">
                    CPF
                  </label>
                  <input className="inp" id="ck-cpf" type="text" inputMode="numeric" placeholder="000.000.000-00" />
                </div>
                <div>
                  <label className="lbl" htmlFor="ck-tel">
                    Celular / WhatsApp
                  </label>
                  <input className="inp" id="ck-tel" type="tel" autoComplete="tel" placeholder="(95) 90000-0000" />
                </div>
              </div>
            </div>
          ) : null}
          {v.is2 ? (
            <div className="pane">
              <h2 className="dsp" style={{ margin: "0 0 22px", fontSize: "28px" }}>
                Endereço
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
                  gap: "18px",
                }}
              >
                <div>
                  <label className="lbl" htmlFor="ck-cep">
                    CEP
                  </label>
                  <input
                    className="inp"
                    id="ck-cep"
                    type="text"
                    inputMode="numeric"
                    autoComplete="postal-code"
                    placeholder="69300-000"
                  />
                </div>
                <div>
                  <label className="lbl" htmlFor="ck-rua">
                    Rua / Avenida
                  </label>
                  <input className="inp" id="ck-rua" type="text" autoComplete="address-line1" />
                </div>
                <div>
                  <label className="lbl" htmlFor="ck-num">
                    Número
                  </label>
                  <input className="inp" id="ck-num" type="text" />
                </div>
                <div>
                  <label className="lbl" htmlFor="ck-comp">
                    Complemento
                  </label>
                  <input className="inp" id="ck-comp" type="text" />
                </div>
                <div>
                  <label className="lbl" htmlFor="ck-bairro">
                    Bairro
                  </label>
                  <input className="inp" id="ck-bairro" type="text" />
                </div>
                <div>
                  <label className="lbl" htmlFor="ck-cidade">
                    Cidade / UF
                  </label>
                  <input className="inp" id="ck-cidade" type="text" placeholder="Boa Vista – RR" />
                </div>
              </div>
            </div>
          ) : null}
          {v.is3 ? (
            <div className="pane">
              <h2 className="dsp" style={{ margin: "0 0 22px", fontSize: "28px" }}>
                Entrega ou retirada
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {v.ships.map((o: any, i0: number) => (
                  <Fragment key={i0}>
                    <label className={`opt ${o.cls}`}>
                      <input type="radio" name="ck-ship" checked={o.on} onChange={o.pick} />
                      <span>
                        <b style={{ display: "block" }}>{o.title}</b>
                        <span style={{ fontSize: "14.5px", color: "#5B6272" }}>{o.sub}</span>
                      </span>
                    </label>
                  </Fragment>
                ))}
              </div>
            </div>
          ) : null}
          {v.is4 ? (
            <div className="pane">
              <h2 className="dsp" style={{ margin: "0 0 22px", fontSize: "28px" }}>
                Pagamento
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {v.pays.map((o: any, i0: number) => (
                  <Fragment key={i0}>
                    <label className={`opt ${o.cls}`}>
                      <input type="radio" name="ck-pay" checked={o.on} onChange={o.pick} />
                      <span>
                        <b style={{ display: "block" }}>{o.title}</b>
                        <span style={{ fontSize: "14.5px", color: "#5B6272" }}>{o.sub}</span>
                      </span>
                    </label>
                  </Fragment>
                ))}
              </div>
              <p style={{ margin: "16px 0 0", fontSize: "13.5px", color: "#5B6272" }}>
                [Gateway de pagamento brasileiro a integrar. Nenhuma cobrança é feita neste protótipo.]
              </p>
            </div>
          ) : null}
          {v.is5 ? (
            <div className="pane">
              <h2 className="dsp" style={{ margin: "0 0 22px", fontSize: "28px" }}>
                Revisão do pedido
              </h2>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: "18px", padding: "14px 0", borderTop: "1px solid #E3E6EC" }}>
                  <b style={{ flex: "0 0 150px" }}>Identificação</b>
                  <span style={{ color: "#3D4350" }}>[Nome] · [E-mail] · [Celular]</span>
                </div>
                <div style={{ display: "flex", gap: "18px", padding: "14px 0", borderTop: "1px solid #E3E6EC" }}>
                  <b style={{ flex: "0 0 150px" }}>Recebimento</b>
                  <span style={{ color: "#3D4350" }}>{v.shipTitle}</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "18px",
                    padding: "14px 0",
                    borderTop: "1px solid #E3E6EC",
                    borderBottom: "1px solid #E3E6EC",
                  }}
                >
                  <b style={{ flex: "0 0 150px" }}>Pagamento</b>
                  <span style={{ color: "#3D4350" }}>{v.payTitle}</span>
                </div>
              </div>
            </div>
          ) : null}
          {v.is6 ? (
            <div className="pane" style={{ margin: "auto", textAlign: "center", maxWidth: "440px" }}>
              <span
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "#E6F4EC",
                  color: "#0B6B37",
                  display: "inline-grid",
                  placeItems: "center",
                }}
              >
                <svg
                  className="ic"
                  style={{ width: "34px", height: "34px", strokeWidth: "2.200" }}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="m5 12 4.500 4.500L19 7" />
                </svg>
              </span>
              <h2 className="dsp" style={{ margin: "18px 0 8px", fontSize: "34px" }}>
                Pedido recebido
              </h2>
              <p style={{ margin: "0 0 22px", color: "#3D4350" }}>
                Pedido [nº] registrado nesta simulação. A loja confirma os detalhes pelo WhatsApp.
              </p>
              <Link className="btn btn-line" href="/">
                Voltar para a loja
              </Link>
            </div>
          ) : null}
          {v.showNav ? (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "12px",
                marginTop: "auto",
                paddingTop: "32px",
              }}
            >
              <button type="button" className="btn btn-line" onClick={v.back} style={{ visibility: v.backVis }}>
                Voltar
              </button>
              <button type="button" className="btn btn-red" onClick={v.next}>
                {v.nextLabel}{" "}
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
        <aside
          className="card"
          style={{ flex: "2 1 340px", minWidth: "0", padding: "26px", position: "sticky", top: "24px" }}
        >
          <h2 className="dsp" style={{ margin: "0 0 14px", fontSize: "24px" }}>
            Resumo do pedido
          </h2>
          {v.lines.map((l: any, i0: number) => (
            <Fragment key={i0}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "12px 0",
                  borderTop: "1px solid #E3E6EC",
                }}
              >
                <img
                  src={l.img}
                  alt=""
                  style={{ width: "64px", height: "64px", borderRadius: "12px", objectFit: "cover", flex: "none" }}
                  loading="lazy"
                  decoding="async"
                />
                <div style={{ flex: "1", minWidth: "0" }}>
                  <div style={{ fontWeight: "600", fontSize: "15px", lineHeight: "1.3" }}>{l.name}</div>
                  <div style={{ fontSize: "13.5px", color: "#5B6272" }}>{l.meta}</div>
                </div>
                <b style={{ fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{l.total}</b>
              </div>
            </Fragment>
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              paddingTop: "16px",
              borderTop: "1px solid #E3E6EC",
              fontSize: "15.5px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span style={{ color: "#5B6272" }}>Subtotal</span>
              <span style={{ fontVariantNumeric: "tabular-nums" }}>{v.subtotalFmt}</span>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
              <span style={{ color: "#5B6272" }}>{v.shipLabel}</span>
              <span style={{ textAlign: "right" }}>{v.shipValue}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                fontWeight: "800",
                fontSize: "22px",
                marginTop: "6px",
              }}
            >
              <span>Total</span>
              <span style={{ fontVariantNumeric: "tabular-nums" }}>{v.subtotalFmt}</span>
            </div>
          </div>
          {v.cartEmpty ? (
            <p style={{ margin: "14px 0 0", fontSize: "14.5px", color: "#5B6272" }}>
              {"Seu carrinho está vazio. "}
              <Link href="/#ofertas" style={{ color: "#1E3FA8", fontWeight: "700", textDecoration: "underline" }}>
                Ver ofertas
              </Link>
            </p>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
