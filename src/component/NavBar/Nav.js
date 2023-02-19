import React, { useState } from 'react';
import images from "../images/login.png";
import images1 from "../images/signup.png";
import images2 from "../images/logo1.png";
import { Link } from "react-router-dom";

const Nav = () => {

    const [closed, setClosed] = useState(false)

    const navLinks = <>
     <Link className="hover:underline lg:pl-7 lg:pr-7 text-white underline-offset-4" to="/">Code</Link>
        <Link className="hover:underline lg:pl-7 lg:pr-7 text-white underline-offset-4" to="/">Design</Link>
        <Link className="hover:underline lg:pl-7 lg:pr-7 text-white underline-offset-4" to="/">Technology</Link>
        <Link className="hover:underline lg:pl-7  text-white underline-offset-4" to="/">Photo</Link>
        <Link className="hover:underline lg:pl-7 lg:pr-7 text-white underline-offset-4" to="/">Video</Link>
        <Link className="hover:underline lg:pl-7 lg:pr-7 text-white underline-offset-4" to="/">Audio</Link>
        <Link className="hover:underline lg:pl-7 lg:pr-7 text-white underline-offset-4" to="/">Theme</Link>
        <Link className="hover:underline lg:pl-7 lg:pr-7 text-white underline-offset-4" to="/">Templete</Link>
        <Link className="hover:underline lg:pl-5 lg:pr-5 text-white underline-offset-4" to="/">Bloging</Link>
        <button className="btn lg:flex hidden lg:ml-5 lg:mr-5  bg-black border-none lg:flex hidden hover:bg-white hover:text-black">Login</button>
      <button className='text-white lg:flex hidden bg-black p-3 rounded-lg hover:bg-white hover:text-black mr-5'>Signup</button>
    
          </>
    return (
        <nav className="flex items-center  flex-wrap"   style={{ backgroundColor: "#530A0A" }}>
      <a href="#" className="mr-4 lg:pl-10 inline-flex items-center">
       <img src={images2} alt=""/>
       
      </a>
      <button
        className="text-white bg-black inline-flex p-3  rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
       <img  src={images1} alt="" />
      </button>
      <button
        className="text-white inline-flex  bg-black p-3  rounded lg:hidden ml-5 hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
         <img  src={images} alt="" />
      </button>
      <button
        onClick={()=> setClosed(!closed)}
        className="text-white inline-flex pr-5 rounded lg:hidden ml-5 hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </button>
      <div
        className={`${closed ? "block" : "hidden"} lg:hidden top-navbar w-full lg:flex-grow lg:w-auto`}
        id="navigation"
      >
        <div
          className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-end pr-5 flex flex-col lg:h-auto"
        >
          {navLinks}
        </div>
      </div>
      <div
        className={`hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        id="navigation"
      >
        <div
          className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
        >
          {navLinks}
        </div>
      </div>
    </nav>
    );
};

export default Nav;