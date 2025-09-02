export const Footer = () => {
    return (
        <>
            <div id="footer" className="w-full flex flex-col items-center justify-center bg-[#F9F9F9] xl:flex-row mt-16 bg-white">
                <div className="w-full max-w-screen-xl flex flex-col  border-b border-solid border-gray-100 pb-6 mb-4 md:flex-row md:gap-8 md:pb-8 md:mb-8 lg:gap-[38px] xl:flex-row xl:justify-between">
                    <div className="flex flex-1 mb-7 items-center justify-center lg:mb-0">
                        <img className="" src="/assets/solar 1.png" />
                    </div>
                    <div className="flex order-3 flex-1 mb-7 items-center justify-center lg:order-2 lg:mb-0">
                        <div className="w-2/3">
                            <h4 className="text-lg font-bold mb-3 text-black" >Solicite um orçamento gratuito e reduza a sua conta de energia em até 90%</h4>
                            <p className="w-full max-w-screen-xl text-[0.625rem] leading-[0.875rem] text-gray-700 text-center md:font-semibold md:text-[0.8125rem] md:leading-[1.125rem] md:text-gray-700 md:text-left">
                                Kaíque Mendonça © 2025.<br /> Todos os direitos reservados.
                            </p>
                        </div>
                    </div>
                    <div className="mb-7 order-2 flex flex-1 items-center justify-center lg:order-3 lg:mb-0">
                        <div className="w-2/3 flex justify-around">
                            <a className="size-7" target="_blank" href=""><img className="" src="/assets/icon-facebook.svg" /></a>
                            <a className="size-7" target="_blank" href="https://www.instagram.com/solar.greenergyal/"><img className="" src="/assets/icon-instagram.svg" /></a>
                            <a className="size-7" target="_blank" href="https://api.whatsapp.com/send?l=pt&phone=5582982220914"><img className="" src="/assets/icon-whatsapp.svg" /></a>


                        </div>
                    </div>
                </div>

            </div>
            <div className="size-14 z-90 fixed bottom-6 right-6 lg:bottom-14 lg:right-14 animate-jump animate-infinite animate-duration-1000">
                <a target="_blank" href="https://api.whatsapp.com/send?l=pt&phone=5582982220914">
                    <img className="w-full" src="/assets/icons-whatsapp1.svg" />
                </a>
            </div>

        </>


    )
}