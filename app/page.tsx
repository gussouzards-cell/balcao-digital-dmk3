"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div className="flex min-h-screen">
      {/* Coluna esquerda - Branding e imagem */}
      <div className="relative hidden w-[65%] min-h-screen bg-slate-700 lg:block">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200)",
          }}
        />
        <div className="absolute inset-0 bg-[#1e3a5f]/80" />
        <div className="relative z-10 flex h-full flex-col justify-between p-10 text-white">
          <div>
            <div className="mb-2 h-14 w-14 rounded bg-white/20" aria-hidden />
            <p className="text-xl font-semibold tracking-wide">CIDADE DE SÃO PAULO</p>
          </div>
          <div>
            <p className="text-lg font-medium">Departamento de Transportes Públicos (DTP)</p>
            <p className="mt-1 text-sm text-white/90">
              Rua Joaquim Carlos, nº 655, Pari - São Paulo
            </p>
          </div>
        </div>
      </div>

      {/* Coluna direita - Formulário de login */}
      <div className="flex w-full items-center justify-center bg-white p-8 lg:w-[35%]">
        <div className="w-full max-w-sm">
          {/* Logo DTP DIGITAL */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1e3a5f] text-white">
                <div className="text-center">
                  <span className="block text-xl font-bold leading-tight">DTP</span>
                  <span className="text-[10px] font-medium">DIGITAL</span>
                </div>
              </div>
              <div className="h-8 w-8 rounded bg-[#1e3a5f]/20" aria-hidden />
            </div>
          </div>

          <h1 className="mb-1 text-2xl font-bold text-slate-900">Seja bem-vindo</h1>
          <p className="mb-8 text-sm text-slate-600">
            Insira seu email e senha para acessar sua conta.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu email..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-[#1e3a5f] focus:outline-none focus:ring-1 focus:ring-[#1e3a5f]"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-slate-700">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Sua senha..."
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-[#1e3a5f] focus:outline-none focus:ring-1 focus:ring-[#1e3a5f]"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-700">Lembrar do meu acesso</span>
              <button
                type="button"
                role="switch"
                aria-checked={remember}
                onClick={() => setRemember(!remember)}
                className={`relative h-6 w-11 rounded-full transition-colors ${
                  remember ? "bg-[#1e3a5f]" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    remember ? "left-6 translate-x-[-100%]" : "left-1"
                  }`}
                />
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#1e3a5f] py-3 font-medium uppercase tracking-wide text-white transition-colors hover:bg-[#16304d]"
            >
              Fazer login
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Esqueceu sua senha?{" "}
            <a href="#" className="text-[#2563eb] hover:underline">
              Clique aqui.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
