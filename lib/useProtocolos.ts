import { api } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export type CnhCategoryType = "A" | "B" | "C" | "D" | "E";

export type StatusCitizen =
  | "obito"
  | "cassado"
  | "bloqueado"
  | "ativo"
  | "cancelado";

interface Address {
  id: string;
  municipeId: string;
  credentialId?: string | null;
  cep: string;
  logradouro: string;
  numero?: string | null;
  complemento?: string | null;
  bairro: string;
  cidade: string;
  estado: string;
}

interface Telephone {
  id: string;
  municipeId: string;
  numeroTelefone: string;
  ramal?: string | null;
}

export interface Citizen {
  id: string;
  nome: string;
  cpf: string;
  email: string;
  cnhNumero: string;
  cnhCategoria01: CnhCategoryType;
  cnhCategoria02?: CnhCategoryType | null;
  cnhDataEmissao: Date;
  cnhDataValidade: Date;
  cnhDataPrimeiraHabilitacao: Date;
  possuiDeficiencia: boolean;
  tipoDeficiencia?: string | null;
  status?: StatusCitizen | null;
  enderecos?: Address[];
  telefones?: Telephone[];
}

export interface ProtocolFromAPI {
  id: string;
  numeroProtocolo: string;
  municipe_id: string;
  solicitante_id: string;
  atendente_id: string;
  data_solicitacao: string;
  data_finalizacao?: string;
  status: "aguardando" | "pendente" | "concluido";
  servico: string;
  createdAt: string;
  updated_at: string;
  deleted_at: string | null;
  municipe: Citizen;
  solicitante: Citizen;
  telefones: Telephone[];
  protocoloDados: ProtocolData[];
  enderecos: Address[];
  atendente?: {
    id: string;
    nome: string;
  };
}

export interface Protocol {
  id: string;
  protocolo: string;
  titulo: string;
  tempo: string;
  status: "nova" | "finalizada" | "emEspera";
  responsavel: string;
  tipo: "Cadastro" | "Renovação";
  createdAt: string;
  protocoloDados: ProtocolData[];
  municipe: Citizen;
}

function mapServiceToType(service: string): "Cadastro" | "Renovação" {
  const serviceUpper = service.toUpperCase();
  const registrationKeywords = ["CADASTRO", "REGISTRO"];
  const renewalKeywords = ["RENOVACAO", "RENOVAÇÃO", "RENOVAR"];

  if (registrationKeywords.some((k) => serviceUpper.includes(k))) {
    return "Cadastro";
  }
  if (renewalKeywords.some((k) => serviceUpper.includes(k))) {
    return "Renovação";
  }
  return "Cadastro";
}

function mapServiceToTitle(service: string): string {
  const mapping: { [key: string]: string } = {
    cadastro_condutax: "Cadastro de Condutor",
    renovacao_condutax: "Renovação de Condutor",
    renovacao_alvara: "Renovação de Alvará",
  };
  return mapping[service] || service.replace(/_/g, " ");
}

function mapStatus(apiStatus: string): "nova" | "finalizada" | "emEspera" {
  switch (apiStatus) {
    case "pendente":
    case "aguardando":
      return apiStatus === "aguardando" ? "nova" : "emEspera";
    case "concluido":
      return "finalizada";
    default:
      return "nova";
  }
}

function calculateElapsedTime(createdAt: string): string {
  const now = new Date();
  const createdDate = new Date(createdAt);
  const differenceMs = now.getTime() - createdDate.getTime();

  const minutes = Math.floor(differenceMs / (1000 * 60));
  const hours = Math.floor(differenceMs / (1000 * 60 * 60));
  const days = Math.floor(differenceMs / (1000 * 60 * 60 * 24));

  if (minutes < 1) return "agora";
  if (minutes < 60) return `${minutes}m`;
  if (hours < 24) return `${hours}h`;
  return `${days}d`;
}

function transformProtocolFromAPI(protocol: ProtocolFromAPI): Protocol {
  return {
    id: protocol.id,
    protocolo: protocol.numeroProtocolo,
    titulo: mapServiceToTitle(protocol.servico),
    status: mapStatus(protocol.status),
    responsavel: protocol.atendente?.nome || "",
    tipo: mapServiceToType(protocol.servico),
    createdAt: protocol.createdAt,
    tempo: calculateElapsedTime(protocol.createdAt),
    protocoloDados: protocol.protocoloDados,
    municipe: protocol.municipe,
  };
}

export enum DocumentType {
  DAMSP = "damsp",
  CERTIDAO_OBJETO_PE = "certidao_objeto_pe",
  DISTRIBUICAO_CRIMINAL = "distribuicao_criminal",
  DISTRIBUICAO_ACAO_CRIMINAL = "distribuicao_acao_criminal",
  FOTO = "foto",
  CNH = "cnh",
  HOMONIMO = "homonimo",
}

export enum DocumentStatus {
  EM_ANALISE = "em_analise",
  PENDENTE = "pendente",
  CONCLUIDO = "concluido",
}

export interface ProtocolData {
  id: string;
  protocoloId: string;
  municipeId: string;
  solicitanteId?: string | null;
  atendenteId?: string | null;

  documentos?: ProtocolDocument[];

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export interface ProtocolDocument {
  id: string;
  protocoloDadosId: string;
  municipeId: string;
  solicitanteId?: string | null;

  chave: string;
  tipo: DocumentType;
  status: DocumentStatus;

  protocoloDados?: ProtocolData;

  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export interface ProtocolsResponse {
  itens: Protocol[];
  totalItens: number;
  paginas: number;
}

export interface ProtocolsResponseAPI {
  itens: ProtocolFromAPI[];
  totalItens: number;
  paginas: number;
}

export interface ProtocolsSummary {
  total: number;
  novas: number;
  finalizadas: number;
  emEspera: number;
  protocolos: Protocol[];
}

export function useProtocols() {
  const { data, isLoading, error } = useQuery<ProtocolsResponse>({
    queryKey: ["protocolos"],
    queryFn: async () => {
      const response = await api.get<ProtocolsResponseAPI>("/protocolos");

      const transformedProtocols = response.data.itens.map(
        transformProtocolFromAPI,
      );

      return {
        itens: transformedProtocols,
        totalItens: response.data.totalItens,
        paginas: response.data.paginas,
      };
    },
  });

  const summary: ProtocolsSummary = {
    total: data?.totalItens ?? 0,
    novas: data?.itens?.filter((p) => p.status === "nova").length ?? 0,
    finalizadas: data?.itens?.filter((p) => p.status === "finalizada").length ?? 0,
    emEspera: data?.itens?.filter((p) => p.status === "emEspera").length ?? 0,
    protocolos: data?.itens ?? [],
  };

  return {
    summary,
    protocolos: data?.itens ?? [],
    isLoading,
    error,
  };
}

export function useProtocol(numeroProtocolo: string) {
  const { data, isLoading, error, refetch } = useQuery<Protocol>({
    queryKey: ["protocolo", numeroProtocolo],
    queryFn: async () => {
      const response = await api.get<ProtocolFromAPI>(
        `/protocolos/${numeroProtocolo}`,
      );
      return transformProtocolFromAPI(response.data);
    },
    enabled: !!numeroProtocolo,
  });

  return {
    protocol: data,
    isLoading,
    error,
    refetch,
  };
}

