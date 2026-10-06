/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function ReorderClub({ v }: { v: Vals }) {
  return (
    <section style={{ padding: "88px 0" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
        <div
          data-rv=""
          style={{
            flex: "3 1 520px",
            minWidth: "0",
            borderRadius: "26px",
            padding: "36px",
            boxShadow: "inset 0 0 0 1px #E3E6EC",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "10px 20px",
            }}
          >
            <div>
              <div className="eye" style={{ color: "#5B6272" }}>
                Compre novamente
              </div>
              <h2 className="dsp" style={{ margin: "6px 0 0", fontSize: "38px", lineHeight: "1.05" }}>
                Hora de repor?
              </h2>
            </div>
            <Link className="lk" href="/conta">
              {"Ver meus pedidos "}
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: "18px" }}>
            {v.repor.map((p: any, i0: number) => (
              <Fragment key={i0}>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "12px 18px",
                    padding: "14px 0",
                    borderTop: "1px solid #E3E6EC",
                  }}
                >
                  <img
                    src={p.img}
                    alt=""
                    style={{ width: "68px", height: "68px", borderRadius: "12px", objectFit: "cover" }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div style={{ flex: "1 1 200px", minWidth: "0" }}>
                    <div style={{ fontWeight: "700", fontSize: "15.5px" }}>{p.name}</div>
                    <div style={{ fontSize: "13.5px", color: "#5B6272" }}>
                      {p.size}
                      {" · "}
                      {p.priceFmt}
                    </div>
                  </div>
                  <button type="button" className="btn btn-sm btn-line" onClick={p.add}>
                    Comprar novamente
                  </button>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div
          data-rv=""
          style={{
            position: "relative",
            flex: "2 1 360px",
            minWidth: "0",
            borderRadius: "26px",
            padding: "36px",
            background: "#0F1A4A",
            color: "#ffffff",
            overflow: "hidden",
          }}
          data-delay="100ms"
        >
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              border: "44px solid #E0161C",
              right: "-120px",
              bottom: "-130px",
            }}
          />
          <div style={{ position: "relative" }}>
            <div className="eye" style={{ color: "#C8CEE6" }}>
              Programa de benefícios
            </div>
            <h2 className="dsp" style={{ margin: "6px 0 0", fontSize: "38px", lineHeight: "1.05" }}>
              Clube Terra Fértil
            </h2>
            <p style={{ margin: "12px 0 20px", fontSize: "16px", color: "#C8CEE6", maxWidth: "340px" }}>
              Um lugar para reunir vantagens de quem compra sempre com a gente.
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: "0 0 24px",
                padding: "0",
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
              }}
            >
              <li
                style={{
                  minHeight: "34px",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0 14px",
                  borderRadius: "999px",
                  boxShadow: "inset 0 0 0 1px #3A4780",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Ofertas exclusivas
              </li>
              <li
                style={{
                  minHeight: "34px",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0 14px",
                  borderRadius: "999px",
                  boxShadow: "inset 0 0 0 1px #3A4780",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Descontos
              </li>
              <li
                style={{
                  minHeight: "34px",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0 14px",
                  borderRadius: "999px",
                  boxShadow: "inset 0 0 0 1px #3A4780",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Cupons
              </li>
              <li
                style={{
                  minHeight: "34px",
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "0 14px",
                  borderRadius: "999px",
                  boxShadow: "inset 0 0 0 1px #3A4780",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                Campanhas
              </li>
            </ul>
            <Link className="btn btn-sm btn-white" href="/conta">
              Quero participar
            </Link>
            <p style={{ margin: "14px 0 0", fontSize: "13px", color: "#C8CEE6" }}>
              [Regras e benefícios a definir pela loja]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
