import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="bg-blue-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/logo-guaralink.jpeg"
            alt="GuaraLink"
            width={180}
            height={80}
            className="rounded-lg"
          />
        </div>

        <a
          href="https://wa.me/5541996129713"
          target="_blank"
          className="bg-orange-500 hover:bg-orange-600 px-5 py-3 rounded-xl font-bold"
        >
          WhatsApp
        </a>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6">
          Internet Fibra Óptica em Guaraqueçaba e Ilhas
        </h1>

        <p className="text-xl max-w-3xl mx-auto mb-8">
          Conexão rápida, estável e com suporte especializado para
          Guaraqueçaba, Superagui, Medeiros e Massarapuã.
        </p>

        <a
          href="https://wa.me/5541996129713"
          target="_blank"
          className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-2xl text-xl font-bold"
        >
          Assinar Agora
        </a>
      </section>

      {/* PLANOS GUARAQUEÇABA */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Planos Guaraqueçaba
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              300 Mega
            </h3>

            <p className="text-5xl font-extrabold mb-4">R$ 100</p>

            <a
              href="https://wa.me/5541996129713"
              target="_blank"
              className="bg-blue-900 text-white px-6 py-3 rounded-xl inline-block"
            >
              Contratar
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center border-4 border-orange-500">
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              400 Mega
            </h3>

            <p className="text-5xl font-extrabold mb-4">R$ 110</p>

            <a
              href="https://wa.me/5541996129713"
              target="_blank"
              className="bg-orange-500 text-white px-6 py-3 rounded-xl inline-block"
            >
              Contratar
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold text-orange-500 mb-4">
              500 Mega
            </h3>

            <p className="text-5xl font-extrabold mb-4">R$ 139,90</p>

            <a
              href="https://wa.me/5541996129713"
              target="_blank"
              className="bg-blue-900 text-white px-6 py-3 rounded-xl inline-block"
            >
              Contratar
            </a>
          </div>
        </div>
      </section>

      {/* ILHAS */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Planos Superagui, Medeiros e Massarapuã
        </h2>

        <p className="text-center text-lg mb-12">
          Internet de alta qualidade para as ilhas e regiões afastadas.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-blue-900 text-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">100 Mega</h3>

            <p className="text-5xl font-extrabold mb-4">R$ 100</p>
          </div>

          <div className="bg-orange-500 text-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">200 Mega</h3>

            <p className="text-5xl font-extrabold mb-4">R$ 120</p>
          </div>

          <div className="bg-blue-900 text-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">400 Mega</h3>

            <p className="text-5xl font-extrabold mb-4">R$ 150</p>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Área de Cobertura
        </h2>

        <div className="max-w-4xl mx-auto text-xl leading-10">
          <p>📍 Guaraqueçaba</p>
          <p>📍 Superagui</p>
          <p>📍 Medeiros</p>
          <p>📍 Massarapuã</p>
        </div>
      </section>

      {/* SPEEDTEST */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Teste Sua Velocidade
        </h2>

        <a
          href="https://www.speedtest.net/pt"
          target="_blank"
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-xl font-bold"
        >
          Fazer Speed Test
        </a>
      </section>

      {/* AREA DO CLIENTE */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Área do Cliente
        </h2>

        <p className="text-xl mb-8">
          Emissão de boletos, suporte e atendimento rápido.
        </p>

        <a
          href="https://wa.me/5541996129713"
          target="_blank"
          className="bg-orange-500 px-8 py-4 rounded-2xl text-xl font-bold"
        >
          Entrar na Área do Cliente
        </a>
      </section>

      {/* CONTATO */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Fale Conosco
        </h2>

        <form className="max-w-3xl mx-auto bg-white p-8 rounded-3xl shadow-xl space-y-6">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="WhatsApp"
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            placeholder="Mensagem"
            className="w-full border p-4 rounded-xl h-40"
          />

          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl text-xl font-bold w-full"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-8 text-center">
        <p className="text-lg">
          © 2026 GuaraLink - Conexão que aproxima
        </p>
      </footer>
    </main>
  );
}