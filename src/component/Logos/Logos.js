import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import images1 from "../images/logo6.png";
import images2 from "../images/logo4.png";
import images3 from "../images/logo3.png";
import images4 from "../images/logo2.png";
import images5 from "../images/logo1.png";
import images6 from "../images/logo5.png";

const Logos = () => {
   
        const settings = {
          dots: true,
          infinite: true,
          slidesToShow: 6,
          slidesToScroll: 1,
          autoplay: true,
          speed: 4000,
          autoplaySpeed: 1000,
          cssEase: "linear"
        };
    return (
        <div>
              <div  className='bg-white mt-16'>
        
        <Slider {...settings}>
          <div>
          <div className='col-1 w-1/2'>
                   <img className='w-auto' src={images1} alt=""/>
               </div>
          </div>
          <div>
          <div className='col-1 w-1/2'>
               <img  src={images2} alt=""/>
               </div>
          </div>
         
          <div>
          <div className=' col-1 w-1/2'>
                 <img   src={images3} alt=""/>
               </div>
          </div>
          <div>
          <div className='col-1 w-1/2'>
                   <img   src={images4} alt=""/>
               </div>
          </div>
          <div>
          <div className='col-1 w-1/2 '>
               <img  src={images5} alt=""/>
               </div>
          </div>
          <div>
          <div className='w-1/2 p-4 col-1'>
                  <img  src={images6} alt=""/>
               </div>
               </div>
               <div>
          <div className='col-1 w-1/2'>
                   <img src={images1} alt=""/>
               </div>
          </div>
          <div>
          <div className='col-1 w-1/2'>
               <img  src={images2} alt=""/>
               </div>
          </div>
         
          <div>
          <div className=' col-1 w-1/2'>
                 <img   src={images3} alt=""/>
               </div>
          </div>
          <div>
          <div className='col-1 w-1/2'>
                   <img   src={images4} alt=""/>
               </div>
          </div>
          <div>
          <div className='col-1 w-1/2 '>
               <img  src={images5} alt=""/>
               </div>
          </div>
          <div>
          <div className='w-1/2 p-4 col-1'>
                  <img  src={images6} alt=""/>
               </div>
               </div>
        </Slider>
      </div>
        </div>
  
    );
};

export default Logos;