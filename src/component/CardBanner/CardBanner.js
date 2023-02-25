import React from 'react';
import images from "../images/laravel 1.png";
import images1 from "../images/flutter1.png";

const CardBanner = () => {
    return (
    <d iv className='mb-10 lg:mb-1'>
            <div className='grid lg:grid-cols-2 mt-16 gap-10'>
            <div className='lg:grid w-auto
            ' >
               <img src={images} alt=""/> 
            </div>
            <div className='hidden lg:grid w-full
            ' style={{width:"590px", height: '406px'}}>
            <img src={images1} alt=""/>  
            </div>
        </div>
       
    </d>
    );
};

export default CardBanner;