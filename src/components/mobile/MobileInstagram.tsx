/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import type { Vals } from "@/lib/types";

export default function MobileInstagram({ v }: { v: Vals }) {
  return (
    <section className="pad" style={{ paddingTop: "30px", paddingBottom: "32px" }}>
      <div
        data-rv=""
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        <h2 className="dsp" style={{ margin: "0", fontSize: "26px", lineHeight: "1.1" }}>
          Um pouco da nossa rotina
        </h2>
      </div>
      <div data-rv="" style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "8px" }}>
        {v.insta.map((g: any, i0: number) => (
          <Fragment key={i0}>
            <a
              href={v.cfg.instagramUrl}
              target="_blank"
              rel="noopener"
              style={{
                display: "block",
                aspectRatio: "3 / 4",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#E3E6EC",
              }}
            >
              <img
                src={g.img}
                alt={g.alt}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                loading="lazy"
                decoding="async"
              />
            </a>
          </Fragment>
        ))}
      </div>
      <a
        className="btn btn-line"
        href={v.cfg.instagramUrl}
        target="_blank"
        rel="noopener"
        style={{ marginTop: "14px" }}
      >
        {"Ver Instagram "}
        {v.cfg.instagramHandle}
      </a>
    </section>
  );
}
