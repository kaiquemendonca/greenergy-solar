export const Footer = () => {
    return (
        <div className="w-full flex flex-col items-center bg-[#F9F9F9] font-myriad antialiased px-4 pb-[45px] md:px-8 md:pb-[26px] lg:px-8 lg:pb-[26px] snap-always snap-start pt-20">
            <div className="w-full max-w-screen-xl flex flex-col border-b border-solid border-gray-100 pb-6 mb-4 md:flex-row md:gap-8 md:pb-8 md:mb-8 lg:gap-[38px]">
                <div className="w-full">
                    <a className="" href="/">
                        <img src="/assets/solar-fernanda3.svg" />
                    </a>
                    <p className="text-sm leading-[1.375rem] font-semibold text-v3-gray-400 my-[27px] md:text-base md:leading-[1.375rem] md:tracking-[-0.2px] md:mb-[25px] lg:max-w-[534px]">
                        Solicite um orçamento gratuito e reduza a sua conta de luz em até 90%.
                    </p>
                </div>
                <div className="w-full max-w-[360px] xl:max-w-[420px] md:mt-4">
                    <div className="hidden md:flex md:flex-col md:mb-8">
                        <p className="text-xs leading-5 font-bold text-gray-400 mb-4 md:text-base md:leading-[1.375rem] md:mb-0">Redes Sociais</p>
                        <div className="w-full flex items-center justify-between md:ml-[-14px]]">
                            <a href="https://api.WhatsApp.com/send?phone=82991076223">
                                <img className="w-8 h-8 md:w-16 md:h-16" src="/assets/icon-whatsapp.svg" />
                            </a>
                            <a href="">
                                <img className="w-8 h-8 md:w-16 md:h-16" src="/assets/icon-instagram.svg" />
                            </a>
                            <a href="">
                                <img className="w-8 h-8 md:w-16 md:h-16" src="/assets/icon-linkedin.svg" />
                            </a>
                            <a href="">
                                <img className="w-8 h-8 md:w-16 md:h-16" src="/assets/icon-facebook.svg" />
                            </a>

                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full flex flex-col md:hidden">
                <div className="border-b border-solid border-gray-100 pb-4 mb-4">
                    <p className="text-xs leading-5 font-bold text-gray-400 mb-4 md:text-base md:leading-[1.375rem] md:mb-0">Redes Sociais</p>
                    <div className="w-full flex items-center justify-between md:ml-[-14px]">
                        <a href="https://api.WhatsApp.com/send?phone=82991076223">
                            <img className="w-8 h-8 md:w-16 md:h-16" src="/assets/icon-whatsapp.svg" />
                        </a>
                        <a href="">
                            <img className="w-8 h-8 md:w-16 md:h-16" src="/assets/icon-instagram.svg" />
                        </a>
                        <a href="">
                            <img className="w-8 h-8 md:w-16 md:h-16" src="/assets/icon-linkedin.svg" />
                        </a>
                        <a href="">
                            <img className="w-8 h-8 md:w-16 md:h-16" src="/assets/icon-facebook.svg" />
                        </a>

                    </div>
                </div>

                <div className="flex flex-col border-b border-solid border-gray-100 gap-4 pb-4 mb-4"></div>
            </div>
            <p className="w-full max-w-screen-xl text-[0.625rem] leading-[0.875rem] text-gray-300 text-center md:font-semibold md:text-[0.8125rem] md:leading-[1.125rem] md:text-gray-200 md:text-left"></p>
        </div>
    )
}