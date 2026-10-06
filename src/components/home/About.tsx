/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function About({ v }: { v: Vals }) {
  return (
    <section id="sobre" style={{ background: "#F4F5F8", padding: "96px 0", overflow: "hidden" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "56px 72px" }}>
        <div style={{ flex: "1 1 440px", minWidth: "0" }}>
          <div className="eye" data-rv="" style={{ color: "#1E3FA8" }}>
            Conheça a Terra Fértil
          </div>
          <h2
            className="dsp"
            data-rv=""
            style={{ margin: "8px 0 0", fontSize: "52px", lineHeight: "1.02" }}
            data-delay="70ms"
          >
            Mais do que uma pet shop.
          </h2>
          <p
            data-rv=""
            style={{ margin: "16px 0 0", maxWidth: "500px", fontSize: "18px", color: "#3D4350" }}
            data-delay="140ms"
          >
            Um lugar para encontrar produtos, cuidados e atendimento para diferentes momentos da vida do seu pet.
          </p>
          <ul
            data-rv=""
            style={{ listStyle: "none", margin: "28px 0 0", padding: "0", maxWidth: "520px" }}
            data-delay="210ms"
          >
            <li style={{ display: "flex", gap: "18px", padding: "14px 0", borderTop: "1px solid #CDD3E0" }}>
              <b style={{ flex: "0 0 132px" }}>Produtos</b>
              <span style={{ color: "#3D4350" }}>Rações, petiscos, higiene, acessórios e produtos agropecuários.</span>
            </li>
            <li style={{ display: "flex", gap: "18px", padding: "14px 0", borderTop: "1px solid #CDD3E0" }}>
              <b style={{ flex: "0 0 132px" }}>{"Banho & Tosa"}</b>
              <span style={{ color: "#3D4350" }}>Banho, tosa, hidratação e corte de unha.</span>
            </li>
            <li style={{ display: "flex", gap: "18px", padding: "14px 0", borderTop: "1px solid #CDD3E0" }}>
              <b style={{ flex: "0 0 132px" }}>Veterinário</b>
              <span style={{ color: "#3D4350" }}>Consultas, vacinas e exames no consultório.</span>
            </li>
            <li style={{ display: "flex", gap: "18px", padding: "14px 0", borderTop: "1px solid #CDD3E0" }}>
              <b style={{ flex: "0 0 132px" }}>Medicamentos</b>
              <span style={{ color: "#3D4350" }}>Antipulgas, vermífugos e linha veterinária.</span>
            </li>
            <li
              style={{
                display: "flex",
                gap: "18px",
                padding: "14px 0",
                borderTop: "1px solid #CDD3E0",
                borderBottom: "1px solid #CDD3E0",
              }}
            >
              <b style={{ flex: "0 0 132px" }}>Atendimento</b>
              <span style={{ color: "#3D4350" }}>Equipe nas três lojas e no WhatsApp.</span>
            </li>
          </ul>
        </div>
        <div style={{ position: "relative", flex: "1 1 460px", minWidth: "0", minHeight: "560px" }}>
          <div
            data-px="0.040"
            style={{
              position: "absolute",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              border: "58px solid #E0161C",
              right: "-150px",
              bottom: "-110px",
            }}
          />
          <div
            data-rv="img"
            style={{
              position: "absolute",
              left: "0",
              top: "40px",
              width: "56%",
              aspectRatio: "283 / 329",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#DDE1EA",
            }}
          >
            <img
              className="ph"
              src="/images/ph-loja-ampla.jpg"
              alt="Vista ampla do interior da loja Terra Fértil"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            data-rv="img"
            data-px="-0.050"
            style={{
              position: "absolute",
              right: "0",
              top: "0",
              width: "40%",
              aspectRatio: "3 / 4",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#DDE1EA",
            }}
            data-delay="160ms"
          >
            <img
              className="ph"
              src="/images/ph-loja-marcas.jpg"
              alt="Atendente da Terra Fértil entre pilhas de ração"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            data-rv="img"
            style={{
              position: "absolute",
              right: "8%",
              bottom: "0",
              width: "44%",
              aspectRatio: "283 / 262",
              borderRadius: "22px",
              overflow: "hidden",
              background: "#DDE1EA",
              boxShadow: "0 24px 50px rgba(15,26,74,.20)",
            }}
            data-delay="300ms"
          >
            <img
              className="ph"
              src="/images/ph-loja-corredor.jpg"
              alt="Cliente passeando com cachorro e criança no corredor de rações"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
