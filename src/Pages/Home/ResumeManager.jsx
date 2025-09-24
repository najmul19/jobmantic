import sleep from "../../assets/Icons/sleep.png";
import right from "../../assets/Icons/right.png";

const ResumeManager = () => {
  return (
    <div className="flex flex-col sm:flex-row px-4 sm:px-24 py-14">
      {/* Left Section */}
      <div className="w-full sm:w-1/2 space-y-4">
        <h3 className="text-[32px] font-semibold">
          Multi-Version Resume Management
        </h3>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            Create unlimited resume variations for different job types
          </p>
        </div>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            Master resume with all experience that branches into targeted
            versions
          </p>
        </div>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            One-click customization for specific job applications
          </p>
        </div>

        <div className="flex items-start gap-2">
          <img className="w-4 h-4 mt-1" src={right} alt="right sign" />
          <p className="text-[18px] max-w-[459px]">
            Version history and comparison tools
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center  w-full sm:w-1/2">
        <img
          className="w-full h-auto  max-w-[295px] max-h-[286px]"
          src={sleep}
          alt="career monitoring"
        />
      </div>
    </div>
  );
};

export default ResumeManager;
