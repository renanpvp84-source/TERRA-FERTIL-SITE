"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motionEnabled } from "@/lib/motion";

/**
 * Scroll suave (Lenis) sincronizado com o GSAP ScrollTrigger.
 * Um único laço de animação: o Lenis roda dentro do ticker do GSAP,
 * então não há dois requestAnimationFrame competindo.
 * Com "reduzir movimento" ativo, o scroll continua nativo.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (!motionEnabled()) return;

    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ autoRaf: false, lerp: 0.11 });
    (window as unknown as { __lenis?: Lenis; __tfMotion?: boolean }).__lenis = lenis;
    (window as unknown as { __tfMotion?: boolean }).__tfMotion = true;

    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Links para âncoras da própria página rolam com o Lenis, parando abaixo do header fixo.
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const link = (event.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link || link.target === "_blank") return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;
      event.preventDefault();
      // o Lenis já respeita o scroll-margin-top definido no CSS
      lenis.scrollTo(target, { duration: 1.1 });
      window.history.replaceState(null, "", url.hash);
    };
    document.addEventListener("click", onClick);

    // Imagens e fontes mudam a altura da página: recalcula os gatilhos depois de carregar.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, []);

  return null;
}
