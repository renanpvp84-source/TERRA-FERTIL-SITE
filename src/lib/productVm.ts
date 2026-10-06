import type { Product } from "@/data/products";
import type { ShopState } from "@/lib/shopStore";
import { shopStore } from "@/lib/shopStore";
import { money, priceParts, whatsappLink } from "@/lib/format";

const BADGE_TONES: Record<string, [string, string]> = {
  "Mais vendido": ["#14161C", "#ffffff"],
  Oferta: ["#E0161C", "#ffffff"],
  Novo: ["#1E3FA8", "#ffffff"],
  "Terra Fértil recomenda": ["#ffffff", "#B80F16"],
};

export type ProductVM = ReturnType<typeof productVM>;

/**
 * Transforma um produto do catálogo no que os cards precisam para desenhar:
 * preço formatado, estado de favorito, rótulos acessíveis e ações.
 */
export function productVM(
  product: Product,
  shop: ShopState,
  opts: { index?: number; columns?: number; onAdded?: (p: Product) => void } = {},
) {
  const hasPrice = product.price != null;
  const parts = hasPrice ? priceParts(product.price as number) : { int: "0", cents: "00" };
  const isFav = !!shop.favorites[product.id];
  const tone = BADGE_TONES[product.badge] || BADGE_TONES["Mais vendido"];
  const index = opts.index ?? 0;
  const columns = opts.columns ?? 5;

  return {
    id: product.id,
    href: `/produto/${product.id}`,
    brand: product.brand,
    name: product.name,
    size: product.size,
    img: product.img,
    alt: `${product.name}, ${product.size}`,
    badge: product.badge,
    hasBadge: !!product.badge,
    badgeBg: tone[0],
    badgeFg: tone[1],
    hasPrice,
    noPrice: !hasPrice,
    pInt: parts.int,
    pCents: parts.cents,
    priceFmt: hasPrice ? money(product.price as number) : "Consulte",
    isFav,
    favFill: isFav ? "#E0161C" : "none",
    favStroke: isFav ? "#E0161C" : "#14161C",
    favLabel: (isFav ? "Remover dos favoritos: " : "Favoritar: ") + product.name,
    addLabel: "Adicionar ao carrinho: " + product.name,
    delay: `${(index % columns) * 70}ms`,
    waHref: whatsappLink(
      `Olá! Vim pelo site da Terra Fértil e gostaria de consultar o preço de: ${product.name} (${product.size}).`,
    ),
    toggleFav: () => shopStore.toggleFavorite(product.id),
    add: () => {
      if (!hasPrice) return;
      shopStore.add(product.id);
      opts.onAdded?.(product);
    },
  };
}
