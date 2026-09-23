import type { APIRoute } from 'astro';

/**
 * Gerado a partir do `site` do astro.config, para o endereço do sitemap
 * acompanhar uma troca de domínio.
 *
 * Libera todo rastreador, inclusive os de IA (GPTBot, ClaudeBot,
 * PerplexityBot, Google-Extended...), de propósito: quem procura um site para
 * o próprio negócio muitas vezes pergunta para uma IA antes de buscar no
 * Google, e bloquear esses rastreadores tiraria o site dessas respostas.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
