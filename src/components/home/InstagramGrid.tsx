/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import type { Vals } from "@/lib/types";

export default function InstagramGrid({ v }: { v: Vals }) {
  return (
    <section id="instagram" style={{ padding: "92px 0" }}>
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
          <div>
            <div className="eye" style={{ color: "#B80F16" }}>
              {v.cfg.instagramHandle}
            </div>
            <h2 className="dsp" style={{ margin: "6px 0 0", fontSize: "42px", lineHeight: "1.05" }}>
              Um pouco da nossa rotina
            </h2>
          </div>
          <a className="btn btn-sm btn-line" href={v.cfg.instagramUrl} target="_blank" rel="noopener">
            <svg className="ic" style={{ width: "19px", height: "19px" }} viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="4.500" />
              <circle cx="12" cy="12" r="3.600" />
            </svg>
            Ver Instagram
          </a>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(190px, 100%), 1fr))",
            gap: "16px",
          }}
        >
          {v.insta.map((g: any, i0: number) => (
            <Fragment key={i0}>
              <div data-rv="" data-delay={g.delay}>
                <a className="ig" href={v.cfg.instagramUrl} target="_blank" rel="noopener">
                  <img src={g.img} alt={g.alt} loading="lazy" decoding="async" />
                </a>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
