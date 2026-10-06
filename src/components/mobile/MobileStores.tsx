/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import type { Vals } from "@/lib/types";

export default function MobileStores({ v }: { v: Vals }) {
  return (
    <section id="m-lojas" className="pad" style={{ background: "#F4F5F8", paddingTop: "30px", paddingBottom: "30px" }}>
      <h2 className="dsp" data-rv="" style={{ margin: "0 0 14px", fontSize: "28px", lineHeight: "1.08" }}>
        Encontre a Terra Fértil
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {v.stores.map((s: any, i0: number) => (
          <Fragment key={i0}>
            <article
              data-rv=""
              style={{
                padding: "16px 18px",
                borderRadius: "18px",
                background: "#ffffff",
                boxShadow: "0 0 0 1px #E3E6EC",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px" }}>
                <b className="dsp" style={{ fontSize: "22px" }}>
                  {s.name}
                </b>
                <span style={{ fontSize: "12px", fontWeight: "800", color: "#1E3FA8" }}>{s.tag}</span>
              </div>
              <div style={{ marginTop: "4px", fontSize: "14.5px", color: "#3D4350" }}>{s.addr}</div>
              <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                <a
                  href={s.mapHref}
                  target="_blank"
                  rel="noopener"
                  style={{
                    flex: "1",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "999px",
                    background: "#E0161C",
                    color: "#ffffff",
                    fontWeight: "800",
                    fontSize: "14.5px",
                  }}
                >
                  Como chegar
                </a>
                <a
                  href={s.telHref}
                  style={{
                    flex: "1",
                    minHeight: "44px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "999px",
                    boxShadow: "inset 0 0 0 1.5px #14161C",
                    fontWeight: "800",
                    fontSize: "14.5px",
                  }}
                >
                  {s.tel}
                </a>
              </div>
            </article>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
