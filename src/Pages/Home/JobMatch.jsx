import React from "react";
import jobmatch from "../../assets/Icons/light_fast.png";
import tara from "../../assets/Icons/Vector.png";

const JobMatch = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start px-4 sm:px-24 py-14">
      {/* Image section */}
      <div className="relative w-full sm:w-1/2 flex justify-center">
        <img
          className="w-full h-auto max-w-[416px] max-h-[416px]"
          src={jobmatch}
          alt="job matching image"
        />
      </div>

      {/* Text section */}
      <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
        <h4 className="uppercase font-semibold text-[40px] mb-2">
          Lightning-Fast Job Matching
        </h4>
        <p className="text-[18px] w-full max-w-[544px]">
          AI-powered 1:1 Job to Resume matching that positions you perfectly
          aligned in the competitive Job market with your skills, salary
          expectations, and career goals.
        </p>
        <div className="relative w-[199px] border-t-4 border-black my-4 mt-4">
          <img
            src={tara}
            alt="tara"
            className="absolute left-52 -top-7 w-10 h-10 mt-3
             opacity-40
             [filter:invert(52%)_sepia(85%)_saturate(4020%)_hue-rotate(186deg)_brightness(95%)_contrast(94%)]"
          />
        </div>
      </div>
    </div>
  );
};

export default JobMatch;
