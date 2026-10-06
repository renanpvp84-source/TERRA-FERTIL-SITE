/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function Footer({ v }: { v: Vals }) {
  return (
    <footer className="ft" style={{ background: "#0F1A4A", color: "#ffffff", padding: "72px 0 0" }}>
      <div className="wrap" style={{ display: "flex", flexWrap: "wrap", gap: "44px 56px" }}>
        <div style={{ flex: "2 1 280px", minWidth: "0", maxWidth: "360px" }}>
          <div style={{ display: "inline-block", padding: "12px 18px", borderRadius: "16px", background: "#ffffff" }}>
            <img
              src="/images/logo-terra-fertil.png"
              alt="Terra Fértil — Produtos Agropecuários e Pet Shop"
              style={{ display: "block", height: "42px", width: "auto" }}
              decoding="async"
            />
          </div>
          <p style={{ margin: "18px 0 20px", fontSize: "15px", color: "#C8CEE6" }}>
            {"Pet shop, produtos veterinários, banho & tosa e consultório veterinário em Boa Vista, Roraima."}
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <a className="soc" href={v.cfg.instagramUrl} target="_blank" rel="noopener" aria-label="Instagram">
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="4" width="16" height="16" rx="4.500" />
                <circle cx="12" cy="12" r="3.600" />
              </svg>
            </a>
            <a className="soc" href={v.cfg.facebookUrl} aria-label="Facebook">
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 8.500V7a2 2 0 0 1 2-2h1.500M10 12h6M13.500 20v-11" />
                <rect x="3.500" y="3.500" width="17" height="17" rx="4.500" />
              </svg>
            </a>
            <a className="soc" href={v.cfg.tiktokUrl} aria-label="TikTok">
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 4v10.500a3.500 3.500 0 1 1-3.500-3.500M14 4c.500 2.500 2 4 4.500 4.500" />
              </svg>
            </a>
            <a className="soc" href={v.waHref} target="_blank" rel="noopener" aria-label="WhatsApp">
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3Z" />
              </svg>
            </a>
          </div>
        </div>
        <div style={{ flex: "1 1 140px", minWidth: "0" }}>
          <h3>Comprar</h3>
          <ul>
            <li>
              <a href="#mais-vendidos">Rações</a>
            </li>
            <li>
              <a href="#categorias">Petiscos</a>
            </li>
            <li>
              <a href="#mais-vendidos">Medicamentos</a>
            </li>
            <li>
              <a href="#categorias">Higiene</a>
            </li>
            <li>
              <a href="#categorias">Brinquedos</a>
            </li>
            <li>
              <a href="#categorias">Acessórios</a>
            </li>
          </ul>
        </div>
        <div style={{ flex: "1 1 140px", minWidth: "0" }}>
          <h3>Serviços</h3>
          <ul>
            <li>
              <a href="#banho">{"Banho & Tosa"}</a>
            </li>
            <li>
              <a href="#veterinario">Veterinário</a>
            </li>
          </ul>
          <h3 style={{ marginTop: "26px" }}>Institucional</h3>
          <ul>
            <li>
              <a href="#sobre">Sobre</a>
            </li>
            <li>
              <a href="#lojas">Lojas</a>
            </li>
            <li>
              <a href="#lojas">Contato</a>
            </li>
          </ul>
        </div>
        <div style={{ flex: "1.400 1 220px", minWidth: "0" }}>
          <h3>Atendimento</h3>
          <ul>
            <li>
              <a href={v.waHref} target="_blank" rel="noopener">
                {"WhatsApp "}
                {v.cfg.whatsappDisplay}
              </a>
            </li>
            <li>
              <a href={v.cfg.phoneHref}>
                {"Telefone "}
                {v.cfg.phoneDisplay}
              </a>
            </li>
            <li>
              <a href="#lojas">
                {"E-mail "}
                {v.cfg.emailDisplay}
              </a>
            </li>
            <li>
              <a href="#lojas">
                {"Horários "}
                {v.cfg.hoursDisplay}
              </a>
            </li>
          </ul>
          <h3 style={{ marginTop: "26px" }}>Pagamento</h3>
          <p style={{ margin: "0", fontSize: "15px", color: "#C8CEE6" }}>{v.cfg.paymentDisplay}</p>
        </div>
      </div>
      <div
        className="wrap"
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "8px 24px",
          marginTop: "56px",
          paddingTop: "18px",
          paddingBottom: "96px",
          borderTop: "1px solid #2A3670",
        }}
      >
        <span style={{ fontSize: "13.5px", color: "#C8CEE6" }}>
          {"© "}
          {v.year}
          {" Terra Fértil — Produtos Agropecuários e Pet Shop · CNPJ "}
          {v.cfg.cnpjDisplay}
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 22px" }}>
          <a href="#topo" style={{ fontSize: "13.5px" }}>
            Privacidade
          </a>
          <a href="#topo" style={{ fontSize: "13.5px" }}>
            Termos
          </a>
          <a href="#topo" style={{ fontSize: "13.5px" }}>
            Trocas
          </a>
          <a href="#topo" style={{ fontSize: "13.5px" }}>
            Entregas
          </a>
        </div>
      </div>
    </footer>
  );
}
