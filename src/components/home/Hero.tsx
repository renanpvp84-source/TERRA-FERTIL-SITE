/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function Hero({ v }: { v: Vals }) {
  return (
    <section style={{ position: "relative", background: "#F4F5F8", overflow: "hidden" }}>
      <div
        className="wrap"
        style={{
          position: "relative",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "48px 56px",
          paddingTop: "52px",
          paddingBottom: "112px",
        }}
      >
        <div style={{ flex: "1 1 440px", minWidth: "0", position: "relative", zIndex: "2" }}>
          <div
            data-rv=""
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              minHeight: "36px",
              padding: "0 16px 0 12px",
              borderRadius: "999px",
              background: "#ffffff",
              fontSize: "14px",
              fontWeight: "700",
              boxShadow: "inset 0 0 0 1px #E3E6EC",
            }}
          >
            <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#E0161C" }} />
            <span>Terra Fértil Pet Shop</span>
          </div>
          <h1
            className="dsp"
            data-rv=""
            style={{ margin: "22px 0 0", fontSize: "clamp(40px, 4.600vw, 66px)", lineHeight: "1" }}
            data-delay="80ms"
          >
            {"Tudo para o seu pet. "}
            <span style={{ display: "block", color: "#E0161C" }}>Em um só lugar.</span>
          </h1>
          <p
            data-rv=""
            style={{ margin: "22px 0 0", maxWidth: "480px", fontSize: "19px", lineHeight: "1.5", color: "#3D4350" }}
            data-delay="160ms"
          >
            Produtos, cuidados e atendimento especializado para quem faz parte da família.
          </p>
          <div
            data-rv=""
            style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "32px" }}
            data-delay="240ms"
          >
            <a className="btn btn-red" href="#mais-vendidos">
              {"Comprar agora "}
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="btn btn-line" href="#ofertas">
              Ver ofertas
            </a>
          </div>
          <ul
            data-rv=""
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px 28px",
              listStyle: "none",
              margin: "44px 0 0",
              padding: "0",
              fontSize: "14.5px",
              color: "#3D4350",
            }}
            data-delay="320ms"
          >
            <li style={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <svg
                className="ic"
                style={{ width: "19px", height: "19px", color: "#1E3FA8" }}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m5 12 4.500 4.500L19 7" />
              </svg>
              <span>
                <b style={{ color: "#14161C" }}>3 lojas</b>
                {" em Boa Vista"}
              </span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <svg
                className="ic"
                style={{ width: "19px", height: "19px", color: "#1E3FA8" }}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m5 12 4.500 4.500L19 7" />
              </svg>
              <span>
                <b style={{ color: "#14161C" }}>Delivery</b>
                {" pelo WhatsApp"}
              </span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "9px" }}>
              <svg
                className="ic"
                style={{ width: "19px", height: "19px", color: "#1E3FA8" }}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="m5 12 4.500 4.500L19 7" />
              </svg>
              <span>
                <b style={{ color: "#14161C" }}>{"Banho & Tosa"}</b>
                {" e consultório veterinário"}
              </span>
            </li>
          </ul>
        </div>
        <div
          style={{
            flex: "1 1 520px",
            minWidth: "0",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
            gap: "16px",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "640px",
              height: "640px",
              borderRadius: "50%",
              border: "88px solid #E0161C",
              right: "-230px",
              top: "-150px",
            }}
            data-px="0.030"
          />
          <div
            style={{
              position: "absolute",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "#1E3FA8",
              left: "-30px",
              bottom: "-40px",
            }}
            data-px="-0.040"
          />
          <div
            data-px="0.045"
            style={{
              position: "relative",
              flex: "1 1 0",
              minWidth: "0",
              maxWidth: "204px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "64px",
            }}
          >
            <div
              data-rv="img"
              style={{ aspectRatio: "3 / 4", borderRadius: "22px", overflow: "hidden", background: "#DDE1EA" }}
            >
              <img
                className="ph"
                src="/images/ph-frenchie.jpg"
                alt="Filhote de buldogue francês no colo, com sacos de ração ao fundo"
                decoding="async"
              />
            </div>
            <div
              data-rv="img"
              style={{ aspectRatio: "3 / 4", borderRadius: "22px", overflow: "hidden", background: "#DDE1EA" }}
              data-delay="180ms"
            >
              <img
                className="ph"
                src="/images/ph-loja-racoes.jpg"
                alt="Corredor da loja com pilhas de ração"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div
            data-px="-0.030"
            style={{
              position: "relative",
              flex: "1 1 0",
              minWidth: "0",
              maxWidth: "204px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <div
              data-rv="img"
              style={{ aspectRatio: "3 / 4", borderRadius: "22px", overflow: "hidden", background: "#DDE1EA" }}
              data-delay="90ms"
            >
              <img
                className="ph"
                src="/images/ph-dachshund.jpg"
                alt="Dachshund marrom olhando para a câmera"
                decoding="async"
              />
            </div>
            <div
              data-rv="img"
              style={{ aspectRatio: "3 / 4", borderRadius: "22px", overflow: "hidden", background: "#DDE1EA" }}
              data-delay="270ms"
            >
              <img
                className="ph"
                src="/images/ph-spitz.jpg"
                alt="Spitz alemão de lacinho depois do banho e tosa"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <div
            data-px="0.065"
            style={{
              position: "relative",
              flex: "1 1 0",
              minWidth: "0",
              maxWidth: "204px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              marginTop: "96px",
            }}
          >
            <div
              data-rv="img"
              style={{ aspectRatio: "3 / 4", borderRadius: "22px", overflow: "hidden", background: "#DDE1EA" }}
              data-delay="140ms"
            >
              <img
                className="ph"
                src="/images/ph-dono.jpg"
                alt="Atendente da Terra Fértil segurando um dachshund e uma caixa de antipulgas"
                decoding="async"
              />
            </div>
            <div
              data-rv="img"
              style={{ aspectRatio: "3 / 4", borderRadius: "22px", overflow: "hidden", background: "#DDE1EA" }}
              data-delay="320ms"
            >
              <img
                className="ph"
                src="/images/ph-husky.jpg"
                alt="Filhote de husky siberiano"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
          <a
            data-rv=""
            href="#banho"
            style={{
              position: "absolute",
              left: "-12px",
              top: "300px",
              zIndex: "3",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              minHeight: "60px",
              padding: "8px 20px 8px 8px",
              borderRadius: "999px",
              background: "#ffffff",
              boxShadow: "0 16px 40px rgba(15,26,74,.20)",
            }}
            data-delay="520ms"
          >
            <span
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "#1E3FA8",
                color: "#ffffff",
                display: "grid",
                placeItems: "center",
              }}
            >
              <svg className="ic" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="6" cy="7" r="2.500" />
                <circle cx="6" cy="17" r="2.500" />
                <path d="M8 8.500 20 17M8 15.500 20 7" />
              </svg>
            </span>
            <span style={{ lineHeight: "1.2" }}>
              <b style={{ display: "block", fontSize: "15px" }}>{"Banho & Tosa"}</b>
              <span style={{ fontSize: "13px", color: "#5B6272" }}>Agende um horário</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
