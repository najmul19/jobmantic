import React from "react";
import img from "../../../assets/Icons/Vector.png";

const Navbar = () => {
  return (
    <div className="navbar bg-[#F9FBFF]  sm:px-8 md:px-16 lg:px-24 max-h-[130px]">
  
      <div className="navbar-start">
      
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li><a className="text-sky-600">AI Resume</a></li>
            <li><a>AI Coverletter</a></li>
            <li><a>Pricing</a></li>
            <li>
              <details>
                <summary>Career</summary>
                <ul className="p-2 bg-base-100 shadow rounded-box">
                  <li><a>Option 1</a></li>
                  <li><a>Option 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Organization</a></li>
            <li><a>Blog</a></li>
            <div className="divider"></div>
           
            <li><a className="text-sm font-medium">Log In</a></li>
            <li>
              <a className="btn btn-sm rounded-full bg-black text-white hover:bg-neutral-800">
                Sign Up
              </a>
            </li>
          </ul>
        </div>

 
        <a className="text-2xl font-bold flex items-center gap-1 relative">
          <span className="text-sky-600">Job</span>
          <span className="text-black relative">
            man
            <span className="relative inline-block">
              t
              <span className="relative inline-block">
                i
             
                <img
                  src={img}
                  alt="logo dot"
                  className="w-3 h-2.5 absolute top-0.5 left-2.5 -translate-x-1/2 -ml-1.5"
                />
                c
              </span>
            </span>
          </span>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 font-medium text-[14px]">
          <li><a className="text-sky-600">AI Resume</a></li>
          <li><a>AI Coverletter</a></li>
          <li><a>Pricing</a></li>
          <li>
            <details>
              <summary>Career</summary>
              <ul className="p-2 bg-base-100 shadow rounded-box">
                <li><a>Option 1</a></li>
                <li><a>Option 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Organization</a></li>
          <li><a>Blog</a></li>
        </ul>
      </div>

   
      <div className="navbar-end gap-2 sm:gap-3 hidden lg:flex">
        <a className="text-sm font-medium">Log In</a>
        <a className="btn btn-sm rounded-full bg-black text-white hover:bg-neutral-800">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
