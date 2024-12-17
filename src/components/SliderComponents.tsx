import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/9.jpg";
import image6 from "../assets/6.jpg";
import image7 from "../assets/gallery/19.jpg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/10.jpg";

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
        {/* Navigation Buttons */}
        <div>
          {/* Previous Button (Left Side) */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          {/* Next Button (Right Side) */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Slide Container */}
        <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mb-6">
          {/* Mobile: Single Slide */}
          <div className="md:hidden w-full flex flex-col items-center rounded-lg py-4">
            <h1 className="text-2xl font-bold text-center mb-4">OUR MISSION</h1>
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
              slides[(currentSlide + 1) % slides.length],
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
                <div className="text-center bg-inherit py-5">
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
      title: "Right to Free Legal Aid",
      description:
        "Free legal aid advocates in entire West Bengal & Jharkhand for SC/ST/OBC/Minority " +
        "সমগ্র পশ্চিমবঙ্গ ও ঝাড়খণ্ডে আইনি সহায়তার উকিল বিনামূল্যে ।",
      image: image1,
    },
    {
      id: 2,
      title: "Free Doctor Checkup",
      description:
        "Totally Free Doctor checkup in specified hospital for SC/ST/OBC Minority " +
        "SC/ST/OBC/Minority দের ক্ষেত্রে ডাক্তার চেক-আপ সম্পূর্ণ বিনামূল্যে নির্ধারিত হাসপাতালে ।",
      image: image2,
    },
    {
      id: 3,
      title: "Engineering Seats Free",
      description:
        "100 Engineering seats free for SC/ST/OBC Minority students ( West Bengal / Jharkhand) " +
        " SC/ST/OBC Minority দের ১০০ টা ইঞ্জিনিয়ারিং সিট ফ্রি (পশ্চিমবঙ্গ/ ঝাড়খণ্ড)",
      image: image3,
    },
    {
      id: 4,
      title: "Scholarship Given",
      description:
        "1 lakh scholarship will be given to meritorious girls students in various fields for SC/ST/OBC/Minority students. " +
        " (SC/ST/OBC/Minority দের বছরে ১০০০০০ টাকা স্কলারশিপ বিভিন্ন শিক্ষা ক্ষেত্রে মেধাবী ছাত্রীদের দেওয়া হবে ।)",
      image: image4,
    },
    {
      id: 5,
      title: "Two Offices",
      description:
        "Two offices at Barakar and Durgapur for filling all forms of government projects. " +
        " (সরকারি প্রকল্পের সমস্ত ধরনের ফর্ম ফিলাপের জন্য দুটো অফিস বরাকর ও দুর্গাপুরে ।)",
      image: image8,
    },
    {
      id: 6,
      title: "Nursing Training",
      description:
        "Free Nursing training ( ayah ) to 100 SC/ST/OBC Women " +
        " (১০০ টা SC/ST/OBC মহিলাকে  নার্সিং ট্রেনিং ( আয়া) বিনামূল্যে)",
      image: image7,
    },
    {
      id: 7,
      title: "Job Opportunities",
      description:
        "Job opportunities for 100 SC/ST/OBC boys as Ward Boy / Lab Technician etc. " +
        " (১০০ টা SC/ST/OBC ছেলেকে কাজের সুযোগ ওয়ার্ড বয় / লেব টেকনিশিয়ান ইত্যাদি ক্ষেত্রে।)",
      image: image6,
    },
    {
      id: 8,
      title: "Income Facility",
      description:
        "Income facility to 100 women by Akhand Bharat SC/ST/OBC Minority Joint Forum. " +
        " (১০০ টি মহিলাকে Akhand Bharat SC/ST/OBC Minority Joint Forum পক্ষ থেকে রোজগার ব্যবস্থা।)",
      image: image5,
    },
    {
      id: 10,
      title: "Seat Reservation",
      description:
        "15% seat reservation for education in every school in West Bengal and Jharkhand. " +
        " (পশ্চিমবঙ্গ ও ঝাড়খণ্ডের প্রতিটি স্কুলে ১৫% সিট রিজার্ভেশন শিক্ষার জন্য ।)",
      image: image9,
    },
  ];

  // Static content for the left side
  const staticContent = (
    <div className="space-y-4 md:space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        How do we want to help SC/ST/OBC Minority People?{" "}
      </h2>
      <h2 className="text-xl md:text-xl font-bold text-gray-800">
        ( আমরা কিভাবে SC/ST/OBC সংখ্যালঘুদের সাহায্য করতে চাই ? )
      </h2>
      <p className="text-gray-600 text-base md:text-lg">
        There are many facilities in the constitution for these SC/ST/OBC people
        but they are not getting it properly. The power that these people have
        in the constitution is their right and our organization will do our best
        to get it to them. <br />
        (এই মানুষগুলোর জন্য সংবিধানে অনেক সুযোগ সুবিধা আছে কিন্তু তারা সেটা সঠিক
        ভাবে পাচ্ছে না । এই মানুষগুলো সংবিধানে যে ক্ষমতা রাখে সেটা তাদের অধিকার
        এবং আমাদের সংস্থা সেটা তাদের পাইয়ে দেওয়ার সম্পূর্ন চেষ্টা করবে।)
      </p>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <ContentSlider slides={dynamicSlides} staticContent={staticContent} />
    </div>
  );
};

export default SliderPage;
