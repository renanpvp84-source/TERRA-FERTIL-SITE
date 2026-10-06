/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function MobileHero({ v }: { v: Vals }) {
  return (
    <section style={{ position: "relative", background: "#F4F5F8", overflow: "hidden", padding: "20px 0 32px" }}>
      <div className="pad" style={{ position: "relative", zIndex: "1" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "9px",
            minHeight: "32px",
            padding: "0 14px 0 11px",
            borderRadius: "999px",
            background: "#ffffff",
            fontSize: "13px",
            fontWeight: "700",
            boxShadow: "inset 0 0 0 1px #E3E6EC",
          }}
        >
          <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "#E0161C" }} />
          Terra Fértil Pet Shop
        </div>
        <h1 className="dsp" style={{ margin: "16px 0 0", fontSize: "42px", lineHeight: "1.02" }}>
          {"Tudo para o seu pet. "}
          <span style={{ display: "block", color: "#E0161C" }}>Em um só lugar.</span>
        </h1>
        <p style={{ margin: "14px 0 22px", fontSize: "16.5px", color: "#3D4350" }}>
          Produtos, cuidados e atendimento especializado para quem faz parte da família.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <a className="btn btn-red" href="#m-vendidos">
            Comprar agora
          </a>
          <a className="btn btn-line" href="#m-ofertas">
            Ver ofertas
          </a>
        </div>
      </div>
      <div style={{ position: "relative", marginTop: "30px", padding: "0 16px" }}>
        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            border: "44px solid #E0161C",
            right: "-110px",
            top: "-40px",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: "96px",
            height: "96px",
            borderRadius: "50%",
            background: "#1E3FA8",
            left: "-24px",
            bottom: "-26px",
          }}
        />
        <div style={{ position: "relative", display: "flex", gap: "10px" }}>
          <div
            style={{
              flex: "1",
              minWidth: "0",
              aspectRatio: "3 / 4",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#DDE1EA",
              marginTop: "18px",
            }}
          >
            <img
              src="/images/ph-frenchie.jpg"
              alt="Filhote de buldogue francês com sacos de ração ao fundo"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              decoding="async"
            />
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "0",
              aspectRatio: "3 / 4",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#DDE1EA",
            }}
          >
            <img
              src="/images/ph-dachshund.jpg"
              alt="Dachshund marrom olhando para a câmera"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              decoding="async"
            />
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "0",
              aspectRatio: "3 / 4",
              borderRadius: "16px",
              overflow: "hidden",
              background: "#DDE1EA",
              marginTop: "30px",
            }}
          >
            <img
              src="/images/ph-spitz.jpg"
              alt="Spitz alemão depois do banho e tosa"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
