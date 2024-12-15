import React, { useState } from "react";
import {
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
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: education,
      title: "Education",
      subtitle: "Empowering through knowledge",
      description:
        "Connecting communities worldwide and creating sustainable impact across continents through targeted humanitarian initiatives.",
    },
    {
      icon: jobSecurity,
      title: "Job Security",
      subtitle: "Building sustainable livelihoods",
      description:
        "Empowering local communities through education, healthcare, and economic development programs tailored to specific regional needs.",
    },
    {
      icon: health,
      title: "Health",
      subtitle: "Caring for community wellness",
      description:
        "Providing access to quality education, scholarship opportunities, and skills training for underprivileged youth and adults.",
    },
    {
      icon: protection,
      title: "Safety & Protection",
      subtitle: "Safeguarding human dignity",
      description:
        "Delivering critical medical services, preventive care, and healthcare infrastructure in underserved regions around the globe.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-black mb-12 uppercase tracking-widest relative">
          What We Do
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-black"></span>
        </h2>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-gray-100 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl text-center group overflow-hidden"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="flex justify-center mb-4">
                {typeof service.icon === "string" ? (
                  <img 
                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110" 
                    src={service.icon} 
                    alt={service.title} 
                  />
                ) : (
                  service.icon
                )}
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">
                {service.title}
              </h3>
              
              {/* Subtitle Overlay */}
              <div 
                className={`absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center p-4 transition-all duration-300 
                  ${hoveredService === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
              >
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-sm text-gray-300">{service.subtitle}</p>
              </div>
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
                  className={`relative bg-gray-100 p-6 rounded-lg shadow-md text-center transition-all duration-300 overflow-hidden
                    ${
                      activeSlide === index
                        ? "scale-105 shadow-xl"
                        : "scale-95 opacity-80"
                    }`}
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className="flex justify-center mb-4">
                    {typeof service.icon === "string" ? (
                      <img 
                        className="w-full h-48 object-cover rounded-lg" 
                        src={service.icon} 
                        alt={service.title} 
                      />
                    ) : (
                      service.icon
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">
                    {service.title}
                  </h3>
                  
                  {/* Subtitle Overlay */}
                  <div 
                    className={`absolute inset-0 bg-black/80 text-white flex flex-col justify-center items-center p-4 transition-all duration-300 
                      ${hoveredService === index ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                  >
                    <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                    <p className="text-sm text-gray-300">{service.subtitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 z-10 flex justify-between transform -translate-y-1/2">
            <button className="swiper-button-prev bg-black/10 rounded-full p-1 shadow-md hover:bg-black/20 transition">
              <ChevronLeft className="w-4 h-4 text-black" />
            </button>
            <button className="swiper-button-next bg-black/10 rounded-full p-1 shadow-md hover:bg-black/20 transition">
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;