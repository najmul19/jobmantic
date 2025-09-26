import engine from "../../assets/Icons/engin_l.png";
import right from "../../assets/Icons/right.png";

const ATSOptimizer = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row px-4 sm:px-8 md:px-16 lg:px-24 py-14">
      {/* Left Section */}

      <div className="flex justify-center  w-full sm:w-1/2">
        <img
          className="w-full h-auto  max-w-[295px] max-h-[286px]"
          src={engine}
          alt="career monitoring"
        />
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-1/2 space-y-4">
        <h3 className="text-[22px] sm:text-3xl md:text-[32px] font-semibold">ATS Optimization Engine</h3>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            Real-time ATS compatibility scoring (0-100 scale)
          </p>
        </div>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            Keyword density analysis and optimization
          </p>
        </div>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            Format checking for maximum readability by ATS systems
          </p>
        </div>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            Industry-specific template recommendations
          </p>
        </div>
      </div>
    </div>
  );
};

export default ATSOptimizer;
