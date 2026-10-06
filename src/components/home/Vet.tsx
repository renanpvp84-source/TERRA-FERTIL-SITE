/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function Vet({ v }: { v: Vals }) {
  return (
    <section
      id="veterinario"
      style={{ position: "relative", background: "#1E3FA8", color: "#ffffff", padding: "96px 0", overflow: "hidden" }}
    >
      <div
        data-px="0.050"
        style={{
          position: "absolute",
          width: "560px",
          height: "560px",
          borderRadius: "50%",
          border: "76px solid #17338C",
          right: "-180px",
          top: "-200px",
        }}
      />
      <div
        className="wrap"
        style={{ position: "relative", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px 72px" }}
      >
        <div style={{ flex: "1 1 460px", minWidth: "0" }}>
          <div className="eye" data-rv="" style={{ color: "#C8D4FA" }}>
            Atendimento veterinário
          </div>
          <h2
            className="dsp"
            data-rv=""
            style={{ margin: "8px 0 0", fontSize: "52px", lineHeight: "1.02" }}
            data-delay="70ms"
          >
            Saúde também é cuidado.
          </h2>
          <p
            data-rv=""
            style={{ margin: "16px 0 0", maxWidth: "480px", fontSize: "18px", color: "#E4EAFC" }}
            data-delay="140ms"
          >
            Consultório dentro da Terra Fértil para acompanhar seu pet de perto, da primeira vacina ao check-up anual.
          </p>
          <ul
            data-rv=""
            style={{
              listStyle: "none",
              margin: "30px 0 0",
              padding: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
              gap: "0 32px",
            }}
            data-delay="210ms"
          >
            <li style={{ display: "flex", gap: "12px", padding: "15px 0", borderTop: "1px solid #4A66C0" }}>
              <svg className="ic" style={{ color: "#C8D4FA" }} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12 4.500 4.500L19 7" />
              </svg>
              <span>
                <b style={{ display: "block" }}>Consultas</b>
                <span style={{ fontSize: "14.5px", color: "#E4EAFC" }}>No consultório ou em domicílio</span>
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", padding: "15px 0", borderTop: "1px solid #4A66C0" }}>
              <svg className="ic" style={{ color: "#C8D4FA" }} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12 4.500 4.500L19 7" />
              </svg>
              <span>
                <b style={{ display: "block" }}>Cuidados preventivos</b>
                <span style={{ fontSize: "14.5px", color: "#E4EAFC" }}>Vacinas e vermifugação</span>
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", padding: "15px 0", borderTop: "1px solid #4A66C0" }}>
              <svg className="ic" style={{ color: "#C8D4FA" }} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12 4.500 4.500L19 7" />
              </svg>
              <span>
                <b style={{ display: "block" }}>Exames</b>
                <span style={{ fontSize: "14.5px", color: "#E4EAFC" }}>Laboratoriais, testes rápidos e ultrassom</span>
              </span>
            </li>
            <li style={{ display: "flex", gap: "12px", padding: "15px 0", borderTop: "1px solid #4A66C0" }}>
              <svg className="ic" style={{ color: "#C8D4FA" }} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m5 12 4.500 4.500L19 7" />
              </svg>
              <span>
                <b style={{ display: "block" }}>Medicamentos</b>
                <span style={{ fontSize: "14.5px", color: "#E4EAFC" }}>
                  Antipulgas, vermífugos e atestado para viagem
                </span>
              </span>
            </li>
          </ul>
          <div
            data-rv=""
            style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 22px", marginTop: "30px" }}
            data-delay="280ms"
          >
            <a className="btn btn-white" href={v.waVetHref} target="_blank" rel="noopener">
              {"Agendar atendimento "}
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <span style={{ fontSize: "14px", color: "#E4EAFC" }}>{v.cfg.vetHoursLine}</span>
          </div>
        </div>
        <div style={{ position: "relative", flex: "1 1 460px", minWidth: "0", minHeight: "480px" }}>
          <div
            data-rv="img"
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              width: "86%",
              aspectRatio: "283 / 165",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#17338C",
            }}
          >
            <img
              className="ph"
              src="/images/ph-vet2.jpg"
              alt="Médica veterinária com estetoscópio segurando um filhote de dachshund"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            data-rv="img"
            data-px="-0.050"
            style={{
              position: "absolute",
              left: "0",
              bottom: "0",
              width: "44%",
              aspectRatio: "3 / 4",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#17338C",
              boxShadow: "0 26px 56px rgba(0,0,0,.34)",
            }}
            data-delay="180ms"
          >
            <img
              className="ph"
              src="/images/ph-vet-exame.jpg"
              alt="Atendimento de um cão pequeno na mesa do consultório"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            data-rv="img"
            style={{
              position: "absolute",
              right: "4%",
              bottom: "14px",
              width: "42%",
              aspectRatio: "283 / 205",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#17338C",
            }}
            data-delay="300ms"
          >
            <img
              className="ph"
              src="/images/ph-filhotes.jpg"
              alt="Três filhotes de chow-chow na mesa de vacinação"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
