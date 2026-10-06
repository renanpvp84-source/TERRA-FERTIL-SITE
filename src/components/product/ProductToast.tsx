/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function ProductToast({ v }: { v: Vals }) {
  return (
    <>
      {v.toastShow ? (
        <div className="toast" role="status">
          {v.toast}
        </div>
      ) : null}
    </>
  );
}
