import HomeDesktop from "@/views/HomeDesktop";
import HomeMobile from "@/views/HomeMobile";

/**
 * Home. A mesma rota entrega duas composições: a de telas largas e a
 * pensada para o celular (com navegação inferior). O CSS mostra uma ou outra.
 */
export default function HomePage() {
  return (
    <>
      <div className="view-desktop">
        <HomeDesktop />
      </div>
      <div className="view-mobile">
        <HomeMobile />
      </div>
    </>
  );
}
