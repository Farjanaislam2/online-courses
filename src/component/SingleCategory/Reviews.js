import React from 'react';
import images from "../images/Star 5.png";
import images2 from "../images/Star 1.png";
import Description from './Description';

const Reviews = () => {
    return (
        <div className='mb-8'>
              <h1 className='lg:text-2xl mb-8 lg:ml-60 font-semibold '>Project Reviews</h1>
              <div className='bg-black text-white ml-16 rounded-sm p-8'style={{width:"510px"}}>
                <h1 className='text-center text-xl text-transparent bg-clip-text bg-gradient-to-tl from-white to-red-600 font-bold'>Customer Love Review</h1>
                <div className='mt-6'>
                    <p className='text-center mt-2'>“Customer reviews are the engine that keeps prospects coming. Get helpful examples and free outreach templates for getting more reviews!”</p>
                    <h2 className='text-center mt-2'>Resan Hasan</h2>
                <div className='flex justify-center mt-3'>
                <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images} alt=""/>

                </div>
                </div>
                <div className='mt-6'>
                    <p className='text-center mt-2'>“Customer reviews are the engine that keeps prospects coming. Get helpful examples and free outreach templates for getting more reviews!”</p>
                    <h2 className='text-center mt-2'>Resan Hasan</h2>
                <div className='flex justify-center mt-3'>
                <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images} alt=""/>

                </div>
                </div>
                <div className='mt-6'>
                    <p className='text-center mt-2'>“Customer reviews are the engine that keeps prospects coming. Get helpful examples and free outreach templates for getting more reviews!”</p>
                    <h2 className='text-center mt-2'>Resan Hasan</h2>
                <div className='flex justify-center mt-3'>
                <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images} alt=""/>

                </div>
                </div>
                <div className='mt-6'>
                    <p className='text-center mt-2'>“Customer reviews are the engine that keeps prospects coming. Get helpful examples and free outreach templates for getting more reviews!”</p>
                    <h2 className='text-center mt-2'>Resan Hasan</h2>
                <div className='flex justify-center mt-3'>
                <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images2} alt=""/>
                    <img src={images} alt=""/>

                </div>
                </div>
              <div className='flex justify-center align-middle mt-6'>
              <button className='bg-white text-black rounded-md p-2 font-semibold '>View more Review</button>
              </div>
              </div>
              <Description></Description>
        </div>
    );
};

export default Reviews;