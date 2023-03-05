import React from 'react';
import CardBanner from '../CardBanner/CardBanner';
import images from "../images/cover-page2.png";
import Courses from './Courses';
import images0 from "../images/abstract-logo.png";
import images1 from "../images/animate-graphics.png";
import images2 from "../images/animation.png";
import images3 from "../images/flyer.png";
import images4 from "../images/grla.png";
import images5 from "../images/hotel-booking.png";
import images6 from "../images/graphicsd.png";
import images7 from "../images/buisness-card.png";
import Search from './Search';
import Categorycard from './Categorycard';
import Cardsecond from './Cardsecond';
import Banner from './Banner';



const Category = () => {
  const sliderItems = [
    {
      id:"slide1",
      imageSlider : images ,
      btnLeft : "slide3",
      btnRight: "slide2"
    },
    {
      id:"slide2",
      imageSlider : images ,
      btnLeft : "slide1",
      btnRight: "slide3"
    },
    {
      id:"slide3",
      imageSlider : images ,
      btnLeft : "slide2",
      btnRight: "slide1"
    },

  ]

    return (
        <div>
         
         <div className="carousel w-full">
      {
        sliderItems.map(slider =>   <div key={slider.id} id={slider.id} className="carousel-item relative w-full">
        <img src={slider.imageSlider} className="lg:h-4/5 w-full" />
        <div className="absolute flex  justify-between transform -translate-y-1/2 left-5 right-5 lg:top-52 top-1/2">
          <a href={`#${slider.btnLeft}`} className="btn btn-circle lg:w-8 w-5 h-2">❮</a> 
          <a href={`#${slider.btnRight}`} className="btn btn-circle lg:w-8 w-5 h-2">❯</a>
        </div>
     
      </div> 
      )
      }


<div className='absolute lg:top-[45%] top-[18%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:w-7/12  '>
        <div class="mb-3 ">
        <div class="input-group   relative flex  items-stretch mb-4">
         
        <input type="search" className="form-control block w-1/2 h-6 lg:w-full lg:h-auto relative flex-auto min-w-0 block  px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding" placeholder="" aria-label="Search" aria-describedby="button-addon2"/>
      
          <button class="btn btn-xs lg:btn-md inline-block  bg-black text-white font-medium text-xs hover:bg-black uppercase shadow-md  flex items-center" type="button" id="button-addon2">
            Search
          </button>
        </div>
      </div>
        </div>

 
</div>
   

<div className='bg-sky-300 text-black rounded-full font-bold'>
    <h2 className='text-center text-black  lg:text-2xl p-2 lg:-mt-14 mt-10 lg:-mt-10 mb-10 '>Top Category</h2>
</div>
<Courses></Courses>
<CardBanner></CardBanner>

<div>
          <div className=' pb-10'>
        <div className="grid mt-20 lg:pl-8 lg:pr-8 gap-12 lg:grid-cols-4 grid-cols-2 container">
       
       <div className="card  bg-white text-black shadow-xl">
     <figure><img className="w-full" src={images0} alt="Shoes" /></figure>
   <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
     <div className="card-body p-">
       <h2 className="card-title">
       Logo Design
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
        
         <div className="card bg-white text-black shadow-xl">
     <figure><img className="w-full" src={images1} alt="Shoes" /></figure>
   <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
     <div className="card-body ">
       <h2 className="card-title">
       Animate Graphics
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card bg-white text-black shadow-xl">
     <figure><img className="w-full" src={images2} alt="Shoes" /></figure>
   <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
     <div className="card-body p-2">
       <h2 className="card-title">
       Animation Design
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card bg-white text-black shadow-xl">
     <figure><img className="w-full" src={images3} alt="Shoes" /></figure>
   <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
     <div className="card-body p-2">
       <h2 className="card-title">
       Flyer Design
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card bg-white text-black shadow-xl">
     <figure><img className="w-full" src={images4} alt="Shoes" /></figure>
   <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
     <div className="card-body p-2">
       <h2 className="card-title">
       Graphics La ndscape
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card bg-white text-black shadow-xl">
     <figure><img className="w-full" src={images5} alt="Shoes" /></figure>
   <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
     <div className="card-body p-2">
       <h2 className="card-title">
       Hotel Booking Web Template
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card bg-white text-black shadow-xl">
     <figure><img className="w-full" src={images6} alt="Shoes" /></figure>
   <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
     <div className="card-body p-2">
       <h2 className="card-title">
      Graphics Design
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card bg-white text-black shadow-xl">
     <figure><img className="w-full" src={images7} alt="Shoes" /></figure>
   <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
     <div className="card-body p-2">
       <h2 className="card-title">
       Buisness Card Design
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
   
       </div>
    </div>
      
      </div>
      <Search></Search>
      <Categorycard></Categorycard>
      <Banner></Banner>
      <Cardsecond></Cardsecond>
        </div>
    );
};

export default Category;