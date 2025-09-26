import React from "react";
import { IoIosArrowDropright } from "react-icons/io";
import arrow from "../../assets/Icons/arrow.png";
import job_d from "../../assets/Icons/job-des.png";
const ResumeTailoring = () => {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:px-8 md:px-16 lg:px-24 py-14">
  {/* Left Content */}
  <div className="w-full sm:w-1/2 mt-8 sm:mt-0">
    <h3 className="text-[22px] sm:text-[26px] md:text-[40px] font-semibold">
      Smart Resume Tailoring
    </h3>
    <p className="text-[16px] sm:text-[18px] font-normal mt-2 max-w-[459px]">
      Let our smart AI craft the perfect resume for every job—packed with
      the right keywords, skills, and experiences to grab recruiters’
      attention and land interviews faster.
    </p>
    <button className="bg-black flex items-center justify-center gap-2 text-white font-semibold rounded-full px-3 sm:px-6 py-2 sm:py-3 text-[16px] sm:text-[18px] hover:bg-gray-800 transition mt-4">
      Create a resume
      <img className="w-5" src={arrow} alt="arrow" />
    </button>
  </div>

  {/* Right Image */}
  <div className="relative w-full sm:w-1/2 flex justify-center mt-8 sm:mt-0">
    <img
      className="w-full h-auto max-w-[597px] rounded-lg"
      src={job_d}
      alt="resume tailoring"
    />

    <h3 className="absolute top-0 left-1/2 -translate-x-1/2 text-[12px] sm:text-[14px]">
      Job Description
    </h3>
    <h3 className="absolute top-20 left-2 text-[12px] sm:text-[14px]">
      Resume
    </h3>

    <div className="absolute top-0 right-0 text-[10px] sm:text-[12px] text-right">
      <p>
        Customize Resume{" "}
        <span className="text-[#80C0FF] font-bold">.</span>
      </p>
      <p>
        Experiences Match{" "}
        <span className="text-[#80C0FF] font-bold">.</span>
      </p>
      <p>
        Keyword Match{" "}
        <span className="text-[#80C0FF] font-bold">.</span>
      </p>
      <p>
        Relevant Skills{" "}
        <span className="text-[#80C0FF] font-bold">.</span>
      </p>
    </div>
  </div>
</div>

  );
};

export default ResumeTailoring;
