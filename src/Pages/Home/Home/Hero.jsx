import React from "react";
import meterImg from "../../../assets/Icons/meter.png";
import badgeImg from "../../../assets/Icons/tara.png";
import starIcon from "../../../assets/Icons/Vector.png";
import line from "../../../assets/Icons/line.png";
import star from "../../../assets/Icons/start.png";
import { IoIosArrowDropright } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F9FBFF] via-[#F5F9FF] to-[#E6F2FF]">
 
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 82, 204, 0.15) 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      ></div>


      <div className="absolute top-20 left-150 w-72 h-72 bg-[#1e83d1] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-90 w-96 h-96 bg-[#D1EBFF] rounded-full opacity-15 blur-3xl"></div>

      <div className="relative px-24 py-14 grid grid-cols-1 lg:grid-cols-2 items-center">
       
        <div className="space-y-6">
          <div>
            <img src={badgeImg} alt="Top Pick Badge" className="w-32" />
          </div>
          <div className="absolute top-10 md:top-14 left-36 max-w-[30px]">
            <img src={star} alt="" />
          </div>
          <div className="absolute top-12 md:top-16 left-33 max-w-[20px]">
            <img src={star} alt="" />
          </div>
          <div className="absolute top-12 md:top-16 left-41 max-w-[20px]">
            <img src={star} alt="" />
          </div>
          <div className="absolute top-14 md:top-18 left-31 max-w-[12px]">
            <img src={star} alt="" />
          </div>
          <div className="absolute top-14 md:top-18 left-45 max-w-[12px]">
            <img src={star} alt="" />
          </div>
          <div className="absolute top-17 md:top-24 left-30">
            <div className="text-[16px] font-semibold">
                <span className="text-[#23A2FC]">TOP </span><span>PICK</span>
            </div>
            <div>
                <h3 className="text-[12px] text-[#060606]">- Jobmantic -</h3>
            </div>
          </div>

          <h1 className="text-[48px] md:text-5xl font-bold leading-snug">
            <span className="font-normal">AI Resume Builder & Job Placement</span> –{" "}
            <span className="">Get Hired 3X Faster</span>
          </h1>

          <p className="text-[#000000] text-[18px] leading-relaxed">
            Boost your job search with our AI-powered platform that tailors
            resumes, beats ATS, and helps you land better jobs faster.
          </p>

          <button className="bg-black flex items-center justify-center gap-2 text-white font-medium rounded-full px-6 py-3 text-lg hover:bg-gray-800 transition">
            Improve your resume for FREE
            <IoIosArrowDropright className="text-white text-2xl" />
          </button>
        </div>
        {/* right part */}
        <div className="relative md:flex items-start md:max-w[591] md:max-h-[524px] ">
       
          <div className=" md:left-7 text-[14px] bg-white md:w-[306px] rounded-l-[20px]  px-6 pt-6 pb-22  border-gray-200 relative top-18">
            <p className="text-[#A3A7AB] text-[10px] ">Name</p>

            <div className="divider h-[1px]"></div>
            <input type="text" className="bg-[#F3F4F6] h-4 w-[192px]" />
            <p className="text-[#A3A7AB]  h-[24px] text-[10px] mt-2.5">
              PROFESSIONAL SUMMARY
            </p>

            <input type="text" className="bg-[#F3F4F6] h-4 w-[192px]" />
            <input type="text" className="bg-[#F3F4F6] h-4 w-[192px]" />
            <input type="text" className="bg-[#F3F4F6] h-4 w-[130px]" />
            <p className="text-[#A3A7AB] text-[10px] h-[24px] mt-2.5">SKILL</p>

            <input type="text" className="bg-[#F3F4F6] h-4 w-[192px]" />
            <input type="text" className="bg-[#F3F4F6] h-4 w-[192px]" />
            <p className="text-[#A3A7AB] text-[10px] h-[24px] mt-2.5">EXPERIENCE</p>

            <input type="text" className="bg-[#F3F4F6] h-4 w-[192px]" />
            <input type="text" className="bg-[#F3F4F6] h-4 w-[192px]" />
          </div>

          {/* 2nd/2nd part */}
          <div className="bg-white rounded-tl-[20px]  p-6  border-gray-200 md:w-3/4 min-h-[459px] relative z-10 mt-32  md:mt-5 ">
         
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-bold text-[#000000]">Ariful Islam</h1>
            </div>

            <div className="mb-6">
              <h2 className="text-sm font-semibold text-[#000000] mb-2">
                PROFESSIONAL SUMMARY
              </h2>
              <p className="text-[#535353] text-[10px] leading-relaxed">
                Motivated and dedicated individual seeking opportunities to
                apply skills and grow professionally. Strong work ethic with the
                ability to adapt to new challenges.
              </p>
            </div>

        
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                SKILL
              </h3>
              <p className="text-[#535353] text-[10px] leading-relaxed">
                Java, Python, Go, Apache Kafka, Kubernetes, CI/CD with Jenkins,
                Prometheus, Node.js, TypeScript, Git, MongoDB, AWS
              </p>
            </div>

       
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                EXPERIENCE
              </h3>
              <div className="text-gray-600 text-sm">
                <div className="flex justify-between">
                  <div>
                    <p className=" font-semibold text-[#000000] text-[10px]">
                      Dutchwise System Engineer
                    </p>
                  </div>
                  <div>
                    <p className="text-[#535353] text-xs mb-2">
                      Jun 2015 - Present
                    </p>
                  </div>
                </div>
                <p className="text-[#535353] text-[10px] leading-relaxed">
                  Once you have your refined resume, explore our job board and
                  instantly get hundreds of job matches where you'll be the top
                  applicant. Create, edit, and apply – all from one panel.
                </p>
                <input
                  type="text"
                  className="bg-[#F3F4F6] h-4 w-[298px] mb-1.5"
                />
                <input
                  type="text"
                  className="bg-[#F3F4F6] h-4 w-[107px] mb-1.5"
                />
                <input
                  type="text"
                  className="bg-[#F3F4F6] h-4 w-[298px] mb-1.5 "
                />
                <input
                  type="text"
                  className="bg-[#F3F4F6] h-4 w-[107px] mb-1.5"
                />
              </div>
            </div>

  
            <img
              src={meterImg}
              alt="ATS Meter"
              className="absolute -top-10 -right-2 w-[130px] h-[97px]"
            />

            <img
              src={line}
              alt="line indicator"
              className="absolute top-3 -left-40 w-[150px] h-[43px]"
            />
            <img
              src={starIcon}
              alt="star icon"
              className="absolute -top-5 -left-5 w-[40px] h-[40px]"
            />
          </div>

   
          <div className="absolute bottom-10 h-[32px] right-0 bg-white shadow-md px-4 py-2 rounded-full text-sm flex items-center gap-2 border border-gray-200 z-40">
            <img src={starIcon} alt="icon" className="w-4 h-4" />
            <span className="font-medium">Summary Enhanced</span>
          </div>

          <div className="absolute bottom-0 h-[32px] right-0 bg-white shadow-md px-4 py-2 rounded-full text-sm flex items-center gap-2 border border-gray-200 z-40">
            <img src={starIcon} alt="icon" className="w-4 h-4" />
            <span className="font-medium">Relevant Skills Highlighted</span>
          </div>

          <div className="absolute -bottom-9 h-[32px] right-0 bg-white shadow-md px-4 py-2 rounded-full text-sm flex items-center gap-2 border border-gray-200 z-40">
            <img src={starIcon} alt="icon" className="w-4 h-4" />
            <span className="font-medium">Recent Work Experience Enhanced</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
