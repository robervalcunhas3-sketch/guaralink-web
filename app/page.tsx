<section id="planos" className="py-24 px-6 bg-[#020817]">
  <div className="text-center mb-16">
    <p className="text-orange-400 font-black tracking-widest mb-3">
      PLANOS
    </p>

    <h2 className="text-4xl md:text-5xl font-black">
      Escolha o plano ideal para você
    </h2>
  </div>

  <div className="max-w-7xl mx-auto space-y-10">

    {/* GUARAQUEÇABA */}

    <div className="border border-blue-500/30 rounded-[2rem] bg-blue-950/30 p-8">
      <h3 className="text-center font-black text-2xl mb-8">
        GUARAQUEÇABA
      </h3>

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
              <span className="text-5xl font-black">
                {plano.preco}
              </span>
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
              onClick={() =>
                trackEvent("click_plano", `Plano ${plano.nome}`)
              }
              className="block text-center border border-orange-500 hover:bg-orange-500 rounded-full py-3 font-bold transition"
            >
              Assinar agora
            </a>
          </div>
        ))}
      </div>
    </div>

    {/* SUPERAGUI */}

    <div className="border border-blue-500/30 rounded-[2rem] bg-blue-950/30 p-8">
      <h3 className="text-center font-black text-2xl mb-8">
        SUPERAGUI
      </h3>

      <div className="grid md:grid-cols-3 gap-5">
        {planosSuperagui.map((plano) => (
          <div
            key={plano.nome}
            className="rounded-3xl p-6 border border-blue-500/30 bg-[#09152f] transition hover:-translate-y-3 hover:border-orange-500"
          >
            <h4 className="text-3xl font-black text-blue-400 mb-4">
              {plano.nome}
            </h4>

            <p className="mb-6">
              <span className="text-sm">R$</span>{" "}
              <span className="text-5xl font-black">
                {plano.preco}
              </span>
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
              onClick={() =>
                trackEvent("click_plano", `Plano Superagui ${plano.nome}`)
              }
              className="block text-center border border-orange-500 hover:bg-orange-500 rounded-full py-3 font-bold transition"
            >
              Assinar agora
            </a>
          </div>
        ))}
      </div>
    </div>

    {/* MEDEIROS E MASSARAPUÃ */}

    <div className="border border-blue-500/30 rounded-[2rem] bg-blue-950/30 p-8">
      <h3 className="text-center font-black text-2xl mb-8">
        MEDEIROS E MASSARAPUÃ
      </h3>

      <div className="grid md:grid-cols-2 gap-5">
        {planosMedeiros.map((plano) => (
          <div
            key={plano.nome}
            className="rounded-3xl p-6 border border-blue-500/30 bg-[#09152f] transition hover:-translate-y-3 hover:border-orange-500"
          >
            <h4 className="text-3xl font-black text-blue-400 mb-4">
              {plano.nome}
            </h4>

            <p className="mb-6">
              <span className="text-sm">R$</span>{" "}
              <span className="text-5xl font-black">
                {plano.preco}
              </span>
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
              onClick={() =>
                trackEvent("click_plano", `Plano Medeiros ${plano.nome}`)
              }
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