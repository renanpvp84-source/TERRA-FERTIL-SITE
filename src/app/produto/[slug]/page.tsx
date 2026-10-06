import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductView from "@/views/ProductView";
import { products, productById } from "@/data/products";

type Params = { params: Promise<{ slug: string }> };

/** Uma página estática por produto do catálogo. */
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = productById(slug);
  if (!product) return {};
  return {
    title: `${product.name} ${product.size}`,
    description: product.description,
    openGraph: { images: [{ url: product.img }] },
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  if (!productById(slug)) notFound();
  return <ProductView id={slug} />;
}
