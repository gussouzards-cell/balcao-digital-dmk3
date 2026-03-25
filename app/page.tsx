"use client";

import { DM_Sans } from "next/font/google";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./styles/login.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-dm-sans",
});

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();
    const isAdmin = normalizedEmail === "admin@dtp.com" && password === "admin";
    router.push(isAdmin ? "/inicio?perfil=admin" : "/inicio?perfil=user");
  };

  return (
    <div className={`login-page flex min-h-screen flex-col bg-white lg:flex-row ${dmSans.variable}`}>
      {/* Coluna esquerda — imagem + overlay + logo Prefeitura + rodapé (Figma) */}
      <div className="relative hidden min-h-screen overflow-hidden lg:block lg:w-[58.125%]">
        <img
          src="/img/login-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[var(--login-overlay)]" aria-hidden />
        <div className="relative z-10 flex h-full min-h-screen flex-col justify-between px-12 pb-10 pt-10 text-white">
          <img
            src="/img/login-logo-sp.png"
            alt="Cidade de São Paulo"
            width={149}
            height={48}
            className="h-12 w-[149px] object-contain object-left"
          />
          <div className="space-y-1 text-base leading-normal">
            <p className="font-bold">Departamento de Transportes Públicos (DTP)</p>
            <p className="font-normal">Rua Joaquim Carlos, nº 655, Pari - São Paulo</p>
          </div>
        </div>
      </div>

      {/* Coluna direita — formulário (max 350px conteúdo) */}
      <div className="flex min-h-screen flex-1 items-center justify-center bg-white px-6 py-10 lg:w-[41.875%] lg:min-h-0 lg:px-8">
        <div className="w-full max-w-[350px]">
          <div className="mb-10 flex justify-center">
            <img
              src="/img/login-icon-servicos.png"
              alt="DTP Digital"
              width={152}
              height={152}
              className="h-[152px] w-[152px] object-contain"
            />
          </div>

          <div className="mb-8 text-center">
            <h1 className="text-[32px] font-bold leading-[1.3] text-[var(--login-primary)]">
              Seja bem-vindo
            </h1>
            <p className="mt-2 text-[14px] leading-[1.4] text-[var(--login-subtitle)]">
              Insira seu email e senha para acessar sua conta.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-left text-[14px] font-normal leading-[1.4] text-[var(--login-primary)]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu email..."
                className="h-[50px] w-full rounded-[6px] border border-[var(--login-border)] bg-white px-5 text-[14px] leading-[1.4] text-slate-900 placeholder:text-[var(--login-muted)] focus:border-[var(--login-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--login-primary)]"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-1.5 block text-left text-[14px] font-normal leading-[1.4] text-[var(--login-primary)]"
              >
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha..."
                className="h-[50px] w-full rounded-[6px] border border-[var(--login-border)] bg-white px-5 text-[14px] leading-[1.4] text-slate-900 placeholder:text-[var(--login-muted)] focus:border-[var(--login-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--login-primary)]"
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                role="switch"
                aria-checked={remember}
                onClick={() => setRemember(!remember)}
                className={`relative h-[18.5px] w-9 shrink-0 rounded-full transition-colors ${
                  remember ? "bg-[var(--login-primary)]" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-[2.5px] h-[13.5px] w-[13.5px] rounded-full bg-white shadow transition-transform ${
                    remember ? "left-[20px]" : "left-[2.5px]"
                  }`}
                />
              </button>
              <span className="text-[12px] font-normal leading-[1.5] text-[var(--login-remember)]">
                Lembrar do meu acesso
              </span>
            </div>

            <button
              type="submit"
              className={`${dmSans.className} h-[45px] w-full rounded-[6px] bg-[var(--login-primary)] text-[12px] uppercase leading-[1.5] text-white transition-colors hover:opacity-95`}
            >
              FAZER LOGIN
            </button>
          </form>

          <p className="mt-6 text-center text-[14px] leading-[1.4] text-[var(--login-muted)]">
            Esqueceu sua senha?{" "}
            <a href="#" className="font-bold text-[var(--login-primary)] hover:underline">
              Clique aqui.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
