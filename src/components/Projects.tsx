'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

type Project = {
  src: string
  alt: string
  city: string
  kwp: string
  saving?: string // ex.: "R$ 820 → R$ 110/mês"
}

const projects: Project[] = [
  { src: '/assets/1.jpg', alt: 'Projeto 1', city: 'Maceió – AL', kwp: '5,5 kWp', saving: 'R$ 820 → R$ 110/mês' },
  { src: '/assets/2.jpg', alt: 'Projeto 2', city: 'Arapiraca – AL', kwp: '4,2 kWp', saving: 'R$ 640 → R$ 95/mês' },
  { src: '/assets/3.jpg', alt: 'Projeto 3', city: 'Rio Largo – AL', kwp: '6,1 kWp' },
  { src: '/assets/4.jpg', alt: 'Projeto 4', city: 'São Miguel dos Campos – AL', kwp: '8,3 kWp', saving: 'R$ 1.020 → R$ 150/mês' },
  { src: '/assets/5.jpg', alt: 'Projeto 5', city: 'Marechal – AL', kwp: '3,8 kWp' },
  { src: '/assets/6.jpg', alt: 'Projeto 6', city: 'Paripueira – AL', kwp: '5,0 kWp' },
  { src: '/assets/7.jpg', alt: 'Projeto 7', city: 'Barra de São Miguel – AL', kwp: '6,6 kWp' },
  { src: '/assets/8.jpg', alt: 'Projeto 8', city: 'Maceió – AL', kwp: '4,6 kWp' },
]

export const Projects = () => {
  const [open, setOpen] = useState<Project | null>(null)

  return (
    <section id="projetos" className="w-full bg-white py-14 md:py-16 px-4 md:px-8 flex justify-center">
      <div className="w-full xl:max-w-7xl">
        {/* header */}
        <header className="mb-8 md:mb-10">
          <p className="text-[#4b5926] font-bold text-sm uppercase tracking-wider">Projetos</p>
          <h2 className="text-2xl md:text-[32px] leading-tight text-gray-800 mt-2">
            Clientes que economizam de verdade <span aria-hidden>💡</span>
          </h2>
          <p className="text-sm md:text-[15px] text-gray-600 mt-2">
            Instalações reais no estado de Alagoas. Passe o mouse para ver os detalhes e clique para ampliar.
          </p>
        </header>

        {/* grid de imagens */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((p, i) => (
            <figure
              key={i}
              className="group relative rounded-2xl overflow-hidden ring-1 ring-black/5 bg-gray-100 aspect-[4/3] cursor-zoom-in"
              onClick={() => setOpen(p)}
            >
              <img
                src={p.src}
                alt={p.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                loading="lazy"
              />
              {/* overlay */}
              <figcaption className="absolute inset-0 flex flex-col justify-end p-3 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition">
                <p className="text-white text-sm font-semibold">
                  {p.city} • {p.kwp}
                </p>
                {p.saving && (
                  <span className="text-[11px] text-white/90">
                    Economia estimada: {p.saving}
                  </span>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* LIGHTBOX simples */}
      {open && (
        <div
          className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-[2px] grid place-items-center p-4"
          onClick={() => setOpen(null)}
          role="dialog"
          aria-label={`Foto ampliada: ${open.alt}`}
        >
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setOpen(null)}
              className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm"
              aria-label="Fechar"
            >
              Fechar ✕
            </button>
            <img src={open.src} alt={open.alt} className="w-full h-auto rounded-2xl ring-1 ring-white/10" />
            <div className="mt-3 text-white/90 text-sm">
              <strong>{open.city}</strong> • {open.kwp}
              {open.saving && <> — <span>Economia estimada: {open.saving}</span></>}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
