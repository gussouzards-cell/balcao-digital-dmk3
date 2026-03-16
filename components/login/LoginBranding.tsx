"use client";

import {
  LoginLeftPanel,
  LoginLeftBgImage,
  LoginLeftOverlay,
  LoginLeftContent,
} from "@/components/styled/Login.styles";

const BRANDING_IMAGE =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200";

export function LoginBranding() {
  return (
    <LoginLeftPanel>
      <LoginLeftBgImage $imageUrl={BRANDING_IMAGE} />
      <LoginLeftOverlay />
      <LoginLeftContent>
        <div>
          <div
            style={{
              marginBottom: "0.5rem",
              height: "3.5rem",
              width: "3.5rem",
              borderRadius: "0.5rem",
              background: "rgba(255,255,255,0.2)",
            }}
            aria-hidden
          />
          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              fontWeight: 600,
              letterSpacing: "0.025em",
            }}
          >
            CIDADE DE SÃO PAULO
          </p>
        </div>
        <div>
          <p style={{ fontSize: "clamp(0.9375rem, 2vw, 1.125rem)", fontWeight: 500 }}>
            Departamento de Transportes Públicos (DTP)
          </p>
          <p style={{ marginTop: "0.25rem", fontSize: "0.875rem", opacity: 0.9 }}>
            Rua Joaquim Carlos, nº 655, Pari - São Paulo
          </p>
        </div>
      </LoginLeftContent>
    </LoginLeftPanel>
  );
}
