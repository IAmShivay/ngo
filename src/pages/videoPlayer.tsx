import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Video {
  title: string;
  link: string;
  thumbnail?: string;
}

interface VideoSliderProps {
  videos: Video[];
}

const VideoSlider: React.FC<VideoSliderProps> = ({ videos }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % videos.length);
    setIsPlaying(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
    setIsPlaying(false);
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setIsPlaying(true);
  };

  return (
    <div className="w-full bg-gray-50 py-8">
      {/* Main Heading */}
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Latest News
          </h1>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {activeIndex + 1} / {videos.length}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Main Video Container */}
        <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg">
          {/* Reduced height container */}
          <div className="relative w-full" style={{ paddingTop: '42.85%' }}> {/* 21:9 Aspect Ratio for shorter height */}
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`${videos[activeIndex].link}${isPlaying ? '?autoplay=1' : ''}`}
              title={videos[activeIndex].title}
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-300 z-10"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all duration-300 z-10"
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dot Navigation */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5 z-10">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => handleThumbnailClick(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-white scale-110' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Video Title */}
        <h2 className="text-lg font-semibold mt-4 mb-3 text-gray-800">
          {videos[activeIndex].title}
        </h2>

        {/* Thumbnails Carousel */}
        <div className="relative mt-4">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-3 pb-2">
              {videos.map((video, index) => (
                <div
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  className={`flex-shrink-0 cursor-pointer transition-all duration-300 ${
                    activeIndex === index
                      ? 'ring-2 ring-blue-500 scale-105'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="w-32 sm:w-40 md:w-48 relative group">
                    <div className="relative w-full" style={{ paddingTop: '42.85%' }}> {/* Matching main video aspect ratio */}
                      <img
                        src={video.thumbnail || '/api/placeholder/320/180'}
                        alt={video.title}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 rounded-lg" />
                    </div>
                    <p className="mt-1 text-xs sm:text-sm font-medium line-clamp-1 px-1 text-gray-700">
                      {video.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;