import React from 'react';
import Design from '../../Design/Design';
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
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={images} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={images} className="lg:w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<div class="relative justify-center align-middle  lg:ml-80" style={{marginTop: '-300px'}}>
  <form>
    <div class="max-w-xl">
      <div class="flex space-x-4">
        <div class="flex rounded-full border-1  mt-52 border-black overflow-hidden w-full">
          <input type="text" class="w-72 h-6 rounded-md rounded-r-none" />
          <button class="bg-black text-white w-72 h-6 px-6 text-lg font-semibold py-4 rounded-r-md">Search</button>
        </div>
        
      </div>
    </div>
  </form>
</div>




          {/* <div>
          <img src={images} alt=""/>

          </div>
<div class="sticky">
  <form>
    <div class="max-w-xl">
      <div class="flex space-x-4">
        <div class="flex rounded-full border-1 border-black overflow-hidden w-full">
          <input type="text" class="w-full rounded-md rounded-r-none" />
          <button class="bg-black text-white px-6 text-lg font-semibold py-4 rounded-r-md">Search</button>
        </div>
        
      </div>
    </div>
  </form>
</div> */}

<div className='bg-sky-300 rounded-full mt-80 font-bold'>
    <h2 className='text-center text-2xl p-2 '>Top Category</h2>
</div>
<Course></Course>
<Card1></Card1>
<Logos></Logos>
<Course2></Course2>
<Card1></Card1>
<CardBanner></CardBanner>
<Design></Design>
<Card2></Card2>
<Logos></Logos>
<Card3></Card3>
<Team></Team>
<CardBanner></CardBanner>

        </div>
    );
};

export default Home;