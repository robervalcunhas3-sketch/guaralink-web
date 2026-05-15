import Image from "next/image";

const whatsapp = "https://wa.me/5541996129713";

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
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(255,115,0,.35); }
          50% { box-shadow: 0 0 45px rgba(255,115,0,.75); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes pulseWhats {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34,197,94,.7); }
          50% { transform: scale(1.08); box-shadow: 0 0 0 18px rgba(34,197,94,0); }
        }

        @keyframes moveLight {
          0% { transform: translateX(-20%) translateY(0); opacity: .4; }
          50% { transform: translateX(20%) translateY(-20px); opacity: 1; }
          100% { transform: translateX(-20%) translateY(0); opacity: .4; }
        }

        .glow-card { animation: glow 2.5s infinite ease-in-out; }
        .float { animation: float 4s infinite ease-in-out; }
        .whats-pulse { animation: pulseWhats 2s infinite; }
        .light-move { animation: moveLight 7s infinite ease-in-out; }
      `}</style>

      {/* NAVBAR */}
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
            <a href="#inicio" className="text-orange-400">Início</a>
            <a href="#planos" className="hover:text-orange-400 transition">Planos</a>
            <a href="#cobertura" className="hover:text-orange-400 transition">Cobertura</a>
            <a href="#suporte" className="hover:text-orange-400 transition">Suporte</a>
            <a href="#cliente" className="hover:text-orange-400 transition">Área do Cliente</a>
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
      <section id="inicio" className="relative min-h-screen pt-32 px-6 flex items-center bg-gradient-to-br from-[#020817] via-[#06205c] to-[#020817]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_40%,rgba(0,132,255,.9),transparent_35%),radial-gradient(circle_at_90%_50%,rgba(255,115,0,.8),transparent_25%)]" />

        <div className="absolute right-0 top-32 w-[55%] h-[70%] light-move opacity-70">
          <div className="w-full h-full bg-[repeating-linear-gradient(25deg,transparent_0px,transparent_18px,rgba(0,140,255,.45)_20px,transparent_23px)] blur-[1px]" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center w-full">
          <div>
            <div className="inline-block border border-blue-400/60 rounded-full px-5 py-2 text-sm font-bold text-blue-100 mb-6 bg-blue-900/40">
              GUARALINK — INTERNET FIBRA ÓPTICA
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6 drop-shadow-[0_0_25px_rgba(59,130,246,.9)]">
              INTERNET
              <br />
              DE VERDADE
            </h1>

            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mb-8 font-medium">
              Fibra óptica em Guaraqueçaba, Superagui, Medeiros e Massarapuã.
              Rápida, estável e sem surpresas na fatura.
            </p>

            <div className="flex flex-col md:flex-row gap-4 max-w-3xl mb-10">
              <input
                placeholder="Digite seu endereço para verificar cobertura"
                className="flex-1 rounded-2xl px-6 py-5 text-slate-900 outline-none"
              />

              <a
                href={whatsapp}
                target="_blank"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-5 rounded-2xl font-bold text-center transition hover:scale-105"
              >
                Verificar →
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ["⚡", "ATÉ", "500 Mbps", "VELOCIDADE"],
                ["📶", "LATÊNCIA", "<10ms", "BAIXA LATÊNCIA"],
                ["🛡️", "UPTIME", "99,9%", "CONEXÃO GARANTIDA"],
                ["🎧", "SUPORTE", "LOCAL", "ATENDIMENTO REAL"],
              ].map(([icon, title, value, desc]) => (
                <div
                  key={title}
                  className="border border-blue-400/40 bg-blue-950/50 rounded-2xl p-5 hover:border-orange-400 hover:-translate-y-2 transition"
                >
                  <div className="text-3xl mb-3">{icon}</div>
                  <p className="text-xs font-bold text-blue-200">{title}</p>
                  <p className="text-2xl font-black">{value}</p>
                  <p className="text-xs text-blue-200">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block float">
            <Image
              src="/logo-guaralink.jpeg"
              alt="GuaraLink"
              width={620}
              height={320}
              className="rounded-3xl shadow-[0_0_50px_rgba(0,132,255,.55)] bg-white p-3"
            />
          </div>
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="py-24 px-6 bg-[#020817]">
        <div className="text-center mb-14">
          <p className="text-orange-400 font-black tracking-widest">PLANOS</p>
          <h2 className="text-4xl md:text-5xl font-black">
            Escolha o plano ideal para você
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8">
          <div className="border border-blue-500/40 rounded-3xl p-6 bg-blue-950/40">
            <h3 className="text-center font-black mb-6">GUARAQUEÇABA</h3>

            <div className="grid md:grid-cols-3 gap-5">
              {planosGuaraquecaba.map((plano) => (
                <div
                  key={plano.nome}
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
                    <span className="text-5xl font-black">{plano.preco}</span>
                    <span className="text-sm">/mês</span>
                  </p>

                  <ul className="text-sm text-blue-100 space-y-2 mb-6">
                    <li>• Fibra Óptica</li>
                    <li>• Wi-Fi Grátis</li>
                    <li>• Suporte Local</li>
                  </ul>

                  <a
                    href={whatsapp}
                    target="_blank"
                    className="block text-center border border-blue-400 hover:bg-orange-500 hover:border-orange-500 rounded-full py-3 font-bold transition"
                  >
                    Assinar agora
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-blue-500/40 rounded-3xl p-6 bg-blue-950/40">
            <h3 className="text-center font-black mb-6">
              SUPERAGUI, MEDEIROS E MASSARAPUÃ
            </h3>

            <div className="grid md:grid-cols-3 gap-5">
              {planosIlhas.map((plano) => (
                <div
                  key={plano.nome}
                  className="rounded-2xl p-6 border border-blue-500/50 bg-[#06163a] hover:-translate-y-3 hover:border-orange-500 transition"
                >
                  <h4 className="text-2xl font-black text-blue-400 mb-4">
                    {plano.nome}
                  </h4>

                  <p className="mb-5">
                    <span className="text-sm">R$</span>{" "}
                    <span className="text-5xl font-black">{plano.preco}</span>
                    <span className="text-sm">/mês</span>
                  </p>

                  <ul className="text-sm text-blue-100 space-y-2 mb-6">
                    <li>• Fibra Óptica</li>
                    <li>• Wi-Fi Grátis</li>
                    <li>• Suporte Local</li>
                  </ul>

                  <a
                    href={whatsapp}
                    target="_blank"
                    className="block text-center border border-blue-400 hover:bg-orange-500 hover:border-orange-500 rounded-full py-3 font-bold transition"
                  >
                    Assinar agora
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section id="cobertura" className="relative py-24 px-6 bg-gradient-to-br from-[#020817] via-[#031b4d] to-[#020817]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-orange-400 font-black mb-3">COBERTURA</p>

            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Conectando Guaraqueçaba e suas ilhas
            </h2>

            <p className="text-blue-100 text-lg mb-10">
              Atendimento de qualidade em Guaraqueçaba, Superagui, Medeiros e
              Massarapuã com a melhor fibra óptica da região.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-10">
              {["Guaraqueçaba", "Superagui", "Medeiros", "Massarapuã"].map(
                (local) => (
                  <div key={local} className="text-center">
                    <div className="text-4xl mb-2">📍</div>
                    <p className="text-sm">{local}</p>
                  </div>
                )
              )}
            </div>

            <a
              href={whatsapp}
              target="_blank"
              className="inline-block border border-orange-500 hover:bg-orange-500 px-8 py-4 rounded-full font-bold transition"
            >
              Verificar cobertura
            </a>
          </div>

          <div className="relative min-h-[420px] rounded-3xl border border-blue-500/40 bg-blue-950/40 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,140,255,.65),transparent_40%)]" />

            {["Guaraqueçaba", "Superagui", "Medeiros", "Massarapuã"].map(
              (local, index) => (
                <div
                  key={local}
                  className="absolute bg-blue-900 border border-blue-300 px-4 py-2 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(0,132,255,.8)]"
                  style={{
                    top: `${18 + index * 18}%`,
                    right: `${12 + (index % 2) * 10}%`,
                  }}
                >
                  <span className="text-orange-400">●</span> {local}
                </div>
              )
            )}

            <div className="absolute left-1/2 top-1/2 w-5 h-5 rounded-full bg-orange-500 shadow-[0_0_35px_rgba(249,115,22,1)]" />
          </div>
        </div>
      </section>

      {/* SUPORTE */}
      <section id="suporte" className="py-16 px-6 border-y border-blue-500/30 bg-blue-950/30">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            ["🚀", "INSTALAÇÃO RÁPIDA", "Agilidade e eficiência"],
            ["🔓", "SEM FIDELIDADE", "Liberdade para você"],
            ["🛡️", "ESTÁVEL E CONFIÁVEL", "Conexão que não cai"],
            ["🎧", "SUPORTE LOCAL", "Atendimento de verdade"],
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex items-center gap-4">
              <div className="text-3xl">{icon}</div>
              <div>
                <h3 className="text-blue-300 font-black text-sm">{title}</h3>
                <p className="text-sm text-blue-100">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section id="cliente" className="py-12 px-6 bg-[#020817]">
        <div className="max-w-7xl mx-auto rounded-3xl border border-blue-500/40 bg-blue-950/50 p-8 grid md:grid-cols-3 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-black">Fale com a GuaraLink</h2>
            <p className="text-blue-100">Estamos prontos para te atender!</p>
          </div>

          <div className="text-center">
            <p className="text-green-400 text-4xl">☘</p>
            <p className="font-black text-2xl">(41) 99612-9713</p>
          </div>

          <a
            href={whatsapp}
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 text-center px-8 py-5 rounded-2xl font-black text-xl transition hover:scale-105"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <a
        href={whatsapp}
        target="_blank"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl whats-pulse"
      >
        ☎
      </a>

      <footer className="py-8 text-center text-sm text-blue-200 bg-black">
        © 2026 GuaraLink - Todos os direitos reservados.
      </footer>
    </main>
  );
}