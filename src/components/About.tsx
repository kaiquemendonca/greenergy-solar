'use client'
import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, when: "beforeChildren", staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25 } }
}

export const About = () => {
  return (
    <section
      id="about"
      className="w-full md:h-[100svh] flex md:snap-always md:snap-start justify-center md:overflow-hidden pt-16 px-4 md:px-8 bg-white"
      aria-labelledby="sobre-nos-title"
    >
      <div className="w-full xl:max-w-7xl flex items-center justify-center">
        <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-10 pb-16">
          
          {/* Coluna de texto */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full flex flex-col justify-center order-2 lg:order-1"
          >
            <h1 id="sobre-nos-title" className="text-[#4b5926] font-bold text-sm uppercase tracking-wider mb-3">
              Sobre nós
            </h1>

            <motion.h2 variants={item} className="text-2xl md:text-[32px] leading-tight text-gray-800 mb-4">
              Energia solar com qualidade técnica e foco no seu retorno
            </motion.h2>

            <motion.p variants={item} className="text-sm md:text-[15px] leading-6 text-gray-700 mb-6">
              A Solar Greenergy existe para tornar acessível a geração da sua própria energia.
              Unimos projeto bem dimensionado, equipamentos de marcas líderes e execução homologada
              para você economizar com segurança desde o primeiro mês.
            </motion.p>

            {/* Métricas / prova social */}
            <motion.ul variants={item} className="grid grid-cols-3 gap-3 mb-8">
              <li className="rounded-xl bg-gray-50 ring-1 ring-black/5 p-4 text-center">
                <p className="text-xl font-bold text-gray-800">300+</p>
                <p className="text-xs text-gray-600">projetos homologados</p>
              </li>
              <li className="rounded-xl bg-gray-50 ring-1 ring-black/5 p-4 text-center">
                <p className="text-xl font-bold text-gray-800">5+</p>
                <p className="text-xs text-gray-600">anos de atuação</p>
              </li>
              <li className="rounded-xl bg-gray-50 ring-1 ring-black/5 p-4 text-center">
                <p className="text-xl font-bold text-gray-800">100%</p>
                <p className="text-xs text-gray-600">clientes satisfeitos</p>
              </li>
            </motion.ul>

            {/* Valores / compromissos */}
            <motion.h3 variants={item} className="text-[18px] font-semibold text-gray-800 mb-3">
              Nosso compromisso
            </motion.h3>

            <div className="space-y-4 font-normal">
              <motion.div variants={item} className="flex">
                <div className="size-14 sm:size-16 flex justify-center items-center mr-3">
                  <img src="/assets/conquista.png" alt="Ícone de conquista" className="max-h-12" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4b5926] font-semibold">Confiança se conquista</p>
                  <p className="text-sm text-gray-700">
                    Atuação em todo o Nordeste, com projetos homologados e acompanhamento do início à conexão.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={item} className="flex">
                <div className="size-14 sm:size-16 flex justify-center items-center mr-3">
                  <img src="/assets/negocio.png" alt="Ícone de negócio" className="max-h-12" />
                </div>
                <div className="flex-1">
                  <p className="text-[#4b5926] font-semibold">Bom negócio de verdade</p>
                  <p className="text-sm text-gray-700">
                    Você investe, tem payback estimado em poucos anos e depois colhe o lucro na menor conta de luz.
                  </p>
                </div>
              </motion.div>

              {/* Lista de diferenciais curtos */}
              <motion.ul variants={item} className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span aria-hidden>✅</span> Projeto personalizado por consumo e telhado
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden>✅</span> Equipamentos com garantia e suporte local
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden>✅</span> Homologação ágil junto à concessionária
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden>✅</span> Opções de financiamento facilitadas
                </li>
              </motion.ul>
            </div>

            {/* CTA */}
            <motion.a
              variants={item}
              href="https://api.whatsapp.com/send?l=pt&phone=5582982220914"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center bg-[#4b5926] text-white h-12 px-6 rounded-lg w-full md:w-auto font-medium"
              aria-label="Falar com a Solar Greenergy no WhatsApp"
              initial={{ scale: 1, boxShadow: "0 0 0 rgba(75,89,38,0)" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              animate={{
                scale: [1, 1.02, 1],
                boxShadow: [
                  "0 8px 20px rgba(75,89,38,0.15)",
                  "0 14px 30px rgba(75,89,38,0.28)",
                  "0 8px 20px rgba(75,89,38,0.15)"
                ]
              }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              SABER MAIS
            </motion.a>
          </motion.div>

          {/* Coluna da imagem */}
          <div className="w-full relative flex items-center justify-end order-1 lg:order-2">
            <div className="relative w-full lg:max-w-[420px] min-h-[240px] lg:min-h-[540px]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-black/5">
                <img
                  src="/assets/clientes/equipe.jpg"
                  alt="Equipe Solar Greenergy e projeto de usina"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                {/* overlay sutil para contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
