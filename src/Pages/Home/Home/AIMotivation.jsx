import React from "react";
import light from "../../../assets/Icons/light.png";
import hour from "../../../assets/Icons/hour.png";
import person from "../../../assets/Icons/person.png";

const AIMotivation = () => {
  return (
    <div className="relative flex flex-col items-center justify-center px-4 py-10 sm:px-8 md:px-16 lg:px-24 overflow-hidden">

      {/* <div className="absolute -top-0 left-90 w-96 h-96 bg-[#1e83d1] rounded-full opacity-20 blur-[120px]"></div>
      <div className="absolute -bottom-40 right-40 w-[500px] h-[500px] bg-[#D1EBFF] rounded-full opacity-40 blur-[150px]"></div> */}
      
      <p className="text-lg sm:text-2xl md:text-[32px] text-center relative z-10">
        You are{" "}
        <span className="font-bold text-[#23A2FC]">90% more likely</span> to get
        hired if you use AIApply
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12 w-full max-w-4xl text-center relative z-10">
        <div className="flex flex-col items-center">
          <img src={light} alt="light" className="w-[61px] h-[72px] mb-4" />
          <h3 className="text-[32px] font-bold">9.1/10</h3>
          <p className="text-sm text-gray-600">Quality Improvement Rating</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={hour} alt="hour" className="w-[72px] h-[55px] mb-4 mt-5" />
          <h3 className="text-[32px] font-bold">5 Hrs</h3>
          <p className="text-sm text-gray-600">Editing Hours saved per job</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={person} alt="person" className="w-[72px] h-[68px] mb-4 mt-2" />
          <h3 className="text-[32px] font-bold">10 Million</h3>
          <p className="text-sm text-gray-600">Jobs our AI is trained on</p>
        </div>
      </div>
    </div>
  );
};

export default AIMotivation;
