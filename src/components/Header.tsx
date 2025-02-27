'use client'
import gsap from "gsap";
import { useRef, useState } from "react"

export const Header = () => {


    const [modalMenu, setModalMenu] = useState(false);

    const menuButton1 = useRef(null);
    const menuButton2 = useRef(null);
    const menuButton3 = useRef(null);
    const menuTab = useRef(null);
    const tl = gsap.timeline();





    const buttonMenu = () => {


        if (!modalMenu) {
            setModalMenu(true);
            tl.play();



        } else {
            setModalMenu(false)
        }

    }

    if (modalMenu) {
        tl.to(menuButton1.current, { top: 5, rotation: 45, duration: 0 }, 0)
        tl.to(menuButton2.current, { opacity: 0, duration: 0 }, 0)
        tl.to(menuButton3.current, { top: 5, rotation: -45, duration: 0 }, 0)

    }

    else {
        tl.to(menuButton1.current, { top: 0, rotation: 0, duration: 0 }, 0)
        tl.to(menuButton2.current, { top: 5, opacity: 100, duration: 0 }, 0)
        tl.to(menuButton3.current, { top: 10, rotation: 0, duration: 0 }, 0)
    }



    return (
        <div className="w-full min-h-[56px] flex flex-col touch-none z-50 h-14 fixed top-0">

            <div className="w-full h-14 min-h-[56px] flex flex-col items-center bg-white z-50 xl:px-8">
                <div className="w-full h-full max-w-7xl max-h-[56px] flex items-center justify-between md:block md:grid md:grid-cols-[100px_1fr_28px] md:grid-cols-3 py-2 px-4 md:px-8 xl:px-0">
                    <div onClick={buttonMenu} className="order-2 md:order-1 flex items-center justify-end md:justify-start xl:px-8">
                        <div className="w-full md:w-auto group flex items-start justify-center gap-2 cursor-pointer md:grid-cols-2 md:px-8 xl:px-0">
                            <div className="w-3.5 relative h-3">
                                <div ref={menuButton1} className="w-full h-0.5 absolute top-0 left-0 bg-black group-hover:bg-gray-800 rounded transition-all duration-500"></div>
                                <div ref={menuButton2} className="w-full h-0.5 absolute top-[5px] left-0 bg-black group-hover:bg-gray-800 rounded transition-all duration-500"></div>
                                <div ref={menuButton3} className="w-full h-0.5 absolute bottom-0 left-0 bg-black group-hover:bg-gray-800 rounded transition-all duration-500"></div>
                            </div>
                            <p className="hidden md:block text-base leading-4 text-black group-hover:text-gray-800 font-semibold tracking-[1.2px] transition-all duration-300">
                                MENU
                            </p>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex flex-col items-center justify-center">
                        <h1 className="h-7">
                            <a className="inline-block">
                                <img height={28} width={100} alt="Solar Greenergy" src="/assets/solar-fernanda3.svg" />
                            </a>
                        </h1>
                    </div>

                </div>
            </div>
            {modalMenu &&
                <div ref={menuTab} className="animate-fade animate-once animate-duration-[1000ms] w-full absolute flex flex-col items-center bg-white opacity-100  z-40 pt-14 xl:px-8 md:border-b-[1px] md:border-gray-50">
                    <div className="w-full flex flex-col items-center overflow-hidden">
                        <div className="w-full max-w-7xl flex flex-col py-2 px-4 md:px-8 md:pb-3 xl:px-0">
                            <div className="w-full h-[1px] bg-[#00000026]" ></div>
                            <ul className="p-3 text-sm md:text-xl text-gray-500 md:flex md:justify-between md:pt-5">
                                <li className="py-1 md:px-5 cursor-pointer">Que Somos</li>
                                <li className="py-1 md:px-5 cursor-pointer">Soluções</li>
                                <li className="py-1 md:px-5 cursor-pointer">Depoimentos</li>
                                <li className="py-1 md:px-5 cursor-pointer">Projetos</li>
                                <li className="py-1 md:px-5 cursor-pointer">Calculadora</li>
                                <li className="py-1 md:px-5 cursor-pointer">Contato</li>
                            </ul>
                        </div>

                    </div>

                </div>
            }



        </div>
    )
}