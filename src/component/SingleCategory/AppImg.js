import React from 'react';
import images from "../images/group (1).png";
import images2 from "../images/Star 1.png";
import images3 from "../images/Star 5.png";
import images4 from "../images/group (8).png";
import images5 from "../images/group (7).png";
import Mobile from './Mobile';
import Projects from './Projects';
import Screentshot from './Screentshot';
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <div>
          <div className="hero  ">
  <div className="hero-content flex-col lg:flex-row">
  <div className="text-center lg:text-left w-auto lg:p-10" >
  <div className="card  text-black bg-white shadow-xl">
  <figure><img className="shadow-xl" src={images} alt="Shoes" /></figure>
 <div className="absolute bg-black top-0 right-0 bottom-0 left-0 w-full lg:h-auto h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-60 transition duration-300 ease-in-out ">
   <button className="text-white bg-green-700 shadow-2xl rounded lg:btn-md btn-xs lg:p-2 lg:pl-5 lg:pr-5 relative lg:mt-44 hover:shadow-2xl mt-8 ml-6 lg:ml-52 font-bold">Live Preview</button>
  </div>
 
</div>
    </div>
    <div className="card flex-shrink-0 lg:w-1/2">
      <div className="card-body">
       <div className='flex'>
       <h1 className='lg:text-xl font-bold'>Flutter Restaurant App </h1>
       <p className='text-red-500 font-bold ml-10 lg:ml-80'>49$</p>
       </div>
        <p>User Interface (UI) — A specialization of web design that deals with the controls people use to interact with a website or app, including button displays and gesture controls. User Experience (UX) — Another specialization of web design, this one dealing with user behavior and feeling when using the site or app </p>
        <small>By navieasoft.ltd</small>
     <div className='flex mt-5'>
     <img className='w-5' src={images2} 
        alt=""/>
        <img className='w-5' src={images2} 
        alt=""/>
        <img className='w-5' src={images2} 
        alt=""/>
        <img className='w-5' src={images2} 
        alt=""/>
        <img className='w-5' src={images3} 
        alt=""/>
     </div>
     <button className='flex justify-center mt-5 bg-red-800 hover:bg-red-600 hover:shadow-lg text-white lg:ml-32 shadow-black shadow-lg lg:mr-32 p-2 rounded-3xl'><Link to='/addToCart'>Add to cart</Link></button>
     
     <p className='text-center mt-5 text-black font-semibold'>Extend support to 12 months $23.63</p>
      </div>
    </div>
    
  </div>
</div>
<div className='flex p-5'>
<div className='lg:grid hidden'>
  <img className='w-96'  src={images4} alt=""/>
  <img className='-mt-10 w-96' src={images4} alt=""/>
</div>
<div className='lg:grid hidden'>
<img className='-ml-5 w-72' src={images5} alt=""/>
<img className='-mt-24 w-72 -ml-5' src={images5} alt=""/>
<img className='-mt-24 w-72 -ml-5' src={images5} alt=""/>
</div>
<div className='lg:bg-cyan-100 bg-base-100 rounded-md lg:ml-10 p-5 mb-24 mt-5 lg:mr-10 lg:w-1/2 w-64'>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>Last Update</h1>
  <h1 className='lg:text-lg mt-5'style={{width:"70%"}}>27 January 2023</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>Published</h1>
  <h1 className='lg:text-lg mt-5'style={{width:"70%"}}>11 September 2013</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>Gutenberg Optimized</h1>
  <h1 className='lg:text-lg mt-5'style={{width:"70%"}}>Yes</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>Widget Ready</h1>
  <h1 className='lg:text-lg mt-5'style={{width:"70%"}}>Yes</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>Language</h1>
  <h1 className='lg:text-lg mt-5'style={{width:"70%"}}>Flutter, JS, node,js</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5' style={{width:"30%"}}>Compatible Browsers</h1>
  <h1 className='lg:text-lg mt-5 text-blue-500' style={{width:"70%"}}>Browsers Firefox, Safari, Opera, Chrome, Edge.  
Wordpress .</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>Compatible With</h1>
  <h1 className='lg:text-lg mt-5'style={{width:"70%"}}>Layered PSD, PHP Files, CSS Files, Less Files, JS Files, PSD</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>Software Version</h1>
  <h1 className='lg:text-lg mt-5 text-blue-500'style={{width:"70%"}}>Browsers Firefox, Safari, Opera, Chrome, Edge.  
Wordpress .</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>Files Included</h1>
  <h1 className='lg:text-lg mt-5 text-blue-500'style={{width:"70%"}}>Layered PSD, PHP Files, CSS Files, Less Files, JS Files, PSD</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>
Columns</h1>
  <h1 className='lg:text-lg mt-5'style={{width:"70%"}}>4+</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>Documentation</h1>
  <h1 className='lg:text-lg mt-5'style={{width:"70%"}}>Well Documented</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5'style={{width:"30%"}}>Files Included</h1>
  <h1 className='lg:text-lg mt-5'style={{width:"70%"}}>Responsive</h1>
</div>
<div className='flex lg:gap-24 gap-14 pr-5 overflow-hidden'>
  <h1 className='lg:text-lg mt-5 ' style={{width:"30%"}}>Tags</h1>
  <h1 className='lg:text-lg mt-5 text-blue-500'style={{width:"70%"}}>business, corporate, creative, custom layout, customizable,fluid, iso, mobile, photography, portfolio, seo, ultimate. 
</h1>
</div>

</div>
</div>
<Screentshot></Screentshot>
<Mobile></Mobile>
<Projects></Projects>
        </div>
    );
};

export default App;