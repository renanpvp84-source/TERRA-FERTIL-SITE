/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function MobileNavigation({ v }: { v: Vals }) {
  return (
    <div style={{ position: "sticky", bottom: "0", zIndex: "40" }}>
      <a
        href={v.waHref}
        target="_blank"
        rel="noopener"
        aria-label="Fale com a Terra Fértil pelo WhatsApp"
        style={{
          position: "absolute",
          right: "14px",
          top: "-68px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#0B7A3E",
          color: "#ffffff",
          display: "grid",
          placeItems: "center",
          boxShadow: "0 12px 28px rgba(11,122,62,.42)",
        }}
      >
        <svg className="ic" style={{ width: "28px", height: "28px" }} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3Z" />
          <path d="M9 8.500c-.400 2.800 2.600 6 6 6.500l1-1.500-2-1-.900.800c-1-.400-1.900-1.300-2.400-2.400l.800-.900-1-2L9 8.500Z" />
        </svg>
      </a>
      {v.toastShow ? (
        <div className="toast" role="status">
          {v.toast}
        </div>
      ) : null}
      <nav
        className="tabbar"
        aria-label="Navegação principal"
        style={{
          display: "flex",
          background: "#ffffff",
          boxShadow: "0 -1px 0 #E3E6EC, 0 -10px 30px rgba(15,26,74,.08)",
          padding: "2px 4px 6px",
        }}
      >
        <Link className="on" href="/" aria-current="page">
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 11 12 4l8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1v-8Z" />
          </svg>
          Início
        </Link>
        <a href="#m-categorias">
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="4" y="4" width="7" height="7" rx="2" />
            <rect x="13" y="4" width="7" height="7" rx="2" />
            <rect x="4" y="13" width="7" height="7" rx="2" />
            <rect x="13" y="13" width="7" height="7" rx="2" />
          </svg>
          Categorias
        </a>
        <button type="button" onClick={v.focusSearch}>
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.600-3.600" />
          </svg>
          Buscar
        </button>
        <Link href="/checkout">
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 4h2.200l2.300 11h10.200l2-8H7" />
            <circle cx="9.500" cy="19" r="1.400" />
            <circle cx="17" cy="19" r="1.400" />
          </svg>
          Carrinho
          {v.cartHas ? (
            <span className="cnt" style={{ right: "50%", marginRight: "-24px", top: "4px" }}>
              {v.cartCount}
            </span>
          ) : null}
        </Link>
        <Link href="/conta">
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c1.500-3.500 4.500-5 8-5s6.500 1.500 8 5" />
          </svg>
          Conta
        </Link>
      </nav>
    </div>
  );
}
