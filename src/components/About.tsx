export const About = () => {
    return (
        <div id="about" className="w-full md:h-[100svh] flex md:snap-always md:snap-start justify-center md:overflow-hidden pt-16 px-4 md:px-8 bg-white">
            <div className="w-full xl:max-w-7xl flex items-center justify-center">
                
                <div className="w-full h-full flex flex-col lg:grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-2 lg:relative pb-12">
                    <div className="w-full h-full flex flex-col justify-center order-2 lg:order-1">
                        <h1 className="text-[#4b5926] font-bold text-lg uppercase mb-6">Sobre nós</h1>
                        <h2 className="w-full text-2xl md:text-[35px] leading-[30px] lg:text-[30px] lg:leading-[35px] 2xl:text-[35px] tracking-[-2.5%] text-gray-600 mb-10 md:mb-10 lg:mb-10 lg:text-left lg:relative lg:top-0 lg:w-full lg:px-0">Solar Greenergy: Líder em Soluções Sustentáveis</h2>
                        <h4 className="text-sm leading-[25px] mb-4 text-gray-600">A Solar Greenergy, fundada em 2021, busca promover a independência financeira para pessoas e empresas por meio do desenvolvimento tecnológico e sustentável.
                            Especializados em usinas solares fotovoltaicas, oferecemos um serviço completo, incluindo venda, homologação, instalação, monitoramento e manutenção.
                        </h4>
                        <ul className="font-bold text-sm leading-[14px] md:text-base md:leading-[19px] xl:text-lg xl:leading-[22px] text-black space-y-2.5 md:space-y-4 2xl:space-y-6">
                            <li className="flex items-center "><span className="pr-2 size-7 flex"><img src="/assets/check.svg"/></span>Certificações FEBRABAN e ABECIP</li>
                            <li className="flex items-center "><span className="pr-2 size-7 flex"><img src="/assets/check.svg"/></span>150+ usinas instaladas</li>
                            <li className="flex items-center "><span className="pr-2 size-7 flex"><img src="/assets/check.svg"/></span>Integração de usinas solares fotovoltaicas</li>
                            
                        </ul>
                        <button className="w-full text-white bg-[#4b5926] font-semibold border border-2 rounded-full p-2 mt-9">LEIA MAIS</button>
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