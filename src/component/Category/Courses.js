import React from 'react';
import images from "../images/shopping.png";
import images1 from "../images/school.png";
import images2 from "../images/gaming.png";
import images3 from "../images/gaming2.png";
import images4 from "../images/marketing.png";
import images5 from "../images/food.png";
import images6 from "../images/hotel.png";
import images7 from "../images/hotel2.png";


const Courses = () => {
    return (
        <div>
          <div>
          <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 '>Java</button>
            <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 '>Graphics</button>
            <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 '>Theme</button>
            <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 '>UI/UX</button>
            <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2'>Node js</button>
            <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 '>Laravel</button>
            <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 '>Animation</button>
            <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 '>Mongo</button>
            <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 '>Theme</button>
            <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 '>Templete</button>
             <button className='text-black hover:border-2 rounded-3xl mt-3  mr-1 border border-black pl-9 pr-9 pt-1 pb-2 '>Photo</button>
             <button className='text-black hover:border-2 rounded-3xl mt-3 border border-black mt-3  pl-9 pr-9 pt-1 pb-2 '>Video</button>
          </div>
          <div>
             <div>
     <div className=" pb-10 ">
     <div className="grid mt-20 lg:pl-8 lg:pr-8 gap-12 lg:grid-cols-4 grid-cols-2 container">
    
    <div className="card  bg-white text-black shadow-xl">
  <figure><img className="w-full" src={images} alt="Shoes" /></figure>
  <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
  <div className="card-body p-2">
    <h2 className="card-title">
    Shopping Web Templete
    </h2>
    <p className="text-blue-700">
          17895+ views
          </p>
    <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
     Details
    </div>
  </div>
</div>
     
      <div className="card text-black bg-white shadow-xl">
  <figure><img className="w-full" src={images1} alt="Shoes" /></figure>
 <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
  <div className="card-body p-2">
    <h2 className="card-title">
   School Web Templete
    </h2>
    <p className="text-blue-700">
          17895+ views
          </p>
    <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
     Details
    </div>
  </div>
</div>
      <div className="card text-black  bg-white shadow-xl">
  <figure><img className="w-full" src={images2} alt="Shoes" /></figure>
 <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
  <div className="card-body p-2">
    <h2 className="card-title">
    Gaming Web Templete
    </h2>
    <p className="text-blue-700">
          17895+ views
          </p>
    <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
     Details
    </div>
  </div>
</div>
      <div className="card text-black bg-white shadow-xl">
  <figure><img className="w-full" src={images3} alt="Shoes" /></figure>
 <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
  <div className="card-body p-2">
    <h2 className="card-title">
    Gaming Web Templete
    </h2>
    <p className="text-blue-700">
          17895+ views
          </p>
    <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
     Details
    </div>
  </div>
</div>
      <div className="card text-black bg-white shadow-xl">
  <figure><img className="w-full" src={images4} alt="Shoes" /></figure>
 <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
  <div className="card-body p-2">
    <h2 className="card-title">
    Marketing Web Templete
    </h2>
    <p className="text-blue-700">
          17895+ views
          </p>
    <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
     Details
    </div>
  </div>
</div>
      <div className="card  text-black bg-white shadow-xl">
  <figure><img className="w-full" src={images5} alt="Shoes" /></figure>
 <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
  <div className="card-body p-2">
    <h2 className="card-title">
    Restuarent Web Templete
    </h2>
    <p className="text-blue-700">
          17895+ views
          </p>
    <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
     Details
    </div>
  </div>
</div>
      <div className="card text-black bg-white shadow-xl">
  <figure><img className="w-full" src={images6} alt="Shoes" /></figure>
 <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
  <div className="card-body p-2">
    <h2 className="card-title">
    Hotel Web Templete
    </h2>
    <p className="text-blue-700">
          17895+ views
          </p>
    <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
     Details
    </div>
  </div>
</div>
      <div className="card text-black bg-white shadow-xl">
  <figure><img className="w-full" src={images7} alt="Shoes" /></figure>
 <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
  <div className="card-body p-2">
    <h2 className="card-title">
    Hotel Web Templete
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
          </div>
        </div>
    );
};

export default Courses;