/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function MobileGrooming({ v }: { v: Vals }) {
  return (
    <section id="m-banho" className="pad" style={{ paddingBottom: "16px" }}>
      <div data-rv="" style={{ borderRadius: "24px", overflow: "hidden", background: "#F4F5F8" }}>
        <div style={{ aspectRatio: "16 / 11", background: "#DDE1EA" }}>
          <img
            src="/images/ph-tosador.jpg"
            alt="Tosador da Terra Fértil finalizando a tosa de um shih-tzu"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 62%", display: "block" }}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div style={{ padding: "22px 20px 24px" }}>
          <div
            style={{
              fontSize: "12.5px",
              fontWeight: "800",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#1E3FA8",
            }}
          >
            {"Banho & Tosa"}
          </div>
          <h2 className="dsp" style={{ margin: "6px 0 0", fontSize: "32px", lineHeight: "1.04" }}>
            Seu pet merece esse cuidado.
          </h2>
          <p style={{ margin: "10px 0 0", fontSize: "15.5px", color: "#3D4350" }}>
            Banho, tosa e cuidados especiais para deixar seu pet limpo, confortável e feliz.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", margin: "14px 0 18px" }}>
            <span
              style={{
                minHeight: "30px",
                display: "inline-flex",
                alignItems: "center",
                padding: "0 12px",
                borderRadius: "999px",
                background: "#ffffff",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              Banho
            </span>
            <span
              style={{
                minHeight: "30px",
                display: "inline-flex",
                alignItems: "center",
                padding: "0 12px",
                borderRadius: "999px",
                background: "#ffffff",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              Tosa
            </span>
            <span
              style={{
                minHeight: "30px",
                display: "inline-flex",
                alignItems: "center",
                padding: "0 12px",
                borderRadius: "999px",
                background: "#ffffff",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              Higiene
            </span>
            <span
              style={{
                minHeight: "30px",
                display: "inline-flex",
                alignItems: "center",
                padding: "0 12px",
                borderRadius: "999px",
                background: "#ffffff",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              Cuidados especiais
            </span>
          </div>
          <a className="btn btn-red" href={v.waBanhoHref} target="_blank" rel="noopener">
            Agendar agora
          </a>
        </div>
      </div>
    </section>
  );
}
