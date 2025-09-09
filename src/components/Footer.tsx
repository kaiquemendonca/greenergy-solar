'use client'

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <>
      {/* CTA final em faixa */}
      <section
        className="w-full bg-[#2f3a17] text-white px-4 md:px-8"
        aria-label="Chamada final"
      >
        <div className="mx-auto w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-between gap-3 py-6">
          <p className="text-center md:text-left text-sm md:text-base">
            Pronto para reduzir sua conta em até <strong>95%</strong>?
          </p>
          <div className="flex w-full md:w-auto gap-3">
            <a
              href="#calc"
              className="flex-1 md:flex-none inline-flex items-center justify-center h-11 px-4 rounded-lg bg-white text-[#2f3a17] font-semibold hover:opacity-90"
            >
              QUERO MINHA SIMULAÇÃO GRATUITA
            </a>
            <a
              href="https://api.whatsapp.com/send?l=pt&phone=5582982220914"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none inline-flex items-center justify-center h-11 px-4 rounded-lg bg-black/15 hover:bg-black/20 font-medium"
              aria-label="Falar no WhatsApp"
            >
              FALAR NO WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* Footer principal */}
      <footer
        id="footer"
        className="w-full bg-white px-4 md:px-8 pt-10"
        aria-labelledby="footer-title"
      >
        <h2 id="footer-title" className="sr-only">Rodapé</h2>

        <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-100 pb-8">
          {/* Coluna 1: marca + contato */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src="/assets/solar 1.png"
              alt="Solar Greenergy"
              className="h-12 w-auto"
              loading="lazy"
            />

            <p className="text-sm text-gray-700 text-center md:text-left max-w-xs">
              Projetos, instalação e homologação de energia solar com suporte local.
            </p>

            <ul className="text-sm text-gray-700 space-y-1 text-center md:text-left">
              <li><strong>Telefone:</strong> <a className="underline hover:no-underline" href="tel:+5582982220914">(82) 98222-0914</a></li>
              <li><strong>E-mail:</strong> <a className="underline hover:no-underline" href="mailto:contato@solargreenergy.com.br">contato@solargreenergy.com.br</a></li>
              <li><strong>Endereço:</strong> <a className="underline hover:no-underline" target="_blank" rel="noopener noreferrer" href="https://maps.google.com/?q=Macei%C3%B3+-+AL">Maceió – AL (atendimento em todo o estado)</a></li>
              <li><strong>CNPJ:</strong> 00.000.000/0001-00</li>
            </ul>
          </div>

          {/* Coluna 2: links rápidos */}
          <nav aria-label="Links rápidos" className="flex flex-col items-center md:items-start">
            <p className="text-gray-900 font-semibold mb-3">Links</p>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><a className="hover:text-[#4b5926]" href="#about">Sobre nós</a></li>
              <li><a className="hover:text-[#4b5926]" href="#projetos">Projetos</a></li>
              <li><a className="hover:text-[#4b5926]" href="#calc">Simulação</a></li>
              <li><a className="hover:text-[#4b5926]" href="#depoimentos">Depoimentos</a></li>
              <li><a className="hover:text-[#4b5926]" href="#contato">Contato</a></li>
            </ul>

            <div className="mt-6 flex items-center gap-4">
              <a
                className="h-7 w-7 inline-flex items-center justify-center"
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <img src="/assets/icon-facebook.svg" alt="" className="h-6 w-6" loading="lazy" />
              </a>
              <a
                className="h-7 w-7 inline-flex items-center justify-center"
                href="https://www.instagram.com/solar.greenergyal/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <img src="/assets/icon-instagram.svg" alt="" className="h-6 w-6" loading="lazy" />
              </a>
              <a
                className="h-7 w-7 inline-flex items-center justify-center"
                href="https://api.whatsapp.com/send?l=pt&phone=5582982220914"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <img src="/assets/icon-whatsapp.svg" alt="" className="h-6 w-6" loading="lazy" />
              </a>
            </div>
          </nav>

          {/* Coluna 3: selo de confiança / horário */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-gray-900 font-semibold">Atendimento</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Seg a Sex: 08h–18h</li>
              <li>Sábado: 08h–12h</li>
              <li>Domingo: sob agendamento</li>
            </ul>

            <div className="mt-4 rounded-xl border border-gray-200 p-4 bg-gray-50 w-full">
              <p className="text-sm text-gray-800 font-medium">Empresa homologada</p>
              <p className="text-xs text-gray-600">Projetos conforme norma da concessionária e NR-10.</p>
            </div>
          </div>
        </div>

        {/* Legal/Créditos */}
        <div className="w-full max-w-screen-xl mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-[12px] md:text-sm text-gray-600 text-center md:text-left">
            © {year} Kaíque Mendonça. Todos os direitos reservados.
          </p>
          <div className="text-[12px] md:text-sm text-gray-600 flex items-center gap-4">
            <a href="/politica-de-privacidade" className="hover:text-[#4b5926]">Política de Privacidade</a>
            <a href="/termos-de-uso" className="hover:text-[#4b5926]">Termos de Uso</a>
          </div>
        </div>
      </footer>

      {/* Botão flutuante WhatsApp */}
      <div className="size-14 z-50 fixed bottom-6 right-6 lg:bottom-14 lg:right-14">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://api.whatsapp.com/send?l=pt&phone=5582982220914"
          aria-label="Abrir conversa no WhatsApp"
          className="block rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4b5926]"
        >
          <img className="w-full" src="/assets/icons-whatsapp1.svg" alt="WhatsApp" />
        </a>
      </div>
    </>
  )
}
