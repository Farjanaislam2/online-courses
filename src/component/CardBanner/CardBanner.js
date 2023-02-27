import React from 'react';
import images from "../images/laravel 1.png";
import images1 from "../images/flutter1.png";

const CardBanner = () => {
    return (
    <div className='mb-10 lg:mb-1 bg-base-100 lg:p-1 lg:mb-10 '>
            <div className='grid lg:grid-cols-2 mt-16 gap-10'>
            <div className='lg:grid  w-auto
            ' >
               <img className='rounded-lg' src={images} alt=""/> 
            </div>
            <div className='hidden lg:grid w-full
            ' style={{width:"590px", height: '406px'}}>
            <img className='rounded-lg' src={images1} alt=""/>  
            </div>
        </div>
       
    </div>
    );
};

export default CardBanner;