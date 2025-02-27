'use client'
import { useState } from "react";

export const Main = () => {



    return (
        <div className="w-full flex flex-col scroll-smooth">
            <div className="w-full h-[200svh] md:h-screen md:snap-always md:snap-start relative flex md:px-8">
                <img className="brightness-50  md:brightness-100 object-cover object-right-top -z-20 absolute top-0 bottom-0 left-0 right-0 w-full h-screen"
                    src="/assets/bg-painel.jpg"
                    decoding="async"
                    data-nimg="fill" />
                <div className="w-full max-w-[1280px] mx-auto md:flex md:items-center lg:px-0 xl:flex xl:items-center">
                    <div className="w-full flex flex-col mx-auto md:flex-row md:justify-between md:mt-[56px]">
                        <div className="relative h-[100svh] md:h-full snap-always snap-start md:snap-align-none flex pt-14 md:pt-0 lg:flex">
                            <div className="w-full max-w-[305px] md:hidden bottom-24 left-1/2 -translate-x-1/2 absolute self-center">
                                <button className="w-full text-white font-semibold border border-2 rounded-full p-1">FAÇA UMA SIMULAÇÃO</button>
                            </div>
                            <div className="px-4 md:px-0 mb-10 lg:mb-0 lg:mr-[4.8rem]">
                                <div className="w-full">
                                    <p className=" text-[35px] leading-[43px] tracking-wide font-normal text-white md:text-[40px] md:leading-[42px] lg:text-[40px] lg:leading-[60px] xl:text-[50px] mt-[120px] md:mt-5 lg:mt-[2.25rem]">
                                        Sua energia,
                                        <br></br>
                                        seu futuro brilhante.
                                        <br></br>
                                        Faça o sol trabalhar para você!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:flex md:justify-end md:max-w-[360px] md:h-[600px] md:overflow-hidden lg:h-[614px] lg:justify-end xl:justify-center xl:h-[461px] 1.5xl:h-[614px] lg:max-w-[452px] xl:max-w-[360px] 1.5xl:max-w-[452px]">
                            <div className="w-full">
                                <div className="w-full snap-always snap-start md:snap-align-none h-[100svh] bg-gray-100 pt-16 pb-4 px-4 overflow-hidden md:h-full md:p-3 md:rounded-2xl lg:pt-7 lg:overflow-visible xl:pt-3 1.5xl:pt-7">
                                    <div className="w-full h-full flex flex-col">
                                        <p className="text-[1.75rem] leading-9 font-semibold text-gray-600 text-center xl:text-xl xl:leading-none 1.5xl:text-[1.75rem] xl:mb-1 ">Calculadora Solar</p>
                                        <p className="text-xs leading-[0.875rem] text-gray-500 text-center lg:text-xs xl:text-[0.625rem] xl:leading-[0.875rem] 1.5xl:text-xs 1.5xl:leading-[0.875rem]">Simule seu gerador de energia solar</p>
                                        <div className="mt-3">
                                            <div className="grid grid-cols-2 gap-x-[0.125rem] px-5 xl:gap-x-1 xl:px-0">
                                                <div className="">
                                                    <p className="font-myriad text-sm leading-none lg:text-sm lg:leading-none xl:text-xs xl:leading-none 1.5xl:text-sm 1.5xl:leading-none text-center uppercase text-[#4b5926] font-semibold">Simulação</p>
                                                    <div className="w-full h-[5px] mt-0.5 rounded-[5px] lg:h-[5px] xl:h-0.5 1.5xl:h-[5px] bg-[#4b5926]"></div>
                                                </div>
                                                <div className="">
                                                    <p className="font-myriad text-sm leading-none lg:text-sm lg:leading-none xl:text-xs xl:leading-none 1.5xl:text-sm 1.5xl:leading-none text-center uppercase text-gray-300 font-semibold">Resumo</p>
                                                    <div className="w-full h-[5px] mt-0.5 rounded-[5px] lg:h-[5px] xl:h-0.5 1.5xl:h-[5px] bg-gray-300"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex-1 py-4 px-[15.5px] overflow-hidden bg-white rounded-lg lg:py-4 lg:px-8 xl:pt-3 xl:pb-2 xl:px-[15.5px] 1.5xl:px-8 1.5xl:py-4">
                                            <form className="flex flex-col justify-between md:gap-[30px] h-full xl:items-center">
                                                <div className="w-full flex flex-col gap-y-4 1.5xl:gap-y-5">
                                                    <div className="flex gap-3">
                                                        <div className="relative flex flex-col flex-[1_1_200px] lg:flex-[1_1_150px] xl:flex-[1_1_168px]">
                                                            <label className="font-myriad ml-4 text-xs pb-0.5 font-medium lg:text-xs lg:leading-[0.875rem] xl:text-[0.625rem] xl:leading-3 1.5xl:text-xs 1.5xl: 1.5xl:leading-[0.875rem] uppercase tracking-wide">CEP</label>
                                                            <input className="font-myriad rounded-full w-full h-[32px] px-4 pt-[8px] pb-[6px] text-base leading-none border border-v3-gray-250 rounded-4xl lg:h-[32px] lg:text-xs lg:leading-none placeholder:uppercase placeholder:text-v3-gray-250 disabled:bg-[#E3E3E3] disabled:text-[#0000004D] disabled:border-v3-gray-250" placeholder="DIGITE SEU CEP" type="text" name="CEP"></input>
                                                        </div>
                                                        <div className="relative flex flex-col flex-[0_1_73px] lg:flex-[0_1_112px] xl:flex-[1_1_52px]">
                                                            <label className="font-myriad ml-4 text-xs pb-0.5 font-medium lg:text-xs lg:leading-[0.875rem] xl:text-[0.625rem] xl:leading-3 1.5xl:text-xs 1.5xl: 1.5xl:leading-[0.875rem] uppercase tracking-wide">UF</label>
                                                            <input className="font-myriad w-full rounded-full h-[32px] px-4 pt-[8px] pb-[6px] text-base leading-none border border-v3-gray-250 rounded-4xl lg:h-[32px] lg:text-xs lg:leading-none placeholder:uppercase placeholder:text-v3-gray-250 disabled:bg-[#E3E3E3] disabled:text-[#0000004D] disabled:border-v3-gray-250" disabled placeholder="UF" name="state"></input>
                                                        </div>
                                                    </div>
                                                    <div className="relative flex flex-col w-full">
                                                        <label className="font-myriad ml-4 text-xs pb-0.5 font-medium lg:text-xs lg:leading-[0.875rem] xl:text-[0.625rem] xl:leading-3 1.5xl:text-xs 1.5xl: 1.5xl:leading-[0.875rem] uppercase tracking-wide">VALOR DA CONTA DE LUZ</label>
                                                        <input className="font-myriad w-full rounded-full h-[32px] px-4 pt-[8px] pb-[6px] text-base leading-none border border-v3-gray-250 rounded-4xl lg:h-[32px] lg:text-xs lg:leading-none placeholder:uppercase placeholder:text-v3-gray-250 disabled:bg-[#E3E3E3] disabled:text-[#0000004D] disabled:border-v3-gray-250" placeholder="R$ 0,00" value={0}></input>
                                                    </div>
                                                    <div className="flex flex-col w-full">
                                                        <label className="font-myriad ml-4 text-xs pb-0.5 font-medium lg:text-xs lg:leading-[0.875rem] xl:text-[0.625rem] xl:leading-3 1.5xl:text-xs 1.5xl: 1.5xl:leading-[0.875rem] uppercase tracking-wide">CONCESSIONÁRIA</label>
                                                    </div>
                                                    <div className="relative flex flex-col w-full">
                                                        <label className="font-myriad ml-4 text-xs pb-0.5 font-medium lg:text-xs lg:leading-[0.875rem] xl:text-[0.625rem] xl:leading-3 1.5xl:text-xs 1.5xl: 1.5xl:leading-[0.875rem] uppercase tracking-wide">E-MAIL</label>
                                                        <input className="font-myriad rounded-full w-full h-[32px] px-4 pt-[8px] pb-[6px] text-base leading-none border border-v3-gray-250 rounded-4xl lg:h-[32px] lg:text-xs lg:leading-none placeholder:uppercase placeholder:text-v3-gray-250 disabled:bg-[#E3E3E3] disabled:text-[#0000004D] disabled:border-v3-gray-250" name="email" placeholder="DIGITE SEU EMAIL"></input>
                                                    </div>
                                                </div>
                                                <div className="w-full">
                                                    <button className="w-full text-white bg-[#4b5926] font-semibold border border-2 rounded-full p-1">SIMULE GRÁTIS</button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}