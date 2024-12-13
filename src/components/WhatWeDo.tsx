import React, { useState } from "react";
import {
  BookOpen,
  Globe,
  HandHelping,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import education from "../assets/education.jpg";
import jobSecurity from "../assets/job security.jpg";
import health from "../assets/health.jpg";
import protection from "../assets/protechtion.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const WhatWeDoSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const services = [
    {
      icon: education,
      title: "Education",
      description:
        "Connecting communities worldwide and creating sustainable impact across continents through targeted humanitarian initiatives.",
    },
    {
      icon: jobSecurity,
      title: "Job Security",
      description:
        "Empowering local communities through education, healthcare, and economic development programs tailored to specific regional needs.",
    },
    {
      icon: health,
      title: "Health",
      description:
        "Providing access to quality education, scholarship opportunities, and skills training for underprivileged youth and adults.",
    },
    {
      icon: protection,
      title: "Safety & Protection",
      description:
        "Delivering critical medical services, preventive care, and healthcare infrastructure in underserved regions around the globe.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What We Do
        </h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl text-center"
            >
              <div className="flex justify-center mb-4">
                {typeof service.icon === "string" ? (
                  <img className ="w-24 h-24 rounded-lg" src={service.icon} alt="" />
                ) : (
                  service.icon
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              {/* <p className="text-gray-700">{service.description}</p> */}
            </div>
          ))}
        </div>

        {/* Mobile Slider Layout */}
        <div className="block md:hidden relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            centeredSlides={true}
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`bg-gray-100 p-6 rounded-lg shadow-md text-center transition-all duration-300 
                    ${
                      activeSlide === index
                        ? "scale-105 shadow-xl"
                        : "scale-95 opacity-80"
                    }`}
                >
                  <div className="flex justify-center mb-4">
                    {typeof service.icon === "string" ? (
                      <img src={service.icon} alt="" />
                    ) : (
                      service.icon
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  {/* <p className="text-gray-700">{service.description}</p> */}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-between transform -translate-y-1/2">
            <button className="swiper-button-prev bg-white/50 rounded-full p-0.5 shadow-md hover:bg-white/75 transition">
              <ChevronLeft className="w-4 h-4 text-gray-800" />
            </button>
            <button className="swiper-button-next bg-white/50 rounded-full p-0.5 shadow-md hover:bg-white/75 transition">
              <ChevronRight className="w-4 h-4 text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
