"use client";

import styled from "styled-components";

export const PageInicio = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const SummaryCard = styled.div`
  padding: clamp(0.75rem, 3vw, 1rem);
  border: 1px solid ${(p) => p.theme.colors.neutral[200]};
  border-radius: ${(p) => p.theme.radius.xl};
  background: white;
  box-shadow: ${(p) => p.theme.shadow.sm};
  min-width: 0;
`;

export const SummaryCardLabel = styled.p`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.neutral[500]};
`;

export const SummaryCardHeader = styled.div`
  display: flex;
  margin-top: 0.5rem;
  align-items: center;
  justify-content: space-between;
`;

export const SummaryCardIcon = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  width: 2.5rem;
  border-radius: ${(p) => p.theme.radius.md};
  background: ${(p) => p.theme.colors.primary};
  color: white;
`;

export const SummaryCardTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.primary};
`;

export const SummaryCardBadge = styled.span`
  padding: 0.25rem 0.625rem;
  border: 1px solid ${(p) => p.theme.colors.warning};
  border-radius: ${(p) => p.theme.radius.sm};
  background: ${(p) => p.theme.colors.warningBg};
  font-size: 0.75rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.warningText};
`;

export const SummaryCardTotal = styled.p`
  margin-top: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.neutral[800]};
`;

export const SummaryBar = styled.div`
  display: flex;
  margin-top: 0.5rem;
  height: 0.75rem;
  width: 100%;
  overflow: hidden;
  border-radius: ${(p) => p.theme.radius.sm};
`;

export const SummaryBarSegment = styled.div<{ $width: number; $color: string }>`
  width: ${(p) => p.$width}%;
  background: ${(p) => p.$color};
`;

export const SummaryLegend = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  gap: 0.5rem 1rem;
  font-size: 0.75rem;
  color: ${(p) => p.theme.colors.neutral[600]};
`;

export const SolicitacaoCard = styled.div<{ $variant?: "neutral" | "warning" }>`
  padding: clamp(0.75rem, 3vw, 1rem);
  border: 1px solid ${(p) => p.theme.colors.neutral[200]};
  border-radius: ${(p) => p.theme.radius["2xl"]};
  background: ${(p) =>
    p.$variant === "warning" ? p.theme.colors.warningBg : p.theme.colors.neutral[100]};
  box-shadow: ${(p) => p.theme.shadow.sm};
  min-width: 0;
`;

export const PageTitle = styled.h1`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.neutral[900]};
`;

export const SectionTitle = styled.h2`
  margin-bottom: 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.neutral[800]};
`;

export const Grid2 = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BtnPrimary = styled.a`
  display: flex;
  margin-top: 1.25rem;
  width: 100%;
  min-height: 44px;
  align-items: center;
  justify-content: center;
  padding: 0.625rem 1rem;
  border-radius: ${(p) => p.theme.radius.lg};
  background: ${(p) => p.theme.colors.primary};
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s;

  &:hover {
    background: ${(p) => p.theme.colors.primaryHover};
  }
`;
