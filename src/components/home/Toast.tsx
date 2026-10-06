/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Vals } from "@/lib/types";

export default function Toast({ v }: { v: Vals }) {
  return (
    <>
      {v.toastShow ? (
        <div className="toast" role="status">
          <svg className="ic" style={{ width: "18px", height: "18px" }} viewBox="0 0 24 24" aria-hidden="true">
            <path d="m5 12 4.500 4.500L19 7" />
          </svg>
          {v.toast}
        </div>
      ) : null}
    </>
  );
}
