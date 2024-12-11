import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heart } from "lucide-react";

// Slide interface
interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

// Props interface for the slider
interface ContentSliderProps {
  slides: Slide[];
  staticContent: React.ReactNode;
}

const ContentSlider: React.FC<ContentSliderProps> = ({
  slides,
  staticContent,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= slides.length - 2 ? 0 : prev + 1));
  };

  const displaySlides = [
    slides[currentSlide],
    slides[(currentSlide + 1) % slides.length],
  ];

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[500px] bg-inherit  rounded-lg overflow-hidden">
      {/* Left Static Content Section */}
      <div className="w-full md:w-1/2 p-6 md:p-8 bg-gray-50 flex flex-col justify-center">
        {staticContent}
      </div>

      {/* Right Slider Section */}
      <div className="w-full md:w-[50vw] bg-inherit flex flex-col justify-center items-center relative px-6 py-6">
        {/* Navigation Buttons on Center-Left */}
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 flex flex-col items-center space-y-4">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Slide Container */}
        <div className="w-full flex space-x-4 mb-6">
          {displaySlides.map((slide) => (
            <div
              key={slide.id}
              className="w-1/2 flex flex-col items-center rounded-lg py-4"
            >
              {/* Slide Image */}
              <div className="w-full mb-4">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 md:h-64 object-cover rounded-lg"
                />
              </div>

              {/* Slide Information */}
              <div className="text-center bg-inherit border-b border-black py-5">
                <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-1 px-4">
                  {slide.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 px-4">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Example usage component
const SliderPage: React.FC = () => {
  // Dynamic slides data
  const dynamicSlides: Slide[] = [
    {
      id: 1,
      title: "Innovative Technology",
      description:
        "Exploring cutting-edge solutions that transform technology.",
      image:
        "https://www.cry.org/wp-content/themes/cry/images/children-wide-banner.jpg",
    },
    {
      id: 2,
      title: "Digital Transformation",
      description:
        "Empowering businesses to adapt and thrive in the digital age.",
      image:
        "https://www.cry.org/wp-content/themes/cry/images/children-wide-banner.jpg",
    },
    {
      id: 3,
      title: "User Experience Design",
      description: "Creating intuitive and engaging digital experiences.",
      image:
        "https://www.cry.org/wp-content/themes/cry/images/children-wide-banner.jpg",
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description:
        "Scalable and secure cloud infrastructure for modern businesses.",
      image:
        "https://www.cry.org/wp-content/themes/cry/images/children-wide-banner.jpg",
    },
  ];

  // Static content for the left side
  const staticContent = (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        How do you want to help children today?{" "}
      </h2>
      <h2 className="text-xl md:text-xl font-bold text-gray-800">
        ( আজকে আপনি কীভাবে একটি শিশুকে সাহায্য করবেন ? )
      </h2>
      <p className="text-gray-600 text-base md:text-lg">
        আপনার ক্ষুদ্রতম অবদান শিশুদের জীবনে বড় পরিবর্তন আনে। আমরা ভারতের
        শিশুদের জন্য সত্যিকারের পরিবর্তন আনতে সক্ষম হওয়ার জন্য আপনার মতো
        লোকেদের উদারতার উপর নির্ভর করি!
      </p>
      {/* <div className="space-y-3 md:space-y-4">
        {[
          { color: "bg-blue-500", text: "Cutting-edge Research" },
          { color: "bg-green-500", text: "User-Centric Design" },
          { color: "bg-purple-500", text: "Innovative Solutions" },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div
              className={`w-8 h-8 md:w-10 md:h-10 ${item.color} rounded-full flex items-center justify-center`}
            >
              <span className="text-white font-bold text-sm">{index + 1}</span>
            </div>
            <span className="text-gray-700 text-sm md:text-base">
              {item.text}
            </span>
          </div>
        ))}
      </div> */}
      <button className="flex items-center bg-black text-white  px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-300 transition-colors">
        <Heart className="mr-2" /> Donate For Happier Childwhood
      </button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <ContentSlider slides={dynamicSlides} staticContent={staticContent} />
    </div>
  );
};

export default SliderPage;
