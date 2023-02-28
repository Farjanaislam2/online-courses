import React from 'react';
import images from "../images/group (6).png";
import images2 from "../images/group10.png";
import images3 from "../images/group9.png";
import images4 from "../images/group (2).png";
import images5 from "../images/group (3).png";
import images6 from "../images/group (4).png";
import Reviews from './Reviews';


const Screentshot = () => {
    return (
        <div className='lg:grid hidden'>
         <div>
         <img className='ml-16 rounded-sm' style={{width:"510px"}} src={images} alt=""/>
           <img className='ml-16 mt-10 rounded-sm' style={{width:"510px"}} src={images2} alt=""/>
           <h1 className='text-2xl font-semibold mt-8 ml-60'>Code Structure</h1>
           <img className='mt-5 ml-16 rounded-sm' src={images3} style={{width:"510px"}} alt=""/>
           <img className='mt-5 ml-16 rounded-sm' src={images4} style={{width:"510px"}} alt=""/>
           <img className='mt-5 ml-16 rounded-sm' src={images5} style={{width:"510px"}} alt=""/>
           <img className='mt-5 ml-16 mb-5 rounded-sm' src={images6} style={{width:"510px"}} alt=""/>
         </div>
         <Reviews></Reviews>
        </div>
    );
};

export default Screentshot;