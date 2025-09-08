'use client'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide, } from 'swiper/react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { EffectFade, EffectCoverflow } from 'swiper/modules';


export const Projects = () => {

    const slides = [
        { id: 1, image: '/assets/1.jpg' },
        { id: 2, image: '/assets/2.jpg' },
        { id: 3, image: '/assets/3.jpg' },
        { id: 4, image: '/assets/4.jpg' },
        { id: 5, image: '/assets/5.jpg' },
        { id: 6, image: '/assets/6.jpg' },
        { id: 7, image: '/assets/7.jpg' }
    ]

    return (
        <div id="projects" className="w-full overflow-hidden py-10 bg-white px-4 md:flex md:justify-center md:items-center ">
            <div className='xl:max-w-7xl'>

                <div className="w-full h-full flex flex-col justify-center order-2 lg:order-1">
                    <h1 className="text-[#4b5926] font-bold text-lg uppercase mb-6">Projetos</h1>
                    <h2 className="w-full text-2xl md:text-[35px] leading-[30px] lg:text-[30px] lg:leading-[35px] 2xl:text-[35px] tracking-[-2.5%] text-gray-600 mb-10 md:mb-10 lg:mb-10 lg:text-left lg:relative lg:top-0 lg:w-full lg:px-0">Clientes inteligentes que decidicidiram economizar de verdade 💸 e ainda ajudar o planeta 🌎</h2>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={7}
                    loop={true}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    speed={3000}

                    spaceBetween={10}
                    breakpoints={{
                        320: { slidesPerView: 2 },
                        640: { slidesPerView: 3 },
                        1024: { slidesPerView: 7 },
                    }}
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={slide.id}>
                            <div className="w-full flex justify-center">
                                <img
                                    src={slide.image}
                                    alt={`Serviço ${idx + 1}`}
                                    className="rounded-xl w-64 h-64 md:h-84 object-cover shadow-lg transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="w-full text-white bg-[#4b5926] font-semibold border border-2 rounded-full p-2 mt-9"><a target='_blank' href="https://api.whatsapp.com/send?l=pt&phone=5582982220914">FAZER ORÇAMENTO</a></button>
            </div>
        </div>
    )
}