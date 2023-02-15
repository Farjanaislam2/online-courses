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
          speed: 2000,
          autoplaySpeed: 2000,
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
    //  <div>
    //        <div className='flex justify-center align-middle'>
    //         <div className='text-white text-center rounded-md mt-10 p-2 w-1/2 '  style={{ backgroundColor: "#530A0A" }}>
    //             <h1 className='text-2xl font-bold '>See More</h1>
    //         </div>
         
    //     </div>
    //     <div>
    //         <h1 className='text-2xl text-center mt-10'>Our Partner</h1>
    //       <Slider {...settings}>
          
             
    //          <div className='grid grid-cols-6 gap-5'>
    //           <div className='w-full pt-5  '>
    //               <img className='bg-white justify-center lg:mt-2 align-middle' src={images1} alt=""/>
    //           </div>
    //           <div className='w-full pt-5 bg-white'>
    //               <img className='bg-white lg:ml-5 lg:mr-5 lg:mt-5' src={images2} alt=""/>
    //           </div>
    //           <div className='w-full pt-8 bg-white'>
    //               <img className='bg-white pl-5 mt-5'  src={images3} alt=""/>
    //           </div>
    //           <div className='w-full p-1 lg:pl-5 bg-white'>
    //               <img className='bg-white'  src={images4} alt=""/>
    //           </div>
    //           <div className='w-full bg-white'>
    //               <img  src={images5} alt=""/>
    //           </div>
    //           <div className='w-full p-4 bg-white'>
    //               <img className='bg-white lg:ml-10 lg:mt-2'  src={images6} alt=""/>
    //           </div>
    //          </div>
              
          
    //       </Slider>
    //     </div>
    //  </div>
    );
};

export default Logos;