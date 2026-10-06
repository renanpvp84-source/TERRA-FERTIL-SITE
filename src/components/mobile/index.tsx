/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Ref } from "react";
import type { Vals } from "@/lib/types";
import MobileHeader from "./MobileHeader";
import MobileBenefits from "./MobileBenefits";
import MobileHero from "./MobileHero";
import MobileQuickAccess from "./MobileQuickAccess";
import MobileOffers from "./MobileOffers";
import MobileCategories from "./MobileCategories";
import MobileBestSellers from "./MobileBestSellers";
import MobileGrooming from "./MobileGrooming";
import MobileVet from "./MobileVet";
import MobileStores from "./MobileStores";
import MobileInstagram from "./MobileInstagram";
import MobileFooter from "./MobileFooter";
import MobileNavigation from "./MobileNavigation";

export default function HomeMobileMarkup({ v, rootRef }: { v: Vals; rootRef?: Ref<HTMLDivElement> }) {
  return (
    <div className="tfm" style={{ display: "flex", flexDirection: "column" }} ref={rootRef}>
      <MobileHeader v={v} />
      <MobileBenefits v={v} />
      <MobileHero v={v} />
      <MobileQuickAccess v={v} />
      <MobileOffers v={v} />
      <MobileCategories v={v} />
      <MobileBestSellers v={v} />
      <MobileGrooming v={v} />
      <MobileVet v={v} />
      <MobileStores v={v} />
      <MobileInstagram v={v} />
      <MobileFooter v={v} />
      <MobileNavigation v={v} />
    </div>
  );
}
