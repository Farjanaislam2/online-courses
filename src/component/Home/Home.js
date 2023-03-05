import React from 'react';
import Design from '../../Design/Design';
import Brand from '../Brand/Brand';
import Brand2 from '../Brand/Brand2';
import Card2 from '../Card2/Card2';

import CardBanner from '../CardBanner/CardBanner';
import Course from '../Course/Course';
import Course2 from '../Course/Course2';
import images from "../images/cover-page2.png";
import Logos from '../Logos/Logos';
import Team from '../Team/Team';
import Card1 from './../Card1/Card1';
import Card3 from './../Card3/Card3';



const Home = () => {

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
    <h2 className='text-center text-black  lg:text-2xl p-2 lg:mt-0 mt-10 lg:-mt-10 mb-10 '>Top Category</h2>
</div>
<Course></Course>
<Card1></Card1>
<Brand></Brand>
<Brand2></Brand2>
<Course2></Course2>
<Card1></Card1>
<CardBanner></CardBanner>
<Design></Design>
<Card2></Card2>
<Brand></Brand>
<Brand2></Brand2>
<Card3></Card3>

<Team></Team>
<CardBanner></CardBanner>



        </div>
    );
};

export default Home;