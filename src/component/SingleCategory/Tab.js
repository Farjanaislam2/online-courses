import React, { useState } from "react";

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
        title:"title 1",
        content:{
            'images':"images",
            'name': 'Restuarent Web Templete',
            'button':'add to cart'
            
        }
    },
    {
        id:2,
        tabTitle:"ui/ux",
        title:"title 2",
        content:'b'
    },
    {
        id:3,
        tabTitle:"Theme",
        title:"title 3",
        content:'c'
    },
    {
        id:4,
        tabTitle:"Templete",
        title:"title 4",
        content:'d'
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
                   
                          <div className="lg:mt-14 mt-5 lg:ml-0 ml-16">
          <h1 className="lg:text-xl font-semibold text-black">{tab.content.name}</h1>
          <small>By navieasoft.ltd</small>
          <h2 className="text-2xl text-red-600 font-bold mt-3">49 $</h2>
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
