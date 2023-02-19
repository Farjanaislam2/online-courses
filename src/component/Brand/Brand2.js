import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import images1 from "../images/logo6.png";
import images2 from "../images/logo4.png";
import images3 from "../images/logo3.png";
import images4 from "../images/logo2.png";
import images5 from "../images/logo1.png";
import images6 from "../images/logo5.png";

const Brand2 = () => {
  return (
    <div className="lg:pl-10 lg:hidden mt-10 ml-3 mr-2">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={5}
        slidesPerView={3}
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="col-1  w-full  bg-white">
            <img className="" src={images1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-1  bg-white p-1 ">
            <img className="pb-1" src={images2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-1 bg-white p-2 pt-6 pb-4">
            <img className=" " src={images3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="col-1 pt-4  bg-white w-14">
            <img className="" src={images4} alt="" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="col-1 ">
            <img className="w-14 bg-white p-2" src={images6} alt="" />
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  );
};

export default Brand2;
