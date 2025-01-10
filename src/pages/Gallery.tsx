import React, { useState, useEffect } from "react";
import { Camera } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import axios from "axios";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  date: string;
}

export default function GallerySlider() {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  useEffect(() => {
    // Fetch images from the API when the component mounts
    const fetchImages = async () => {
      try {
        const response = await axios.get("https://ngo-6j8s.onrender.com/api/content/images");
        const images = response.data.images;

        // Format the images according to the required structure
        const formattedImages = images.map((image: { url: string; title?: string; description?: string; date?: string }, index: number) => ({
          id: index + 1,  // Assuming the images have no specific id; you can adjust this logic
          url: image.url,
          title: image.title || `Image ${index + 1}`,
          description: image.description || "No description available",
          date: image.date || "N/A",
        }));

        setGalleryImages(formattedImages);
      } catch (error) {
        console.error("Error fetching images:", error);
        alert("Error fetching images:");
      }
    };

    fetchImages();
  }, []); // Empty dependency array means it runs only once when the component mounts

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
            // pagination={{
            //   clickable: true,
            //   bulletClass:
            //     "inline-block w-3 h-3 rounded-full bg-white/50 mx-2 cursor-pointer transition-all duration-300",
            //   bulletActiveClass: "bg-white",
            // }}
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
