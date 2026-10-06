/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function AccountHeader({ v }: { v: Vals }) {
  return (
    <header className="hd">
      <div className="wrap hd-main">
        <Link className="hd-logo" href="/" aria-label="Terra Fértil — página inicial">
          <img
            src="/images/logo-terra-fertil.png"
            alt="Terra Fértil — Produtos Agropecuários e Pet Shop"
            decoding="async"
          />
        </Link>
        <nav className="hd-nav" aria-label="Principal">
          <Link className="nv" href="/">
            Loja
          </Link>
          <Link className="nv" href="/#ofertas">
            Ofertas
          </Link>
          <Link className="nv" href="/checkout">
            Carrinho
          </Link>
        </nav>
      </div>
    </header>
  );
}
