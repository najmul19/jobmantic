import one from "../../assets/Icons/1.png";
import two from "../../assets/Icons/2.png";
import t from "../../assets/Icons/3.png";
import f from "../../assets/Icons/4.png";
import fi from "../../assets/Icons/5.png";
import s from "../../assets/Icons/6.png";

const steps = [
  {
    id: 1,
    title: "Upload or Import",
    desc: "Start with existing resume, LinkedIn profile, or build from scratch",
    icon: one,
  },
  {
    id: 2,
    title: "AI Analysis",
    desc: "Our system analyzes your background and identifies strengths",
    icon: two,
  },
  {
    id: 3,
    title: "Job Targeting",
    desc: "Paste job descriptions for instant resume customization",
    icon: t,
  },
  {
    id: 4,
    title: "Content Enhancement",
    desc: "AI improves bullet points, adds keywords, optimizes formatting",
    icon: f,
  },
  {
    id: 5,
    title: "ATS Scoring",
    desc: "Real-time feedback ensures maximum compatibility",
    icon: fi,
  },
  {
    id: 6,
    title: "Export & Apply",
    desc: "Download in multiple formats (PDF, DOCX, ATS-friendly)",
    icon: s,
  },
];

const HowToWorks = () => {
  return (
    <div className="relative px-4 sm:px-8 lg:px-24 py-14 text-center text-[#000000]">
      
      <div className="absolute inset-0 bg-gradient-to-r from-white via-[#23A2FC] to-[#e0f2ff] opacity-30 blur-3xl -z-10"></div>

      <h3 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold mb-10 relative z-10">
        How Our <span className="text-[#23A2FC]">AI Resume</span> Builder Works
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center relative z-10">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-[24px] p-6 text-left flex flex-col gap-4 w-full max-w-[340px] h-auto min-h-[250px] transition-transform duration-300 hover:scale-[1.03]"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#23A2FC1A] font-semibold">
                {step.id}
              </div>
              <img
                src={step.icon}
                alt={step.title}
                className="w-[60px] h-[68px] object-contain"
              />
            </div>

            <div>
              <h4 className="text-lg font-semibold">{step.title}</h4>
              <p className="text-sm sm:text-base">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default HowToWorks;
