'use client'
import { motion } from "framer-motion"

export const About = () => {
    return (
        <div id="about" className="w-full md:h-[100svh] flex md:snap-always md:snap-start justify-center md:overflow-hidden pt-16 px-4 md:px-8 bg-white">
            <div className="w-full xl:max-w-7xl flex items-center justify-center">

                <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-2 lg:relative pb-12">
                    <div className="w-full h-full flex flex-col justify-center order-2 lg:order-1">
                        <h1 className="text-[#4b5926] font-bold text-lg uppercase mb-6">Sobre nós</h1>
                        <h2 className="w-full text-2xl md:text-[35px] leading-[30px] lg:text-[30px] lg:leading-[35px] 2xl:text-[35px] tracking-[-2.5%] text-gray-600 mb-6 md:mb-10 lg:mb-10 lg:text-left lg:relative lg:top-0 lg:w-full lg:px-0">
                            Nossos Valores
                        </h2>
                        <h4 className="text-sm leading-[25px] mb-4 text-black">A Solar Greenergy nasceu da necessidade de tornar acessível a todos o direito de produção de sua própria
                            energia, usando todo potencial disponível para geração de energia solar. E nossa missão é oferecer os
                            serviços de mais alta qualidade para alcançar sua satisfação com sua própria usina de energia solar.
                            Trabalhamos para lhe oferecer os melhores produtos disponíveis no mercado e a melhor execução do seu
                            projeto, com uma equipe capacitada constantemente para oferecer uma experiencia única, do início do projeto
                            até a homologação do sistema.
                        </h4>
                        <h2 className="w-full text-2xl md:text-[35px] leading-[30px] lg:text-[30px] lg:leading-[35px] 2xl:text-[35px] tracking-[-2.5%] text-gray-600 mb-6 md:mb-10 lg:mb-10 lg:text-left lg:relative lg:top-0 lg:w-full lg:px-0">
                            Nosso Compromisso
                        </h2>
                        <div className="font-normal">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                                className="flex">
                                <div className="size-20 flex justify-center items-center px-1">
                                    <img className="" src="/assets/conquista.png" />
                                </div>
                                <div className="flex flex-1 flex-col px-2">
                                    <h3 className="text-[#4b5926] font-bold text-lg">Confiança se conquista</h3>
                                    <p className="">Atuamos em toda a região nordeste,
                                        temos mais de 300 projetos
                                        homologados.
                                    </p>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                                className="flex">
                                <div className="size-20 flex justify-center items-center px-1">
                                    <img src="/assets/negocio.png" />
                                </div>
                                <div className="flex flex-1 flex-col px-2">
                                    <h3 className="text-[#4b5926] font-bold text-lg">Bom negócio</h3>
                                    <p className="">Você será um empresário da energia:
                                        Você investe, tem o retorno do capital
                                        e depois o lucro.
                                         </p>
                                </div>
                            </motion.div>
                        </div>
                        <button className="bg-[#4b5926] text-white px-4 py-2 rounded-lg w-full hover:bg-opacity-90 transition w-full"><a className="w-full" target="_blank" href="https://api.whatsapp.com/send?l=pt&phone=5582982220914">SABER MAIS</a></button>
                    </div>
                    <div className="w-full h-full relative flex justify-end order-1 lg:order-2">
                        <div className="relative w-full h-full rounded-lg lg:max-w-[480px]  min-h-[200px]">
                            <img src="/assets/sg.svg" className="object-cover object-[50%_60%] lg:object-center absolute h-full w-full left-0 top-0 right-0 bottom-0" />
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    )
}