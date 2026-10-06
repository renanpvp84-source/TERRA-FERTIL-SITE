/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import type { Vals } from "@/lib/types";

export default function Reviews({ v }: { v: Vals }) {
  return (
    <section style={{ padding: "92px 0" }}>
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
            Quem conhece, confia.
          </h2>
          <p style={{ margin: "0", maxWidth: "420px", fontSize: "16px", color: "#3D4350" }}>{v.reviewsNote}</p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
            gap: "20px",
          }}
        >
          {v.reviews.map((r: any, i0: number) => (
            <Fragment key={i0}>
              <div
                data-rv=""
                style={{
                  borderRadius: "22px",
                  padding: "28px",
                  boxShadow: "inset 0 0 0 1px #E3E6EC",
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                <div aria-label={r.ratingLabel} style={{ fontSize: "20px", letterSpacing: "3px", color: "#B80F16" }}>
                  {r.stars}
                </div>
                <div style={{ fontSize: "16px", color: "#3D4350" }}>{r.text}</div>
                <div style={{ marginTop: "auto", fontWeight: "700", fontSize: "14.5px" }}>
                  {r.author}
                  {" · "}
                  {r.store}
                </div>
              </div>
            </Fragment>
          ))}
          <div
            data-rv=""
            style={{
              borderRadius: "22px",
              padding: "28px",
              background: "#F4F5F8",
              minHeight: "200px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <div className="dsp" style={{ fontSize: "26px", lineHeight: "1.1" }}>
              Já é cliente?
            </div>
            <div style={{ fontSize: "16px", color: "#3D4350" }}>Conte como foi sua experiência na Terra Fértil.</div>
            <a
              className="btn btn-sm btn-line"
              href={v.waHref}
              target="_blank"
              rel="noopener"
              style={{ alignSelf: "flex-start", marginTop: "auto" }}
            >
              Deixar uma avaliação
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
