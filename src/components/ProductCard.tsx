/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import Link from "next/link";
import type { ProductVM } from "@/lib/productVm";

/** Card de produto das vitrines: imagem, selo, favorito, preço e compra. */
export default function ProductCard({ p }: { p: ProductVM }) {
  return (
    <article className="pc">
      <Link className="pc-img" href={p.href}>
        <img src={p.img} alt={p.alt} loading="lazy" decoding="async" />
      </Link>
      {p.hasBadge ? (
        <span className="bdg" style={{ background: p.badgeBg, color: p.badgeFg }}>
          {p.badge}
        </span>
      ) : null}
      <button type="button" className="fav" aria-label={p.favLabel} aria-pressed={p.isFav} onClick={p.toggleFav}>
        <svg className="ic" style={{ fill: p.favFill, stroke: p.favStroke }} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20s-7-4.400-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" />
        </svg>
      </button>
      <div className="pc-brand">{p.brand}</div>
      <Link className="pc-name" href={p.href}>
        {p.name}
      </Link>
      <div className="pc-meta">{p.size}</div>
      <div className="pc-foot">
        {p.hasPrice ? (
          <div>
            <div className="price" style={{ marginTop: "0" }}>
              <small>R$</small>
              <b>{p.pInt}</b>
              <sup>
                {","}
                {p.pCents}
              </sup>
            </div>
            <button type="button" className="add" style={{ marginTop: "12px" }} onClick={p.add}>
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 4h2.200l2.300 11h10.200l2-8H7" />
                <circle cx="9.500" cy="19" r="1.400" />
                <circle cx="17" cy="19" r="1.400" />
              </svg>
              Adicionar
            </button>
          </div>
        ) : null}
        {p.noPrice ? (
          <div>
            <div style={{ fontWeight: "700", fontSize: "15px", minHeight: "26px" }}>Consulte o preço</div>
            <a className="add add-wa" style={{ marginTop: "12px" }} href={p.waHref} target="_blank" rel="noopener">
              Consultar no WhatsApp
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
