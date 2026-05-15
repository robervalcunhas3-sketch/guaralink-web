"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const whatsapp = "https://wa.me/5541996129713";
const beesweb =
  "https://app.beesweb.com.br/clientes?order_by=name,asc";

const planosGuaraquecaba = [
  { nome: "300 MEGA", preco: "100", destaque: false },
  { nome: "400 MEGA", preco: "110", destaque: true },
  { nome: "500 MEGA", preco: "139,90", destaque: false },
];

const planosIlhas = [
  { nome: "100 MEGA", preco: "100" },
  { nome: "200 MEGA", preco: "120" },
  { nome: "400 MEGA", preco: "150" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-hidden">
      <style>{`
        @keyframes pulseWhats {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34,197,94,.7);
          }
          50% {
            transform: scale(1.08);
            box-shadow: 0 0 0 18px rgba(34,197,94,0);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255,115,0,.35);
          }
          50% {
            box-shadow: 0 0 45px rgba(255,115,0,.75);
          }
        }

        .whats-pulse {
          animation: pulseWhats 2s infinite;
        }

        .glow-card {
          animation: glow 2.5s infinite ease-in-out;
        }
      `}</style>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#020817]/90 backdrop-blur-xl border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <Image
            src="/logo-guaralink.jpeg"
            alt="GuaraLink"
            width={150}
            height={65}
            className="rounded-xl bg-white p-1"
          />

          <nav className="hidden md:flex gap-8 font-semibold text-sm">
            <a href="#inicio" className="text-orange-400">
              Início
            </a>

            <a
              href="#planos"
              className="hover:text-orange-400 transition"
            >
              Planos
            </a>

            <a
              href="#cobertura"
              className="hover:text-orange-400 transition"
            >
              Cobertura
            </a>

            <a
              href="#cliente"
              className="hover:text-orange-400 transition"
            >
              Área do Cliente
            </a>
          </nav>

          <a
            href={whatsapp}
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-2xl font-bold shadow-[0_0_25px_rgba(249,115,22,.6)] transition hover:scale-105"
          >
            Assine Agora
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative min-h-screen pt-32 px-6 flex items-center bg-gradient-to-br from-[#020817] via-[#06205c] to-[#020817]"
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_40%,rgba(0,132,255,.9),transparent_35%),radial-gradient(circle_at_90%_50%,rgba(255,115,0,.8),transparent_25%)]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block border border-blue-400/60 rounded-full px-5 py-2 text-sm font-bold text-blue-100 mb-6 bg-blue-900/40">
              GUARALINK — INTERNET FIBRA ÓPTICA
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,.9)]">
              INTERNET
              <br />
              DE VERDADE
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mb-8 font-medium">
              Fibra óptica em Guaraqueçaba, Superagui, Medeiros e
              Massarapuã.
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mb-10">
              <a
                href={whatsapp}
                target="_blank"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-5 rounded-2xl font-bold text-center transition hover:scale-105"
              >
                Contratar Agora
              </a>

              <a
                href={beesweb}
                target="_blank"
                className="border border-blue-400 px-8 py-5 rounded-2xl font-bold text-center hover:bg-blue-900 transition"
              >
                Área do Cliente
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 80 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Image
                src="/logo-guaralink.jpeg"
                alt="GuaraLink"
                width={620}
                height={320}
                className="rounded-3xl shadow-[0_0_50px_rgba(0,132,255,.55)] bg-white p-3"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PLANOS */}
      <section
        id="planos"
        className="py-24 px-6 bg-[#020817]"
      >
        <div className="text-center mb-14">
          <p className="text-orange-400 font-black tracking-widest">
            PLANOS
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Escolha o plano ideal
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="border border-blue-500/40 rounded-3xl p-6 bg-blue-950/40">
            <h3 className="text-center font-black mb-6">
              GUARAQUEÇABA
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              {planosGuaraquecaba.map((plano, index) => (
                <motion.div
                  key={plano.nome}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className={`relative rounded-2xl p-6 border bg-[#06163a] hover:-translate-y-3 transition ${
                    plano.destaque
                      ? "border-orange-500 glow-card scale-105"
                      : "border-blue-500/50"
                  }`}
                >
                  {plano.destaque && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 px-4 py-1 rounded-full text-xs font-black">
                      MAIS CONTRATADO
                    </div>
                  )}

                  <h4 className="text-2xl font-black text-blue-400 mb-4">
                    {plano.nome}
                  </h4>

                  <p className="mb-5">
                    <span className="text-sm">R$</span>{" "}
                    <span className="text-5xl font-black">
                      {plano.preco}
                    </span>
                    <span className="text-sm">/mês</span>
                  </p>

                  <a
                    href={whatsapp}
                    target="_blank"
                    className="block text-center border border-blue-400 hover:bg-orange-500 hover:border-orange-500 rounded-full py-3 font-bold transition"
                  >
                    Assinar agora
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border border-blue-500/40 rounded-3xl p-6 bg-blue-950/40">
            <h3 className="text-center font-black mb-6">
              ILHAS E REGIÃO
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              {planosIlhas.map((plano, index) => (
                <motion.div
                  key={plano.nome}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.12,
                  }}
                  viewport={{ once: true }}
                  className="rounded-2xl p-6 border border-blue-500/50 bg-[#06163a] hover:-translate-y-3 hover:border-orange-500 transition"
                >
                  <h4 className="text-2xl font-black text-blue-400 mb-4">
                    {plano.nome}
                  </h4>

                  <p className="mb-5">
                    <span className="text-sm">R$</span>{" "}
                    <span className="text-5xl font-black">
                      {plano.preco}
                    </span>
                    <span className="text-sm">/mês</span>
                  </p>

                  <a
                    href={whatsapp}
                    target="_blank"
                    className="block text-center border border-blue-400 hover:bg-orange-500 hover:border-orange-500 rounded-full py-3 font-bold transition"
                  >
                    Assinar agora
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTE */}
      <section
        id="cliente"
        className="py-20 px-6 bg-gradient-to-r from-blue-950 to-blue-800"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-black mb-6">
            Área do Cliente
          </h2>

          <p className="text-xl text-blue-100 mb-10">
            Segunda via, suporte, contratos e atendimento online.
          </p>

          <a
            href={beesweb}
            target="_blank"
            className="inline-block bg-orange-500 hover:bg-orange-600 px-10 py-5 rounded-2xl font-black text-xl transition hover:scale-105 shadow-[0_0_30px_rgba(249,115,22,.7)]"
          >
            Entrar na Área do Cliente
          </a>
        </div>
      </section>

      {/* WHATS */}
      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl whats-pulse"
      >
        ☎
      </a>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm text-blue-200 bg-black">
        © 2026 GuaraLink - Todos os direitos reservados.
      </footer>
    </main>
  );
}