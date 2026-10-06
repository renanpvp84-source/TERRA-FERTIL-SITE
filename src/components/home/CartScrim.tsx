/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function CartScrim({ v }: { v: Vals }) {
  return (
    <button
      type="button"
      className="scrim"
      aria-label="Fechar carrinho"
      onClick={v.closeCart}
      style={{ opacity: v.scrimO, pointerEvents: v.scrimPe }}
    />
  );
}
