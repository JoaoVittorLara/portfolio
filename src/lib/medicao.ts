/*
  Formatação das medidas de cada projeto (peso, JS, tempo de carregamento),
  usada no build por `MedicaoProjeto.astro`. O script daquele componente tem
  uma cópia das duas funções para o navegador (ver o comentário lá).
*/

/**
 * 2,9 KB · 34,0 KB · 538,6 KB · 101 KB · ~700 KB
 * Abaixo de 100 mostra uma casa decimal, porque é onde a diferença importa.
 */
export function formatarKb(v: number | null, aproximado = false): string {
  if (v === null) return 'a medir';
  const casas = v < 100 ? 1 : 0;
  const n = v.toLocaleString('pt-BR', {
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
  });
  return `${aproximado ? '~' : ''}${n} KB`;
}

/** 1,0 s · 4,7 s */
export function formatarSegundos(v: number | null): string {
  if (v === null) return 'a medir';
  return `${v.toLocaleString('pt-BR', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  })} s`;
}
