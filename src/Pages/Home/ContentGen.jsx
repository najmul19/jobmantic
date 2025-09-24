import engine from "../../assets/Icons/engine.png";
import right from "../../assets/Icons/right.png";

const ContentGen = () => {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:px-24 py-14">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 space-y-4">
        <h3 className="text-[32px] font-semibold">
          Smart Content Generation
        </h3>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            AI-powered bullet point writer creates achievement-focused
            descriptions
          </p>
        </div>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            Automatic quantification of accomplishments with industry-specific
            metrics
          </p>
        </div>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            Professional summary generator tailored to your career level and
            goals
          </p>
        </div>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            Skills section optimization based on job market trends
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center  w-full sm:w-1/2">
        <img
          className="w-full h-auto  max-w-[295px] max-h-[286px]"
          src={engine}
          alt="career monitoring"
        />
      </div>
    </div>
  );
};

export default ContentGen;
