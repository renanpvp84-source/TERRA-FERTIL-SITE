/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function MobileQuickAccess({ v }: { v: Vals }) {
  return (
    <section className="pad" style={{ paddingTop: "30px", paddingBottom: "28px" }}>
      <h2 className="dsp" data-rv="" style={{ margin: "0 0 16px", fontSize: "26px", lineHeight: "1.1" }}>
        O que seu pet precisa hoje?
      </h2>
      <div data-rv="" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
        <a className="need" href="#m-vendidos">
          <span className="dot" style={{ background: "#FDECEC", color: "#B80F16" }}>
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 11h18l-1.800 6.500A2 2 0 0 1 17.300 19H6.700a2 2 0 0 1-1.900-1.500L3 11Z" />
              <path d="M9 7.500V6M12 7.500V4.500M15 7.500V6" />
            </svg>
          </span>
          <span>
            <b>Alimentar</b>
            <small>Rações e petiscos</small>
          </span>
        </a>
        <a className="need" href="#m-categorias">
          <span className="dot" style={{ background: "#E8EDFA", color: "#1E3FA8" }}>
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3s6 6.200 6 11a6 6 0 0 1-12 0c0-4.800 6-11 6-11Z" />
            </svg>
          </span>
          <span>
            <b>Cuidar</b>
            <small>Higiene</small>
          </span>
        </a>
        <a className="need" href="#m-vet">
          <span className="dot" style={{ background: "#FDECEC", color: "#B80F16" }}>
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v8M8 12h8" />
            </svg>
          </span>
          <span>
            <b>Tratar</b>
            <small>Medicamentos</small>
          </span>
        </a>
        <a className="need" href="#m-categorias">
          <span className="dot" style={{ background: "#E8EDFA", color: "#1E3FA8" }}>
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M5.500 6.500c3 2.500 4.500 5.500 4.500 11M18.500 6.500c-3 2.500-4.500 5.500-4.500 11" />
            </svg>
          </span>
          <span>
            <b>Se divertir</b>
            <small>Brinquedos</small>
          </span>
        </a>
        <a className="need" href="#m-categorias">
          <span className="dot" style={{ background: "#FDECEC", color: "#B80F16" }}>
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20s-7-4.400-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" />
            </svg>
          </span>
          <span>
            <b>Mimar</b>
            <small>Camas e acessórios</small>
          </span>
        </a>
        <a className="need" href="#m-banho">
          <span className="dot" style={{ background: "#E8EDFA", color: "#1E3FA8" }}>
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="6" cy="7" r="2.500" />
              <circle cx="6" cy="17" r="2.500" />
              <path d="M8 8.500 20 17M8 15.500 20 7" />
            </svg>
          </span>
          <span>
            <b>{"Banho & Tosa"}</b>
            <small>Agendar</small>
          </span>
        </a>
      </div>
    </section>
  );
}
