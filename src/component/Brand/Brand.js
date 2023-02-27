import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"
import images1 from "../images/logo6.png";
import images2 from "../images/logo4.png";
import images3 from "../images/logo3.png";
import images4 from "../images/logo2.png";
import images5 from "../images/logo1.png";
import images6 from "../images/logo5.png";

const Brand = () => {
  return (
    <div>
        <h1 className="text-3xl text-black font-bold text-center mt-4">Our Partner</h1>
        <div className="lg:pl-10 hidden lg:flex mt-10">
      
      <Swiper
        modules={[Navigation, Pagination,  A11y, Autoplay]}
        spaceBetween={5}
        slidesPerView={6}
        autoplay ={{delay: 1000}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
         
          <div className="col-1 w-1/2 ">
          <img className="w-auto pt-7 pb-8 bg-white p-2" src={images1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
          <img className="w-auto pt-8 pb-8 bg-white p-2" src={images2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
          <img className="w-auto bg-white p-2 pt-10 pb-10" src={images3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
          <img className="w-auto bg-white p-2" src={images4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
        <div className="col-1 w-1/2">
            <img className="w-auto bg-white p-2 pt-3 pb-3" src={images5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
        <div className="col-1 w-1/2">
            <img className="w-auto  pb-10" src={images6} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto pt-7 pb-8 bg-white p-2" src={images1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto pt-8 pb-8 bg-white p-2" src={images2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto bg-white p-2 pt-10 pb-10" src={images3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto bg-white p-2" src={images4} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto bg-white p-2 pt-3 pb-3" src={images5} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
         
          <div className="col-1 w-1/2">
            <img className="w-auto  pb-10" src={images6} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
      
    </div>
    </div>
   
  );
};

export default Brand;
