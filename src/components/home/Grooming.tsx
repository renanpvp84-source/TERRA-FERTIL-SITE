/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import type { Vals } from "@/lib/types";

export default function Grooming({ v }: { v: Vals }) {
  return (
    <section id="banho" style={{ background: "#F4F5F8", padding: "96px 0", overflow: "hidden" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px 72px" }}>
        <div style={{ position: "relative", flex: "1 1 460px", minWidth: "0", minHeight: "600px" }}>
          <div
            data-px="0.040"
            style={{
              position: "absolute",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              border: "54px solid #1E3FA8",
              left: "-130px",
              top: "-70px",
            }}
          />
          <div
            data-rv="img"
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "66%",
              aspectRatio: "283 / 320",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#DDE1EA",
            }}
          >
            <img
              className="ph"
              src="/images/ph-tosador.jpg"
              alt="Tosador da Terra Fértil finalizando a tosa de um shih-tzu"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            data-rv="img"
            data-px="-0.050"
            style={{
              position: "absolute",
              right: "0",
              top: "150px",
              width: "46%",
              aspectRatio: "283 / 200",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#DDE1EA",
              boxShadow: "0 24px 50px rgba(15,26,74,.20)",
            }}
            data-delay="160ms"
          >
            <img
              className="ph"
              src="/images/ph-banho-espuma.jpg"
              alt="Dachshund com espuma na cabeça durante o banho"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            data-rv="img"
            style={{
              position: "absolute",
              right: "6%",
              bottom: "0",
              width: "40%",
              aspectRatio: "1 / 1",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#DDE1EA",
            }}
            data-delay="300ms"
          >
            <img
              className="ph"
              src="/images/ph-spitz.jpg"
              alt="Spitz alemão de lacinho depois da tosa"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div style={{ flex: "1 1 480px", minWidth: "0" }}>
          <div className="eye" data-rv="" style={{ color: "#1E3FA8" }}>
            {"Banho & Tosa"}
          </div>
          <h2
            className="dsp"
            data-rv=""
            style={{ margin: "8px 0 0", fontSize: "50px", lineHeight: "1.02" }}
            data-delay="70ms"
          >
            Seu pet merece esse cuidado.
          </h2>
          <p
            data-rv=""
            style={{ margin: "16px 0 0", maxWidth: "500px", fontSize: "18px", color: "#3D4350" }}
            data-delay="140ms"
          >
            Banho, tosa e cuidados especiais para deixar seu pet limpo, confortável e feliz.
          </p>
          <div
            data-rv=""
            style={{
              marginTop: "28px",
              background: "#ffffff",
              borderRadius: "24px",
              padding: "26px",
              boxShadow: "0 20px 50px rgba(15,26,74,.10), 0 0 0 1px #E3E6EC",
            }}
            data-delay="210ms"
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <fieldset style={{ border: "0", margin: "0", padding: "0", minWidth: "0" }}>
                <legend
                  style={{
                    padding: "0",
                    fontSize: "13px",
                    fontWeight: "800",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "#5B6272",
                  }}
                >
                  1 · Serviço
                </legend>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                  {v.svcs.map((c: any, i0: number) => (
                    <Fragment key={i0}>
                      <button type="button" className={`chip ${c.cls}`} aria-pressed={c.on} onClick={c.pick}>
                        {c.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
              </fieldset>
              <fieldset style={{ border: "0", margin: "0", padding: "0", minWidth: "0" }}>
                <legend
                  style={{
                    padding: "0",
                    fontSize: "13px",
                    fontWeight: "800",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "#5B6272",
                  }}
                >
                  2 · Pet
                </legend>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                  {v.pets.map((c: any, i0: number) => (
                    <Fragment key={i0}>
                      <button type="button" className={`chip ${c.cls}`} aria-pressed={c.on} onClick={c.pick}>
                        {c.label}
                      </button>
                    </Fragment>
                  ))}
                </div>
              </fieldset>
              <fieldset style={{ border: "0", margin: "0", padding: "0", minWidth: "0" }}>
                <legend
                  style={{
                    padding: "0",
                    fontSize: "13px",
                    fontWeight: "800",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "#5B6272",
                  }}
                >
                  3 · Data
                </legend>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "10px" }}>
                  {v.days.map((c: any, i0: number) => (
                    <Fragment key={i0}>
                      <button
                        type="button"
                        className={`chip ${c.cls}`}
                        aria-pressed={c.on}
                        onClick={c.pick}
                        style={{
                          flexDirection: "column",
                          gap: "0",
                          minHeight: "56px",
                          padding: "0 16px",
                          borderRadius: "16px",
                          lineHeight: "1.15",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            textTransform: "uppercase",
                            letterSpacing: ".06em",
                          }}
                        >
                          {c.wd}
                        </span>
                        <span>{c.label}</span>
                      </button>
                    </Fragment>
                  ))}
                </div>
              </fieldset>
              <fieldset style={{ border: "0", margin: "0", padding: "0", minWidth: "0" }}>
                <legend
                  style={{
                    padding: "0",
                    fontSize: "13px",
                    fontWeight: "800",
                    letterSpacing: ".08em",
                    textTransform: "uppercase",
                    color: "#5B6272",
                  }}
                >
                  4 · Período
                </legend>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: "8px 14px",
                    marginTop: "10px",
                  }}
                >
                  {v.pers.map((c: any, i0: number) => (
                    <Fragment key={i0}>
                      <button type="button" className={`chip ${c.cls}`} aria-pressed={c.on} onClick={c.pick}>
                        {c.label}
                      </button>
                    </Fragment>
                  ))}
                  <span style={{ fontSize: "13.5px", color: "#5B6272" }}>A loja confirma o horário exato.</span>
                </div>
              </fieldset>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "14px 20px",
                marginTop: "22px",
                paddingTop: "20px",
                borderTop: "1px solid #E3E6EC",
              }}
            >
              <div style={{ minWidth: "0" }}>
                <div style={{ fontSize: "13px", color: "#5B6272" }}>Seu pedido de agendamento</div>
                <div style={{ fontWeight: "800", fontSize: "16.5px" }}>{v.bookSummary}</div>
              </div>
              <a className="btn btn-red" href={v.bookHref} target="_blank" rel="noopener">
                {"Agendar agora "}
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
          <p data-rv="" style={{ margin: "16px 0 0", fontSize: "14px", color: "#5B6272" }} data-delay="280ms">
            {v.cfg.groomingLine}
          </p>
        </div>
      </div>
    </section>
  );
}
