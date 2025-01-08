import React, { useState } from "react";
import { Camera } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import womenday from "../assets/gallery/women.jpg";
import image2 from "../assets/gallery/2.jpg";
import image3 from "../assets/gallery/3.jpg";
import image4 from "../assets/gallery/4.jpg";
import image5 from "../assets/gallery/5.jpg";
import image7 from "../assets/gallery/7.jpg";
import image11 from "../assets/gallery/11.jpg";
import image12 from "../assets/gallery/12.jpg";
import image13 from "../assets/gallery/13.jpg";
import image14 from "../assets/gallery/14.jpg";
import image15 from "../assets/gallery/15.jpg";
import image16 from "../assets/gallery/16.jpg";
import image17 from "../assets/gallery/17.jpg";
import image18 from "../assets/gallery/18.jpg";
import image21 from "../assets/gallery/21.jpg";
import image22 from "../assets/gallery/22.jpg";
import image23 from "../assets/gallery/23.jpg";
import image24 from "../assets/gallery/24.jpg";
import image25 from "../assets/gallery/25.jpg";
import image26 from "../assets/gallery/26.jpg";
import image27 from "../assets/gallery/27.jpg";
import image28 from "../assets/gallery/28.jpg";
import image29 from "../assets/gallery/29.jpg";
import image30 from "../assets/gallery/30.jpg";
import image31 from "../assets/gallery/31.jpg";
interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  date: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: womenday,
    title: "Women's Day Celebration",
    description: "Empowering",
    date: "March 08, 2024",
  },
  {
    id: 2,
    url: image2,
    title: "Education Support Program",
    description: "Distribution of Educational Materials to Students",
    date: "November 20, 2023",
  },
  {
    id: 3,
    url: image3,
    title: "Social Awareness Workshop",
    description: "Interaction with Youth Society",
    date: "October 5, 2023",
  },
  {
    id: 4,
    url: image4,
    title: "Cultural Event",
    description: "Traditional Cultural Performance",
    date: "September 25, 2023",
  },
  {
    id: 5,
    url: image5,
    title: "Health Camp",
    description: "Free Health Checkup Camp",
    date: "August 10, 2023",
  },
  {
    id: 6,
    url: image7,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },

  {
    id: 10,
    url: image11,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 11,
    url: image12,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 12,
    url: image13,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 13,
    url: image14,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 14,
    url: image15,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 16,
    url: image16,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 17,
    url: image17,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 18,
    url: image18,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },

  {
    id: 20,
    url: image21,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 21,
    url: image22,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 22,
    url: image23,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 23,
    url: image24,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 24,
    url: image25,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 25,
    url: image26,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  }, {
    id: 26,
    url: image27,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  }, {
    id: 27,
    url: image28,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  }, {
    id: 28,
    url: image29,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  }, {
    id: 29,
    url: image30,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
  {
    id: 30,
    url: image31,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
];

export default function GallerySlider() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Camera className="w-8 h-8 text-black mr-3" />
          <h1 className="text-4xl font-bold text-center">Our Works</h1>
        </div>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".custom-prev-button",
              nextEl: ".custom-next-button",
            }}
            pagination={{
              clickable: true,
              bulletClass:
                "inline-block w-3 h-3 rounded-full bg-white/50 mx-2 cursor-pointer transition-all duration-300",
              bulletActiveClass: "bg-white",
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="gallery-swiper"
          >
            {galleryImages.map((image) => (
              <SwiperSlide key={image.id}>
                <div
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative h-64">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                      <h3 className="text-white font-semibold text-lg">
                        {image.title}
                      </h3>
                      <p className="text-gray-200 text-sm">{image.date}</p>
                    </div> */}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div
            className="custom-prev-button absolute top-1/2 left-0 z-10 transform -translate-y-1/2 
            w-12 h-12 bg-black rounded-full flex items-center justify-center 
            cursor-pointer hover:bg-black transition-all duration-300 
            hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </div>
          <div
            className="custom-next-button absolute top-1/2 right-0 z-10 transform -translate-y-1/2 
            w-12 h-12 bg-black rounded-full flex items-center justify-center 
            cursor-pointer hover:bg-black transition-all duration-300 
            hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full overflow-hidden relative">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              {/* <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {selectedImage.description}
                </p>
                <p className="text-gray-500 text-sm">{selectedImage.date}</p>
              </div> */}
              <button
                className="absolute top-4 right-4 text-white text-xl font-bold bg-black/50 w-10 h-10 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
