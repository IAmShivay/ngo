import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heart } from "lucide-react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";

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
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-[500px] bg-inherit rounded-lg overflow-hidden">
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
        <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          {/* Mobile: Single Slide */}
          <div className="md:hidden w-full flex flex-col items-center rounded-lg py-4">
            <div className="w-full mb-4">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            </div>
            <div className="text-center bg-inherit border-b border-black py-5">
              <h3 className="text-base md:text-xl font-semibold text-gray-800 mb-1 px-4">
                {slides[currentSlide].title}
              </h3>
              <p className="text-xs md:text-sm text-gray-600 px-4">
                {slides[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Desktop: Two Slides */}
          <div className="hidden md:flex w-full space-x-4">
            {[
              slides[currentSlide],
              slides[(currentSlide + 1) % slides.length]
            ].map((slide) => (
              <div
                key={slide.id}
                className="w-1/2 flex flex-col items-center rounded-lg py-4"
              >
                <div className="w-full mb-4">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-48 md:h-64 object-cover rounded-lg"
                  />
                </div>
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
      image: image1,
    },
    {
      id: 2,
      title: "Digital Transformation",
      description:
        "Empowering businesses to adapt and thrive in the digital age.",
      image: image2,
    },
    {
      id: 3,
      title: "User Experience Design",
      description: "Creating intuitive and engaging digital experiences.",
      image: image3,
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description:
        "Scalable and secure cloud infrastructure for modern businesses.",
      image: image4,
    },
  ];

  // Static content for the left side
  const staticContent = (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        How do you want to help children today?{" "}
      </h2>
      <h2 className="text-xl md:text-xl font-bold text-gray-800">
        ( আজকে আপনি কীভাবে একটি শিশুকে সাহায্য করবেন ? )
      </h2>
      <p className="text-gray-600 text-base md:text-lg">
        আপনার ক্ষুদ্রতম অবদান শিশুদের জীবনে বড় পরিবর্তন আনে। আমরা ভারতের
        শিশুদের জন্য সত্যিকারের পরিবর্তন আনতে সক্ষম হওয়ার জন্য আপনার মতো
        লোকেদের উদারতার উপর নির্ভর করি!
      </p>
      <button className="flex items-center bg-black text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-300 transition-colors">
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