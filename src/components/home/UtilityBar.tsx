/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function UtilityBar({ v }: { v: Vals }) {
  return (
    <div className="ut">
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
          minHeight: "36px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
          <svg className="ic" style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s-7-6.200-7-11.500a7 7 0 0 1 14 0C19 14.800 12 21 12 21Z" />
            <circle cx="12" cy="9.500" r="2.500" />
          </svg>
          <span>{v.cfg.utilityLine}</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href="#lojas">Nossas lojas</a>
          <a href={v.waHref} target="_blank" rel="noopener">
            {"Delivery pelo WhatsApp "}
            {v.cfg.whatsappDisplay}
          </a>
          <a href={v.cfg.instagramUrl} target="_blank" rel="noopener">
            {v.cfg.instagramHandle}
          </a>
        </div>
      </div>
    </div>
  );
}
