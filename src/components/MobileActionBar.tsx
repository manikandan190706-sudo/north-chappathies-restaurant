import { Phone, ShoppingBag } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
      <div className="border-t border-hairline bg-canvas/95 backdrop-blur-md">
        <div className="grid grid-cols-2 gap-2 px-3 py-2.5">
          <a
            href={`tel:${BUSINESS.phoneTel}`}
            className="flex items-center justify-center gap-2 rounded-full border border-ink py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink"
          >
            <Phone size={14} /> Call
          </a>
          <a
            href={BUSINESS.orderUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-ink py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-canvas"
          >
            <ShoppingBag size={14} /> Order
          </a>
        </div>
      </div>
    </div>
  );
}