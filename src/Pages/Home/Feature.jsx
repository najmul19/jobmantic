import React from "react";
import { FileText, Timer, Zap, Gauge, Briefcase, Users } from "lucide-react";
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
    <div className="px-4 sm:px-24 py-14 bg-gradient-to-r from-[#F9FBFF] via-[#F5F9FF] to-[#E6F2FF]">
      <div className="w-full flex justify-center ">
        <div className="flex relative">
          {features.map((feature, index) => (
            <React.Fragment key={index}>
              {/* Feature Circle */}
              <div
                className="flex flex-col items-center justify-center bg-[#E6F2FF] 
                         rounded-full w-[162px] h-[162px]  p-4 z-20 relative -left-14"
                style={{
                  transform:
                    index % 2 === 0 ? "translateY(25px)" : "translateY(-2px)",
                }}
              >
                <div className="flex items-center justify-center text-white rounded-full w-14 h-14 mb-3">
                  <img src={feature.icon} alt="" />
                </div>
                <p className="text-sm font-medium text-center px-2">
                  {feature.title}
                </p>
              </div>

              {/* Decorative Overlap Circle */}
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
  );
};

export default Features;
