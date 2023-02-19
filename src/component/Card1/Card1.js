import React from "react";
import images from "../images/shopping.png";
import images1 from "../images/school.png";
import images2 from "../images/gaming.png";
import images3 from "../images/gaming2.png";
import images4 from "../images/marketing.png";
import images5 from "../images/food.png";
import images6 from "../images/hotel.png";
import images7 from "../images/hotel2.png";

const Card1 = () => {
  return (
   <div className="border-b-2 pb-10 border-white">
     <div className="grid mt-20 lg:pl-8 lg:pr-8 gap-12 lg:grid-cols-4 grid-cols-2 container">
    
    <div className="card  bg-white text-black shadow-xl">
  <figure><img className="w-full" src={images} alt="Shoes" /></figure>
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
     
      <div className="card  bg-white shadow-xl">
  <figure><img className="w-full" src={images1} alt="Shoes" /></figure>
  <div className="card-body">
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
      <div className="card  bg-white shadow-xl">
  <figure><img className="w-full" src={images2} alt="Shoes" /></figure>
  <div className="card-body">
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
      <div className="card  bg-white shadow-xl">
  <figure><img className="w-full" src={images3} alt="Shoes" /></figure>
  <div className="card-body">
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
      <div className="card  bg-white shadow-xl">
  <figure><img className="w-full" src={images4} alt="Shoes" /></figure>
  <div className="card-body">
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
      <div className="card  bg-white shadow-xl">
  <figure><img className="w-full" src={images5} alt="Shoes" /></figure>
  <div className="card-body">
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
      <div className="card  bg-white shadow-xl">
  <figure><img className="w-full" src={images6} alt="Shoes" /></figure>
  <div className="card-body">
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
      <div className="card  bg-white shadow-xl">
  <figure><img className="w-full" src={images7} alt="Shoes" /></figure>
  <div className="card-body">
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
<div className="flex justify-center">
<h1 className="text-center text-white rounded-lg p-2 mt-10 text-3xl w-1/3" style={{ backgroundColor: "#530A0A" }}>see more</h1>
</div>
   </div>
  );
};

export default Card1;
