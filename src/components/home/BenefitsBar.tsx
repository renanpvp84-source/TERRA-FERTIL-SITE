/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function BenefitsBar({ v }: { v: Vals }) {
  return (
    <div style={{ background: "#F4F5F8", borderBottom: "1px solid #E3E6EC" }}>
      <ul className="wrap bn">
        <li>
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 6h11v10H3zM14 9h4l3 3.500V16h-7" />
            <circle cx="7.500" cy="17.500" r="1.800" />
            <circle cx="17.500" cy="17.500" r="1.800" />
          </svg>
          <span>
            <b>Entrega rápida</b>
            Delivery pelo WhatsApp
          </span>
        </li>
        <li>
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 10v9h16v-9M3 10l1.500-5h15L21 10a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0Z" />
          </svg>
          <span>
            <b>Retire na loja</b>
            Em 3 unidades
          </span>
        </li>
        <li>
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="6" width="18" height="13" rx="2.500" />
            <path d="M3 10.500h18M7 15h4" />
          </svg>
          <span>
            <b>Pagamento seguro</b>
          </span>
        </li>
        <li>
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 3v6a4 4 0 0 0 8 0V3M10 13v3a5 5 0 0 0 10 0v-2" />
            <circle cx="20" cy="12" r="2" />
          </svg>
          <span>
            <b>Atendimento especializado</b>
            Equipe e consultório veterinário
          </span>
        </li>
        <li>
          <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 3 5 6v5c0 4.500 3 8 7 10 4-2 7-5.500 7-10V6l-7-3Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span>
            <b>Compra segura</b>
          </span>
        </li>
      </ul>
    </div>
  );
}
