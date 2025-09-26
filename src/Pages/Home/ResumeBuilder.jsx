import arrow from "../../assets/Icons/arrow.png";
import avatar from "../../assets/Icons/avatar.png";

const ResumeBuilder = () => {
  return (
    <div className="px-4  sm:px-8 md:px-16 lg:px-24">
      <div className=" relative flex flex-col sm:flex-row items-center justify-between 
                      bg-gradient-to-r from-[#99DAF4] to-[#ACA2EF] 
                      rounded-bl-[80px] rounded-tr-[80px] p-6 sm:p-10 lg:p-14 sm:max-h-[360px]">
        
        {/* Left Section */}
        <div className="w-full sm:w-1/2 space-y-4">
          <h4 className="font-semibold text-2xl sm:text-3xl lg:text-[40px] leading-snug">
            AI Resume Builder
          </h4>
          <p className="text-sm sm:text-base lg:text-[18px] font-normal max-w-[560px] leading-relaxed">
            Create ATS-Optimized Resumes That Get Results. Build professional,
            ATS-friendly resumes that pass automated screening and impress
            hiring managers. Our AI technology creates personalized content
            based on your experience and target job requirements.
          </p>
          <button className="bg-black flex items-center justify-center gap-2 
                             text-white font-semibold rounded-full 
                             px-5 sm:px-6 py-2.5 sm:py-3 
                             text-sm sm:text-[18px] hover:bg-gray-800 transition">
            Build your resume now
            <img className="w-4 sm:w-5" src={arrow} alt="arrow" />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full sm:w-1/2 flex justify-center sm:mt-0   sm:absolute bottom-0 right-5">
          <img
            className="max-w-[332px] max-h-[332px] sm:w-56 sm:h-56 lg:w-[332px] lg:h-[332px] object-contain "
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
