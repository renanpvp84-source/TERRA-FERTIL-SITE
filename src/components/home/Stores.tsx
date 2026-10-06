/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import type { Vals } from "@/lib/types";

export default function Stores({ v }: { v: Vals }) {
  return (
    <section id="lojas" style={{ background: "#F4F5F8", padding: "92px 0" }}>
      <div className="wrap">
        <div
          data-rv=""
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "16px 24px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <div>
            <div className="eye" style={{ color: "#1E3FA8" }}>
              Boa Vista · Roraima
            </div>
            <h2 className="dsp" style={{ margin: "6px 0 0", fontSize: "42px", lineHeight: "1.05" }}>
              Encontre a Terra Fértil
            </h2>
          </div>
          <p style={{ margin: "0", maxWidth: "380px", fontSize: "16px", color: "#3D4350" }}>
            Três unidades para comprar, retirar pedidos e cuidar do seu pet.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
            gap: "20px",
          }}
        >
          {v.stores.map((s: any, i0: number) => (
            <Fragment key={i0}>
              <div data-rv="" data-delay={s.delay}>
                <article
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    background: "#ffffff",
                    borderRadius: "22px",
                    padding: "26px",
                    boxShadow: "0 0 0 1px #E3E6EC",
                  }}
                >
                  <span
                    style={{
                      alignSelf: "flex-start",
                      display: "inline-flex",
                      alignItems: "center",
                      minHeight: "26px",
                      padding: "0 11px",
                      borderRadius: "999px",
                      background: "#E8EDFA",
                      color: "#1E3FA8",
                      fontSize: "12px",
                      fontWeight: "800",
                    }}
                  >
                    {s.tag}
                  </span>
                  <h3 className="dsp" style={{ margin: "12px 0 14px", fontSize: "30px", lineHeight: "1.05" }}>
                    {s.name}
                  </h3>
                  <ul
                    style={{
                      listStyle: "none",
                      margin: "0",
                      padding: "0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      fontSize: "15px",
                      color: "#3D4350",
                    }}
                  >
                    <li style={{ display: "flex", gap: "11px" }}>
                      <svg
                        className="ic"
                        style={{ width: "20px", height: "20px", color: "#B80F16" }}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 21s-7-6.200-7-11.500a7 7 0 0 1 14 0C19 14.800 12 21 12 21Z" />
                        <circle cx="12" cy="9.500" r="2.500" />
                      </svg>
                      <span>{s.addr}</span>
                    </li>
                    <li style={{ display: "flex", gap: "11px" }}>
                      <svg
                        className="ic"
                        style={{ width: "20px", height: "20px", color: "#B80F16" }}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M5 4h4l1.500 5-2 1.500a12 12 0 0 0 5 5l1.500-2 5 1.500v4a1.500 1.500 0 0 1-1.600 1.500A17 17 0 0 1 3.500 5.600 1.500 1.500 0 0 1 5 4Z" />
                      </svg>
                      <span>{s.tel}</span>
                    </li>
                    <li style={{ display: "flex", gap: "11px" }}>
                      <svg
                        className="ic"
                        style={{ width: "20px", height: "20px", color: "#B80F16" }}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3Z" />
                      </svg>
                      <span>{s.wa}</span>
                    </li>
                    <li style={{ display: "flex", gap: "11px" }}>
                      <svg
                        className="ic"
                        style={{ width: "20px", height: "20px", color: "#B80F16" }}
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 7v5l3 2" />
                      </svg>
                      <span>{s.hours}</span>
                    </li>
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "18px 0 22px" }}>
                    {s.tags.map((t: any, i1: number) => (
                      <Fragment key={i1}>
                        <span
                          style={{
                            minHeight: "28px",
                            display: "inline-flex",
                            alignItems: "center",
                            padding: "0 11px",
                            borderRadius: "999px",
                            background: "#F4F5F8",
                            fontSize: "13px",
                            fontWeight: "600",
                          }}
                        >
                          {t.label}
                        </span>
                      </Fragment>
                    ))}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "auto" }}>
                    <a className="btn btn-sm btn-red" href={s.mapHref} target="_blank" rel="noopener">
                      Como chegar
                    </a>
                    <a className="btn btn-sm btn-line" href={s.telHref}>
                      Ligar
                    </a>
                  </div>
                </article>
              </div>
            </Fragment>
          ))}
        </div>
        <div data-rv="" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
          <div
            style={{
              flex: "1 1 260px",
              maxWidth: "340px",
              minWidth: "0",
              height: "280px",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#DDE1EA",
            }}
          >
            <img
              className="ph"
              src="/images/ph-fachada.jpg"
              alt="Fachada de uma loja Terra Fértil"
              style={{ objectPosition: "50% 30%" }}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            style={{
              position: "relative",
              flex: "3 1 480px",
              minWidth: "0",
              height: "280px",
              borderRadius: "22px",
              background: "#E3E8F2",
              overflow: "hidden",
              display: "grid",
              placeItems: "center",
              boxShadow: "inset 0 0 0 1px #CDD3E0",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "0",
                right: "0",
                top: "46%",
                height: "14px",
                background: "#ffffff",
                rotate: "-4deg",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-20px",
                bottom: "-20px",
                left: "34%",
                width: "14px",
                background: "#ffffff",
                rotate: "8deg",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "-20px",
                bottom: "-20px",
                left: "68%",
                width: "10px",
                background: "#ffffff",
                rotate: "-12deg",
              }}
            />
            <div
              style={{
                position: "relative",
                textAlign: "center",
                padding: "18px 26px",
                borderRadius: "18px",
                background: "#ffffff",
                boxShadow: "0 10px 30px rgba(15,26,74,.12)",
              }}
            >
              <div style={{ fontWeight: "800", fontSize: "16px" }}>Mapa das lojas</div>
              <div style={{ fontSize: "14px", color: "#5B6272", marginTop: "2px" }}>
                [Espaço reservado para o Google Maps]
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
