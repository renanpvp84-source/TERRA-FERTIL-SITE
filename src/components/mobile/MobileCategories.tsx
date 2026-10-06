/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function MobileCategories({ v }: { v: Vals }) {
  return (
    <section id="m-categorias" style={{ background: "#F4F5F8", padding: "28px 0 22px" }}>
      <h2 className="dsp pad" data-rv="" style={{ margin: "0 0 12px", fontSize: "26px", lineHeight: "1.1" }}>
        Encontre tudo para o seu pet
      </h2>
      <div className="hscroll" data-rv="" style={{ gap: "4px", paddingTop: "6px" }}>
        <a className="cat" href="#m-vendidos">
          <div className="ring ring-b">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 4h10l1 4-1 12H7L6 8l1-4Z" />
              <path d="M6 8h12" />
              <circle cx="12" cy="14" r="2.500" />
            </svg>
          </div>
          <span>Rações</span>
        </a>
        <a className="cat" href="#m-vendidos">
          <div className="ring ring-r">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 15 15 9" />
              <circle cx="6.800" cy="14.600" r="2" />
              <circle cx="9.400" cy="17.200" r="2" />
              <circle cx="14.600" cy="6.800" r="2" />
              <circle cx="17.200" cy="9.400" r="2" />
            </svg>
          </div>
          <span>Petiscos</span>
        </a>
        <a className="cat" href="#m-vendidos">
          <div className="ring ring-r">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="2.500" y="8" width="19" height="8" rx="4" transform="rotate(-40 12 12)" />
              <path d="m9.400 8.900 5.200 6.200" />
            </svg>
          </div>
          <span>Remédios</span>
        </a>
        <a className="cat" href="#m-vendidos">
          <div className="ring ring-b">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M10 3h4v3l2 2v12H8V8l2-2V3Z" />
              <path d="M8 12.500h8" />
            </svg>
          </div>
          <span>Higiene</span>
        </a>
        <a className="cat" href="#m-vendidos">
          <div className="ring ring-r">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M5.500 6.500c3 2.500 4.500 5.500 4.500 11M18.500 6.500c-3 2.500-4.500 5.500-4.500 11" />
            </svg>
          </div>
          <span>Brinquedos</span>
        </a>
        <a className="cat" href="#m-vendidos">
          <div className="ring ring-b">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 17v-4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4" />
              <path d="M3 17h18v2H3zM7 10V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1" />
            </svg>
          </div>
          <span>Camas</span>
        </a>
        <a className="cat" href="#m-vendidos">
          <div className="ring ring-r">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 12V4h8l10 10-8 8L3 12Z" />
              <circle cx="7.500" cy="8.500" r="1.300" />
            </svg>
          </div>
          <span>Acessórios</span>
        </a>
        <a className="cat" href="#m-vendidos">
          <div className="ring ring-b">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="8" width="18" height="11" rx="2.500" />
              <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 12v3M12 12v3M16 12v3" />
            </svg>
          </div>
          <span>Transporte</span>
        </a>
      </div>
    </section>
  );
}
