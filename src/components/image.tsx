import React from "react";
import unknown from "../assets/unknown.jpg";

const ResponsiveComponent = () => {
  return (
    <div className="flex items-center justify-center h-30 m-5 bg-gray-50 py-2">
      <div className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-4xl text-center md:text-left">
        {/* Text Section */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Our Core Value
          </h1>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We want to let them aware about different skims of state & Central
            Government and also let them get education in deserving institute
            <br />
            আমরা তাদের রাজ্য ও কেন্দ্রীয় সরকারের বিভিন্ন স্কিম সম্পর্কে সচেতন
            করতে চাই এবং যোগ্য প্রতিষ্ঠানে শিক্ষা লাভ করাতে চাই।
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <img
            src={unknown}
            alt="Placeholder"
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
