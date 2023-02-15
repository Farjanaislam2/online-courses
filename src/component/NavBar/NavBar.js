import React from "react";
import { Link } from "react-router-dom";
import images from "../images/logo1.png";

const NavBar = () => {
  return (
    <div
      className="flex justify-evenly text-white"
      style={{ backgroundColor: "#530A0A" }}
    >
      <div>
        <img  src={images} alt="" />
      </div>
   
     <div className="flex gap-8 lg:mt-6">
        <Link className="hover:underline underline-offset-4" to="/">Code</Link>
        <Link className="hover:underline underline-offset-4" to="/">Design</Link>
        <Link className="hover:underline underline-offset-4" to="/">Technology</Link>
        <Link className="hover:underline underline-offset-4" to="/">Photo</Link>
        <Link className="hover:underline underline-offset-4" to="/">Video</Link>
        <Link className="hover:underline underline-offset-4" to="/">Audio</Link>
        <Link className="hover:underline underline-offset-4" to="/">Theme</Link>
        <Link className="hover:underline underline-offset-4" to="/">Templete</Link>
        <Link className="hover:underline underline-offset-4" to="/">Bloging</Link>
      </div>
      <div className="flex gap-8 lg:mt-4">
      <button className="btn bg-black border-none hover:bg-white hover:text-black">Login</button>
      <button className="btn bg-black border-none hover:bg-white hover:text-black">SignuP</button>
      </div>
     
    </div>
  );
};

export default NavBar;
