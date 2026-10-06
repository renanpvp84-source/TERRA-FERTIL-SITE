/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function CheckoutHeader({ v }: { v: Vals }) {
  return (
    <header style={{ background: "#ffffff", boxShadow: "0 1px 0 #E3E6EC" }}>
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <Link href="/" aria-label="Terra Fértil — voltar para a loja">
          <img
            src="/images/logo-terra-fertil.png"
            alt="Terra Fértil — Produtos Agropecuários e Pet Shop"
            style={{ display: "block", height: "40px", width: "auto" }}
            decoding="async"
          />
        </Link>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "9px",
            fontSize: "14.5px",
            fontWeight: "700",
            color: "#0B6B37",
          }}
        >
          <svg className="ic" style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24" aria-hidden="true">
            <rect x="5" y="10" width="14" height="10" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          Compra segura
        </div>
      </div>
    </header>
  );
}
