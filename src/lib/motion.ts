"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Linguagem de movimento do site (GSAP + ScrollTrigger).
 *
 * Marcação usada nos componentes:
 *   data-rv            entra com fade + leve subida quando chega na tela
 *   data-rv="img"      imagem revelada por máscara, com zoom que assenta
 *   data-delay="80ms"  atraso da entrada (stagger)
 *   data-px="0.05"     parallax vertical discreto (o número é a intensidade)
 *   data-pxx="-0.045"  deslocamento horizontal discreto ligado ao scroll
 *
 * O estado inicial (invisível) vem do CSS e só vale quando <html> tem a
 * classe "mo", colocada por um script no <head> quando o visitante não pediu
 * redução de movimento. Sem a classe, tudo aparece estático.
 */

const EASE = "expo.out";
let registered = false;

export function motionEnabled(): boolean {
  return typeof document !== "undefined" && document.documentElement.classList.contains("mo");
}

function delayOf(el: Element): number {
  const raw = (el as HTMLElement).dataset.delay;
  if (!raw) return 0;
  const n = parseFloat(raw);
  if (!Number.isFinite(n)) return 0;
  return raw.trim().endsWith("ms") ? n / 1000 : n;
}

export type MotionHandle = {
  /** Registra elementos novos (ex.: depois de filtrar uma vitrine). */
  observe: () => void;
  kill: () => void;
};

export function initMotion(root: HTMLElement, opts: { shrinkHeader?: boolean } = {}): MotionHandle {
  const triggers: ScrollTrigger[] = [];
  const tweens: gsap.core.Tween[] = [];
  let onScroll: (() => void) | null = null;

  // Header que encolhe: funciona mesmo com movimento reduzido (só troca a classe).
  if (opts.shrinkHeader) {
    onScroll = () => root.classList.toggle("tf-sc", window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (!motionEnabled()) {
    return {
      observe: () => {},
      kill: () => {
        if (onScroll) window.removeEventListener("scroll", onScroll);
      },
    };
  }

  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }
  (window as unknown as { __tfMotion?: boolean }).__tfMotion = true;

  const reveal = (el: HTMLElement) => {
    el.setAttribute("data-in", "");
    const delay = delayOf(el);
    if (el.dataset.rv === "img") {
      const img = el.querySelector("img");
      tweens.push(
        gsap.fromTo(
          el,
          { clipPath: "inset(0% 0% 100% 0% round 22px)" },
          { clipPath: "inset(0% 0% 0% 0% round 22px)", duration: 1.15, ease: EASE, delay, clearProps: "clipPath" },
        ),
      );
      if (img) {
        tweens.push(
          gsap.fromTo(img, { scale: 1.16 }, { scale: 1, duration: 1.5, ease: EASE, delay, clearProps: "transform" }),
        );
      }
    } else {
      tweens.push(
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: EASE, delay, clearProps: "opacity,transform" },
        ),
      );
    }
  };

  const observe = () => {
    root.querySelectorAll<HTMLElement>("[data-rv]:not([data-w])").forEach((el) => {
      el.setAttribute("data-w", "");
      triggers.push(
        ScrollTrigger.create({
          trigger: el,
          start: "top 92%",
          once: true,
          onEnter: () => reveal(el),
        }),
      );
    });
  };

  // Parallax vertical: desloca no máximo ~46px ao longo da passagem pela tela.
  root.querySelectorAll<HTMLElement>("[data-px]").forEach((el) => {
    const factor = parseFloat(el.dataset.px || "0") || 0;
    const range = () => Math.max(-46, Math.min(46, ((window.innerHeight + el.offsetHeight) / 2) * factor));
    const tween = gsap.fromTo(
      el,
      { y: () => range() },
      {
        y: () => -range(),
        ease: "none",
        scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6, invalidateOnRefresh: true },
      },
    );
    tweens.push(tween);
  });

  // Movimento horizontal da faixa de categorias.
  root.querySelectorAll<HTMLElement>("[data-pxx]").forEach((el) => {
    const factor = parseFloat(el.dataset.pxx || "0") || 0;
    const range = Math.max(-90, Math.min(90, factor * 1200));
    const tween = gsap.fromTo(
      el,
      { x: -range },
      { x: range, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 } },
    );
    tweens.push(tween);
  });

  observe();

  return {
    observe,
    kill: () => {
      if (onScroll) window.removeEventListener("scroll", onScroll);
      triggers.forEach((t) => t.kill());
      tweens.forEach((t) => {
        if (t.scrollTrigger) {
          // parallax: solta o elemento na posição natural
          const targets = t.targets();
          t.scrollTrigger.kill();
          t.kill();
          gsap.set(targets, { clearProps: "transform" });
        } else {
          // entrada em andamento: termina na hora, para nada ficar pela metade
          t.progress(1);
          t.kill();
        }
      });
      root.querySelectorAll("[data-w]").forEach((el) => el.removeAttribute("data-w"));
    },
  };
}
