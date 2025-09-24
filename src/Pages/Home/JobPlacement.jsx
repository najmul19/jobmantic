import tara from "../../assets/Icons/Vector.png";
import arrow from "../../assets/Icons/arrow.png";
import one from "../../assets/Icons/j1.png";
import two from "../../assets/Icons/j2.png";
import t from "../../assets/Icons/j3.png";
import f from "../../assets/Icons/j4.png";
import fi from "../../assets/Icons/j5.png";
import s from "../../assets/Icons/j6.png";

const steps = [
  {
    id: 1,
    title: "AI Resume writer",
    desc: "Generate compelling bullet points, professional summaries, and achievement-focused content that showcases your expertise and captures employer attention.",
    icon: one,
  },
  {
    id: 2,
    title: "Keyword Optimization",
    desc: "Automatically incorporate job-specific keywords without stuffing, ensuring your resume ranks high in ATS systems while maintaining natural readability.",
    icon: two,
  },
  {
    id: 3,
    title: "ATS Checker",
    desc: "Ensure 99% ATS compatibility with instant scoring and detailed feedback on format, keywords, and structure optimization.",
    icon: t,
  },
  {
    id: 4,
    title: "Cover Letter Writer",
    desc: "Create personalized cover letters that complement your tailored resume and tell your unique professional story effectively.",
    icon: f,
  },
  {
    id: 5,
    title: "Job Application Tracker",
    desc: "Organize applications, interviews, and follow-ups in one comprehensive dashboard with automated reminders and status updates.",
    icon: fi,
  },
  {
    id: 6,
    title: "Interview Preparation",
    desc: "AI-powered practice sessions with role-specific questions, personalized feedback, and confidence-building exercises.",
    icon: s,
  },
];

const JobPlacement = () => {
  return (
    <div className="px-4 sm:px-12 lg:px-24 py-14">
      {/* CTA Button */}
      <div className="flex w-full justify-center">
        <button className="bg-black flex items-center justify-center gap-2 text-white font-semibold rounded-full px-6 py-3 text-[18px] sm:text-[20px] hover:bg-gray-800 transition mb-8">
          Build your resume now
          <img className="w-[20px] sm:w-[24px]" src={arrow} alt="arrow" />
        </button>
      </div>

      {/* Heading */}
      <div className="max-w-[650px] mt-10">
        <h2 className="uppercase font-bold text-2xl sm:text-3xl lg:text-[36px] leading-snug">
          Comprehensive AI-Powered Job Placement Suite
        </h2>
        <div className="relative w-[150px] sm:w-[199px] border-t-4 border-black my-4">
          <img
            className="absolute -right-6 -top-5 w-8 sm:w-10 h-8 sm:h-10"
            src={tara}
            alt="tara"
          />
        </div>
      </div>

      {/* Grid */}
      <div className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-[24px] p-6 flex flex-col items-center text-center gap-4 w-full max-w-[340px] min-h-[280px] sm:min-h-[320px] transition-transform duration-300 hover:scale-[1.03] "
            >
              <div className="flex items-center justify-center">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-[50px] sm:w-[60px] h-[56px] sm:h-[68px] object-contain"
                />
              </div>

              <div>
                <h4 className="text-base sm:text-lg font-semibold">
                  {step.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobPlacement;
