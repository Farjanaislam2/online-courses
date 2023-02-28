import React from "react";
import { Link } from "react-router-dom";
import images from "../images/we-accept 1.png";

const Checkout = () => {
  return (
    <div className="lg:flex">
      <div className="lg:w-4/5 ">
        <div className="bg-base-100 lg:ml-5 lg:mt-10 lg:mb-10 lg:p-4 p-2 rounded-md lg:mr-28">
          <div className="w-">
            <h1 className="lg:text-2xl text-xl mt-2 mb-4">Billing Details</h1>
            <p>
              Naviea collects and uses personal data in accordance with our{" "}
              <strong> Privacy Policy.</strong> By creating an account, you
              agree to our <strong>Terms and Conditions</strong>.
            </p>
          </div>
          <div className="divider"></div>
          <div className="lg:ml-24">
            <h1 className=" mb-2 font-semibold mt-4">Company Name</h1>
            <input
              className=" border border-gray-500 rounded-md lg:w-4/5 w-80 p-2  pr-5"
              type="text"
              name=""
              value=""
            />
          </div>
          <div className="lg:ml-24">
            <h1 className=" mb-2 font-semibold mt-4">Country</h1>
            <input
              className=" border border-gray-500 rounded-md lg:w-4/5 p-2 w-80 pr-5"
              type="text"
              name=""
              value=""
            />
          </div>
          <div className="lg:ml-24">
            <h1 className=" mb-2 font-semibold mt-4">Address</h1>
            <input
              className=" border border-gray-500 rounded-md lg:w-4/5 p-2 w-80 pr-5"
              type="text"
              name=""
              value=""
            />
          </div>
          <div className="lg:ml-24">
            <h1 className=" mb-2 font-semibold mt-4">City</h1>
            <input
              className=" border border-gray-500 rounded-md lg:w-4/5 p-2 w-80 pr-5"
              type="text"
              name=""
              value=""
            />
          </div>
          <div className="lg:ml-24">
            <h1 className=" mb-2 font-semibold mt-4">Zip</h1>
            <input
              className=" border border-gray-500 rounded-md lg:w-4/5 p-2 w-80 pr-5"
              type="text"
              name=""
              value=""
            />
          </div>
        </div>
        <div className="bg-base-100 mt-5 lg:mt-0 lg:mr-28 lg:mt-10  p-4 rounded-md">
          <h1 className="text-xl lg:ml-24 mb-3">Select Payment Method</h1>
          <img className="lg:ml-24 " src={images} alt="" />
          <div className="lg:ml-24">
            <h1 className=" mb-2 font-semibold mt-4">Card Number</h1>
            <input
              className=" border border-gray-500 rounded-md lg:w-4/5 w-80 p-2  pr-5"
              type="text"
              name=""
              value=""
            />
          </div>
          <div className="lg:flex lg:gap-3">
            <div className="lg:ml-24">
              <h1 className=" mb-2 font-semibold mt-4">Explation Date</h1>
              <input
                className=" border border-gray-500 rounded-md  p-2  lg:w-40 w-80"
                type="text"
                name=""
                value=""
              />
            </div>
            <div className="lg:flex hidden">
              <input
                className="lg:mt-12 mt-5 border border-gray-500 rounded-md p-2  lg:w-32"
                type="text"
                name=""
                value=""
              />
            </div>
            <div className="">
              <h1 className=" mb-2 font-semibold mt-3">Security Code</h1>
              <input
                className=" border border-gray-500 rounded-md  p-2  lg:w-36 w-80"
                type="text"
                name=""
                value=""
              />
            </div>
          </div>
        </div>
        <button className="bg-green-500 lg:w-2/3 w-80 ml-4 mb-4 text-white font-bold lg:mt-5 lg:ml-28 lg:mr-72  lg:mb-10 p-2 rounded-md text-xl lg:grid hidden">
          Buy
        </button>
      </div>
      <div className="lg:w-2/5 mt-10">
      <div className='bg-base-100  lg:mt-10 lg:mb-10 lg:p-4 lg:mr-10 p-2 rounded-md'>
            <h1 className='text-lg ml-10 font-bold mb-5'>Order Summary</h1>
           <div className='flex gap-28'>
           <p className=''>Flutter Restaurant App </p>
            <p className='text-red-500 font-semibold'>$49</p>
           </div>
          <div className='flex gap-52'>
          <p className=''>Discount </p>
            <p className='text-red-500 font-semibold'>$9</p>
          </div>
          <div className="divider"></div> 
          <div className='flex gap-52'>
           <p className=''>Total</p>
            <p className='text-red-500 font-semibold'> US $49</p>
           </div>
        </div>
      </div>
      <button className="bg-green-500 mb-5 lg:w-2/3 w-80 ml-2 mb-4 text-white font-bold lg:mt-5 lg:ml-28 lg:mr-72  lg:mb-10 p-2 rounded-md text-xl lg:hidden">
          Buy
        </button>
    </div>
  );
};

export default Checkout;
