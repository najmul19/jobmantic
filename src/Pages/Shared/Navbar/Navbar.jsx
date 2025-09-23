import React from "react";
import img from "../../../assets/Icons/Vector.png";
const Navbar = () => {
  return (
    <div className="navbar bg-[#F9FBFF]  px-24 max-h-[130px]">
      <div className="navbar-start">
        {/* <a className="text-2xl font-bold">
          <span className="text-sky-600">Job</span>
          <span className="text-black">mantic</span>
        </a> */}
        <a className="text-2xl font-bold flex items-center gap-1 relative">
          <span className="text-sky-600">Job</span>
          <span className="text-black relative">
            man
            <span className="relative inline-block">
              t
              <span className="relative inline-block">
                i{/* icon above i */}
                <img
                  src={img}
                  alt="logo dot"
                  className="w-2.5 h-2.5 absolute top-1 left-1/2 -translate-x-1/2 -ml-1.5"
                />
                c
              </span>
            </span>
          </span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4 font-medium text-[14px]">
          <li>
            <a className="text-sky-600">AI Resume</a>
          </li>
          <li>
            <a>AI Coverletter</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <details>
              <summary>Career</summary>
              <ul className="p-2 bg-base-100 shadow rounded-box">
                <li>
                  <a>Option 1</a>
                </li>
                <li>
                  <a>Option 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Organization</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="text-sm font-medium">Log In</a>
        <a className="btn btn-sm rounded-full bg-black text-white hover:bg-neutral-800">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
