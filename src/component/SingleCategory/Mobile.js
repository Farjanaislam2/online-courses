import React from 'react';
import images from "../images/group (7).png";

const Mobile = () => {
    return (
        <div className='flex -mt-32 lg:hidden'>
            <img className='w-1/2' src={images} alt=""/>
            <img className='w-1/2 mt-5' src={images} alt=""/>
        </div>
    );
};

export default Mobile;