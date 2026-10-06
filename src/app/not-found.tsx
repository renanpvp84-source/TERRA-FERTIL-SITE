import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: 24,
        fontFamily: "'Figtree Variable', system-ui, sans-serif",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ fontFamily: "'Aleo', Georgia, serif", fontSize: 40, margin: "0 0 8px" }}>Página não encontrada</h1>
        <p style={{ margin: "0 0 20px", color: "#5B6272" }}>
          O endereço pode ter mudado ou o produto saiu do catálogo.
        </p>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            minHeight: 48,
            padding: "0 24px",
            borderRadius: 999,
            background: "#E0161C",
            color: "#fff",
            fontWeight: 800,
            textDecoration: "none",
          }}
        >
          Voltar para a loja
        </Link>
      </div>
    </main>
  );
}
