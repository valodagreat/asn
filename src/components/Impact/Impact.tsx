"use client"
import React from 'react';
import { manual } from '../../styles/font';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Navigation, Autoplay } from "swiper/modules";
import Image from 'next/image';

const Impact = () => {
  return (
    <div className='bg-[#FFFFFF] lg:px-20 lg:py-12 md:p-10 p-6' >
        <h1 className={`pb-5 text-[#CC2630] font-medium lg:text-[86px] md:text-[60px] text-[19px] ${manual.className} `} >Our Impacts</h1>
        {/* <div>
            <Swiper
                spaceBetween={20}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
                className="mySwiper"
                loop={true}
                modules={[Navigation, Autoplay]}
            >
              <SwiperSlide><Image src={"./../Rectangle 10.svg"} alt="Slider" priority width={651} height={658} /></SwiperSlide>
              <SwiperSlide><Image src={"./../Rectangle 11.svg"} alt="Slider" priority width={651} height={658} /></SwiperSlide>
              <SwiperSlide><Image src={"./../Rectangle 10.svg"} alt="Slider" priority width={651} height={658} /></SwiperSlide>
              <SwiperSlide><Image src={"./../Rectangle 11.svg"} alt="Slider" priority width={651} height={658} /></SwiperSlide>
            </Swiper>
        </div> */}
    </div>
  )
}

export default Impact