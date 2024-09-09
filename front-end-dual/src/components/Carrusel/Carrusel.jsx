import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';    
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import carrucel1 from "../../assets/img/Property 1=Carrusel1.png";
import carrusel2 from "../../assets/img/Property 1=Carrusel2.png";
import carrusel3 from "../../assets/img/Property 1=Carrusel3.png";

import './Carrusel.css';

const Carrusel = () => {
  return (
    <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={20}  
    slidesPerView={1}  
    navigation
    pagination={{ clickable: true }}
    className='myswiper'

    >
      <SwiperSlide>
            <div className="correcciones">
                    <img src={carrucel1} alt="" />
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="correcciones">
                    <img src={carrusel2} alt="" />
            </div>
      </SwiperSlide>
      <SwiperSlide>
            <div className="correcciones">
                    <img src={carrusel3} alt="" />
            </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carrusel;