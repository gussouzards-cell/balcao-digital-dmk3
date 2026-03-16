"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginBranding } from "@/components/login/LoginBranding";
import { LoginLogo } from "@/components/login/LoginLogo";
import { FormField } from "@/components/ui/FormField";
import {
  LoginRoot,
  LoginRightPanel,
  LoginFormBox,
  LoginTitle,
  LoginSubtitle,
  LoginForm,
  LoginRow,
  LoginToggle,
  LoginToggleThumb,
  LoginSubmit,
  LoginFooter,
  LoginLink,
} from "@/components/styled/Login.styles";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/inicio");
  };

  return (
    <LoginRoot>
      <LoginBranding />
      <LoginRightPanel>
        <LoginFormBox>
          <LoginLogo />
          <LoginTitle>Seja bem-vindo</LoginTitle>
          <LoginSubtitle>Insira seu email e senha para acessar sua conta.</LoginSubtitle>

          <LoginForm onSubmit={handleSubmit}>
            <FormField
              label="Email"
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu email..."
            />
            <FormField
              label="Senha"
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Sua senha..."
            />
            <LoginRow>
              <span className="text-sm text-slate-700">Lembrar do meu acesso</span>
              <LoginToggle
                type="button"
                role="switch"
                aria-checked={remember}
                $active={remember}
                onClick={() => setRemember(!remember)}
                title={remember ? "Desmarcar" : "Lembrar acesso"}
              >
                <LoginToggleThumb $active={remember} />
              </LoginToggle>
            </LoginRow>
            <LoginSubmit type="submit">Fazer login</LoginSubmit>
          </LoginForm>

          <LoginFooter>
            Esqueceu sua senha? <LoginLink href="#">Clique aqui.</LoginLink>
          </LoginFooter>
        </LoginFormBox>
      </LoginRightPanel>
    </LoginRoot>
  );
}
