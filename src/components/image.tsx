import React from "react";
import unknown from "../assets/unknown.jpg";

const ResponsiveComponent = () => {
  return (
    <div className="flex items-center justify-center h-30 m-5 bg-gray-50 py-2">
      <div className="flex flex-col items-center md:flex-row gap-3 max-w-4xl text-center md:text-left">
        {/* Image Section */}
        <div className="flex-1 mb-3 md:mb-0">
          <img
            src={unknown}
            alt="Placeholder"
            className="max-w-full h-auto rounded-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Our Core Value
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We want to make them aware about their Constitutional rights and to
            ensure that minorities get the benefits they are entitled to by the
            State and Central Government.
            <br className="pb-5"/>
            আমরা তাদের সাংবিধানিক অধিকার সম্পর্কে তাদের সচেতন করতে চাই এবং
            সংখ্যালঘুরা যাতে রাজ্য ও কেন্দ্রীয় সরকার কর্তৃক প্রাপ্য সুবিধাগুলি
            পায় তা নিশ্চিত করতে চাই।
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
