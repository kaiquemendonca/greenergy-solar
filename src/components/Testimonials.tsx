'use client'
import { useMemo } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

type Testimonial = {
  name: string
  city: string
  quote: string
  photo?: string
  saving?: string
  details?: string // mostra no verso
}

const testimonials: Testimonial[] = [
  {
    name: 'Mauro Mendonça',
    city: 'Maceió – AL',
    quote: 'Equipe impecável do projeto à homologação. A conta despencou no 1º mês.',
    photo: '/assets/clientes/mauro.JPG',
    saving: 'R$ 520 → R$ 70/mês',
    details:
      'Sistema 5,5 kWp | Telhado fibrocimento | Payback estimado: 4,2 anos | Módulos mono PERC 555W',
  },
  {
    name: 'Hop Bros Cervejaria',
    city: 'Maceió – AL',
    quote: 'Projeto bem explicado, acompanhamento total. Recomendo demais.',
    photo: '/assets/clientes/hop.JPG',
    saving: 'R$ 1640 → R$ 120/mês',
    details:
      'Sistema 4,2 kWp | Telhado cerâmico | Payback estimado: 4,5 anos | Microinversores',
  },
  {
    name: 'Carlos',
    city: 'São Miguel dos Campos – AL',
    quote: 'Instalação rápida e acabamento top. Payback dentro do previsto.',
    photo: '/assets/clientes/3.JPG',
    saving: 'R$ 1.020 → R$ 150/mês',
    details:
      'Sistema 8,3 kWp | Estrutura alumínio | Payback: 4,0 anos | Garantia 12 anos (módulos)',
  },
]

export default function TestimonialsFlip() {
  const settings = useMemo(
    () => ({
      modules: [Autoplay, Pagination, A11y],
      spaceBetween: 16,
      slidesPerView: 1,
      loop: true,
      autoplay: { delay: 3600, disableOnInteraction: false },
      pagination: { clickable: true },
      breakpoints: {
        640: { slidesPerView: 1.1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 18 },
        1024: { slidesPerView: 3, spaceBetween: 20 },
      },
    }),
    []
  )

  return (
    <section
      id="depoimentos"
      className="w-full bg-white py-14 md:py-16 px-4 md:px-8 flex justify-center"
      aria-labelledby="depoimentos-title"
    >
      <div className="w-full xl:max-w-7xl">
        <header className="mb-8 md:mb-10">
          <h2
            id="depoimentos-title"
            className="text-[#4b5926] font-bold text-sm uppercase tracking-wider"
          >
            Depoimentos
          </h2>
          <p className="text-2xl md:text-[32px] leading-tight text-gray-800 mt-2">
            Resultados reais, economia de verdade
          </p>
          <p className="text-sm md:text-[15px] text-gray-600 mt-2">
            Passe o mouse no card (desktop) para ver os detalhes técnicos.
          </p>
        </header>

        <Swiper {...settings} aria-roledescription="carousel">
          {testimonials.map((t, i) => (
            <SwiperSlide key={i} aria-label={`Depoimento de ${t.name}`}>
              <FlipCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

function FlipCard({ t }: { t: Testimonial }) {
  // controla rotação Y no desktop (hover) e mantém 0° no mobile
  const rotateY = useMotionValue(0)
  const shadow = useTransform(
    rotateY,
    [0, 90, 180],
    [
      '0 10px 24px rgba(0,0,0,0.08)',
      '0 18px 36px rgba(0,0,0,0.12)',
      '0 10px 24px rgba(0,0,0,0.08)',
    ]
  )

  return (
    <div
      className="
        h-full [perspective:1200px] group
        cursor-pointer md:cursor-[inherit]
      "
    >
      <motion.div
        style={{ rotateY, boxShadow: shadow, transformStyle: 'preserve-3d' as any }}
        className="
          relative h-[300px] sm:h-[320px] rounded-2xl bg-transparent
          transition-transform duration-700
        "
        onMouseEnter={() => (rotateY.set(180))}
        onMouseLeave={() => (rotateY.set(0))}
      >
        {/* Frente */}
        <div
          className="
            absolute inset-0 rounded-2xl ring-1 ring-black/5 bg-gray-50 p-5
            [backface-visibility:hidden]
          "
          aria-label="Frente do depoimento"
        >
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full overflow-hidden ring-1 ring-black/5 bg-white">
              {t.photo ? (
                <img
                  src={t.photo}
                  alt={`Foto de ${t.name}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full grid place-content-center text-gray-400 text-sm">
                  img
                </div>
              )}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 leading-tight">{t.name}</p>
              <p className="text-xs text-gray-500">{t.city}</p>
            </div>
          </div>

          <p className="text-[15px] text-gray-700 mt-4">
            “{t.quote}”
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-1.5" aria-label="Avaliação 5 estrelas">
              <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
            </div>
            {t.saving && (
              <span className="text-xs font-medium text-[#2f3a17] bg-[#dfe6cf] px-2 py-1 rounded-md">
                Economia: {t.saving}
              </span>
            )}
          </div>
        </div>

        {/* Verso */}
        <div
          className="
            absolute inset-0 rounded-2xl ring-1 ring-black/5 bg-white p-5
            [transform:rotateY(180deg)] [backface-visibility:hidden]
            flex flex-col
          "
          aria-label="Verso do depoimento (detalhes técnicos)"
        >
          <p className="text-sm text-gray-800 font-semibold">Detalhes do sistema</p>
          <p className="text-sm text-gray-600 mt-2 flex-1">
            {t.details || 'Projeto dimensionado conforme consumo, orientação e inclinação do telhado.'}
          </p>

          <a
            href="https://wa.me/5582982220914?text=Olá!%20Quero%20um%20orçamento%20para%20energia%20solar."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center h-10 rounded-lg bg-[#4b5926] text-white text-sm font-medium hover:opacity-90"
          >
            Solicitar proposta
          </a>
        </div>
      </motion.div>

      {/* dica visual de flip (aparece em desktop) */}
      <div className="hidden md:flex justify-center mt-3 text-xs text-gray-500">
        Passe o mouse para ver detalhes ⤿
      </div>
    </div>
  )
}
