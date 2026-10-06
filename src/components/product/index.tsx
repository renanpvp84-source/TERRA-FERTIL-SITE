/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Ref } from "react";
import type { Vals } from "@/lib/types";
import ProductHeader from "./ProductHeader";
import ProductMain from "./ProductMain";
import ProductFooter from "./ProductFooter";
import ProductToast from "./ProductToast";

export default function ProductMarkup({ v, rootRef }: { v: Vals; rootRef?: Ref<HTMLDivElement> }) {
  return (
    <div className="tfp" ref={rootRef}>
      <ProductHeader v={v} />
      <ProductMain v={v} />
      <ProductFooter v={v} />
      <ProductToast v={v} />
    </div>
  );
}
