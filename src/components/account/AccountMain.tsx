/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import { Fragment } from "react";
import Link from "next/link";
import type { Vals } from "@/lib/types";

export default function AccountMain({ v }: { v: Vals }) {
  return (
    <main
      className="wrap"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        gap: "28px",
        paddingTop: "36px",
        paddingBottom: "96px",
      }}
    >
      <aside className="card side" style={{ flex: "1 1 260px", maxWidth: "320px", minWidth: "0", padding: "20px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "14px", padding: "6px 8px 18px" }}>
          <span
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "50%",
              background: "#1E3FA8",
              color: "#ffffff",
              display: "grid",
              placeItems: "center",
            }}
          >
            <svg className="ic" style={{ width: "26px", height: "26px" }} viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.500-3.500 4.500-5 8-5s6.500 1.500 8 5" />
            </svg>
          </span>
          <span style={{ minWidth: "0" }}>
            <b style={{ display: "block", fontSize: "17px" }}>[Nome do cliente]</b>
            <span style={{ fontSize: "13.5px", color: "#5B6272" }}>Conta de exemplo</span>
          </span>
        </div>
        <nav aria-label="Minha conta" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <a className="on" href="#visao" aria-current="page">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c1.500-3.500 4.500-5 8-5s6.500 1.500 8 5" />
            </svg>
            Minha conta
          </a>
          <a href="#pedidos">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7.500 12 3l8 4.500v9L12 21l-8-4.500v-9Z" />
              <path d="M4 7.500 12 12l8-4.500M12 12v9" />
            </svg>
            Meus pedidos
          </a>
          <a href="#repor">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 20s-7-4.400-7-10a4 4 0 0 1 7-2.500A4 4 0 0 1 19 10c0 5.600-7 10-7 10Z" />
            </svg>
            Meus favoritos
          </a>
          <a href="#dados">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="4" width="16" height="16" rx="3" />
              <path d="M8 9h8M8 13h8M8 17h5" />
            </svg>
            Meus dados
          </a>
          <a href="#dados">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s-7-6.200-7-11.500a7 7 0 0 1 14 0C19 14.800 12 21 12 21Z" />
              <circle cx="12" cy="9.500" r="2.500" />
            </svg>
            Meus endereços
          </a>
          <a href="#pets">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 13c0-4 3-7 7-7s7 3 7 7c0 3-2 6-7 6s-7-3-7-6Z" />
              <path d="M9 12v.500M15 12v.500M10.500 15.500c1 .700 2 .700 3 0M6.500 8 5 4l4 2M17.500 8 19 4l-4 2" />
            </svg>
            Meus pets
          </a>
          <a href="#agendamentos">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="4" y="5" width="16" height="15" rx="2.500" />
              <path d="M4 10h16M8 3v4M16 3v4" />
            </svg>
            Meus agendamentos
          </a>
          <a href="#cupons">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 12V4h8l10 10-8 8L3 12Z" />
              <circle cx="7.500" cy="8.500" r="1.300" />
            </svg>
            Meus cupons
          </a>
          <a href={v.waHref} target="_blank" rel="noopener">
            <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3a9 9 0 0 0-7.700 13.600L3 21l4.500-1.200A9 9 0 1 0 12 3Z" />
            </svg>
            Suporte
          </a>
        </nav>
      </aside>
      <div style={{ flex: "3 1 620px", minWidth: "0", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div id="visao">
          <h1 className="dsp" style={{ margin: "0", fontSize: "42px", lineHeight: "1.05" }}>
            Minha conta
          </h1>
          <p style={{ margin: "8px 0 0", fontSize: "17px", color: "#3D4350" }}>
            Pedidos, pets e agendamentos em um só lugar.
          </p>
        </div>
        <section id="pets" className="card">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px 20px",
              marginBottom: "18px",
            }}
          >
            <h2 className="dsp" style={{ margin: "0", fontSize: "28px" }}>
              Meus pets
            </h2>
            <span style={{ fontSize: "14px", color: "#5B6272" }}>
              As recomendações da loja passam a considerar cada pet.
            </span>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))",
              gap: "16px",
            }}
          >
            {v.pets.map((p: any, i0: number) => (
              <Fragment key={i0}>
                <article
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px",
                    borderRadius: "18px",
                    background: "#F4F5F8",
                  }}
                >
                  <span
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      background: p.tone,
                      color: "#ffffff",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: "800",
                      fontSize: "22px",
                      flex: "none",
                      boxShadow: `0 0 0 3px #ffffff, 0 0 0 5.500px ${p.tone}`,
                    }}
                  >
                    {p.initial}
                  </span>
                  <span style={{ minWidth: "0" }}>
                    <b style={{ display: "block", fontSize: "18px" }}>{p.name}</b>
                    <span style={{ display: "block", fontSize: "14px", color: "#3D4350" }}>
                      {p.species}
                      {" · "}
                      {p.breed}
                    </span>
                    <span className="tag" style={{ background: "#ffffff", color: "#5B6272", marginTop: "6px" }}>
                      Exemplo
                    </span>
                  </span>
                </article>
              </Fragment>
            ))}
          </div>
          <form onSubmit={v.addPet} style={{ marginTop: "26px", paddingTop: "24px", borderTop: "1px solid #E3E6EC" }}>
            <h3 style={{ margin: "0 0 16px", fontSize: "18px" }}>Cadastrar pet</h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
                gap: "16px",
              }}
            >
              <div>
                <label className="lbl" htmlFor="pet-nome">
                  Nome
                </label>
                <input
                  className="inp"
                  id="pet-nome"
                  type="text"
                  value={v.fName}
                  onChange={v.onName}
                  placeholder="Ex.: Thor"
                />
              </div>
              <div>
                <label className="lbl" htmlFor="pet-especie">
                  Espécie
                </label>
                <select className="inp" id="pet-especie" value={v.fSpecies} onChange={v.onSpecies}>
                  <option value="Cachorro">Cachorro</option>
                  <option value="Gato">Gato</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div>
                <label className="lbl" htmlFor="pet-raca">
                  Raça
                </label>
                <input
                  className="inp"
                  id="pet-raca"
                  type="text"
                  value={v.fBreed}
                  onChange={v.onBreed}
                  placeholder="Ex.: SRD"
                />
              </div>
              <div>
                <label className="lbl" htmlFor="pet-sexo">
                  Sexo
                </label>
                <select className="inp" id="pet-sexo">
                  <option>Macho</option>
                  <option>Fêmea</option>
                </select>
              </div>
              <div>
                <label className="lbl" htmlFor="pet-nasc">
                  Data de nascimento
                </label>
                <input className="inp" id="pet-nasc" type="date" />
              </div>
              <div>
                <label className="lbl" htmlFor="pet-peso">
                  Peso (kg)
                </label>
                <input className="inp" id="pet-peso" type="number" min="0" step="0.1" placeholder="0,0" />
              </div>
              <div>
                <label className="lbl" htmlFor="pet-foto">
                  Foto
                </label>
                <input className="inp" id="pet-foto" type="file" accept="image/*" style={{ padding: "10px 14px" }} />
              </div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <label className="lbl" htmlFor="pet-obs">
                Observações
              </label>
              <textarea
                className="inp"
                id="pet-obs"
                placeholder="Alergias, medicações em uso, comportamento no banho…"
              />
            </div>
            <div
              style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 18px", marginTop: "18px" }}
            >
              <button type="submit" className="btn btn-red">
                Salvar pet
              </button>
              <span role="status" style={{ fontSize: "14px", color: "#B80F16" }}>
                {v.fError}
              </span>
            </div>
          </form>
        </section>
        <section id="agendamentos" className="card">
          <h2 className="dsp" style={{ margin: "0 0 6px", fontSize: "28px" }}>
            Meus agendamentos
          </h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "14px 24px",
              padding: "22px",
              marginTop: "14px",
              borderRadius: "18px",
              border: "1.5px dashed #CDD3E0",
            }}
          >
            <div>
              <b style={{ display: "block", fontSize: "17px" }}>Nenhum horário marcado</b>
              <span style={{ fontSize: "15px", color: "#5B6272" }}>
                Agende banho, tosa ou consulta e acompanhe por aqui.
              </span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              <Link className="btn btn-sm btn-red" href="/#banho">
                {"Agendar Banho & Tosa"}
              </Link>
              <Link className="btn btn-sm btn-line" href="/#veterinario">
                Agendar veterinário
              </Link>
            </div>
          </div>
        </section>
        <section id="repor" className="card">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: "8px 20px",
            }}
          >
            <h2 className="dsp" style={{ margin: "0", fontSize: "28px" }}>
              Hora de repor?
            </h2>
            <span style={{ fontSize: "14px", color: "#5B6272" }}>Com base nas suas últimas compras</span>
          </div>
          <div style={{ marginTop: "12px" }}>
            {v.repor.map((r: any, i0: number) => (
              <Fragment key={i0}>
                <div className="row">
                  <img
                    src={r.img}
                    alt=""
                    style={{ width: "68px", height: "68px", borderRadius: "12px", objectFit: "cover" }}
                    loading="lazy"
                    decoding="async"
                  />
                  <div style={{ flex: "1 1 220px", minWidth: "0" }}>
                    <b style={{ display: "block", fontSize: "15.5px" }}>{r.name}</b>
                    <span style={{ fontSize: "13.5px", color: "#5B6272" }}>{r.meta}</span>
                  </div>
                  <b style={{ fontVariantNumeric: "tabular-nums" }}>{r.price}</b>
                  <button type="button" className="btn btn-sm btn-line" onClick={r.buy}>
                    Comprar novamente
                  </button>
                </div>
              </Fragment>
            ))}
          </div>
        </section>
        <section id="pedidos" className="card">
          <h2 className="dsp" style={{ margin: "0 0 12px", fontSize: "28px" }}>
            Meus pedidos
          </h2>
          <div className="row">
            <div style={{ flex: "1 1 220px" }}>
              <b style={{ display: "block" }}>Pedido [nº]</b>
              <span style={{ fontSize: "13.5px", color: "#5B6272" }}>[data] · 2 itens · retirada no Buritis</span>
            </div>
            <span className="tag" style={{ background: "#E6F4EC", color: "#0B6B37" }}>
              Pronto para retirada
            </span>
            <b style={{ fontVariantNumeric: "tabular-nums" }}>R$ 254,98</b>
            <a className="btn btn-sm btn-line" href="#pedidos">
              Ver detalhes
            </a>
          </div>
          <div className="row">
            <div style={{ flex: "1 1 220px" }}>
              <b style={{ display: "block" }}>Pedido [nº]</b>
              <span style={{ fontSize: "13.5px", color: "#5B6272" }}>[data] · 1 item · entrega</span>
            </div>
            <span className="tag" style={{ background: "#E8EDFA", color: "#1E3FA8" }}>
              Entregue
            </span>
            <b style={{ fontVariantNumeric: "tabular-nums" }}>R$ 74,99</b>
            <a className="btn btn-sm btn-line" href="#pedidos">
              Ver detalhes
            </a>
          </div>
          <p style={{ margin: "12px 0 0", fontSize: "13.5px", color: "#5B6272" }}>
            Pedidos de exemplo para mostrar os estados da lista.
          </p>
        </section>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px" }}>
          <section id="dados" className="card" style={{ flex: "1 1 300px", minWidth: "0" }}>
            <h2 className="dsp" style={{ margin: "0 0 12px", fontSize: "28px" }}>
              Meus dados e endereços
            </h2>
            <div style={{ fontSize: "15.5px", color: "#3D4350", display: "flex", flexDirection: "column", gap: "6px" }}>
              <span>[Nome completo]</span>
              <span>[E-mail] · [Telefone]</span>
              <span>[Endereço de entrega em Boa Vista – RR]</span>
            </div>
            <a className="btn btn-sm btn-line" href="#dados" style={{ marginTop: "18px" }}>
              Editar
            </a>
          </section>
          <section
            id="cupons"
            style={{
              position: "relative",
              flex: "1 1 300px",
              minWidth: "0",
              borderRadius: "22px",
              padding: "28px",
              background: "#0F1A4A",
              color: "#ffffff",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                border: "36px solid #E0161C",
                right: "-100px",
                bottom: "-110px",
              }}
            />
            <div style={{ position: "relative" }}>
              <h2 className="dsp" style={{ margin: "0 0 8px", fontSize: "28px" }}>
                Cupons e Clube Terra Fértil
              </h2>
              <p style={{ margin: "0 0 18px", fontSize: "15.5px", color: "#C8CEE6", maxWidth: "320px" }}>
                Você ainda não tem cupons. Quando o Clube for lançado, as vantagens aparecem aqui.
              </p>
              <span style={{ fontSize: "13px", color: "#C8CEE6" }}>[Regras e benefícios a definir pela loja]</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
