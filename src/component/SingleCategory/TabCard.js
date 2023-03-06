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

const TabCard = ({toggleState,tab}) => {
    const{tabTitle,
        title,
        content}=tab
    return (
        <div>
            
            <div className="card  text-black bg-white shadow-xl">
  <figure><img className="w-full" src={content.images} alt="Shoes" /></figure>
 <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
   <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
  </div>
  <div className="card-body p-2">
    <h2 className="card-title">
    {tabTitle}
    </h2>
    <p className="text-blue-700">
         {content.name}
          </p>
    <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
  <Link to="/restuarant">Details</Link>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default TabCard;