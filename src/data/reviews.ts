/**
 * Avaliações de clientes.
 * A lista começa vazia de propósito: nenhum depoimento é inventado.
 * Quando houver avaliações reais (Google ou site), preencha aqui e ligue
 * o componente de "Quem conhece, confia." a esta lista.
 */
export type Review = { author: string; store: string; rating: number; text: string };

export const reviews: Review[] = [];
