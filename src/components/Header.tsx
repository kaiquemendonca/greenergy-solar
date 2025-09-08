'use client'
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const Header = () => {
    const [modalMenu, setModalMenu] = useState(false)

    // variants no estilo do exemplo (stagger + states)
    const iconVariants = {
        open: { transition: { staggerChildren: 0.04, delayChildren: 0 } },
        closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
    }

    const line1 = {
        closed: { rotate: 0, y: -5, transition: { stiffness: 600, damping: 30 } },
        open: { rotate: 45, y: 0, transition: { stiffness: 600, damping: 30 } }
    }
    const line2 = {
        closed: { opacity: 1, transition: { duration: 0.15 } },
        open: { opacity: 0, transition: { duration: 0.15 } }
    }
    const line3 = {
        closed: { rotate: 0, y: 5, transition: { stiffness: 600, damping: 30 } },
        open: { rotate: -45, y: 0, transition: { stiffness: 600, damping: 30 } }
    }

    return (
        <div className="w-full min-h-[56px] flex flex-col z-[99] h-14 fixed top-0">
            <div className="w-full h-14 min-h-[56px] flex flex-col items-center bg-white z-50 xl:px-8">
                <div className="w-full h-full max-w-7xl max-h-[56px] flex items-center justify-between md:block md:grid md:grid-cols-[100px_1fr_28px] md:grid-cols-3 py-2 px-4 md:px-8 xl:px-0">

                    {/* BOTÃO com variants */}
                    <div className="order-2 md:order-1 flex items-center justify-end md:justify-start xl:px-8">
                        <button
                            type="button"
                            aria-expanded={modalMenu}
                            aria-label="Abrir menu"
                            onClick={() => setModalMenu(v => !v)}
                            className="w-full md:w-auto group flex items-center gap-2 cursor-pointer md:px-0"
                        >
                            <motion.div
                                className="relative w-5 h-4 flex items-center justify-center"
                                initial={false}
                                animate={modalMenu ? "open" : "closed"}
                                variants={iconVariants}
                            >
                                <motion.span
                                    variants={line1}
                                    className="absolute block w-5 h-0.5  bg-black rounded"
                                />
                                <motion.span
                                    variants={line2}
                                    className="absolute block w-5 h-0.5 bg-black rounded"
                                />
                                <motion.span
                                    variants={line3}
                                    className="absolute block w-5 h-0.5 bg-black rounded"
                                />
                            </motion.div>

                            <p className="hidden md:block text-base leading-4 text-black group-hover:text-gray-800 font-semibold tracking-[1.2px] transition-all duration-300">
                                MENU
                            </p>
                        </button>
                    </div>

                    {/* LOGO */}
                    <div className="order-1 md:order-2 flex flex-col items-center justify-center">
                        <h1 className="h-7">
                            <a className="inline-block">
                                <img height={28} width={100} alt="Solar Greenergy" src="/assets/solar 1.png" />
                            </a>
                        </h1>
                    </div>
                </div>
            </div>

            {/* MENU */}
            <AnimatePresence>
                {modalMenu && (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0, scale: 0.98, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: -8 }}
                        transition={{ duration: 0.28 }}
                        className="absolute left-0 top-14 w-full flex flex-col items-center bg-white z-[90] pt-6 xl:px-8 md:border-b-[1px] md:border-gray-50"
                    >
                        <div className="w-full flex flex-col items-center overflow-hidden">
                            <div className="w-full max-w-7xl flex flex-col py-2 px-4 md:px-8 md:pb-3 xl:px-0">
                                <div className="w-full h-[1px] bg-[#00000026]" />
                                <ul className="p-3 text-sm md:text-xl text-gray-500 md:flex md:justify-between md:pt-5">
                                    <li className="py-1 md:px-5 cursor-pointer hover:text-[#4b5926]"><a href="#about">Quem Somos</a></li>
                                    <li className="py-1 md:px-5 cursor-pointer hover:text-[#4b5926]"><a href="#projects">Projetos</a></li>
                                    <li className="py-1 md:px-5 cursor-pointer hover:text-[#4b5926]"><a href="#calc">Calculadora</a></li>
                                    <li className="py-1 md:px-5 cursor-pointer hover:text-[#4b5926]"><a href="#footer">Contato</a></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
