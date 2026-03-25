import { stepPath, type RenovacaoStepSlug } from "./renovacao-atendimento-steps";

/**
 * URLs do fluxo Cadastramento Condutax (6 etapas, ordem fixa).
 */
export function cadastramentoAtendimentoUrls(protocolo: string) {
  const u = (slug: RenovacaoStepSlug) => stepPath(protocolo, slug);
  return {
    damsp: u(""),
    dadosCondutor: u("dados-condutor"),
    dadosCadastrais: u("dados-cadastrais"),
    cnh: u("cnh"),
    distribuicaoAcoes: u("distribuicao-acoes"),
    conclusao: u("conclusao"),
    filaCadastramento: "/inicio/cadastramento",
    inicio: "/inicio",
  } as const;
}

