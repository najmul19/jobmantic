import React from "react";
import tara from "../../assets/Icons/Vector.png";

const WhyChoos = () => {
  return (
    <div className=" px-4 sm:px-24 py-14">
      <div className="max-w-[482px]  mt-10">
        {/* <div className="absolute -top-0 left-90 w-50 h-50 bg-[#1e83d1] rounded-full opacity-20 blur-[120px]"></div>
        <div className="absolute -bottom-40 right-40 w-[500px] h-[500px] bg-[#D1EBFF] rounded-full opacity-40 blur-[150px]"></div> */}
        <h2 className="uppercase font-bold text-[36px]">
          Why Choose Our AI Job Placement Platform?
        </h2>
        <div className=" relative w-[199px] border-t-4 border-black my-4">
          <img
            className="absolute left-52 -top-5 w-10 h-10"
            src={tara}
            alt="tara"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoos;
