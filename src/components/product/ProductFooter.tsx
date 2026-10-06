/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function ProductFooter({ v }: { v: Vals }) {
  return (
    <footer className="ft" style={{ background: "#0F1A4A", color: "#ffffff", padding: "36px 0" }}>
      <div
        className="wrap"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "16px 32px",
        }}
      >
        <div style={{ padding: "10px 16px", borderRadius: "14px", background: "#ffffff" }}>
          <img
            src="/images/logo-terra-fertil.png"
            alt="Terra Fértil"
            style={{ display: "block", height: "34px", width: "auto" }}
            decoding="async"
          />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 24px", fontSize: "14.5px" }}>
          <Link href="/#lojas">Lojas</Link>
          <Link href="/#banho">{"Banho & Tosa"}</Link>
          <Link href="/#veterinario">Veterinário</Link>
          <a href={v.waHref} target="_blank" rel="noopener">
            WhatsApp (95) 99110-5815
          </a>
        </div>
      </div>
    </footer>
  );
}
