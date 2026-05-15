import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-guaralink.jpeg"
              alt="GuaraLink"
              width={140}
              height={60}
              className="rounded-lg"
            />
          </div>

          <a
            href="https://wa.me/5541996129713"
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 transition-all px-5 py-2 rounded-full font-bold"
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-6 animate-pulse">
          Internet Fibra Óptica em Guaraqueçaba e Ilhas
        </h1>

        <p className="text-xl max-w-3xl mx-auto mb-8">
          Conexão rápida, estável e com suporte especializado para
          Guaraqueçaba, Superagui, Medeiros e Massarapuã.
        </p>

        <a
          href="https://wa.me/5541996129713"
          target="_blank"
          className="bg-orange-500 hover:bg-orange-600 transition-all px-8 py-4 rounded-full text-lg font-bold shadow-xl"
        >
          Assinar Agora
        </a>
      </section>

      {/* PLANOS */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-14">
          Planos Guaraqueçaba
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              300 Mega
            </h3>
            <p className="text-5xl font-extrabold mb-6">R$ 100</p>
            <a
              href="https://wa.me/5541996129713"
              target="_blank"
              className="bg-blue-900 text-white px-6 py-3 rounded-full"
            >
              Contratar
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border-4 border-orange-500 p-8 text-center hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              400 Mega
            </h3>
            <p className="text-5xl font-extrabold mb-6">R$ 110</p>
            <a
              href="https://wa.me/5541996129713"
              target="_blank"
              className="bg-orange-500 text-white px-6 py-3 rounded-full"
            >
              Contratar
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              500 Mega
            </h3>
            <p className="text-5xl font-extrabold mb-6">R$ 139,90</p>
            <a
              href="https://wa.me/5541996129713"
              target="_blank"
              className="bg-blue-900 text-white px-6 py-3 rounded-full"
            >
              Contratar
            </a>
          </div>
        </div>
      </section>

      {/* ILHAS */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-14">
          Planos Superagui, Medeiros e Massarapuã
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-blue-900 text-white rounded-3xl p-8 text-center hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold mb-4">100 Mega</h3>
            <p className="text-5xl font-extrabold mb-6">R$ 100</p>
          </div>

          <div className="bg-blue-900 text-white rounded-3xl p-8 text-center hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold mb-4">200 Mega</h3>
            <p className="text-5xl font-extrabold mb-6">R$ 120</p>
          </div>

          <div className="bg-blue-900 text-white rounded-3xl p-8 text-center hover:scale-105 transition-all">
            <h3 className="text-2xl font-bold mb-4">400 Mega</h3>
            <p className="text-5xl font-extrabold mb-6">R$ 150</p>
          </div>
        </div>
      </section>

      {/* COBERTURA */}
      <section className="py-20 px-6 bg-orange-500 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Área de Cobertura
        </h2>

        <p className="text-xl max-w-3xl mx-auto">
          Atendimento em Guaraqueçaba, Superagui, Medeiros e Massarapuã com
          internet fibra óptica de alta velocidade.
        </p>
      </section>

      {/* TESTE */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Teste sua velocidade
        </h2>

        <a
          href="https://www.speedtest.net/pt"
          target="_blank"
          className="bg-blue-900 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-all"
        >
          Fazer Teste
        </a>
      </section>

      {/* CONTATO */}
      <section className="py-20 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Fale Conosco
        </h2>

        <form className="max-w-3xl mx-auto grid gap-6">
          <input
            type="text"
            placeholder="Seu nome"
            className="border p-4 rounded-xl"
          />

          <input
            type="text"
            placeholder="Seu WhatsApp"
            className="border p-4 rounded-xl"
          />

          <textarea
            placeholder="Digite sua mensagem"
            className="border p-4 rounded-xl h-40"
          />

          <button className="bg-orange-500 hover:bg-orange-600 transition-all text-white p-4 rounded-xl font-bold">
            Enviar
          </button>
        </form>
      </section>

      {/* RODAPÉ */}
      <footer className="bg-blue-900 text-white text-center py-8">
        <p className="text-lg font-semibold">
          GuaraLink Internet Fibra Óptica
        </p>

        <p className="mt-2">
          WhatsApp: (41) 99612-9713
        </p>

        <p className="mt-2 text-sm opacity-80">
          © 2026 GuaraLink - Todos os direitos reservados
        </p>
      </footer>
    </main>
  );
}