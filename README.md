# Terra Fértil Pet Shop — site

Site da Terra Fértil em Next.js (App Router) + TypeScript, com animações em GSAP + ScrollTrigger e scroll suave com Lenis.

## Rodar no computador

Precisa do Node.js 20 ou mais novo.

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na Vercel

**Pelo GitHub (recomendado)**

1. Crie um repositório no GitHub e envie esta pasta (sem `node_modules` e sem `.next`).
2. Em vercel.com, clique em **Add New › Project** e escolha o repositório.
3. A Vercel reconhece o Next.js sozinha. Não mude nada em Build Command nem Output Directory. Clique em **Deploy**.

**Pelo terminal**

```bash
npm i -g vercel
vercel          # cria o projeto e publica uma prévia
vercel --prod   # publica em produção
```

Não há variáveis de ambiente para configurar nesta versão.

## Onde editar

| O que | Arquivo |
| --- | --- |
| Telefones, WhatsApp, redes sociais, textos de apoio, endereço do site | `src/data/siteConfig.ts` |
| Produtos, preços e vitrines da home | `src/data/products.ts` |
| Lojas (endereço, telefone, horário) | `src/data/stores.ts` |
| Serviços de banho e tosa | `src/data/services.ts` |
| Fotos do Instagram na home | `src/data/instagram.ts` |
| Avaliações de clientes | `src/data/reviews.ts` |
| Imagens | `public/images` |

## Estrutura

```
src/
  app/          rotas: home, /produto/[slug], /conta, /checkout, sitemap, robots
  views/        lógica de cada tela (estado, carrinho, busca, agendamento)
  components/   seções visuais, uma por arquivo (Header, Hero, Offers, CartDrawer…)
  data/         conteúdo editável
  lib/          carrinho, formatação, animações
  styles/       CSS de cada tela
```

## Antes de divulgar o endereço

- **Preços**: vieram das artes publicadas no Instagram da loja e podem estar desatualizados.
- **Campos entre colchetes** (`[a configurar]`, `[a confirmar]`): horários, e-mail, CNPJ, formas de pagamento, política de trocas, prazos de entrega.
- **Buscadores**: o site pede para não ser indexado enquanto `allowIndexing` estiver `false` em `siteConfig.ts`. Troque para `true` e ajuste `url` quando o conteúdo estiver validado.
- **Fotos**: são recortes ampliados do feed. Substitua pelos arquivos originais em `public/images` (mesmo nome de arquivo) para ganhar nitidez.

## O que é demonstração

- **Carrinho e favoritos** ficam salvos só no navegador do visitante.
- **Checkout** percorre as etapas, mas não cobra nem registra pedido. Falta integrar o gateway de pagamento.
- **Minha conta** usa dados de exemplo (pets Thor e Mel, pedidos). Falta autenticação e banco de dados (Supabase).
- **Agendamentos** de banho, tosa e veterinário abrem o WhatsApp da loja com a mensagem pronta.
- **Vitrines** ("Mais vendidos", "Escolhas da Terra Fértil", "Hora de repor?") são seleções ilustrativas.
