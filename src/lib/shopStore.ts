"use client";

/**
 * Carrinho e favoritos compartilhados entre as páginas.
 * Guardados no navegador (localStorage) até existir backend/conta.
 * Preparado para ser trocado por Supabase: basta manter a mesma interface.
 */
export type ShopState = {
  cart: Record<string, number>;
  favorites: Record<string, true>;
};

const KEY = "terra-fertil-shop-v1";
const EMPTY: ShopState = { cart: {}, favorites: {} };

let state: ShopState = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function persist() {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* navegação privada ou armazenamento bloqueado: segue só em memória */
  }
}

function emit() {
  listeners.forEach((fn) => fn());
}

function set(next: ShopState) {
  state = next;
  persist();
  emit();
}

export const shopStore = {
  /** Estado no servidor e no primeiro render: sempre vazio (evita divergência de hidratação). */
  getServerSnapshot: (): ShopState => EMPTY,
  getSnapshot: (): ShopState => state,

  /** Lê o que estava salvo. Chamar depois de montar no navegador. */
  load() {
    if (loaded || typeof window === "undefined") return;
    loaded = true;
    try {
      const raw = window.localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        state = { cart: parsed.cart || {}, favorites: parsed.favorites || {} };
        emit();
      }
    } catch {
      /* dado inválido: começa vazio */
    }
  },

  subscribe(fn: () => void) {
    listeners.add(fn);
    return () => {
      listeners.delete(fn);
    };
  },

  add(id: string, quantity = 1) {
    set({ ...state, cart: { ...state.cart, [id]: (state.cart[id] || 0) + quantity } });
  },

  setQuantity(id: string, quantity: number) {
    const cart = { ...state.cart };
    if (quantity <= 0) delete cart[id];
    else cart[id] = quantity;
    set({ ...state, cart });
  },

  clearCart() {
    set({ ...state, cart: {} });
  },

  toggleFavorite(id: string) {
    const favorites = { ...state.favorites };
    if (favorites[id]) delete favorites[id];
    else favorites[id] = true;
    set({ ...state, favorites });
  },
};
