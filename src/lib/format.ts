import { siteConfig } from "@/data/siteConfig";

/** R$ 1.234,56 */
export function money(value: number): string {
  return "R$ " + value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

/** Separa reais e centavos para o preço com centavos menores. */
export function priceParts(value: number): { int: string; cents: string } {
  const whole = Math.floor(value);
  const cents = Math.round((value - whole) * 100);
  return { int: whole.toLocaleString("pt-BR"), cents: String(cents).padStart(2, "0") };
}

/** Minúsculas e sem acentos, para a busca. */
export function normalize(text: string): string {
  return String(text || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "");
}

/** Link do WhatsApp da loja com mensagem pronta. */
export function whatsappLink(message: string = siteConfig.whatsappGreeting): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
