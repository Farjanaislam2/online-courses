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
    return (
        <div>

<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={images} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
    <div class="mb-3 xl:w-96">
    <div class="input-group rounded-full relative flex  items-stretch w-full mb-4">
     
    <input type="search" class="form-control w-1/4 h-8 lg:w-full lg:h-auto relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
     
      <button class="btn btn-sm lg:btn-md inline-block  px-6 py-2.5 bg-black text-white font-medium text-xs hover:bg-black uppercase shadow-md  flex items-center" type="button" id="button-addon2">
        <h1>Search</h1>
      </button>
    </div>
  </div>
    </div>
  </div> 
  
 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={images} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
    <div class="mb-3 xl:w-96">
    <div class="input-group rounded-full relative flex  items-stretch w-full mb-4">
     
     <input type="search" class="form-control w-1/4 h-8 lg:w-full lg:h-auto relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
     
      <button class="btn btn-sm lg:btn-md inline-block  px-6 py-2.5 bg-black text-white font-medium text-xs hover:bg-black uppercase shadow-md  flex items-center" type="button" id="button-addon2">
        <h1>Search</h1>
      </button>
    </div>
  </div>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={images} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] '>
    <div class="mb-3 xl:w-96">
    <div class="input-group rounded-full relative flex  items-stretch w-full mb-4">
     
     <input type="search" className="form-control w-1/4 h-8 lg:w-full lg:h-auto relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-black bg-white bg-clip-padding" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>
     
      <button className="btn btn-sm lg:btn-md inline-block  lg:w-1/4 bg-black text-white font-medium text-xs uppercase shadow-md  flex items-center" type="button" id="button-addon2">
        Search
      </button>
    </div>
  </div>
    </div>
  </div> 
  <div class="">

</div>
</div>
   

<div className='bg-sky-300 rounded-full font-bold'>
    <h2 className='text-center text-2xl p-2 mb-10 mt-10'>Top Category</h2>
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