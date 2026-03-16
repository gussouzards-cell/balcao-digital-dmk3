export interface ReprovacaoConfig {
  etapaLabel: string;
  motivos: string[];
  subtitulo?: string;
  justificativaPlaceholder?: string;
}

const SUBTITULO_PADRAO =
  "Selecione um ou mais motivos para reprovar de solicitação de Renovação de CONDUTAX:";

const PLACEHOLDER_PADRAO =
  "Escreva aqui a justificativa para reprovação da solicitação...";

const REPROVACAO_POR_PASSO: Record<number, ReprovacaoConfig> = {
  1: {
    etapaLabel: "DAMSP",
    motivos: [
      "Comprovante de pagamento ilegível.",
      "Pagamento após vencimento da guia.",
      "Valor de pagamento incorreto.",
      "Guia de pagamento inválida.",
      "Informações ausentes.",
      "Código de autenticação inválido.",
      "Divergência entre DAMSP e comprovante.",
    ],
  },
  2: {
    etapaLabel: "Dados do Condutor",
    motivos: [
      "Nome completo divergente do documento.",
      "CPF inválido ou inconsistente.",
      "Documento de identidade ilegível.",
      "Dados de filiação inconsistentes.",
      "Data de nascimento divergente.",
      "Informações ausentes.",
      "Comprovante anexado inválido.",
    ],
  },
  3: {
    etapaLabel: "Dados Cadastrais",
    motivos: [
      "Comprovante de endereço ilegível.",
      "CEP inválido.",
      "Endereço divergente do comprovante.",
      "Telefone inválido ou incompleto.",
      "Informações ausentes.",
      "Comprovante fora da validade.",
      "Dados cadastrais inconsistentes.",
    ],
  },
  4: {
    etapaLabel: "CNH",
    motivos: [
      "CNH ilegível.",
      "Categoria da CNH incompatível.",
      "CNH vencida.",
      "Número do registro inválido.",
      "Informações ausentes.",
      "Dados da CNH divergentes.",
      "Comprovante anexado inválido.",
    ],
  },
  5: {
    etapaLabel: "Disrt. de Açoes Criminais",
    motivos: [
      "Documento de distribuição ilegível.",
      "Consulta com pendência impeditiva.",
      "Informações incompletas.",
      "Documento desatualizado.",
      "Informações ausentes.",
      "Divergência de dados do condutor.",
      "Comprovante anexado inválido.",
    ],
  },
  6: {
    etapaLabel: "Conclusão",
    motivos: [
      "Pendência em etapa anterior.",
      "Documentação final inconsistente.",
      "Informações ausentes.",
      "Dados divergentes no fechamento.",
      "Validação final não concluída.",
      "Revisão manual necessária.",
      "Solicitação fora do padrão exigido.",
    ],
  },
};

export function getReprovacaoConfigByStep(step: number): ReprovacaoConfig {
  const config = REPROVACAO_POR_PASSO[step] ?? {
    etapaLabel: "Solicitação",
    motivos: ["Informações ausentes.", "Dados inconsistentes."],
  };

  return {
    ...config,
    subtitulo: config.subtitulo ?? SUBTITULO_PADRAO,
    justificativaPlaceholder: config.justificativaPlaceholder ?? PLACEHOLDER_PADRAO,
  };
}
