"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const whatsapp =
  "https://wa.me/5541996129713?text=Olá! Quero contratar a internet da GuaraLink.";

const cliente =
  "https://wa.me/5541996129713?text=Olá! Preciso de suporte da GuaraLink.";

export default function Home() {
  return (
    <main className="bg-[#020817] text-white overflow-hidden">
      <style>{`
        @keyframes pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        .pulse {
          animation: pulse 2s infinite;
        }
      `}</style>

      {/* HEADER */}

      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#020817]/90 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Image
            src="/logo-guaralink.jpeg"
            alt="GuaraLink"
            width={160}
            height={70}
            className="rounded-xl bg-white p-1"
          />

          <nav className="hidden md:flex items-center gap-10 font-semibold">
            <a href="#inicio" className="text-orange-400">
              Início
            </a>

            <a href="#planos" className="hover:text-orange-400 transition">
              Planos
            </a>

            <a href="#cobertura" className="hover:text-orange-400 transition">
              Cobertura
            </a>

            <a href="#cliente" className="hover:text-orange-400 transition">
              Suporte
            </a>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 px-7 py-3 rounded-2xl font-bold shadow-[0_0_30px_rgba(249,115,22,.7)] transition hover:scale-105"
          >
            Assine Agora
          </a>
        </div>
      </header>

      {/* HERO */}

      <section
        id="inicio"
        className="relative min-h-screen flex items-center pt-32 px-6 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(2,8,23,.78), rgba(2,8,23,.92)), url('/bg-guara.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgba(0,132,255,.45),transparent_30%),radial-gradient(circle_at_90%_50%,rgba(255,115,0,.35),transparent_30%)]" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
          {/* TEXTO */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-blue-400/40 bg-blue-950/50 rounded-full px-5 py-2 text-sm font-bold mb-6">
              GUARALINK — INTERNET FIBRA ÓPTICA
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,.8)]">
              INTERNET
              <br />
              DE VERDADE
            </h1>

            <p className="text-xl text-blue-100 max-w-2xl mb-8">
              Fibra óptica em Guaraqueçaba, Superagui, Medeiros e Massarapuã.
              Rápida, estável e sem surpresas na fatura.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-12">
              <a
                href={whatsapp}
                target="_blank"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-5 rounded-2xl font-bold text-center transition hover:scale-105"
              >
                Contratar Agora
              </a>

              <a
                href={cliente}
                target="_blank"
                className="border border-blue-400 px-8 py-5 rounded-2xl font-bold text-center hover:bg-blue-900 transition"
              >
                Área do Cliente
              </a>
            </div>
          </motion.div>

          {/* MAPA HERO */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex relative items-center justify-center"
          >
            <div className="relative w-full max-w-[650px] h-[500px] rounded-[2rem] border border-blue-500/30 bg-[#06163a]/80 overflow-hidden shadow-[0_0_80px_rgba(0,132,255,.25)]">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,132,255,.45),transparent_40%)]" />

              <div className="absolute left-1/2 top-1/2 w-5 h-5 rounded-full bg-orange-500 shadow-[0_0_40px_rgba(255,115,0,1)] -translate-x-1/2 -translate-y-1/2" />

              {[
                {
                  nome: "Guaraqueçaba",
                  top: "18%",
                  right: "18%",
                },
                {
                  nome: "Superagui",
                  top: "38%",
                  right: "8%",
                },
                {
                  nome: "Medeiros",
                  bottom: "28%",
                  right: "18%",
                },
                {
                  nome: "Massarapuã",
                  bottom: "10%",
                  right: "10%",
                },
              ].map((cidade) => (
                <motion.div
                  key={cidade.nome}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="absolute"
                  style={cidade}
                >
                  <div className="bg-blue-950 border border-blue-400 rounded-full px-4 py-2 shadow-[0_0_25px_rgba(0,132,255,.7)] font-bold">
                    <span className="text-orange-400">●</span>{" "}
                    {cidade.nome}
                  </div>
                </motion.div>
              ))}

              <svg
                className="absolute inset-0 w-full h-full opacity-70"
                viewBox="0 0 600 500"
                fill="none"
              >
                <path
                  d="M300 250 C380 140 470 120 520 120"
                  stroke="#fb923c"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />

                <path
                  d="M300 250 C390 230 500 240 540 260"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />

                <path
                  d="M300 250 C390 330 480 340 520 360"
                  stroke="#fb923c"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />

                <path
                  d="M300 250 C350 380 430 430 520 450"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COBERTURA */}

      <section
        id="cobertura"
        className="py-24 px-6 bg-gradient-to-br from-[#020817] to-[#031a47]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-8">
            Conectando Guaraqueçaba e suas ilhas
          </h2>

          <p className="text-blue-100 text-xl">
            Atendimento em Guaraqueçaba, Superagui, Medeiros e Massarapuã.
          </p>
        </div>
      </section>

      {/* CONTATO */}

      <section id="cliente" className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-[2rem] border border-blue-500/30 bg-blue-950/30 p-10 grid lg:grid-cols-3 gap-8 items-center">
          <div>
            <h2 className="text-4xl font-black mb-4">
              Fale com a GuaraLink
            </h2>

            <p className="text-blue-100">
              Estamos prontos para te atender.
            </p>
          </div>

          <div>
            <p className="text-orange-400 font-bold mb-2">
              WhatsApp
            </p>

            <p className="text-3xl font-black">
              (41) 99612-9713
            </p>

            <p className="text-blue-200 mt-3">
              guaralink.guaraquecaba@gmail.com
            </p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            className="block text-center bg-orange-500 hover:bg-orange-600 rounded-2xl py-5 text-xl font-black transition hover:scale-105"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* FLOAT */}

      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center pulse text-2xl"
      >
        📞
      </a>

      {/* FOOTER */}

      <footer className="py-10 border-t border-blue-500/20 text-center text-blue-200 text-sm">
        © 2026 GuaraLink - Todos os direitos reservados.
      </footer>
    </main>
  );
}