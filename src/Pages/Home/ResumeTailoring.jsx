import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import arrow from "../../assets/Icons/arrow.png";
import job_d from "../../assets/Icons/job-des.png";
const ResumeTailoring = () => {
  return (
    <div className="flex flex-col sm:flex-row  px-4 sm:px-24 py-14">
      <div className="w-1/2 mt-15 ">
        <h3 className=" text-[40px] font-semibold ">Smart Resume Tailoring</h3>
        <p className="text-[18px] font-normal mt-2 max-w-[459px]">
          Let our smart AI craft the perfect resume for every job—packed with
          the right keywords, skills, and experiences to grab recruiters’
          attention and land interviews faster.
        </p>
        <button className="bg-black flex items-center justify-center gap-2 text-white font-semibold rounded-full px-6 py-3 text-[18px] hover:bg-gray-800 transition mt-4">
          Create a resume
          {/* <IoIosArrowDropright className="text-white text-2xl" /> */}
          <img className="text-white w-[24px]" src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="relative w-1/2 items-center justify-center content-center">
        <img
          className="max-w-[597px] max-h-[382px] "
          src={job_d}
          alt="resume tailoring image"
        />
        <h3 className="absolute top-0 left-50 text-[14px]" >Job Description</h3>
        <h3 className="absolute top-20 left-0 text-[14px]">Resume</h3>
        <div className="absolute top-0 right-0 text-[12px] text-right ">
          <p>
            Customize Resume <span className="text-[#80C0FF] font-bold">.</span>{" "}
          </p>
          <p>
            Experiences Match <span className="text-[#80C0FF] font-bold">.</span>{" "}
          </p>
          <p>
            Keyword Match <span className="text-[#80C0FF] font-bold">.</span>{" "}
          </p>
          <p>
            Relavant Skills <span className="text-[#80C0FF] font-bold">.</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeTailoring;
