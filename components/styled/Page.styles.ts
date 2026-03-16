"use client";

import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 0;
  min-width: 0;
`;

export const PageTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.neutral[900]};
`;

export const PageDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 1rem;
  color: ${(p) => p.theme.colors.neutral[600]};
`;
