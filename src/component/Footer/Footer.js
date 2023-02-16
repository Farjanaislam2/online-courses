import React from "react";
import images from "../images/logo1.png";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer p-10 text-white"
        style={{ backgroundColor: "#530A0A" }}
      >
        <div className="ml-28 lg:hidden">
        <img src={images} alt="logo" />
        </div>
        <div className="grid grid-cols-2 gap-8 lg:flex">
      
         <div >
         <img className="hidden lg:flex"  src={images} alt="" />
         <h1 className="text-xl">USA Office</h1>
          <p>Adderess : Head office ,Jamaica </p>
          <p>Shopping Centre Southport QLD, Australia +61 7 5556 6600</p>
          <p>Email: discountache@gmail.com</p>
          <p>Mobile : +1 347-206-9324</p>
         </div>
        
        <div className="lg:mt-16 lg:pt-2">
        
          <h1 className="text-xl">Bangladesh Dhaka Office</h1>
          <p>Adderess : Shop- 6, 3rd Floor,</p>
          <p>Gulshan Pink Shopping Complex,</p>
          <p> Gulshan Avenue, Gulshan- 2, Dhaka 1212 -uttara sector 10 ,</p>
          <p>Email : discountache@gmail.com</p>
          <p>Mobile : 01311805398</p>
        </div>
        <div>
          <div className="lg:mt-16 lg:pt-2">
     
            <h1 className="text-xl">About of navieae learning</h1>
            <p>privacy policy</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
            <p>Who we are</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div className="lg:mt-16 lg:pt-2">
        
          <h1 className="text-xl">Get to Know Us</h1>
          <p>Careers</p>
          <p>Blog</p>
          <p>All Categories</p>
          <p>start offer</p>
          <p>Careers support</p>
        </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
