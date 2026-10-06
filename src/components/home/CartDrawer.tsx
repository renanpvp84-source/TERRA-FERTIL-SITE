/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function CartDrawer({ v }: { v: Vals }) {
  return (
    <aside
      className="drawer"
      aria-label="Carrinho"
      style={{
        transform: v.cartX,
        visibility: v.cartVis,
        transition: `transform .5s cubic-bezier(.22,1,.36,1), visibility 0s linear ${v.cartVisDelay}`,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 22px",
          borderBottom: "1px solid #E3E6EC",
        }}
      >
        <div className="dsp" style={{ fontSize: "26px" }}>
          {"Seu carrinho "}
          <span
            style={{
              fontFamily: "'Figtree Variable', 'Figtree', sans-serif",
              fontSize: "15px",
              fontWeight: "600",
              color: "#5B6272",
              letterSpacing: "0",
            }}
          >
            {"("}
            {v.cartCount}
            {")"}
          </span>
        </div>
        <button
          type="button"
          onClick={v.closeCart}
          aria-label="Fechar carrinho"
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50%",
            border: "0",
            background: "#F4F5F8",
            display: "grid",
            placeItems: "center",
          }}
        >
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6l12 12M18 6 6 18" />
          </svg>
        </button>
      </div>
      {v.cartEmpty ? (
        <div style={{ flex: "1", display: "grid", placeItems: "center", padding: "32px", textAlign: "center" }}>
          <div>
            <div className="dsp" style={{ fontSize: "26px" }}>
              Seu carrinho está vazio
            </div>
            <p style={{ margin: "8px 0 20px", color: "#5B6272" }}>Que tal começar pelas ofertas da semana?</p>
            <a className="btn btn-sm btn-red" href="#ofertas" onClick={v.closeCart}>
              Ver ofertas
            </a>
          </div>
        </div>
      ) : null}
      {v.cartHas ? (
        <div style={{ flex: "1", minHeight: "0", display: "flex", flexDirection: "column" }}>
          <div style={{ padding: "14px 22px", background: "#F4F5F8" }}>
            <div style={{ fontSize: "14.5px" }}>{v.goalMsg}</div>
            <div
              style={{
                height: "8px",
                borderRadius: "999px",
                background: "#DDE1EA",
                marginTop: "8px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  borderRadius: "999px",
                  background: "#1E3FA8",
                  width: v.goalPct,
                  transition: "width .6s cubic-bezier(.22,1,.36,1)",
                }}
              />
            </div>
            <div style={{ fontSize: "12.5px", color: "#5B6272", marginTop: "6px" }}>{v.cfg.cartGoalNote}</div>
          </div>
          <div data-lenis-prevent="" style={{ flex: "1", minHeight: "0", overflow: "auto", padding: "4px 22px" }}>
            {v.lines.map((l: any, i0: number) => (
              <Fragment key={i0}>
                <div style={{ display: "flex", gap: "14px", padding: "16px 0", borderBottom: "1px solid #E3E6EC" }}>
                  <img
                    src={l.img}
                    alt=""
                    style={{ width: "76px", height: "76px", borderRadius: "12px", objectFit: "cover", flex: "none" }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div style={{ flex: "1", minWidth: "0" }}>
                    <div style={{ fontWeight: "600", fontSize: "15px", lineHeight: "1.3" }}>{l.name}</div>
                    <div style={{ fontSize: "13px", color: "#5B6272" }}>{l.size}</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "10px",
                        marginTop: "8px",
                      }}
                    >
                      <div className="qty">
                        <button type="button" aria-label="Diminuir quantidade" onClick={l.dec}>
                          −
                        </button>
                        <span>{l.qty}</span>
                        <button type="button" aria-label="Aumentar quantidade" onClick={l.inc}>
                          +
                        </button>
                      </div>
                      <div style={{ fontWeight: "800", fontVariantNumeric: "tabular-nums" }}>{l.lineFmt}</div>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={l.removeLabel}
                    onClick={l.remove}
                    style={{
                      alignSelf: "flex-start",
                      width: "44px",
                      height: "44px",
                      margin: "-8px -12px 0 0",
                      border: "0",
                      background: "transparent",
                      borderRadius: "50%",
                      color: "#5B6272",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <svg
                      className="ic"
                      style={{ width: "18px", height: "18px" }}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6 6l12 12M18 6 6 18" />
                    </svg>
                  </button>
                </div>
              </Fragment>
            ))}
            <div style={{ padding: "18px 0 8px" }}>
              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "800",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "#5B6272",
                }}
              >
                Aproveite e leve também
              </div>
              {v.extras.map((p: any, i0: number) => (
                <Fragment key={i0}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", padding: "10px 0" }}>
                    <img
                      src={p.img}
                      alt=""
                      style={{ width: "52px", height: "52px", borderRadius: "10px", objectFit: "cover", flex: "none" }}
                      loading="lazy"
                      decoding="async"
                    />
                    <div style={{ flex: "1", minWidth: "0" }}>
                      <div style={{ fontWeight: "600", fontSize: "14.5px", lineHeight: "1.25" }}>{p.name}</div>
                      <div style={{ fontSize: "13.5px", fontWeight: "800" }}>{p.priceFmt}</div>
                    </div>
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
          </div>
          <div
            style={{
              padding: "16px 22px 22px",
              borderTop: "1px solid #E3E6EC",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
          >
            <div className="seg" role="group" aria-label="Como receber">
              <button type="button" className={v.modeEntregaCls} aria-pressed={v.isEntrega} onClick={v.setEntrega}>
                Receber em casa
              </button>
              <button type="button" className={v.modeRetiradaCls} aria-pressed={v.isRetirada} onClick={v.setRetirada}>
                Retirar na loja
              </button>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <label className="sr" htmlFor="tf-cupom">
                Cupom de desconto
              </label>
              <input
                id="tf-cupom"
                type="text"
                placeholder="Cupom de desconto"
                style={{
                  flex: "1",
                  minWidth: "0",
                  height: "44px",
                  borderRadius: "999px",
                  border: "1.5px solid #CDD3E0",
                  padding: "0 18px",
                  fontSize: "15px",
                }}
              />
              <button type="button" className="btn btn-sm btn-line" onClick={v.applyCoupon}>
                Aplicar
              </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "15px" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#5B6272" }}>Subtotal</span>
                <span style={{ fontVariantNumeric: "tabular-nums" }}>{v.subtotalFmt}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#5B6272" }}>{v.freteLabel}</span>
                <span>{v.freteValue}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontWeight: "800",
                  fontSize: "20px",
                  marginTop: "4px",
                }}
              >
                <span>Total</span>
                <span style={{ fontVariantNumeric: "tabular-nums" }}>{v.subtotalFmt}</span>
              </div>
            </div>
            <Link className="btn btn-red" href="/checkout">
              {"Finalizar compra "}
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
