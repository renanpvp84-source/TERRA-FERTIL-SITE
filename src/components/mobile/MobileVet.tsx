/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function MobileVet({ v }: { v: Vals }) {
  return (
    <section id="m-vet" className="pad" style={{ paddingBottom: "32px" }}>
      <div
        data-rv=""
        style={{
          position: "relative",
          borderRadius: "24px",
          overflow: "hidden",
          background: "#1E3FA8",
          color: "#ffffff",
          padding: "26px 20px 24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            border: "34px solid #17338C",
            right: "-90px",
            top: "-90px",
          }}
        />
        <div style={{ position: "relative" }}>
          <div
            style={{
              fontSize: "12.5px",
              fontWeight: "800",
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "#C8D4FA",
            }}
          >
            Veterinário
          </div>
          <h2 className="dsp" style={{ margin: "6px 0 0", fontSize: "32px", lineHeight: "1.04" }}>
            Saúde também é cuidado.
          </h2>
          <ul style={{ listStyle: "none", margin: "16px 0 20px", padding: "0", fontSize: "15.5px" }}>
            <li style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #4A66C0" }}>
              <svg
                className="ic"
                style={{ width: "20px", height: "20px", color: "#C8D4FA" }}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m5 12 4.500 4.500L19 7" />
              </svg>
              Consultas, também em domicílio
            </li>
            <li style={{ display: "flex", gap: "10px", padding: "10px 0", borderTop: "1px solid #4A66C0" }}>
              <svg
                className="ic"
                style={{ width: "20px", height: "20px", color: "#C8D4FA" }}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m5 12 4.500 4.500L19 7" />
              </svg>
              Vacinas e cuidados preventivos
            </li>
            <li
              style={{
                display: "flex",
                gap: "10px",
                padding: "10px 0",
                borderTop: "1px solid #4A66C0",
                borderBottom: "1px solid #4A66C0",
              }}
            >
              <svg
                className="ic"
                style={{ width: "20px", height: "20px", color: "#C8D4FA" }}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m5 12 4.500 4.500L19 7" />
              </svg>
              Exames e medicamentos
            </li>
          </ul>
          <a className="btn btn-white" href={v.waVetHref} target="_blank" rel="noopener">
            Agendar atendimento
          </a>
        </div>
      </div>
    </section>
  );
}
