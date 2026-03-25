import { stepPath, type RenovacaoStepSlug } from "./renovacao-atendimento-steps";

/**
 * URLs do fluxo Renovação Condutax (6 etapas, ordem fixa).
 * DAMSP → Dados do Condutor → Dados Cadastrais → CNH → Distrib. ações → Conclusão
 */
export function renovacaoAtendimentoUrls(protocolo: string) {
  const u = (slug: RenovacaoStepSlug) => stepPath(protocolo, slug);
  return {
    damsp: u(""),
    dadosCondutor: u("dados-condutor"),
    dadosCadastrais: u("dados-cadastrais"),
    cnh: u("cnh"),
    distribuicaoAcoes: u("distribuicao-acoes"),
    conclusao: u("conclusao"),
    /** Fila de renovação (após concluir ou voltar do stepper na DAMSP) */
    filaRenovacao: "/inicio/renovacao",
    inicio: "/inicio",
  } as const;
}
