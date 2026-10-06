/**
 * Unidades da Terra Fértil.
 * Endereços e telefones vêm das artes do Instagram da loja; horários e
 * WhatsApp por unidade ainda precisam de confirmação.
 */
export type Store = {
  id: string;
  tag: string;
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  hours: string;
  services: string[];
};

export const stores: Store[] = [
  {
    id: "asa-branca",
    tag: "Loja 1 · Matriz",
    name: "Asa Branca",
    address: "Av. General Ataíde Teive, 5337 — Asa Branca",
    phone: "(95) 3626-3445",
    phoneHref: "tel:+559536263445",
    whatsapp: "WhatsApp (95) 99141-3253",
    hours: "[Horário a confirmar]",
    services: ["Pet shop", "Rações", "Produtos veterinários"],
  },
  {
    id: "silvio-botelho",
    tag: "Loja 2",
    name: "Sílvio Botelho",
    address: "Rua Pedro Aldemar Bantim, 1715 — Sílvio Botelho",
    phone: "(95) 3628-1919",
    phoneHref: "tel:+559536281919",
    whatsapp: "WhatsApp [a confirmar]",
    hours: "[Horário a confirmar]",
    services: ["Pet shop", "Rações", "Produtos veterinários"],
  },
  {
    id: "buritis",
    tag: "Loja 3",
    name: "Buritis",
    address: "Av. Mário Homem de Melo, 3572 — Buritis",
    phone: "(95) 3625-8184",
    phoneHref: "tel:+559536258184",
    whatsapp: "WhatsApp (95) 99110-5815",
    hours: "Banho & Tosa: seg a sáb, 8h às 19h",
    services: ["Pet shop", "Rações", "Banho & Tosa"],
  },
];

export const mapsLink = (store: Store) =>
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(`Terra Fértil ${store.address.replace(" — ", ", ")}, Boa Vista - RR`);
