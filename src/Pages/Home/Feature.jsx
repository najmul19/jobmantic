import React from "react";
import res from "../../assets/Icons/res.png";
import int from "../../assets/Icons/int.png";
import match from "../../assets/Icons/match.png";
import opt from "../../assets/Icons/opt.png";
import pre from "../../assets/Icons/pre.png";
import car from "../../assets/Icons/car.png";

const Features = () => {
  const features = [
    { icon: res, title: "Smart Resume Tailoring" },
    { icon: int, title: "3X Higher Interview Rate" },
    { icon: match, title: "Lightning-Fast Job Matching" },
    { icon: opt, title: "ATS Score Optimization" },
    { icon: pre, title: "Premium Job Placement" },
    { icon: car, title: "Career Mentoring" },
  ];

  return (
    <div>
      <div className="px-4 sm:px-6 lg:px-24 py-8 lg:py-14 bg-gradient-to-r from-[#F9FBFF] via-[#F5F9FF] to-[#E6F2FF]">
        <div className="hidden lg:block">
          <div className="w-full flex justify-center ">
            <div className="pl-20 flex relative">
              {features.map((feature, index) => (
                <React.Fragment key={index}>
                  <div
                    className=" flex flex-col items-center justify-center bg-[#E6F2FF] 
                           rounded-full w-[162px] h-[162px] p-4 z-20 relative -left-14"
                    style={{
                      transform:
                        index % 2 === 0
                          ? "translateY(25px)"
                          : "translateY(-2px)",
                    }}
                  >
                    <div className="flex items-center justify-center text-white rounded-full w-14 h-14 mb-3">
                      <img src={feature.icon} alt="" />
                    </div>
                    <p className="text-sm font-medium text-center px-2">
                      {feature.title}
                    </p>
                  </div>

                  {index < features.length - 1 && (
                    <div
                      className="bg-[#E6F2FF] rounded-full w-[122px] h-[122px] -ml-28 mt-8 z-10"
                      style={{
                        transform:
                          index % 2 === 0
                            ? "translateY(25px)"
                            : "translateY(-25px)",
                      }}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex justify-center">
                <div className="flex flex-col items-center">
                  <div
                    className="flex flex-col items-center justify-center bg-[#E6F2FF] 
                        rounded-full w-28 h-28 md:w-32 md:h-32 p-3 md:p-4 shadow-lg"
                  >
                    <div className="flex items-center justify-center rounded-full w-10 h-10 md:w-12 md:h-12 mb-2">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-6 h-6 md:w-8 md:h-8"
                      />
                    </div>
                    <p className="text-xs md:text-sm font-medium text-center leading-tight">
                      {feature.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 md:mt-8">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-[#E6F2FF] rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
