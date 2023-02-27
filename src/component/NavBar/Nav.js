import React, { useState } from "react";
import images from "../images/login.png";
import images1 from "../images/signup.png";
import images2 from "../images/logo1.png";
import images3 from "../images/google.png";
import images4 from "../images/facebook.png";
import images5 from "../images/twitter (1).png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [closed, setClosed] = useState(false);

  const navLinks = (
    <>
      <Link
        className="hover:underline  lg:pr-12 text-white underline-offset-4"
        to="/"
      >
        Home
      </Link>
      <div className="dropdown dropdown-bottom dropdown-end">
        <label
          tabIndex={0}
          className=" hover:underline lg:pl- lg:pr-12 text-white underline-offset-4"
        >
          Code
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu mt-3 shadow bg-white text-black rounded-md w-52"
        >
          <li className="hover:font-bold">
            <a>Java</a>
          </li>
          <li className="hover:font-bold">
            <a>Flutter</a>
          </li>
          <li className="hover:font-bold">
            <a>Laravel</a>
          </li>
          <li className="hover:font-bold">
            <a>Node.Js</a>
          </li>
          <li className="hover:font-bold">
            <a>React.js</a>
          </li>
          <li className="hover:font-bold">
            <a>HTML/CSS</a>
          </li>
          <li className="hover:font-bold">
            <a>MERN</a>
          </li>
          <li className="hover:font-bold">
            <a>JS</a>
          </li>
          <li className="hover:font-bold">
            <a>Mongo</a>
          </li>
          <li className="hover:font-bold">
            <a>php</a>
          </li>
        </ul>
      </div>
      <Link
        className="hover:underline  lg:pr-12 text-white underline-offset-4"
        to="/"
      >
        Design
      </Link>
      <div className="dropdown dropdown-bottom dropdown-end">
        <label
          tabIndex={0}
          className=" hover:underline lg:pr-3 text-white underline-offset-4"
        >
          Technology
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu mt-3 shadow bg-white text-black rounded-md w-52"
        >
          <li className="hover:font-bold">
            <a>Smart Device</a>
          </li>
          <li className="hover:font-bold">
            <a>Data Fiction</a>
          </li>
          <li className="hover:font-bold">
            <a>AI Device</a>
          </li>
          <li className="hover:font-bold">
            <a>Machine Learning</a>
          </li>
          <li className="hover:font-bold">
            <a>Digital Trust</a>
          </li>
          <li className="hover:font-bold">
            <a>3d Printing</a>
          </li>
          <li className="hover:font-bold">
            <a>Genomics</a>
          </li>
          <li className="hover:font-bold">
            <a>Robotic Proccss Automation</a>
          </li>
          <li className="hover:font-bold">
            <a>Virtual Reality </a>
          </li>
          <li className="hover:font-bold">
            <a>5g</a>
          </li>
          <li className="hover:font-bold">
            <a>Cyber Security</a>
          </li>
          <li className="hover:font-bold">
            <a>Block Chain</a>
          </li>
          <li className="hover:font-bold">
            <a>Edge Computing</a>
          </li>
        </ul>
      </div>
      <Link
        className="hover:underline lg:pl-9  text-white underline-offset-4"
        to="/"
      >
        Photo
      </Link>
      <Link
        className="hover:underline lg:pl-12 lg:pr-12 text-white underline-offset-4"
        to="/"
      >
        Video
      </Link>
      <div className="dropdown dropdown-bottom dropdown-end">
        <label
          tabIndex={0}
          className=" hover:underline lg:pr-5 text-white underline-offset-4"
        >
          Audio
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu mt-3 shadow bg-white text-black rounded-md mr-10 w-52"
        >
          <li className="hover:font-bold">
            <a>Music</a>
          </li>
          <li className="hover:font-bold">
            <a>Voice</a>
          </li>
          <li className="hover:font-bold">
            <a>Sound Effect</a>
          </li>
          <li className="hover:font-bold">
            <a>Background sound </a>
          </li>
        </ul>
      </div>
      <Link
        className="hover:underline lg:pl-7 lg:pr-5 text-white underline-offset-4"
        to="/"
      >
        Theme
      </Link>
      <Link
        className="hover:underline lg:pl-7 lg:pr-7 text-white underline-offset-4"
        to="/"
      >
        Templete
      </Link>
      <Link
        className="hover:underline lg:pl-5 lg:pr-5 text-white underline-offset-4"
        to="/"
      >
        Bloging
      </Link>

      <div className="dropdown dropdown-end pl-4">
        <label
          tabIndex={0}
          className="text-white lg:flex hidden bg-black p-2 rounded-lg hover:bg-white hover:text-black mr-3 ml-2"
        >
          Login
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 
  mt-10 mr-96 p-10 
  
  shadow bg-white rounded-box "
        >
          <h1 className="text-center text-xl font-bold">Welcome to Login</h1>
          <img className="w-20 ml-28" src={images2} alt="" />
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              <span className="label-text">Username Or email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt text-red-600">
                Username email is required
              </span>
            </label>
          </div>
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt text-in">Forgot Password?</span>
            </label>
            <button className="bg-slate-600 text-white rounded-md p-2 font-semibold">
              Login
            </button>
          </div>
          <h1 className="text-center mt-3">
            Haven’t an account? <span className="font-semibold">Signup</span>{" "}
          </h1>
        </ul>
      </div>

      <div className="dropdown dropdown-end">
        <label
          tabIndex={0}
          className="text-white lg:flex hidden bg-black p-2 rounded-lg hover:bg-white hover:text-black mr-5"
        >
          Signup
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 
  mt-10 mr-96 p-10 
  
  shadow bg-white rounded-box "
        >
          <h1 className="text-center text-xl font-bold">Welcome to signup</h1>
          <img className="w-20 ml-28" src={images2} alt="" />
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              <span className="label-text">Username Or email</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt text-red-600">
                Username email is required
              </span>
            </label>
          </div>
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-96 max-w-xs">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              <span className="label-text-alt text-red-600">
                Password is not match
              </span>
            </label>
            <button className="bg-slate-600 text-white rounded-md p-2 font-semibold">
              Signup
            </button>
            <div className="divider">or</div>
            <button className="bg-white text-gray-600 rounded-md border border-gray-400 p-2 flex gap-6 font-semibold">
              <img className="w-5 ml-12" src={images3} alt="" />
              <h1> continue in google</h1>
            </button>
            <button className="bg-white mt-2  text-gray-600 rounded-md border border-gray-400 p-2 flex gap-6 font-semibold">
              <img className="w-5 ml-12" src={images4} alt="" />
              <h1> continue in facebook</h1>
            </button>
            <button className="bg-white mt-2  text-gray-600 rounded-md border border-gray-400 p-2 flex gap-6 font-semibold">
              <img className="w-5 ml-12" src={images5} alt="" />
              <h1> continue in twitter</h1>
            </button>
          </div>
        </ul>
      </div>
    </>
  );
  return (
    <nav
      className="flex items-center  flex-wrap"
      style={{ backgroundColor: "#530A0A" }}
    >
      <a href="#" className="mr-4 lg:pl-10 inline-flex items-center">
        <img src={images2} alt="" />
      </a>

      <button
        className="text-white bg-black inline-flex rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <a
          href="#my-modal-2"
          className="btn bg-black border-none hover:bg-black "
        >
          {" "}
          <img src={images1} alt="" />
        </a>
        <div>
          <div className="modal" id="my-modal-2">
            <div className="modal-box">
              <ul tabIndex={0} className="dropdown-content menu ">
                <div className="modal-action">
                  <a href="#" className="btn w-8">
                    X
                  </a>
                </div>
                <h1 className="text-center text-xl text-black font-bold">
                  Welcome to signup
                </h1>
                <img className="w-20 ml-28" src={images2} alt="" />
                <div className="form-control max-w-xs">
                  <label className="label">
                    <span className="label-text">Username Or email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-600">
                      Username email is required
                    </span>
                  </label>
                </div>
                <div className="form-control max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                </div>
                <div className="form-control mb-24 max-w-xs">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-600">
                      Password is not match
                    </span>
                  </label>
                  <button className="bg-slate-600 text-white rounded-md p-2 font-semibold">
                    Signup
                  </button>
                  <div className="divider">or</div>
                  <button className="bg-white text-gray-600 rounded-md border border-gray-400 p-2 flex gap-6 font-semibold">
                    <img className="w-5 ml-12" src={images3} alt="" />
                    <h1> continue in google</h1>
                  </button>
                  <button className="bg-white mt-2  text-gray-600 rounded-md border border-gray-400 p-2 flex gap-6 font-semibold">
                    <img className="w-5 ml-12" src={images4} alt="" />
                    <h1> continue in facebook</h1>
                  </button>
                  <button className="bg-white mt-2  text-gray-600 rounded-md border border-gray-400 p-2 flex gap-6 font-semibold">
                    <img className="w-5 ml-12" src={images5} alt="" />
                    <h1> continue in twitter</h1>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </button>
      <button
        className="text-white bg-black inline-flex rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <a
          href="#my-modal-2"
          className="btn bg-black border-none hover:bg-black "
        >
          {" "}
          <img src={images} alt="" />
        </a>
        <div>
          <div className="modal" id="my-modal-2">
            <div className="modal-box">
              <ul tabIndex={0} className="">
                <div className="modal-action">
                  <a href="#" className="btn w-8">
                    X
                  </a>
                </div>
                <h1 className="text-center text-xl text-black font-bold">
                  Welcome to Login
                </h1>
                <img className="w-20+ ml-28" src={images2} alt="" />
                <div className="form-control  max-w-xs">
                  <label className="label">
                    <span className="label-text">Username Or email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text-alt text-red-600">
                      Username email is required
                    </span>
                  </label>
                </div>
                <div className="form-control  max-w-xs">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text-alt text-in">
                      Forgot Password?
                    </span>
                  </label>
                  <button className="bg-slate-600 text-white rounded-md mb-20 p-2 font-semibold">
                    Login
                  </button>
                </div>
                <h1 className="text-center mt-3">
                  Haven’t an account?{" "}
                  <span className="font-semibold">Signup</span>{" "}
                </h1>
              </ul>
            </div>
          </div>
        </div>
      </button>
      <button
        onClick={() => setClosed(!closed)}
        className="text-white inline-flex pr-5 rounded lg:hidden ml-5 hover:text-white outline-none nav-toggler"
        data-target="#navigation"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
      <div
        className={`${
          closed ? "block" : "hidden"
        } lg:hidden top-navbar w-full lg:flex-grow lg:w-auto`}
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-end pr-5 flex flex-col lg:h-auto ">
          {navLinks}
        </div>
      </div>
      <div
        className={`hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        id="navigation"
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          {navLinks}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
