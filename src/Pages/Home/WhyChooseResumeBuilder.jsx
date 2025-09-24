const features = [
  {
    id: 1,
    number: "85%",
    title: "Higher Response Rate",
    desc: "Users report significantly more interview invitations",
  },
  {
    id: 2,
    number: "5",
    title: "Minute Resume Creation",
    desc: "Go from blank page to professional resume in minutes",
  },
  {
    id: 3,
    number: "50+",
    title: "Industry-Specific Optimization",
    desc: "Templates and content tailored to your field",
  },
  {
    id: 4,
    number: "AI",
    title: "Continuous Learning",
    desc: "AI improves based on successful job placements",
  },
];

const WhyChooseResumeBuilder = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-24 py-14 text-center">
      <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-semibold mb-10">
        Why Job Seekers Choose Our{" "}
        <span className="text-[#23A2FC]">AI Resume</span> Builder
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((item, index) => (
          <div
            key={item.id}
            className={`rounded-[24px] px-6 py-8 flex flex-col items-center justify-center text-center
              ${
                index === 0 || index === features.length - 1
                  ? "bg-gradient-to-b from-white via-[#F0F8FF] to-[#E6F2FF]" 
                  : "bg-white"
              }`}
            style={{ width: "258px", height: "246px" }}
          >
            <h2 className="text-[32px] sm:text-[40px] font-bold text-[#000000]">
              {item.number}
            </h2>
            <h4 className="text-[18px] font-semibold mt-2">{item.title}</h4>
            <p className="text-gray-600 text-[16px] mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseResumeBuilder;
