import { useState } from "react";
import right from "../../assets/Icons/right.png";
import women from "../../assets/Icons/women.png";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="px-4 sm:px-8 lg:px-24 py-16 text-center ">
      <h2 className="text-[48px] font-bold sm:text-4xl  mb-6">Pricing</h2>

      {/* Toggle */}
      <div className="flex justify-center gap-2 mb-10">
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            billing === "monthly"
              ? "bg-[#23A2FC] text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setBilling("monthly")}
        >
          Monthly
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm font-medium relative ${
            billing === "yearly"
              ? "bg-[#23A2FC] text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setBilling("yearly")}
        >
          Yearly
          <span className="absolute -top-3 right-0 text-[11px] bg-red-500 text-white px-1 rounded">
            60% off
          </span>
        </button>
      </div>

      {/* Pricing Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center items-start">
        {/* Free */}
        <div className="bg-white rounded-[16px] shadow-sm p-8 w-full max-w-[320px] self-start">
          <h3 className="text-[16px] font-semibold mb-2 text-left text-[#23A2FC]">
            FREE
          </h3>
          <p className="text-[48px] text-left  mb-6">
            ৳0<span className="text-base opacity-50">/month</span>
          </p>
          <button className="text-[16px] font-semibold w-full bg-[#F8F8F8] text-black border border-[#DEDEDE]  rounded-[48px] py-2 hover:bg-gray-200 mb-6">
            Get Started
          </button>
          <p className="text-left pb-2 text-[16px] opacity-60 ">
            Try it out, see what it can do.
          </p>
          <ul className="text-left text-gray-600 space-y-2 text-sm text-[16px]">
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>3 AI resume generations</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>2 cover letter templates</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Basic job tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Email support</span>
            </li>
          </ul>
        </div>

        {/* Pro */}
        <div className="bg-white rounded-[16px] shadow-lg border-2 border-[#23A2FC] p-8 w-full max-w-[320px] relative self-start">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#23A2FC] text-white text-xs  px-3 py-1 rounded-full">
            MOST POPULAR
          </span>
          <h3 className="text-[16px] text-[#23A2FC] text-left font-semibold mb-2">
            PRO
          </h3>
          <p className="text-[48px] text-left  mb-6">
            ৳{billing === "monthly" ? "3000" : "1200"}
            <span className="text-base opacity-50">/month</span>
          </p>
          <button className="w-full bg-[#23A2FC] text-white rounded-[48px] py-2 hover:bg-blue-600 mb-6 text-[16px] font-semibold">
            Let’s Get You Hired
          </button>
          <p className="text-left pb-2 text-[16px] opacity-60 ">
            Save hours of time and stress for less than the cost of lunch.
          </p>

          <ul className="text-left text-gray-600 space-y-2 text-sm text[16px]">
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Unlimited AI resume generations</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Create job applications in seconds</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Unlimited resume + cover letter</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Host your resume online + translate it</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Advanced job tracking & analytics</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>AI interview preparation</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Interview Buddy</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Priority support</span>
            </li>
          </ul>
        </div>

        {/* Organization */}
        <div className="bg-white rounded-[16px] shadow-sm p-8 w-full max-w-[320px] self-start">
          <h3 className="text-[16px] text-[#23A2FC] text-left  mb-2">
            ORGANIZATION
          </h3>
          <p className="text-[48px] text-left  mb-6">Custom</p>
          <button className="text-[16px] font-semibold w-full bg-[#F8F8F8] text-black border border-[#DEDEDE]  rounded-[48px] py-2 hover:bg-gray-200 mb-5">
            Talk To Our Team
          </button>
          <p className="text-left pb-2 text-[16px] opacity-60 ">
            Everything in Pro, plus:
          </p>
          <ul className="text-left text-gray-600 space-y-2 text-[16px]">
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Everything in Pro</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Team management dashboard</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Advanced analytics & reporting</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Custom integrations</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>Dedicated account manager</span>
            </li>
            <li className="flex items-start gap-2">
              <img src={right} alt="check" className="w-4 h-4 mt-1" />
              <span>24/7 phone support</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Testimonial */}
      <div className="max-w-[332.62px] mx-auto mt-12 text-gray-600 text-sm">
        <p>
          AIApply transformed my job search… I started getting 3x more interview
          invites within weeks.
        </p>
        <div className="flex justify-center items-center mt-2">
          <img
            className="w-6 h-6 rounded-full object-cover mr-2"
            src={women}
            alt="testimonial person photo"
          />
          <p className="font-semibold">Sophie C, Pro Customer</p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
