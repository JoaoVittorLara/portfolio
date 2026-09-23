/**
 * Fonte única para dado que aparece em mais de um lugar.
 * Trocar o domínio ou o e-mail é uma linha aqui, não uma busca pelo projeto.
 */

export const SITE = {
  url: 'https://joaovittorlara.vercel.app',
  lang: 'pt-BR',
  titulo: 'João Vittor Lara, sites para pequenos negócios',
  descricao:
    'Faço sites para pequenos negócios e profissionais autônomos: página de ' +
    'apresentação, agendamento online e contato pelo WhatsApp. De Curitiba, ' +
    'atendo online.',
} as const;

export const AUTOR = {
  nome: 'João Vittor Lara da Silveira',
  nomeCurto: 'João Vittor Lara',
  cidade: 'Curitiba',
  estado: 'PR',
  pais: 'BR',
  email: 'joao.laraa15@gmail.com',
  github: 'https://github.com/JoaoVittorLara',
  linkedin: 'https://www.linkedin.com/in/jo%C3%A3o-vittor-7b445631b/',
} as const;

/**
 * WhatsApp, o canal principal de contato. Número só com dígitos:
 * 55 + DDD + número. Com `numero: null`, os botões de WhatsApp somem do site
 * e o topo passa a oferecer "Falar comigo" (leva à seção de Contato).
 */
export const WHATSAPP = {
  numero: '554191727429' as string | null,
  mensagem:
    'Olá, João. Vi seu site e quero conversar sobre um site para o meu negócio.',
} as const;

/**
 * Faixa de tecnologias da home: só o que foi usado nos projetos ou neste site.
 * `logo` é o nome do arquivo em src/assets/logos, sem extensão.
 */
export const TECNOLOGIAS = [
  { nome: 'HTML', logo: 'html' },
  { nome: 'CSS', logo: 'css' },
  { nome: 'JavaScript', logo: 'javascript' },
  { nome: 'TypeScript', logo: 'typescript' },
  { nome: 'React', logo: 'react' },
  { nome: 'Vite', logo: 'vite' },
  { nome: 'Tailwind', logo: 'tailwind' },
  { nome: 'Astro', logo: 'astro' },
  { nome: 'Git', logo: 'git' },
  { nome: 'GitHub', logo: 'github' },
  { nome: 'Vercel', logo: 'vercel' },
] as const;

/**
 * Mais recente primeiro. `logo` é o nome do arquivo em src/assets/formacao,
 * sem extensão: trocar a logo é colocar um arquivo novo com o mesmo nome.
 */
export const FORMACAO = [
  {
    curso: 'Ciência da Computação',
    instituicao: 'Uninter',
    periodo: '2025 a 2028',
    status: 'cursando',
    logo: 'uninter',
  },
  {
    curso: 'Ensino Médio técnico em Desenvolvimento de Sistemas',
    instituicao: 'Colégio Estadual Cívico-Militar Papa João Paulo I',
    periodo: '2022 a 2024',
    status: 'concluído',
    logo: 'ccm-papa-joao-paulo',
  },
] as const;

/** Retenção declarada na página de privacidade. Um número, um lugar. */
export const RETENCAO_DIAS = 30;
