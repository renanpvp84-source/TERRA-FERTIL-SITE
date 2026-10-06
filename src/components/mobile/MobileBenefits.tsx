/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function MobileBenefits({ v }: { v: Vals }) {
  return (
    <div className="hscroll" style={{ gap: "8px", paddingTop: "12px", paddingBottom: "12px", background: "#F4F5F8" }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          minHeight: "36px",
          padding: "0 14px",
          borderRadius: "999px",
          background: "#ffffff",
          fontSize: "13px",
          fontWeight: "700",
        }}
      >
        <svg
          className="ic"
          style={{ width: "17px", height: "17px", color: "#1E3FA8" }}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M3 6h11v10H3zM14 9h4l3 3.500V16h-7" />
          <circle cx="7.500" cy="17.500" r="1.800" />
          <circle cx="17.500" cy="17.500" r="1.800" />
        </svg>
        Delivery pelo WhatsApp
      </span>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          minHeight: "36px",
          padding: "0 14px",
          borderRadius: "999px",
          background: "#ffffff",
          fontSize: "13px",
          fontWeight: "700",
        }}
      >
        <svg
          className="ic"
          style={{ width: "17px", height: "17px", color: "#1E3FA8" }}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M4 10v9h16v-9M3 10l1.500-5h15L21 10a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z" />
        </svg>
        Retire em 3 lojas
      </span>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          minHeight: "36px",
          padding: "0 14px",
          borderRadius: "999px",
          background: "#ffffff",
          fontSize: "13px",
          fontWeight: "700",
        }}
      >
        <svg
          className="ic"
          style={{ width: "17px", height: "17px", color: "#1E3FA8" }}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12 3 5 6v5c0 4.500 3 8 7 10 4-2 7-5.500 7-10V6l-7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        Compra segura
      </span>
    </div>
  );
}
