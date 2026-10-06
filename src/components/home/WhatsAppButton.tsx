/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function WhatsAppButton({ v }: { v: Vals }) {
  return (
    <div className="wa-fab">
      {v.waOpen ? (
        <div className="wa-pop">
          <div style={{ padding: "10px 14px 8px", fontSize: "13.5px", color: "#5B6272" }}>Como podemos ajudar?</div>
          {v.waLinks.map((w: any, i0: number) => (
            <Fragment key={i0}>
              <Link href={w.href} target="_blank" rel="noopener">
                {w.label}
                <svg className="ic" style={{ width: "17px", height: "17px" }} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </Fragment>
          ))}
        </div>
      ) : null}
      <button
        type="button"
        className="wa-btn"
        aria-expanded={v.waOpen}
        aria-label="Fale com a Terra Fértil pelo WhatsApp"
        onClick={v.toggleWa}
      >
        <svg className="ic" style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3Z" />
          <path d="M9 8.500c-.400 2.800 2.600 6 6 6.500l1-1.500-2-1-.900.800c-1-.400-1.900-1.300-2.400-2.400l.800-.900-1-2L9 8.500Z" />
        </svg>
        <span>Fale com a Terra Fértil</span>
      </button>
    </div>
  );
}
