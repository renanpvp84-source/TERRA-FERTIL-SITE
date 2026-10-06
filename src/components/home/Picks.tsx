/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Vals } from "@/lib/types";

export default function Picks({ v }: { v: Vals }) {
  return (
    <section id="escolhas" style={{ padding: "92px 0" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "40px 56px" }}>
        <div style={{ flex: "1 1 280px", maxWidth: "360px", minWidth: "0" }}>
          <div
            data-rv=""
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              minHeight: "32px",
              padding: "0 14px",
              borderRadius: "999px",
              background: "#FDECEC",
              color: "#B80F16",
              fontSize: "13px",
              fontWeight: "800",
            }}
          >
            <svg className="ic" style={{ width: "16px", height: "16px" }} viewBox="0 0 24 24" aria-hidden="true">
              <path d="m5 12 4.500 4.500L19 7" />
            </svg>
            Terra Fértil recomenda
          </div>
          <h2
            className="dsp"
            data-rv=""
            style={{ margin: "16px 0 0", fontSize: "44px", lineHeight: "1.03" }}
            data-delay="70ms"
          >
            Escolhas da Terra Fértil
          </h2>
          <p data-rv="" style={{ margin: "14px 0 22px", fontSize: "17.500px", color: "#3D4350" }} data-delay="140ms">
            Produtos selecionados para facilitar a escolha de quem quer cuidar melhor do seu pet.
          </p>
          <a className="lk" data-rv="" href={v.waHref} target="_blank" rel="noopener" data-delay="200ms">
            {"Pedir uma indicação à equipe "}
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div
          style={{
            flex: "3 1 560px",
            minWidth: "0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))",
            gap: "20px",
          }}
        >
          {v.picks.map((p: any, i0: number) => (
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
