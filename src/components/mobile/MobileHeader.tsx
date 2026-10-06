/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function MobileHeader({ v }: { v: Vals }) {
  return (
    <header style={{ position: "sticky", top: "0", zIndex: "40", background: "#ffffff", boxShadow: "0 1px 0 #E3E6EC" }}>
      <div
        className="pad"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px",
          minHeight: "56px",
        }}
      >
        <Link href="/" aria-label="Terra Fértil — início">
          <img
            src="/images/logo-terra-fertil.png"
            alt="Terra Fértil — Produtos Agropecuários e Pet Shop"
            style={{ display: "block", height: "32px", width: "auto" }}
            decoding="async"
          />
        </Link>
        <div style={{ display: "flex", alignItems: "center", marginRight: "-8px" }}>
          <Link className="icb" href="/conta" aria-label="Favoritos">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20s-7-4.400-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" />
            </svg>
          </Link>
          <Link className="icb" href="/checkout" aria-label="Carrinho">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 4h2.200l2.300 11h10.200l2-8H7" />
              <circle cx="9.500" cy="19" r="1.400" />
              <circle cx="17" cy="19" r="1.400" />
            </svg>
            {v.cartHas ? <span className="cnt">{v.cartCount}</span> : null}
          </Link>
        </div>
      </div>
      <form className="pad" role="search" onSubmit={v.onSearch} style={{ position: "relative", paddingBottom: "10px" }}>
        <label className="sr" htmlFor="m-q">
          Buscar na loja
        </label>
        <svg
          className="ic"
          style={{ position: "absolute", left: "32px", top: "14px", width: "20px", height: "20px", color: "#5B6272" }}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.600-3.600" />
        </svg>
        <input
          id="m-q"
          type="search"
          value={v.q}
          onChange={v.onQ}
          placeholder="Busque por produto, marca ou categoria"
          style={{
            width: "100%",
            height: "48px",
            borderRadius: "999px",
            border: "1.5px solid #CDD3E0",
            background: "#F4F5F8",
            padding: "0 16px 0 46px",
            fontSize: "15px",
            outline: "0",
          }}
        />
      </form>
    </header>
  );
}
