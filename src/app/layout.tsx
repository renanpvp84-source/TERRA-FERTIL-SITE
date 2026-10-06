import type { Metadata, Viewport } from "next";
import "@fontsource/aleo/700.css";
import "@fontsource-variable/figtree";
import "lenis/dist/lenis.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} — Rações, Banho & Tosa e Veterinário em Boa Vista`,
    template: `%s · ${siteConfig.brand}`,
  },
  description: siteConfig.description,
  keywords: [
    "Terra Fértil Pet Shop",
    "pet shop Boa Vista",
    "rações",
    "banho e tosa",
    "veterinário",
    "medicamentos para pets",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.brand,
    title: `${siteConfig.brand} — tudo para o seu pet em um só lugar`,
    description: siteConfig.description,
    images: [{ url: "/images/ph-loja-ampla.jpg", width: 566, height: 658, alt: "Interior da loja Terra Fértil" }],
  },
  robots: siteConfig.allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E0161C",
};

/**
 * Liga as animações antes da primeira pintura, para o conteúdo não piscar.
 * Se o visitante pediu redução de movimento, nada é ligado. Se o JavaScript
 * das animações não carregar em 4s, o conteúdo volta a aparecer estático.
 */
const motionBoot = `(function(){try{var d=document.documentElement;if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('mo');setTimeout(function(){if(!window.__tfMotion)d.classList.remove('mo')},4000)}}catch(e){}})()`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
