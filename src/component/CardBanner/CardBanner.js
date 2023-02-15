import React from 'react';
import images from "../images/laravel 1.png";
import images1 from "../images/flutter1.png";

const CardBanner = () => {
    return (
    <div>
            <div className='grid lg:grid-cols-2 mt-16'>
            <div className='lg:grid w-auto
            ' style={{width:"600px", height: '406px'}}>
               <img src={images} alt=""/> 
            </div>
            <div className='hidden lg:grid w-full
            ' style={{width:"580px", height: '406px'}}>
            <img src={images1} alt=""/>  
            </div>
        </div>
        <div>
            <h1 className='text-center text-3xl
            font-bold'>Design</h1>
        </div>
    </div>
    );
};

export default CardBanner;