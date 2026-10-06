/**
 * Configuração central do site.
 * Tudo o que o proprietário precisa editar (contatos, redes, textos de apoio)
 * fica aqui. Valores entre colchetes são campos que ainda precisam ser
 * preenchidos com o dado real da loja.
 */
export const siteConfig = {
  brand: "Terra Fértil Pet Shop",
  legalName: "Terra Fértil — Produtos Agropecuários e Pet Shop",
  description: "Pet shop, produtos veterinários, banho & tosa e consultório veterinário em Boa Vista, Roraima.",
  city: "Boa Vista",
  state: "RR",

  /** Endereço final do site (usado no sitemap e nas meta tags). */
  url: "https://terrafertil.vercel.app",

  /**
   * Enquanto houver preços e dados a confirmar, o site pede aos buscadores
   * para não indexar. Mude para true quando o conteúdo estiver validado.
   */
  allowIndexing: false,

  // Contatos — confirmar com a loja antes de divulgar
  whatsappNumber: "5595991105815",
  whatsappDisplay: "(95) 99110-5815",
  phoneDisplay: "(95) 3626-3445",
  phoneHref: "tel:+559536263445",
  emailDisplay: "[a configurar]",
  hoursDisplay: "[a confirmar]",
  cnpjDisplay: "[a informar]",
  paymentDisplay: "[Formas de pagamento a configurar]",

  // Redes sociais
  instagramHandle: "@terrafertil.loja",
  instagramUrl: "https://www.instagram.com/terrafertil.loja/",
  facebookUrl: "#topo", // [link a configurar]
  tiktokUrl: "#topo", // [link a configurar]

  // Textos de apoio
  utilityLine: "Boa Vista · RR — 3 lojas: Asa Branca, Sílvio Botelho e Buritis",
  groomingLine: "Unidade Buritis · segunda a sábado, das 8h às 19h · (95) 3625-8184",
  vetHoursLine: "Horários do consultório: [confirmar com a loja]",

  // Página de produto
  installmentNote: "[Parcelamento e desconto no Pix a configurar]",
  stockNote: "Confirme a disponibilidade com a loja pelo WhatsApp.",
  deliveryNote: "Delivery em Boa Vista pelo WhatsApp. [Prazos e taxas a configurar]",
  exchangeNote: "[Política de trocas a definir]",
  productDescriptionNote: "Mais detalhes do fabricante: consulte a embalagem ou fale com a equipe.",

  // Carrinho — meta de exemplo, valor e benefício ainda a definir
  cartGoal: 300,
  cartGoalNote: "Meta de exemplo: R$ 300,00 [valor e benefício configuráveis]",

  whatsappGreeting: "Olá! Vim pelo site da Terra Fértil e gostaria de informações.",
  whatsappShortcuts: [
    { label: "Comprar produto", message: "Olá! Vim pelo site da Terra Fértil e gostaria de comprar um produto." },
    { label: "Consultar preço", message: "Olá! Vim pelo site da Terra Fértil e gostaria de consultar um preço." },
    { label: "Agendar banho", message: "Olá! Vim pelo site da Terra Fértil e gostaria de agendar banho e tosa." },
    {
      label: "Agendar veterinário",
      message: "Olá! Vim pelo site da Terra Fértil e gostaria de agendar um atendimento veterinário.",
    },
    {
      label: "Ver disponibilidade",
      message: "Olá! Vim pelo site da Terra Fértil e gostaria de ver a disponibilidade de um produto.",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
