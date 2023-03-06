import React from "react";
import images from "../images/tik.png";
import images1 from "../images/group (1).png";
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div className="bg-base-100 lg:m-40 lg:ml-60 lg:mr-60 rounded-md">
      <div className="flex justify-center">
        <img className="mt-5 " src={images} alt="" />
      </div>
      <h1 className="text-center lg:text-xl text-black mt-2 mb-3">
        Successful added to your cart
      </h1>
      <div className="lg:flex lg:gap-20 bg-blue-100 border border-gray-400 ">
       <div>
          <img className="lg:w-72 w-52 lg:p-5 ml-16 lg:ml-0 lg:mt-0 mt-5 rounded-sm" src={images1} alt="" />
        </div>
        <div className="lg:mt-14 mt-5 lg:ml-0 ml-16">
          <h1 className="lg:text-xl font-semibold text-black">Flutter Restaurant App</h1>
          <small>By navieasoft.ltd</small>
          <h2 className="text-2xl text-red-600 font-bold mt-3">49 $</h2>
        </div>
        <div className="lg:mt-24 mt-3 mb-3 lg:ml-0 ml-16">
          <p >
            License: <span className="text-green-600">Regular</span>
          </p>
          <p>Support: 1 year Support</p>
        </div>
      </div>
      <div className="flex gap-2 rounded-md p-2 pl-5 text-lg bg-blue-100 mt-5 border border-gray-400 lg:ml-20 lg:mr-20">
        <input type="checkbox" name="" value=""/>
        <h1>Extend support to 16 months  </h1>
      </div>
      <div className="border border-gray-400 text-gray-400 mt-5 text-center p-3 text-xl">
        <h1>Price is in US dollars and excludes tax</h1>
      </div>
      <div className="p-7 flex lg:mt-10 justify-between">
        <button className="p-3 pl-5 pr-5 bg-base-200 text-gray-600 border border-gray-400 rounded-md"><Link to ='/'>Keep Browsing</Link></button>
        <button className="p-3 pl-7 pr-7 bg-green-700 text-white rounded-md"><Link to ='/checkout'>Checkout</Link></button>
      </div>
    </div>
  );
};

export default Cart;
