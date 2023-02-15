import React from 'react';
import images from "../images/abstract-logo.png";
import images1 from "../images/animate-graphics.png";
import images2 from "../images/animation.png";
import images3 from "../images/flyer.png";
import images4 from "../images/grla.png";
import images5 from "../images/hotel-booking.png";
import images6 from "../images/graphicsd.png";
import images7 from "../images/buisness-card.png";

const Card2 = () => {
    return (
      <div>
          <div className='border-b-2 pb-10 border-white'>
        <div className="grid mt-20 lg:pl-8 lg:pr-8 gap-12 lg:grid-cols-4 grid-cols-2 container">
       
       <div className="card  bg-base-100 shadow-xl">
     <figure><img className="w-full" src={images} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">
       Logo Design
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
        
         <div className="card  bg-base-100 shadow-xl">
     <figure><img className="w-full" src={images1} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">
       Animate Graphics
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card  bg-base-100 shadow-xl">
     <figure><img className="w-full" src={images2} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">
       Animation Design
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card  bg-base-100 shadow-xl">
     <figure><img className="w-full" src={images3} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">
       Flyer Design
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card  bg-base-100 shadow-xl">
     <figure><img className="w-full" src={images4} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">
       Graphics La ndscape
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card  bg-base-100 shadow-xl">
     <figure><img className="w-full" src={images5} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">
       Hotel Booking Web Template
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card  bg-base-100 shadow-xl">
     <figure><img className="w-full" src={images6} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">
      Graphics Design
       </h2>
       <p className="text-blue-700">
             17895+ views
             </p>
       <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
        Details
       </div>
     </div>
   </div>
         <div className="card  bg-base-100 shadow-xl">
     <figure><img className="w-full" src={images7} alt="Shoes" /></figure>
     <div className="card-body">
       <h2 className="card-title">
       Busness Card Design
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
   <h1 className="text-center  text-white rounded-lg p-2 mt-10 text-3xl w-1/3" style={{ backgroundColor: "#530A0A" }}>see more</h1>
   </div>
 
      </div>
      <div>
    <h1 className='text-3xl text-center font-bold mt-10'>Our Brand</h1>
   </div>
      </div>
    );
};

export default Card2;