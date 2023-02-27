import React from 'react';
import images from "../images/shopping.png";
import images1 from "../images/school.png";
import images2 from "../images/gaming.png";
import images3 from "../images/gaming2.png";
import images4 from "../images/marketing.png";
import images5 from "../images/food.png";
import images6 from "../images/hotel.png";
import images7 from "../images/hotel2.png";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <h1 className='lg:text-2xl text-center font-semibold '>Related Project</h1>
            <div>
            <div className="grid mt-10 lg:pl-8 lg:pr-8 lg:gap-12 gap-6  lg:grid-cols-4 grid-cols-2 container">
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
  <Link to="/restuarant">Details</Link>
     
    </div>
  </div>
</div>
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
     
      <div className="card lg:grid hidden text-black bg-white shadow-xl">
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
      <div className="card lg:grid hidden text-black  bg-white shadow-xl">
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
      <div className="card lg:grid hidden text-black bg-white shadow-xl">
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
      <div className="card lg:grid hidden text-black bg-white shadow-xl">
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
 
      <div className="card lg:grid hidden text-black bg-white shadow-xl">
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
      <div className="card lg:grid hidden text-black bg-white shadow-xl">
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
            <div className="flex justify-center mb-5">
 <a className="text-center text-white rounded-lg p-2 mt-10 bg-black lg:text-xl w-1/4" href="/categories"><h1  >see more about project</h1></a>


</div>
        </div>
    );
};

export default Projects;