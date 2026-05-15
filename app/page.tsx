"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const whatsapp =
  "https://wa.me/5541996129713?text=Olá! Quero contratar a internet da GuaraLink.";

const cliente =
  "https://wa.me/5541996129713?text=Olá! Preciso de suporte da GuaraLink.";

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
    <main className="bg-[#020817] text-white overflow-hidden">
      <style>{`
        @keyframes pulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.08); }
        }

        @keyframes glow {
          0%,100% { box-shadow: 0 0 15px rgba(255,115,0,.4); }
          50% { box-shadow: 0 0 40px rgba(255,115,0,.9); }
        }

        .pulse { animation: pulse 2s infinite; }
        .glow { animation: glow 2.5s infinite; }
      `}</style>

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
            <a href="#inicio" className="text-orange-400">Início</a>
            <a href="#planos" className="hover:text-orange-400 transition">Planos</a>
            <a href="#cobertura" className="hover:text-orange-400 transition">Cobertura</a>
            <a href="#cliente" className="hover:text-orange-400 transition">Suporte</a>
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

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="border border-blue-500/30 rounded-2xl p-4 bg-blue-950/40">
                <div className="text-3xl mb-3">⚡</div>
                <p className="text-3xl font-black">500</p>
                <span className="text-sm text-blue-200">Mbps</span>
              </div>

              <div className="border border-blue-500/30 rounded-2xl p-4 bg-blue-950/40">
                <div className="text-3xl mb-3">📶</div>
                <p className="text-3xl font-black">&lt;10ms</p>
                <span className="text-sm text-blue-200">Latência</span>
              </div>

              <div className="border border-blue-500/30 rounded-2xl p-4 bg-blue-950/40">
                <div className="text-3xl mb-3">🛡️</div>
                <p className="text-3xl font-black">99.9%</p>
                <span className="text-sm text-blue-200">Uptime</span>
              </div>

              <div className="border border-blue-500/30 rounded-2xl p-4 bg-blue-950/40">
                <div className="text-3xl mb-3">🎧</div>
                <p className="text-3xl font-black">Local</p>
                <span className="text-sm text-blue-200">Suporte</span>
              </div>
            </div>
          </motion.div>

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
                { nome: "Guaraqueçaba", top: "18%", right: "18%" },
                { nome: "Superagui", top: "38%", right: "8%" },
                { nome: "Medeiros", bottom: "28%", right: "18%" },
                { nome: "Massarapuã", bottom: "10%", right: "10%" },
              ].map((cidade) => (
                <motion.div
                  key={cidade.nome}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute"
                  style={cidade}
                >
                  <div className="bg-blue-950 border border-blue-400 rounded-full px-4 py-2 shadow-[0_0_25px_rgba(0,132,255,.7)] font-bold">
                    <span className="text-orange-400">●</span> {cidade.nome}
                  </div>
                </motion.div>
              ))}

              <svg className="absolute inset-0 w-full h-full opacity-70" viewBox="0 0 600 500" fill="none">
                <path d="M300 250 C380 140 470 120 520 120" stroke="#fb923c" strokeWidth="2" strokeDasharray="8 8" />
                <path d="M300 250 C390 230 500 240 540 260" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8 8" />
                <path d="M300 250 C390 330 480 340 520 360" stroke="#fb923c" strokeWidth="2" strokeDasharray="8 8" />
                <path d="M300 250 C350 380 430 430 520 450" stroke="#38bdf8" strokeWidth="2" strokeDasharray="8 8" />
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="planos" className="py-24 px-6 bg-[#020817]">
        <div className="text-center mb-16">
          <p className="text-orange-400 font-black tracking-widest mb-3">PLANOS</p>

          <h2 className="text-4xl md:text-5xl font-black">
            Escolha o plano ideal para você
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          <div className="border border-blue-500/30 rounded-[2rem] bg-blue-950/30 p-8">
            <h3 className="text-center font-black text-2xl mb-8">GUARAQUEÇABA</h3>

            <div className="grid md:grid-cols-3 gap-5">
              {planosGuaraquecaba.map((plano) => (
                <div
                  key={plano.nome}
                  className={`rounded-3xl p-6 border transition hover:-translate-y-3 ${
                    plano.destaque
                      ? "border-orange-500 glow bg-[#09152f]"
                      : "border-blue-500/30 bg-[#09152f]"
                  }`}
                >
                  {plano.destaque && (
                    <div className="bg-orange-500 rounded-full px-3 py-1 text-xs font-black inline-block mb-4">
                      MAIS CONTRATADO
                    </div>
                  )}

                  <h4 className="text-3xl font-black text-blue-400 mb-4">
                    {plano.nome}
                  </h4>

                  <p className="mb-6">
                    <span className="text-sm">R$</span>{" "}
                    <span className="text-5xl font-black">{plano.preco}</span>
                    <span>/mês</span>
                  </p>

                  <ul className="space-y-2 text-blue-100 mb-8">
                    <li>• Fibra Óptica</li>
                    <li>• Wi-Fi Grátis</li>
                    <li>• Suporte Local</li>
                  </ul>

                  <a
                    href={whatsapp}
                    target="_blank"
                    className="block text-center border border-orange-500 hover:bg-orange-500 rounded-full py-3 font-bold transition"
                  >
                    Assinar agora
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-blue-500/30 rounded-[2rem] bg-blue-950/30 p-8">
            <h3 className="text-center font-black text-2xl mb-8">
              SUPERAGUI, MEDEIROS E MASSARAPUÃ
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              {planosIlhas.map((plano) => (
                <div
                  key={plano.nome}
                  className="rounded-3xl p-6 border border-blue-500/30 bg-[#09152f] transition hover:-translate-y-3 hover:border-orange-500"
                >
                  <h4 className="text-3xl font-black text-blue-400 mb-4">
                    {plano.nome}
                  </h4>

                  <p className="mb-6">
                    <span className="text-sm">R$</span>{" "}
                    <span className="text-5xl font-black">{plano.preco}</span>
                    <span>/mês</span>
                  </p>

                  <ul className="space-y-2 text-blue-100 mb-8">
                    <li>• Fibra Óptica</li>
                    <li>• Wi-Fi Grátis</li>
                    <li>• Suporte Local</li>
                  </ul>

                  <a
                    href={whatsapp}
                    target="_blank"
                    className="block text-center border border-orange-500 hover:bg-orange-500 rounded-full py-3 font-bold transition"
                  >
                    Assinar agora
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cobertura" className="py-24 px-6 bg-gradient-to-br from-[#020817] to-[#031a47]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-400 font-black tracking-widest mb-4">COBERTURA</p>

            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Conectando Guaraqueçaba e suas ilhas
            </h2>

            <p className="text-blue-100 text-xl mb-10">
              Atendimento de qualidade em Guaraqueçaba, Superagui, Medeiros e
              Massarapuã com a melhor fibra óptica da região.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {["Guaraqueçaba", "Superagui", "Medeiros", "Massarapuã"].map(
                (cidade) => (
                  <div
                    key={cidade}
                    className="border border-blue-500/30 rounded-2xl p-5 bg-blue-950/30"
                  >
                    <div className="text-3xl mb-3">📍</div>
                    <p className="font-bold">{cidade}</p>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative h-[500px] rounded-[2rem] border border-blue-500/30 bg-[#06163a] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,132,255,.5),transparent_40%)]" />
            <div className="absolute left-[50%] top-[50%] w-5 h-5 rounded-full bg-orange-500 shadow-[0_0_40px_rgba(255,115,0,1)]" />

            {[
              { nome: "Guaraqueçaba", top: "18%", right: "20%" },
              { nome: "Superagui", top: "38%", right: "8%" },
              { nome: "Medeiros", bottom: "28%", right: "18%" },
              { nome: "Massarapuã", bottom: "10%", right: "10%" },
            ].map((cidade) => (
              <motion.div
                key={cidade.nome}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute"
                style={cidade}
              >
                <div className="bg-blue-950 border border-blue-400 rounded-full px-4 py-2 shadow-[0_0_25px_rgba(0,132,255,.7)]">
                  <span className="text-orange-400">●</span> {cidade.nome}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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

      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center pulse text-2xl"
      >
        📞
      </a>

      <footer className="py-10 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <Image
            src="/logo-guaralink.jpeg"
            alt="GuaraLink"
            width={140}
            height={60}
            className="rounded-xl bg-white p-1"
          />

          <p className="text-blue-200 text-sm">
            © 2026 GuaraLink - Todos os direitos reservados.
          </p>

          <div className="flex gap-5 text-2xl">
            <span>📘</span>
            <span>📸</span>
          </div>
        </div>
      </footer>
    </main>
  );
}