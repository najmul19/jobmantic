import { IoIosArrowDropright } from "react-icons/io";
import arrow from "../../assets/Icons/arrow.png";
import carrer_m from "../../assets/Icons/carer_mon.png";

const CareerMonitor = () => {
  return (
    <div className="flex flex-col sm:flex-row  px-4 sm:px-24 py-14">
      <div className="w-full sm:w-1/2  mt-15 ">
        <h3 className=" text-[40px] font-semibold ">Career Mentoring</h3>
        <p className="text-[18px] font-normal mt-2 max-w-[459px]">
          Personalized Career Mentoring to position yourself strong in the Job
          market; Craft a job-winning resume and optimize your profile for
          maximum visibility. Step-by-step mentoring to align your skills,
          resume, and career path that helps you get interview and land on a Job
          with confidence.
        </p>
        <button className="bg-black flex items-center justify-center gap-2 text-white font-semibold rounded-full px-6 py-3 text-[18px] hover:bg-gray-800 transition mt-4">
          Go Mentoring
          {/* <IoIosArrowDropright className="text-white text-2xl" /> */}
          <img className="text-white w-[24px]" src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="relative w-full sm:w-1/2 ">
        <img
          className="w-full h-auto sm:absolute sm:-left-5 max-w-[597px] max-h-[398px]"
          src={carrer_m}
          alt="career monitoring"
        />
      </div>
    </div>
  );
};

export default CareerMonitor;
