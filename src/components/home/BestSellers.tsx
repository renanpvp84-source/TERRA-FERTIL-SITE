/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Vals } from "@/lib/types";

export default function BestSellers({ v }: { v: Vals }) {
  return (
    <section id="mais-vendidos" style={{ padding: "88px 0" }}>
      <div className="wrap">
        <div
          data-rv=""
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "16px 24px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <h2 className="dsp" style={{ margin: "0", fontSize: "42px", lineHeight: "1.05" }}>
            Mais vendidos
          </h2>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {v.tabs.map((t: any, i0: number) => (
              <Fragment key={i0}>
                <button type="button" className={`chip ${t.cls}`} aria-pressed={t.on} onClick={t.pick}>
                  {t.label}
                </button>
              </Fragment>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(224px, 100%), 1fr))",
            gap: "20px",
          }}
        >
          {v.best.map((p: any, i0: number) => (
            <Fragment key={i0}>
              <div data-rv="" data-delay={p.delay}>
                <ProductCard p={p} />
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
