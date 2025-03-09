'use client'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { EffectFade, EffectCoverflow } from 'swiper/modules';


export const Projects = () => {

    const slides = [
        { id: 1, image: '/assets/foto1.jpeg' },
        { id: 2, image: '/assets/foto2.png' },
        { id: 3, image: '/assets/foto3.png' }
    ]

    return (
        <div className="w-full h-[100svh] snap-always snap-start flex flex-col items-center justify-center overflow-hidden">
            <div className="mb-14">
                <h1 className="inline-block bg-clip-text bg-gradient-to-r from-[#4b5926] to-[#98DB4D] text-[1.75rem] tracking-[-1px] font-bold text-center text-transparent md:text-3xl md:tracking-[-0.5px] 1.5xl:text-[2.1875rem] 1.5xl:tracking-[-0.5px]">Nossos Projetos</h1>
            </div>
            <div className="">
                <div className="relative w-11 h-3 mt-3 md:w-[3.5956rem] md:h-5 1.5xl:w-[4.6718rem] 1.5xl:h-6 1.5xl:mt-6">
                    <img className="absolute object-contain h-full w-full top-0 bottom-0 right-0 left-0" src="/assets/google.svg" />
                </div>
                <div className="relative flex items-center gap-1 ml-1 mb-16 md:ml-0 md:mb-6 lg:gap-0 lg:mb-7 1.5xl:mb-8">
                    <p className="absolute -left-3 top-1 font-semibold text-[0.5rem] md:text-[0.625rem] md:top-0 lg:-left-3 1.5xl:text-[0.8625rem] 1.5xl:-left-4 1.5xl:top-0.5">4.9</p>
                    <div className="relative w-12 h-2 mt-1 md:w-[4.31rem] md:h-2.5 1.5xl:w-[5.5625rem] 1.5xl:h-[0.8125rem]">
                        <img className="absolute object-contain h-full w-full top-0 bottom-0 right-0 left-0" src="/assets/stars.svg" />
                    </div>
                </div>
            </div>
            <div className="w-full">

                <div className="relative">
                    <Swiper
                        spaceBetween={50}
                        effect={'coverflow'}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={3}
                        autoplay={{ delay: 2000 }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                        }}
                        pagination={{ clickable: true }}
                        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                        className=" rounded-xl"
                    >
                        <SwiperSlide>
                            <img src='assets/foto1.jpeg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='assets/foto2.png' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='assets/foto4.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='assets/foto5.jpeg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='assets/foto6.jpg' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src='assets/foto2.png' />
                        </SwiperSlide>

                    </Swiper>
                </div>



            </div>
            <div className="w-full flex justify-center">
                <button className="max-w-[20.875rem] mt-32 md:mt-6 xl:mt-5 2xl:mt-10 1.5xl:mt-11 text-white bg-[#4b5926] font-semibold border border-2 rounded-full p-2 px-24">SIMULE GRÁTIS</button>
            </div>
        </div>
    )
}