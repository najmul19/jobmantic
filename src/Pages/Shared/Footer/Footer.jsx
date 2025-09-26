import React from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";

import img from "../../../assets/Icons/Vector.png";

const Footer = () => {
  return (
    <footer className=" py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-sm text-gray-700">
        {/* Logo */}
        <div className="text-black">
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
          {/* Features */}
          <div className="mt-2 text-black">
            <h3 className="font-semibold mb-3 text-[14px]">Features</h3>
            <ul className="space-y-2 text-[12px]">
              <li>AI Resume</li>
              <li>AI Coverletter</li>
              <li>Pricing</li>
              <li>Career</li>
              <li>Organization</li>
              <li>Outplacement</li>
            </ul>
          </div>
        </div>

        {/* Blog */}
        <div className="mt-10 text-black">
          <h3 className="font-semibold mb-3 text-[14px]">Blog</h3>
          <ul className="space-y-2 text-[12px]">
            <li>Is Jobright Legit?</li>
            <li>Success Stories from Jobright Users</li>
            <li>What Top AI Companies Are Looking For</li>
            <li>Jobright AI Agent Launch</li>
            <li>Top Entry Level Jobs</li>
          </ul>
        </div>

        {/* info */}
        <div className="mt-10">
          <h3 className="font-semibold mb-3 text-[14px] text-black">Related Tools</h3>
          <ul className="space-y-2 mb-6 text-[12px]">
            <li>AI Job Assistant</li>
            <li>AI Cover Letter Generator</li>
            <li>AI Resume Helper</li>
            <li>AI Job Tracker</li>
          </ul>
        </div>
        {/* Social Icons */}
        <div className="   text-xl text-black">
          <div className="flex flex-row gap-2 mb-4 ">
            <FaLinkedin className="cursor-pointer hover:text-sky-600" />
            <FaInstagram className="cursor-pointer hover:text-pink-500" />
            <FaGithub className="cursor-pointer hover:text-gray-800" />
            <FaTiktok className="cursor-pointer hover:text-black" />
            <FaXTwitter className="cursor-pointer hover:text-black" />
          </div>
          <h3 className="font-semibold mb-3 text-[14px]">Information</h3>
          <ul className="space-y-2 text-[12px]">
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
