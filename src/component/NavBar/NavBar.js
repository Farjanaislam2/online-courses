import React, { useState } from "react";
import { Link } from "react-router-dom";
import images from "../images/logo1.png";

const NavBar = () => {
  const [closed, setClosed] = useState(false)
  
  const menuIcons=<>
      <Link className="hover:underline underline-offset-4" to="/">Code</Link>
        <Link className="hover:underline underline-offset-4" to="/">Design</Link>
        <Link className="hover:underline underline-offset-4" to="/">Technology</Link>
        <Link className="hover:underline underline-offset-4" to="/">Photo</Link>
        <Link className="hover:underline underline-offset-4" to="/">Video</Link>
        <Link className="hover:underline underline-offset-4" to="/">Audio</Link>
        <Link className="hover:underline underline-offset-4" to="/">Theme</Link>
        <Link className="hover:underline underline-offset-4" to="/">Templete</Link>
        <Link className="hover:underline underline-offset-4" to="/">Bloging</Link>
  </>
  return (
    <div
      className="flex justify-evenly text-white"
      style={{ backgroundColor: "#530A0A" }}
    >
      <div className="flex ">
        <img  src={images} alt="" />
      </div>
   
     <div className="lg:flex gap-8 lg:mt-6 hidden">
        {menuIcons}
      </div>

    
      
      <div className="flex justify-end items-center gap-8 lg:mt-4 ">
      <button className="btn btn-sm bg-black border-none hover:bg-white hover:text-black">Login</button>
      <button className="btn btn-sm bg-black border-none hover:bg-white hover:text-black">SignuP</button>
      <label className="btn btn-sm btn-ghost lg:hidden" onClick={()=>setClosed(!closed)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      </div>
      <div className={`${closed ? "block" : "hidden"} flex flex-col gap-8 lg:mt-6 lg:hidden`}>
        {menuIcons}
      </div>
     
    </div>
  );
};

export default NavBar;
