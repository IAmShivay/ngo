import React, { useState, useEffect } from 'react';

interface MediaData {
  url: string;
  contentType: 'image' | 'video';
}

interface ApiResponse {
  success: boolean;
  data: MediaData;
  error?: string;
}

const Hero: React.FC = () => {
  const [mediaData, setMediaData] = useState<MediaData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://collify.sanakamedical.com/api/content/header');
        const result: ApiResponse = await response.json();
        
        if (!result.success || !result.data) {
          throw new Error(result.error || 'Failed to fetch media');
        }

        setMediaData(result.data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
        console.error('Error fetching media:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMedia();
  }, []);

  const renderMedia = (): React.ReactElement => {
    if (isLoading) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <div className="animate-pulse w-16 h-16 rounded-full bg-gray-300" />
        </div>
      );
    }

    if (error || !mediaData) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <p className="text-red-500">Failed to load media</p>
        </div>
      );
    }

    if (mediaData?.contentType === 'video') {
      return (
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={mediaData.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    return (
      <img
        src={mediaData.url}
        alt="Hero media"
        className="w-full h-full object-cover"
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          setError('Failed to load image');
        }}
      />
    );
  };

  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-black">
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh] py-24 md:py-32">
          <div className="relative z-20 order-2 md:order-1 lg:order-1 space-y-8 lg:pr-12">
            <div className="rounded-2xl p-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight text-center lg:text-left">
                AKHAND BHARAT SC/ST/OBC/ MINORITY JOINT FORUM
              </h3>
              <p className="text-lg md:text-2xl mb-8 text-white text-center lg:text-left">
                ( আখন্দ ভারত এসসি/এসটি/ওবিসি/সংখ্যালঘু জয়েন্ট ফোরাম )
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="/about">
                  <button className="bg-white text-black border-2 border-black px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 order-1 md:order-2 lg:order-2 w-full">
            <div className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-black/50 via-black/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 border-8 border-transparent"></div>
                {renderMedia()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;