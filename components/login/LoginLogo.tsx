"use client";

import {
  LoginLogoWrap,
  LoginLogoCircle,
  LoginLogoAccent,
} from "@/components/styled/Login.styles";

export function LoginLogo() {
  return (
    <LoginLogoWrap>
      <LoginLogoCircle>
        <div style={{ textAlign: "center" }}>
          <span
            style={{
              display: "block",
              fontSize: "clamp(1.125rem, 2vw, 1.25rem)",
              fontWeight: 700,
              lineHeight: 1.25,
            }}
          >
            DTP
          </span>
          <span style={{ fontSize: "10px", fontWeight: 500 }}>DIGITAL</span>
        </div>
      </LoginLogoCircle>
      <LoginLogoAccent aria-hidden />
    </LoginLogoWrap>
  );
}
