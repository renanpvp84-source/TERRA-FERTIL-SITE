/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function MobileBestSellers({ v }: { v: Vals }) {
  return (
    <section id="m-vendidos" className="pad" style={{ paddingTop: "30px", paddingBottom: "32px" }}>
      <h2 className="dsp" data-rv="" style={{ margin: "0 0 14px", fontSize: "28px" }}>
        {v.bestTitle}
      </h2>
      {v.bestEmpty ? (
        <p style={{ margin: "0 0 14px", fontSize: "15.5px", color: "#5B6272" }}>
          Nada encontrado para essa busca. Tente outro termo ou fale com a loja pelo WhatsApp.
        </p>
      ) : null}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "10px" }}>
        {v.best.map((p: any, i0: number) => (
          <Fragment key={i0}>
            <article className="pc" data-rv="">
              <Link className="pc-img" href={p.href}>
                <img src={p.img} alt={p.name} loading="lazy" decoding="async" />
              </Link>
              <button
                type="button"
                className="fav"
                aria-label={p.favLabel}
                aria-pressed={p.isFav}
                onClick={p.toggleFav}
              >
                <svg
                  className="ic"
                  style={{ width: "20px", height: "20px", fill: p.favFill, stroke: p.favStroke }}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 20s-7-4.400-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" />
                </svg>
              </button>
              <div
                style={{
                  marginTop: "10px",
                  fontSize: "10.5px",
                  fontWeight: "800",
                  letterSpacing: ".09em",
                  textTransform: "uppercase",
                  color: "#5B6272",
                }}
              >
                {p.brand}
              </div>
              <Link
                href={p.href}
                style={{ marginTop: "3px", fontSize: "14px", fontWeight: "600", lineHeight: "1.3", minHeight: "55px" }}
              >
                {p.name}
              </Link>
              <div style={{ fontSize: "12.5px", color: "#5B6272" }}>{p.size}</div>
              <div className="price" style={{ marginTop: "8px" }}>
                <small>R$</small>
                <b>{p.pInt}</b>
                <sup>
                  {","}
                  {p.pCents}
                </sup>
              </div>
              <button type="button" className="add" onClick={p.add}>
                Adicionar
              </button>
            </article>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
