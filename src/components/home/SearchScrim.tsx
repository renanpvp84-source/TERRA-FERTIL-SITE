/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function SearchScrim({ v }: { v: Vals }) {
  return (
    <>
      {v.searchOpen ? (
        <button type="button" className="scrim-s" aria-label="Fechar busca" onClick={v.closeSearch} />
      ) : null}
    </>
  );
}
