/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function Categories({ v }: { v: Vals }) {
  return (
    <section id="categorias" style={{ background: "#F4F5F8", padding: "84px 0 88px", overflow: "hidden" }}>
      <div className="wrap">
        <div
          data-rv=""
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "16px 24px",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <h2 className="dsp" style={{ margin: "0", fontSize: "42px", lineHeight: "1.05" }}>
            Encontre tudo para o seu pet
          </h2>
          <a className="lk" href="#mais-vendidos">
            {"Ver todas as categorias "}
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
        <div
          data-rv=""
          style={{ overflowX: "auto", scrollbarWidth: "none", margin: "0 -40px", padding: "8px 40px 16px" }}
        >
          <div data-pxx="-0.025" style={{ display: "flex", gap: "6px", width: "max-content" }}>
            <a className="cat" href="#mais-vendidos">
              <div className="ring ring-b">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 4h10l1 4-1 12H7L6 8l1-4Z" />
                  <path d="M6 8h12" />
                  <circle cx="12" cy="14" r="2.500" />
                </svg>
              </div>
              <span>Rações</span>
            </a>
            <a className="cat" href="#mais-vendidos">
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
            <a className="cat" href="#mais-vendidos">
              <div className="ring ring-r">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2.500" y="8" width="19" height="8" rx="4" transform="rotate(-40 12 12)" />
                  <path d="m9.400 8.900 5.200 6.200" />
                </svg>
              </div>
              <span>Medicamentos</span>
            </a>
            <a className="cat" href="#mais-vendidos">
              <div className="ring ring-b">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M10 3h4v3l2 2v12H8V8l2-2V3Z" />
                  <path d="M8 12.500h8" />
                </svg>
              </div>
              <span>Higiene</span>
            </a>
            <a className="cat" href="#mais-vendidos">
              <div className="ring ring-r">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M5.500 6.500c3 2.500 4.500 5.500 4.500 11M18.500 6.500c-3 2.500-4.500 5.500-4.500 11" />
                </svg>
              </div>
              <span>Brinquedos</span>
            </a>
            <a className="cat" href="#mais-vendidos">
              <div className="ring ring-b">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 17v-4a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4" />
                  <path d="M3 17h18v2H3zM7 10V9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1" />
                </svg>
              </div>
              <span>Camas</span>
            </a>
            <a className="cat" href="#mais-vendidos">
              <div className="ring ring-r">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M3 12V4h8l10 10-8 8L3 12Z" />
                  <circle cx="7.500" cy="8.500" r="1.300" />
                </svg>
              </div>
              <span>Acessórios</span>
            </a>
            <a className="cat" href="#mais-vendidos">
              <div className="ring ring-b">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="10.500" r="6.500" />
                  <path d="M12 17v1.500" />
                  <circle cx="12" cy="20" r="1.500" />
                </svg>
              </div>
              <span>Coleiras</span>
            </a>
            <a className="cat" href="#mais-vendidos">
              <div className="ring ring-r">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M5 5.500c0 5.500 3 7 7 7s7 1.500 7 6.500" />
                  <circle cx="5" cy="4" r="1.500" />
                  <rect x="17" y="19" width="4" height="2.500" rx="1" />
                </svg>
              </div>
              <span>Guias</span>
            </a>
            <a className="cat" href="#mais-vendidos">
              <div className="ring ring-b">
                <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="8" width="18" height="11" rx="2.500" />
                  <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M8 12v3M12 12v3M16 12v3" />
                </svg>
              </div>
              <span>Transporte</span>
            </a>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
            gap: "20px",
            marginTop: "28px",
          }}
        >
          <a className="who" data-rv="" href="#mais-vendidos">
            <img src="/images/ph-dachshund.jpg" alt="" decoding="async" />
            <div>
              <b className="dsp" style={{ display: "block", fontSize: "26px", lineHeight: "1.1" }}>
                Para cães
              </b>
              <span style={{ fontSize: "14.5px" }}>Rações, petiscos e antipulgas</span>
            </div>
          </a>
          <a className="who" data-rv="" href="#mais-vendidos" data-delay="80ms">
            <img src="/images/pd-vittamax-gato.jpg" alt="" loading="lazy" decoding="async" />
            <div>
              <b className="dsp" style={{ display: "block", fontSize: "26px", lineHeight: "1.1" }}>
                Para gatos
              </b>
              <span style={{ fontSize: "14.5px" }}>Rações e cuidados para felinos</span>
            </div>
          </a>
          <a className="who" data-rv="" href="#mais-vendidos" data-delay="160ms">
            <img src="/images/ph-filhotes.jpg" alt="" loading="lazy" decoding="async" />
            <div>
              <b className="dsp" style={{ display: "block", fontSize: "26px", lineHeight: "1.1" }}>
                Para filhotes
              </b>
              <span style={{ fontSize: "14.5px" }}>Primeiros meses bem cuidados</span>
            </div>
          </a>
          <a className="who" data-rv="" href="#mais-vendidos" data-delay="240ms">
            <img src="/images/ph-golden.jpg" alt="" loading="lazy" decoding="async" />
            <div>
              <b className="dsp" style={{ display: "block", fontSize: "26px", lineHeight: "1.1" }}>
                Para adultos
              </b>
              <span style={{ fontSize: "14.5px" }}>Nutrição para o dia a dia</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
