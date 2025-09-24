import React from "react";
import user1 from "../../assets/Icons/user1.png";
import user2 from "../../assets/Icons/user2.png";
import user3 from "../../assets/Icons/user3.png";

const VoiceOfWorld = () => {
  return (
    <div className="px-6 sm:px-10 lg:px-20 py-16  text-[#000000]">
     {/* header */}
      <div className="max-w-4xl text-left">
        <h2 className="text-2xl md:text-[36px] font-bold uppercase tracking-wide">
          VOICE FROM THE WORLD
        </h2>
        <p className="mt-2 text-[16px] md:text-[18px] max-w-xl">
          What our users say after using Jobmantic and how it helped them
          improve their Resume
        </p>
      </div>

      {/* Grid Layout */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left Column */}
      
        <div className="flex flex-col items-start md:relative">
          
          <div className="relative hidden md:block w-[200px] h-[200px] mx-auto lg:mx-0">
            <img
              src={user1}
              alt="Michelle V"
              className="absolute top-58 left-24 w-[42px] h-[42px] rounded-[10px] border-4 border-white"
            />
            <img
              src={user1}
              alt="Michelle V"
              className="absolute top-92 left-28 w-[60px] h-[60px] rounded-[10px] border-4 border-white"
            />
            <img
              src={user2}
              alt="Shiva V"
              className="absolute -bottom-42 -right-15 w-[120px] h-[120px] rounded-[24px] border-4 border-white"
            />
            <img
              src={user3}
              alt="Ken D"
              className="absolute -bottom-46 -right-24 w-[42px] h-[42px] rounded-[24px] border-4 border-white"
            />
            <img
              src={user3}
              alt="Ken D"
              className="absolute top-50 -right-20 w-[60px] h-[60px] rounded-[12px] border-4 border-white"
            />
          </div>

         
          <div className="flex md:hidden gap-4 flex-wrap justify-center">
            <img src={user1} className="w-[60px] h-[60px] rounded-xl" alt="" />
            <img src={user2} className="w-[60px] h-[60px] rounded-xl" alt="" />
            <img src={user3} className="w-[60px] h-[60px] rounded-xl" alt="" />
          </div>

          
          <div className="mt-6 md:mt-0 md:absolute md:bottom-0 text-sm space-y-2">
            <p>
              <span className="font-semibold">Michelle V.</span>{" "}
              <span className="font-light">
                · Sr. Digital Marketing Manager
              </span>
            </p>
            <p>
              <span className="font-semibold">Shiva V.</span>{" "}
              <span className="font-light">· Instructional Designer</span>
            </p>
            <p>
              <span className="font-semibold">Ken D.</span>{" "}
              <span className="font-light">· Senior Recruiter</span>
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 flex flex-col items-center lg:items-end">
        
          <div
            className="bg-gray-50  p-6 w-full md:w-[720px] min-h-[168px]"
            style={{
              borderTopLeftRadius: "24px",
              borderBottomRightRadius: "24px",
              borderBottomLeftRadius: "24px",
            }}
          >
            <p className="text-5xl leading-none">“</p>
            <p className="text-sm md:text-base">
              omg i cannot believe i am getting a interview after using this.
              the recommendations is well thought off. highly recommend everyone
              to use this website.
            </p>
            <div className="flex flex-row items-center gap-2 mt-4">
              <img className="w-[32px] h-[32px] rounded-full" src={user2} alt="" />
              <p className="font-semibold">
                Michelle V.{" "}
                <span className="font-normal text-gray-500">
                  / Sr. Digital Marketing Manager
                </span>
              </p>
            </div>
          </div>

          
          <div
            className="bg-gray-50  p-6 w-full md:w-[600px] min-h-[188px]"
            style={{
              borderTopLeftRadius: "24px",
              borderBottomRightRadius: "24px",
              borderBottomLeftRadius: "24px",
            }}
          >
            <p className="text-5xl leading-none">“</p>
            <p className="text-sm md:text-base">
              The custom resume feature saved me so much time and effort. It
              made sure my resume matched the job descriptions perfectly. I am
              gonna use it for every job I apply.
            </p>
            <div className="flex flex-row items-center gap-2 mt-4">
              <img className="w-[32px] h-[32px] rounded-full" src={user3} alt="" />
              <p className="font-semibold">
                Shiva V.{" "}
                <span className="font-normal text-gray-500">
                  / Instructional Designer
                </span>
              </p>
            </div>
          </div>

          
          <div
            className="bg-gray-50  p-6 w-full md:w-[640px] min-h-[168px]"
            style={{
              borderTopLeftRadius: "24px",
              borderBottomRightRadius: "24px",
              borderBottomLeftRadius: "24px",
            }}
          >
            <p className="text-5xl leading-none">“</p>
            <p className="text-sm md:text-base">
              Really easy to use and understand. I loved how I could take direct
              action on suggestions and not just learn about them.
            </p>
            <div className="flex flex-row items-center gap-2 mt-4">
              <img className="w-[32px] h-[32px] rounded-full" src={user1} alt="" />
              <p className="font-semibold">
                Ken D.{" "}
                <span className="font-normal text-gray-500">
                  / Senior Recruiter
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceOfWorld;
