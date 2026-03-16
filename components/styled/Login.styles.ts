"use client";

import styled from "styled-components";

export const LoginRoot = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const LoginLeftPanel = styled.div`
  position: relative;
  display: none;
  width: 65%;
  min-height: 100vh;
  background: ${(p) => p.theme.colors.neutral[700]};

  @media (min-width: 1024px) {
    display: block;
  }
`;

export const LoginLeftBgImage = styled.div<{ $imageUrl: string }>`
  position: absolute;
  inset: 0;
  background-image: url(${(p) => p.$imageUrl});
  background-size: cover;
  background-position: center;
  opacity: 0.4;
`;

export const LoginLeftOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${(p) => p.theme.colors.primaryOverlay};
`;

export const LoginLeftContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  padding: 2.5rem;
  color: white;
`;

export const LoginRightPanel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: clamp(1rem, 4vw, 2rem);
  background: ${(p) => p.theme.colors.background};
  overflow-y: auto;

  @media (min-width: 1024px) {
    width: 35%;
  }
`;

export const LoginFormBox = styled.div`
  width: 100%;
  max-width: 24rem;
  padding: 0 0.25rem;
`;

export const LoginLogoWrap = styled.div`
  display: flex;
  margin-bottom: 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const LoginLogoCircle = styled.div`
  display: flex;
  height: 4rem;
  width: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background: ${(p) => p.theme.colors.primary};
  color: white;
  text-align: center;
`;

export const LoginLogoAccent = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 0.5rem;
  background: ${(p) => p.theme.colors.primaryMuted};
`;

export const LoginTitle = styled.h1`
  margin-bottom: 0.25rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.neutral[900]};
`;

export const LoginSubtitle = styled.p`
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: ${(p) => p.theme.colors.neutral[600]};
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`;

export const LoginLabel = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(p) => p.theme.colors.neutral[700]};
`;

export const LoginInput = styled.input`
  width: 100%;
  padding: 0.625rem 1rem;
  border: 1px solid ${(p) => p.theme.colors.neutral[300]};
  border-radius: ${(p) => p.theme.radius.lg};
  background: white;
  color: ${(p) => p.theme.colors.neutral[900]};
  font-size: 1rem;

  &::placeholder {
    color: ${(p) => p.theme.colors.neutral[400]};
  }

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.colors.primary};
    box-shadow: 0 0 0 1px ${(p) => p.theme.colors.primary};
  }
`;

export const LoginRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LoginToggle = styled.button<{ $active: boolean }>`
  position: relative;
  min-height: 44px;
  min-width: 44px;
  height: 1.5rem;
  width: 2.75rem;
  border: none;
  border-radius: 9999px;
  background: ${(p) =>
    p.$active ? p.theme.colors.primary : p.theme.colors.neutral[300]};
  cursor: pointer;
  transition: background 0.2s;

  @media (min-width: 768px) {
    min-height: 0;
    min-width: 0;
  }
`;

export const LoginToggleThumb = styled.span<{ $active: boolean }>`
  position: absolute;
  top: 0.25rem;
  left: ${(p) => (p.$active ? "1.5rem" : "0.25rem")};
  transform: ${(p) => (p.$active ? "translateX(-100%)" : "none")};
  height: 1rem;
  width: 1rem;
  border-radius: 9999px;
  background: white;
  box-shadow: ${(p) => p.theme.shadow.sm};
  transition: transform 0.2s;
`;

export const LoginSubmit = styled.button`
  width: 100%;
  min-height: 48px;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: ${(p) => p.theme.radius.lg};
  background: ${(p) => p.theme.colors.primary};
  color: white;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${(p) => p.theme.colors.primaryHover};
  }
`;

export const LoginFooter = styled.p`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  text-align: center;
  color: ${(p) => p.theme.colors.neutral[600]};
`;

export const LoginLink = styled.a`
  color: ${(p) => p.theme.colors.link};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
