import React from 'react';
import images from "../images/cover-page2.png";
import AppImg from './AppImg';


const Restaurant = () => {
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
<AppImg></AppImg>
        </div>
    );
};

export default Restaurant;