import React, { useState } from "react";

import {shopping,school,gaming,gaming2,marketing,food,hotel,hotel2} from "../images";
import images from "../images/shopping.png";
import images1 from "../images/school.png";
import images2 from "../images/gaming.png";
import images3 from "../images/gaming2.png";
import images4 from "../images/marketing.png";
import images5 from "../images/food.png";
import images6 from "../images/hotel.png";
import images7 from "../images/hotel2.png";
import { Link } from "react-router-dom";

const Tab = () => {
  const [toggleState, setToggleState] = useState();

 const tabs=[
    {
        id:1,
        tabTitle:"Java",
        content:{
           
            'name': 'Restuarent Web Templete',
            'button':'add to cart'
            
        }
    },
    {
        id:2,
        tabTitle:"ui/ux",
        content:{
            'picture':"images1",
            'name': 'Restuarent Web Templete',
            'button':'add to cart'
            
        }
    },
    {
        id:3,
        tabTitle:"Theme",
        title:"title 3",
        content:{
            'picture':"images2",
            'name': 'Restuarent Web Templete',
            'button':'add to cart'
            
        }
    },
    {
        id:4,
        tabTitle:"Templete",
        title:"title 4",
        content:{
            'picture':"images3 ",
            'name': 'Restuarent Web Templete',
            'button':'add to cart'
            
        }
    },
 ]

 const handleButton=(e)=>{
    setToggleState (e.target.id)
 }
  return (
    <div className="w-96">
        <div className="flex justify-between">
            {
                tabs.map((tab)=> <button type="">  <button 
                key={tab}
                id={tab.id}
                disabled={toggleState ===`${tab.id}`}
                onClick={(handleButton)}
                >
                    {tab.tabTitle}
                </button></button>)
            }
        </div>
          <div className="content">
            {
                tabs.map((tab) =>
                <div>
                    {
                    toggleState===`${tab.id}` &&
                   
                    <div className="card  text-black bg-white shadow-xl">
                    <figure><img className="w-full" src={shopping} alt="Shoes" /></figure>
                   <div className="absolute top-0 right-0 bottom-0 left-0 w-full lg:h-52 h-24 overflow-hidden bg-fixed opacity-0 hover:opacity-80 transition duration-300 ease-in-out bg-white">
                     <button className="text-white rounded-full lg:btn-md btn-xs lg:p-2  absolute lg:mt-20 mt-8 ml-6 lg:ml-20 font-bold"style={{ backgroundColor: "#530A0A" }}>add to cart</button>
                    </div>
                    <div className="card-body p-2">
                      <h2 className="card-title">
                     {tab.content.name}
                      </h2>
                      <p className="text-blue-700">
                            17895+ views
                            </p>
                      <div className="card-actions justify-center text-blue-300 hover:text-blue-500">
                    <Link to="/restuarant">Details</Link>
                       
                      </div>
                    </div>
                  </div>
                   
                    }

                </div>
            )
            }
        </div> 
    
    </div>
  );
};



export default Tab;
