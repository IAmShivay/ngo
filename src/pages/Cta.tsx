import React from "react";

interface PatternedCTAProps {
  onJoinClick: () => void;
}

const PatternedCTA: React.FC<PatternedCTAProps> = ({ onJoinClick }) => {
  return (
    <div className="relative w-full py-12 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute w-20 h-20 rotate-45 -left-8 -top-8 border border-white/30" />
        <div className="absolute w-40 h-40 rotate-45 right-20 top-0 border border-white/20" />
        <div className="absolute w-32 h-32 rotate-45 left-40 bottom-0 border border-white/30" />
        <div className="absolute w-24 h-24 -rotate-12 right-10 bottom-10 border border-white/20" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-white">
              I want to be a member of{" "}
              <span className="underline decoration-gray-800">
                Akhand Bharat
              </span>{" "}
              SC/ST/OBC Minority Joint Forum
            </h1>
            <p className="text-xl text-white mt-4">
              আমি অখন্ড ভারত SC/ST/OBC সংখ্যালঘু জয়েন্ট ফোরামের সদস্য হতে চাই
            </p>
          </div>
          <button
            onClick={onJoinClick}
            className="inline-flex items-center px-8 py-3 text-lg font-semibold text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-black"
          >
            Join Us
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatternedCTA;
