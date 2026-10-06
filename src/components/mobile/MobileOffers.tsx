/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import type { Vals } from "@/lib/types";

export default function MobileOffers({ v }: { v: Vals }) {
  return (
    <section id="m-ofertas" style={{ padding: "8px 0 32px" }}>
      <div
        className="pad"
        data-rv=""
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        <h2 className="dsp" style={{ margin: "0", fontSize: "28px" }}>
          Ofertas da semana
        </h2>
        <a
          href="#m-vendidos"
          style={{
            fontWeight: "700",
            fontSize: "14.5px",
            color: "#B80F16",
            minHeight: "44px",
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          Ver todas
        </a>
      </div>
      <div className="hscroll" data-rv="">
        <a
          href="#m-vendidos"
          style={{
            position: "relative",
            width: "292px",
            height: "220px",
            borderRadius: "22px",
            overflow: "hidden",
            background: "#E0161C",
            color: "#ffffff",
            padding: "22px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          <span
            style={{
              position: "absolute",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background: "#1E3FA8",
              right: "-110px",
              top: "-120px",
            }}
          />
          <span
            style={{
              position: "relative",
              alignSelf: "flex-start",
              minHeight: "26px",
              display: "inline-flex",
              alignItems: "center",
              padding: "0 11px",
              borderRadius: "999px",
              background: "#ffffff",
              color: "#B80F16",
              fontSize: "12px",
              fontWeight: "800",
            }}
          >
            Enquanto durar o estoque
          </span>
          <b
            className="dsp"
            style={{ position: "relative", display: "block", marginTop: "10px", fontSize: "27px", lineHeight: "1.05" }}
          >
            Ração boa com preço de Terra Fértil.
          </b>
        </a>
        <a href="#m-vendidos" style={{ width: "165px", height: "220px", borderRadius: "18px", overflow: "hidden" }}>
          <img
            src="/images/art-proomega.jpg"
            alt="Arte promocional: Pro Omega Adulto 15 kg"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
            decoding="async"
          />
        </a>
        <a href="#m-vendidos" style={{ width: "165px", height: "220px", borderRadius: "18px", overflow: "hidden" }}>
          <img
            src="/images/art-capitao.jpg"
            alt="Arte promocional: Capitão Dog 14 kg"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
            decoding="async"
          />
        </a>
        <a
          href={v.waHref}
          target="_blank"
          rel="noopener"
          style={{ width: "165px", height: "220px", borderRadius: "18px", overflow: "hidden" }}
        >
          <img
            src="/images/art-delivery.jpg"
            alt="Arte: peça pelo delivery"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
      <div className="pad" style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "10px" }}>
        {v.offers.map((p: any, i0: number) => (
          <Fragment key={i0}>
            <article
              data-rv=""
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "10px",
                borderRadius: "16px",
                border: "1px solid #E3E6EC",
              }}
            >
              <img
                src={p.img}
                alt={p.name}
                style={{ width: "92px", height: "92px", borderRadius: "10px", objectFit: "cover", flex: "none" }}
                loading="lazy"
                decoding="async"
              />
              <div style={{ flex: "1", minWidth: "0" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    height: "20px",
                    padding: "0 8px",
                    borderRadius: "999px",
                    background: "#E0161C",
                    color: "#ffffff",
                    fontSize: "11px",
                    fontWeight: "800",
                  }}
                >
                  Oferta
                </span>
                <div style={{ marginTop: "4px", fontWeight: "600", fontSize: "14.5px", lineHeight: "1.25" }}>
                  {p.name}
                  {" · "}
                  {p.size}
                </div>
                <div className="price" style={{ marginTop: "6px" }}>
                  <small>R$</small>
                  <b>{p.pInt}</b>
                  <sup>
                    {","}
                    {p.pCents}
                  </sup>
                </div>
              </div>
              <button type="button" className="rnd" aria-label={p.addLabel} onClick={p.add}>
                <svg className="ic" style={{ width: "20px", height: "20px" }} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </article>
          </Fragment>
        ))}
      </div>
    </section>
  );
}
