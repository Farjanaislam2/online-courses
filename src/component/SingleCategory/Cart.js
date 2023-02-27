import React from "react";
import images from "../images/tik.png";
import images1 from "../images/group (1).png";

const Cart = () => {
  return (
    <div className="bg-base-100 m-40 ml-60 mr-60 rounded-md">
      <div className="flex justify-center">
        <img className="mt-5 " src={images} alt="" />
      </div>
      <h1 className="text-center text-xl text-black mt-2">
        Successful added to your cart
      </h1>
      <div className="flex gap-20 bg-blue-100 border border-gray-400 ">
        <div>
          <img className="w-72 p-5" src={images1} alt="" />
        </div>
        <div className="mt-14">
          <h1 className="text-xl font-semibold text-black">Flutter Restaurant App</h1>
          <small>By navieasoft.ltd</small>
          <h2 className="text-2xl text-red-600 font-bold mt-3">49 $</h2>
        </div>
        <div className="mt-24 ">
          <p >
            License: <span className="text-green-600">Regular</span>
          </p>
          <p>Support: 1 year Support</p>
        </div>
      </div>
      <div className="flex gap-2 rounded-md p-2 pl-5 text-lg bg-blue-100 mt-5 border border-gray-400 ml-20 mr-20">
        <input type="checkbox" name="" value=""/>
        <h1>Extend support to 16 months  </h1>
      </div>
      <div className="border border-gray-400 text-gray-400 mt-5 text-center p-3 text-xl">
        <h1>Price is in US dollars and excludes tax</h1>
      </div>
      <div className="p-7 flex mt-10 justify-between">
        <button className="p-3 pl-5 pr-5 bg-base-200 text-gray-600 border border-gray-400 rounded-md">Keep Browsing</button>
        <button className="p-3 pl-7 pr-7 bg-green-700 text-white rounded-md">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
