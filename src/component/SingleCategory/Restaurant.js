import React from 'react';
import images from "../images/cover-page2.png";
import AppImg from './AppImg';


const Restaurant = () => {
    return (
        <div>
               <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={images} className="w-full" />
    <div className="absolute flex  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle lg:w-8 w-5 h-2">❮</a> 
      <a href="#slide2" className="btn btn-circle lg:w-8 w-5 h-2">❯</a>
    </div>
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
    <div class="mb-3 xl:w-96">
    <div class="input-group rounded-full relative flex  items-stretch w-full mb-4">
     
    <input type="search" class="form-control w-1/2 h-6 lg:w-full lg:h-auto relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding" placeholder="" aria-label="Search" aria-describedby="button-addon2"/>
     
      <button class="btn btn-xs lg:btn-md inline-block  bg-black text-white font-medium text-xs hover:bg-black uppercase shadow-md  flex items-center" type="button" id="button-addon2">
        Search
      </button>
    </div>
  </div>
    </div>
  </div> 
  
 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={images} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn lg:w-8 w-5 h-2 btn-circle">❮</a> 
      <a href="#slide3" className="btn lg:w-8 w-5 h-2 btn-circle">❯</a>
    </div>
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
    <div class="mb-3 xl:w-96">
    <div class="input-group rounded-full relative flex  items-stretch w-full mb-4">
     
     <input type="search" class="form-control w-1/2 h-6 lg:w-full lg:h-auto relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding" placeholder="" aria-label="Search" aria-describedby="button-addon2"/>
      
       <button class="btn btn-xs lg:btn-md inline-block  bg-black text-white font-medium text-xs hover:bg-black uppercase shadow-md  flex items-center" type="button" id="button-addon2">
         Search
       </button>
     </div>
  </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={images} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn lg:w-8 w-5 h-2 btn-circle lg:w-8 w-5 h-2">❮</a> 
      <a href="#slide4" className="btn lg:w-8 w-5 h-2 btn-circle lg:w-8 w-5 h-2">❯</a>
    </div>
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
    <div class="mb-3 xl:w-96">
    <div class="input-group rounded-full relative flex  items-stretch w-full mb-4">
     
    <input type="search" class="form-control w-1/2 h-6 lg:w-full lg:h-auto relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding" placeholder="" aria-label="Search" aria-describedby="button-addon2"/>
     
      <button class="btn btn-xs lg:btn-md inline-block  bg-black text-white font-medium text-xs hover:bg-black uppercase shadow-md  flex items-center" type="button" id="button-addon2">
        Search
      </button>
    </div>
  </div>
    </div>
  </div> 
  <div class="">

</div>
</div>
<AppImg></AppImg>
        </div>
    );
};

export default Restaurant;