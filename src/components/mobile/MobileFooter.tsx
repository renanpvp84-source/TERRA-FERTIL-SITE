/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function MobileFooter({ v }: { v: Vals }) {
  return (
    <footer style={{ flex: "1", background: "#0F1A4A", color: "#ffffff", padding: "30px 16px 28px" }}>
      <div style={{ display: "inline-block", padding: "10px 14px", borderRadius: "14px", background: "#ffffff" }}>
        <img
          src="/images/logo-terra-fertil.png"
          alt="Terra Fértil"
          style={{ display: "block", height: "32px", width: "auto" }}
          decoding="async"
        />
      </div>
      <p style={{ margin: "14px 0 16px", fontSize: "14.5px", color: "#C8CEE6" }}>
        {"Pet shop, produtos veterinários, banho & tosa e consultório veterinário em Boa Vista, Roraima."}
      </p>
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0 16px", fontSize: "14.5px" }}
      >
        <a href="#m-vendidos" style={{ minHeight: "40px", display: "flex", alignItems: "center", color: "#C8CEE6" }}>
          Rações
        </a>
        <a href="#m-banho" style={{ minHeight: "40px", display: "flex", alignItems: "center", color: "#C8CEE6" }}>
          {"Banho & Tosa"}
        </a>
        <a href="#m-vendidos" style={{ minHeight: "40px", display: "flex", alignItems: "center", color: "#C8CEE6" }}>
          Medicamentos
        </a>
        <a href="#m-vet" style={{ minHeight: "40px", display: "flex", alignItems: "center", color: "#C8CEE6" }}>
          Veterinário
        </a>
        <a href="#m-lojas" style={{ minHeight: "40px", display: "flex", alignItems: "center", color: "#C8CEE6" }}>
          Lojas
        </a>
        <a
          href={v.waHref}
          target="_blank"
          rel="noopener"
          style={{ minHeight: "40px", display: "flex", alignItems: "center", color: "#C8CEE6" }}
        >
          WhatsApp
        </a>
      </div>
      <div
        style={{
          marginTop: "16px",
          paddingTop: "14px",
          borderTop: "1px solid #2A3670",
          fontSize: "12.5px",
          color: "#C8CEE6",
        }}
      >
        {"© "}
        {v.year}
        {" Terra Fértil · Privacidade · Termos · Trocas · Entregas"}
      </div>
    </footer>
  );
}
