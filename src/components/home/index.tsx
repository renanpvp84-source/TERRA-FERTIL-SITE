/* Gerado a partir do design aprovado no canvas. Pode ser editado normalmente. */
import type { Ref } from "react";
import type { Vals } from "@/lib/types";
import UtilityBar from "./UtilityBar";
import SearchScrim from "./SearchScrim";
import Header from "./Header";
import BenefitsBar from "./BenefitsBar";
import Hero from "./Hero";
import QuickAccess from "./QuickAccess";
import Offers from "./Offers";
import Categories from "./Categories";
import BestSellers from "./BestSellers";
import Grooming from "./Grooming";
import Picks from "./Picks";
import Vet from "./Vet";
import ReorderClub from "./ReorderClub";
import Stores from "./Stores";
import InstagramGrid from "./InstagramGrid";
import About from "./About";
import Reviews from "./Reviews";
import Footer from "./Footer";
import CartScrim from "./CartScrim";
import CartDrawer from "./CartDrawer";
import WhatsAppButton from "./WhatsAppButton";
import Toast from "./Toast";

export default function HomeDesktopMarkup({ v, rootRef }: { v: Vals; rootRef?: Ref<HTMLDivElement> }) {
  return (
    <div className="tfd" id="topo" ref={rootRef}>
      <UtilityBar v={v} />
      <SearchScrim v={v} />
      <Header v={v} />
      <BenefitsBar v={v} />
      <Hero v={v} />
      <QuickAccess v={v} />
      <Offers v={v} />
      <Categories v={v} />
      <BestSellers v={v} />
      <Grooming v={v} />
      <Picks v={v} />
      <Vet v={v} />
      <ReorderClub v={v} />
      <Stores v={v} />
      <InstagramGrid v={v} />
      <About v={v} />
      <Reviews v={v} />
      <Footer v={v} />
      <CartScrim v={v} />
      <CartDrawer v={v} />
      <WhatsAppButton v={v} />
      <Toast v={v} />
    </div>
  );
}
