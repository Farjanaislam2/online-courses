import React from 'react';
import images1 from "../images/animate-graphics.png";
import images2 from "../images/animation.png";
import images3 from "../images/flyer.png";
const Banner = () => {
    return (
        <div className='bg-black grid lg:grid-cols-4 grid-cols-2'>
              <div className="card text-white shadow-xl lg:pb-5  lg:mt-10 lg:pl-10 lg:pr-10  ">

 <div className="  ">
 <h1 className='text-2xl font-semibold mb-5 m-2'>Unlimited <br/> downloads of <br/> java project </h1>
 <p className='m-2'>Create better projects faster with unlimited downloads of WordPress Themes, plugins, video templates & more. Millions of creative assets all for one low cos </p>
 <button className='bg-white text-black p-1 mt-5 rounded-md m-2'>Download Now</button>
   
  </div>
</div>
              <div className="card ml-8 mr-8 mt-5 mb-5 lg:flex hidden text-black bg-white shadow-xl">
  <figure><img className="w-full" src={images1} alt="Shoes" /></figure>
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
              <div className="card lg:ml-8 lg:mr-8 lg:mt-5 lg:mb-5 m-5  text-black bg-white shadow-xl">
  <figure><img className="w-full" src={images2} alt="Shoes" /></figure>

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
<div className="card ml-8 mr-8 mt-5 mb-5 text-black lg:flex hidden bg-white shadow-xl">
  <figure><img className="w-full" src={images3} alt="Shoes" /></figure>

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
        </div>
    );
};

export default Banner;