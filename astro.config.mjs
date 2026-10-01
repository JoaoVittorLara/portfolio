// @ts-check
import { defineConfig, envField, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/consts.ts';

/*
  Cada projeto já teve página própria (/projetos/<id>/). Hoje os três são cards
  de /projetos/, e cada URL antiga redireciona para a âncora do card.

  A lista é escrita à mão de propósito: são as URLs que existiram, não a lista
  de projetos. Projeto novo não ganha redirecionamento, porque nunca teve
  página própria.
*/
const URLS_ANTIGAS = [
  'barbearia-elliot',
  'moveprime',
  'aurora-arquitetura',
];

// https://astro.build/config
export default defineConfig({
  // Uma fonte só para a URL (src/consts.ts): canônico, Open Graph, sitemap e
  // robots.txt saem daqui.
  site: SITE.url,

  // Variáveis de ambiente tipadas (astro:env). O valor fica no .env, fora do
  // Git, e nas variáveis de ambiente do projeto na Vercel. Se faltar, o build
  // para com erro em vez de publicar o formulário sem chave.
  env: {
    schema: {
      // Pública de propósito: a chave do Web3Forms vai para o HTML do
      // formulário. Ficar fora do código é organização, não segurança: quem
      // copiar a chave só consegue enviar e-mails ao dono dela.
      PUBLIC_WEB3FORMS_KEY: envField.string({ context: 'client', access: 'public' }),
    },
  },

  // Em site estático isto vira uma página de redirecionamento em HTML para
  // cada URL (`build.redirects`, ligado por padrão).
  redirects: Object.fromEntries(
    URLS_ANTIGAS.map((id) => [`/projetos/${id}/`, `/projetos/#${id}`]),
  ),

  integrations: [
    // URL que só existe para redirecionar não entra no sitemap: buscador que
    // segue o sitemap deve chegar direto em `/projetos/`.
    sitemap({
      filter: (pagina) =>
        !URLS_ANTIGAS.some((id) => pagina.endsWith(`/projetos/${id}/`)),
    }),
  ],

  // API nativa de fontes do Astro: baixa no build e serve do próprio domínio
  // (nenhuma requisição ao Google Fonts), com preload via <Font />,
  // font-display: swap e fallback com métrica ajustada, que evita layout shift
  // enquanto a fonte carrega.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Atkinson Hyperlegible Next',
      cssVariable: '--font-text',
      // Fonte variável: só a faixa usada (400 corpo, 700 títulos, 800 h1).
      weights: ['400 800'],
      styles: ['normal'],
      // O subset latin já cobre o português (á ã ç é ó ú).
      subsets: ['latin'],
      fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
    },
  ],
});
