import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Um projeto = um arquivo .md em src/content/projetos.
 *
 * No Astro 7 o `z` vem de 'astro/zod' (Zod 4), e o loader `glob` de
 * 'astro/loaders'.
 */
const projetos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projetos' }),
  schema: z.object({
      titulo: z.string(),
      resumo: z.string(),

      // Todos os projetos são conceituais; o literal impede outro rótulo.
      tipo: z.literal('conceitual'),

      problema: z.string(),

      // O que o site faz, na língua de quem vai contratar.
      destaques: z.array(z.string()).min(1).max(3).optional(),

      stack: z.array(z.string()).min(1),
      demo: z.url(),
      repo: z.url(),

      // Medidos em Chromium headless com a mesma ferramenta nos três projetos.
      pesoKb: z.number().positive(),
      // Peso total aproximado (projeto com muitas requisições): mostra "~".
      pesoAproximado: z.boolean().optional(),
      jsKb: z.number().nonnegative(),
      loadS: z.number().positive(),

      // Medida refeita depois de uma otimização. Ainda não aparece no site.
      jsKbDepois: z.number().nonnegative().optional(),
      loadSDepois: z.number().positive().optional(),

      desafio: z.string(),

      // Opcional: a seção "O que aprendi" só aparece quando o campo existe.
      aprendizado: z.string().optional(),

      /*
        O screenshot não vem do frontmatter: os componentes acham o arquivo em
        src/assets/projetos/ pelo id do projeto (glob). Com `image()`, um
        arquivo ausente derrubaria o build inteiro; assim, o card mostra um
        aviso no lugar. O alt fica aqui porque é conteúdo.
      */
      screenshotAlt: z.string().optional(),

      periodo: z.string(),
      duracaoSemanas: z.number().positive().optional(),

      // getCollection() não garante ordem: a ordenação é sempre por este campo.
      ordem: z.number().int().positive(),
    }),
});

export const collections = { projetos };
