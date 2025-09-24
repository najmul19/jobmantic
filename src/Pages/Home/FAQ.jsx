import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "Why should I use an AI Resume Editor?",
    answer: `Using an AI Resume Editor can help you in 3 major ways.

1. It significantly saves you time so you can send a larger volume of applications. Our users on average save 2 hrs of editing time per job application.

2. The AI Resume Editor provides smart recommendations for how to optimize your resume to be more competitive for respective jobs.

3. It can help you create a brand new, ATS friendly resume to increase your chances of grabbing the recruiter's attention. All this saves you precious time and eliminates unnecessary guesswork from the job search process.`,
  },
  {
    question: "Why is Jobright's AI Resume Editor the best?",
    answer:
      "Jobright's editor combines AI-driven insights with recruiter expertise, ensuring resumes are both ATS-friendly and impactful for hiring managers.",
  },
  {
    question:
      "I have a resume, just need some feedback. Is the AI Resume Editor relevant for me?",
    answer:
      "Yes! Even if you already have a resume, the AI Editor will analyze and provide actionable suggestions to improve your existing resume.",
  },
];

const FAQ = () => {
  const [showFAQ, setShowFAQ] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" py-12 px-6 sm:px-12 lg:px-24 text-center">
      {/* Learn More Button */}
      <button
        onClick={() => setShowFAQ(!showFAQ)}
        className="flex items-center gap-1 mx-auto text-gray-800 font-medium"
      >
        {showFAQ ? "Show less" : "Load more"}{" "}
        {showFAQ ? (
          <FiChevronUp className="text-lg" />
        ) : (
          <FiChevronDown className="text-lg" />
        )}
      </button>

      {/* FAQ Section */}
      {showFAQ && (
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          {/* Search Bar */}
          <div className="flex justify-center mb-8 ">
            <input
              type="text"
              placeholder="Search your questions"
              className="w-full max-w-[557px] max-h-[60px] px-4 py-3 rounded-[32px] focus:outline-none bg-[#FFFFFF]"
            />
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 max-w-[1080px] mx-auto text-left">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-[24px]  p-4 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <FiChevronUp className="text-xl" />
                  ) : (
                    <FiChevronDown className="text-xl" />
                  )}
                </div>

                {openIndex === index && (
                  <div className="mt-3 text-gray-700 text-sm whitespace-pre-line">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;
