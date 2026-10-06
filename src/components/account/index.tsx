/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Ref } from "react";
import type { Vals } from "@/lib/types";
import AccountHeader from "./AccountHeader";
import AccountMain from "./AccountMain";
import AccountToast from "./AccountToast";

export default function AccountMarkup({ v, rootRef }: { v: Vals; rootRef?: Ref<HTMLDivElement> }) {
  return (
    <div className="tfc" ref={rootRef}>
      <AccountHeader v={v} />
      <AccountMain v={v} />
      <AccountToast v={v} />
    </div>
  );
}
