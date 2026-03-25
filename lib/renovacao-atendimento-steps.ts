/** Rotas e ordem do fluxo de atendimento — alinhado ao Figma (6 etapas). */

export const RENOVACAO_STEP_LABELS = [
  "DAMSP",
  "Identificação do Condutor",
  "Dados Cadastrais",
  "CNH",
  "Distr. Ações Criminais",
  "Conclusão",
] as const;

export type RenovacaoStepSlug =
  | ""
  | "dados-condutor"
  | "dados-cadastrais"
  | "cnh"
  | "distribuicao-acoes"
  | "conclusao";

export function atendimentoBase(protocolo: string) {
  return `/inicio/renovacao/atendimento/${protocolo}`;
}

export function stepPath(protocolo: string, slug: RenovacaoStepSlug) {
  const base = atendimentoBase(protocolo);
  return slug ? `${base}/${slug}` : base;
}

export function stepIndexFromPathname(pathname: string): number {
  if (pathname.includes("/distribuicao-acoes")) return 5;
  if (pathname.includes("/conclusao")) return 6;
  if (pathname.includes("/cnh")) return 4;
  if (pathname.includes("/dados-cadastrais")) return 3;
  if (pathname.includes("/dados-condutor")) return 2;
  if (/\/inicio\/renovacao\/atendimento\/[^/]+$/.test(pathname)) return 1;
  return 1;
}
