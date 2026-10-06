/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Ref } from "react";
import type { Vals } from "@/lib/types";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutMain from "./CheckoutMain";

export default function CheckoutMarkup({ v, rootRef }: { v: Vals; rootRef?: Ref<HTMLDivElement> }) {
  return (
    <div className="tfk" ref={rootRef}>
      <CheckoutHeader v={v} />
      <CheckoutMain v={v} />
    </div>
  );
}
