/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function Offers({ v }: { v: Vals }) {
  return (
    <section id="ofertas" style={{ padding: "80px 0 88px" }}>
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
            <div className="eye" style={{ color: "#B80F16" }}>
              Promoções
            </div>
            <h2 className="dsp" style={{ margin: "6px 0 0", fontSize: "42px", lineHeight: "1.05" }}>
              Ofertas da semana
            </h2>
          </div>
          <a className="lk" href="#mais-vendidos">
            {"Ver todas as ofertas "}
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          <div
            data-rv=""
            style={{
              position: "relative",
              flex: "3 1 560px",
              minWidth: "0",
              minHeight: "404px",
              borderRadius: "26px",
              overflow: "hidden",
              background: "#E0161C",
              color: "#ffffff",
              padding: "44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              data-px="0.050"
              style={{
                position: "absolute",
                width: "520px",
                height: "520px",
                borderRadius: "50%",
                background: "#1E3FA8",
                right: "-150px",
                bottom: "-230px",
              }}
            />
            <div style={{ position: "relative", maxWidth: "330px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "30px",
                  padding: "0 14px",
                  borderRadius: "999px",
                  background: "#ffffff",
                  color: "#B80F16",
                  fontSize: "13px",
                  fontWeight: "800",
                }}
              >
                Válidas enquanto durar o estoque
              </div>
              <h3 className="dsp" style={{ margin: "18px 0 0", fontSize: "42px", lineHeight: "1.03" }}>
                Ração boa com preço de Terra Fértil.
              </h3>
              <p style={{ margin: "14px 0 26px", fontSize: "17px", lineHeight: "1.45" }}>
                As marcas que seu pet já conhece, nas três lojas e no delivery.
              </p>
              <a className="btn btn-white" href="#mais-vendidos">
                {"Aproveitar ofertas "}
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
            <div
              data-px="-0.050"
              style={{
                position: "absolute",
                right: "180px",
                top: "70px",
                width: "180px",
                aspectRatio: "3 / 4",
                borderRadius: "16px",
                overflow: "hidden",
                transformOrigin: "50% 100%",
                rotate: "-6deg",
                boxShadow: "0 24px 50px rgba(0,0,0,.30)",
              }}
            >
              <img
                className="ph"
                src="/images/art-capitao.jpg"
                alt="Arte promocional: ração Capitão Dog 14 kg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div
              data-px="0.070"
              style={{
                position: "absolute",
                right: "30px",
                top: "106px",
                width: "180px",
                aspectRatio: "3 / 4",
                borderRadius: "16px",
                overflow: "hidden",
                rotate: "5deg",
                boxShadow: "0 24px 50px rgba(0,0,0,.30)",
              }}
            >
              <img
                className="ph"
                src="/images/art-proomega.jpg"
                alt="Arte promocional: ração Pro Omega Adulto 15 kg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div style={{ flex: "2 1 340px", minWidth: "0", display: "flex", flexDirection: "column", gap: "20px" }}>
            <a
              data-rv=""
              href={v.waHref}
              target="_blank"
              rel="noopener"
              style={{
                position: "relative",
                flex: "1",
                minHeight: "192px",
                borderRadius: "26px",
                overflow: "hidden",
                background: "#1E3FA8",
                color: "#ffffff",
                padding: "28px 180px 28px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
              data-delay="90ms"
            >
              <h3 className="dsp" style={{ margin: "0", fontSize: "28px", lineHeight: "1.08" }}>
                Peça pelo delivery
              </h3>
              <p style={{ margin: "8px 0 14px", fontSize: "15px", lineHeight: "1.4" }}>
                Rápido, seguro e confiável. É só chamar no WhatsApp.
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "800",
                  fontSize: "15px",
                }}
              >
                {"Chamar agora "}
                <svg className="ic" style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span
                style={{
                  position: "absolute",
                  right: "26px",
                  top: "22px",
                  width: "128px",
                  aspectRatio: "3 / 4",
                  borderRadius: "12px",
                  overflow: "hidden",
                  rotate: "4deg",
                  boxShadow: "0 16px 34px rgba(0,0,0,.30)",
                }}
              >
                <img
                  className="ph"
                  src="/images/art-delivery.jpg"
                  alt="Arte: peça pelo delivery"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </a>
            <a
              data-rv=""
              href="#banho"
              style={{
                position: "relative",
                flex: "1",
                minHeight: "192px",
                borderRadius: "26px",
                overflow: "hidden",
                background: "#F4F5F8",
                padding: "28px 180px 28px 30px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: "inset 0 0 0 1px #E3E6EC",
              }}
              data-delay="180ms"
            >
              <h3 className="dsp" style={{ margin: "0", fontSize: "28px", lineHeight: "1.08" }}>
                {"Terça tem promoção no Banho & Tosa"}
              </h3>
              <p style={{ margin: "8px 0 14px", fontSize: "15px", lineHeight: "1.4", color: "#3D4350" }}>
                Banho, tosa higiênica e hidratação para cães de até 10 kg.
              </p>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "800",
                  fontSize: "15px",
                  color: "#B80F16",
                }}
              >
                {"Agendar "}
                <svg className="ic" style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
              <span
                style={{
                  position: "absolute",
                  right: "26px",
                  top: "22px",
                  width: "128px",
                  aspectRatio: "3 / 4",
                  borderRadius: "12px",
                  overflow: "hidden",
                  rotate: "-4deg",
                  boxShadow: "0 16px 34px rgba(15,26,74,.24)",
                }}
              >
                <img
                  className="ph"
                  src="/images/art-terca-banho.jpg"
                  alt="Arte: terça-feira tem promoção de banho e tosa"
                  loading="lazy"
                  decoding="async"
                />
              </span>
            </a>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(290px, 100%), 1fr))",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          {v.offers.map((p: any, i0: number) => (
            <Fragment key={i0}>
              <div data-rv="" data-delay={p.delay}>
                <article className="oc">
                  <Link className="oc-img" href={p.href}>
                    <img src={p.img} alt={p.alt} loading="lazy" decoding="async" />
                  </Link>
                  <div style={{ flex: "1", minWidth: "0" }}>
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        height: "22px",
                        padding: "0 9px",
                        borderRadius: "999px",
                        background: "#E0161C",
                        color: "#ffffff",
                        fontSize: "11.5px",
                        fontWeight: "800",
                      }}
                    >
                      Oferta
                    </span>
                    <Link
                      href={p.href}
                      style={{
                        display: "block",
                        marginTop: "6px",
                        fontWeight: "600",
                        fontSize: "15px",
                        lineHeight: "1.3",
                      }}
                    >
                      {p.name}
                    </Link>
                    <div style={{ fontSize: "13px", color: "#5B6272", marginTop: "2px" }}>{p.size}</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "8px",
                        marginTop: "4px",
                      }}
                    >
                      <div className="price" style={{ marginTop: "0" }}>
                        <small>R$</small>
                        <b>{p.pInt}</b>
                        <sup>
                          {","}
                          {p.pCents}
                        </sup>
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
                  </div>
                </article>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
