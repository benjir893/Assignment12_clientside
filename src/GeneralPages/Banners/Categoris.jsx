import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import medlab from '../../assets/medlab.jpeg';
import dental from '../../assets/dentallab.jpg';
import xray from '../../assets/xraylab.jpg';
import diagnostic from '../../assets/diagnosticlab.jpg';
import drugtest from '../../assets/drugtestlab.jpeg'

const Categoris = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={medlab} alt="" />
        <h1 className="-mt-10 text-center font-Arima font-semibold">medical laboratory</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={dental} alt="" />
        <h1 className="-mt-10 text-center font-Arima font-semibold">dental laboratory</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={xray} alt="" />
        <h1 className="-mt-10 text-center font-Arima font-semibold">X-ray laboratory</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={diagnostic} alt="" />
        <h1 className="-mt-10 text-center font-Arima font-semibold">diagnostic laboratory</h1>
      </SwiperSlide>
      <SwiperSlide>
        <img src={drugtest} alt="" />
        <h1 className="-mt-10 text-center font-Arima font-semibold">drug testing laboratory</h1>
      </SwiperSlide>
    
    </Swiper>
  );
};

export default Categoris;
