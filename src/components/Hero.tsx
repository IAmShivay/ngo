import React, { useState, useEffect } from 'react';

interface MediaData {
  _id?: string; // MongoDB ObjectId stored as a string
  contentType: "image" | "video"; // Fixed string value for image type
  url: string; // URL to the image
  publicId: string; // Public identifier for the image
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

interface Event {
  id: string;
  title: string;
  date: string;
  location?: string;
}


const Hero: React.FC = () => {
  const [mediaData, setMediaData] = useState<MediaData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [upcomingEvents] = useState<Event[]>([
    {
      id: '1',
      title: 'Community Health Camp',
      date: '2025-07-25',
      location: 'Community Center, Kolkata'
    },
    {
      id: '2',
      title: 'Educational Scholarship Program',
      date: '2025-08-10',
      location: 'Pinky Foundation Headquarters'
    },
    {
      id: '3',
      title: 'Legal Rights Workshop',
      date: '2025-08-15',
      location: 'District Court Auditorium'
    }
  ]);
  const [activeEventIndex, setActiveEventIndex] = useState(0);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  // Auto-rotate events
  useEffect(() => {
    // Only auto-rotate if the details popup is not showing
    if (!showEventDetails) {
      const interval = setInterval(() => {
        setActiveEventIndex(prev => (prev + 1) % upcomingEvents.length);
      }, 5000); // Change event every 5 seconds
      
      return () => clearInterval(interval);
    }
    return undefined;
  }, [upcomingEvents.length, showEventDetails]);
  
  // Handle view details click
  const handleViewDetails = (event: Event) => {
    setSelectedEvent(event);
    setShowEventDetails(true);
  };
  
  // Close event details popup
  const closeEventDetails = () => {
    setShowEventDetails(false);
  };

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch('https://collify.sanakamedical.com/api/content/header');
        const result = await response.json();
        console.log(result);

      
        setMediaData(result);
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
console.log(mediaData)
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

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-black">
      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh] py-12 md:py-16 lg:py-20">
          <div className="relative z-20 order-2 md:order-1 lg:order-1 space-y-4 md:space-y-6 lg:pr-12">
            <div className="rounded-2xl p-4 md:p-6 lg:p-8 flex flex-col items-center lg:items-start">
              <div className="text-center lg:text-left mb-2 md:mb-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  PINKY FOUNDATION
                </h3>
              </div>
              
              <div className="text-center mb-2 md:mb-3">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  AND
                </h3>
              </div>
              
              <div className="text-center lg:text-left mb-3 md:mb-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                  AKHAND BHARAT SC/ST/OBC/ MINORITY JOINT FORUM
                </h3>
              </div>
              
              <div className="text-center lg:text-left mb-4 md:mb-6">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
                  ( আখন্দ ভারত এসসি/এসটি/ওবিসি/সংখ্যালঘু জয়েন্ট ফোরাম )
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start gap-4 mb-6">
                <a href="/about">
                  <button className="bg-white text-black border-2 border-black px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </a>
              </div>
              
              {/* Event Bulletin */}
              <div className="mt-6 bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                  <h4 className="text-white text-sm md:text-base font-bold">UPCOMING EVENTS</h4>
                </div>
                
                <div className="relative h-[120px] overflow-hidden">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out" 
                    style={{ transform: `translateX(-${activeEventIndex * 100}%)`, width: `${upcomingEvents.length * 100}%` }}
                  >
                    {upcomingEvents.map((event) => (
                      <div 
                        key={event.id}
                        className="w-full flex-shrink-0 px-1"
                      >
                        <h5 className="text-white font-semibold text-base md:text-lg">{event.title}</h5>
                        <div className="flex items-center text-gray-300 text-xs md:text-sm mt-1">
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {formatDate(event.date)}
                        </div>
                        {event.location && (
                          <div className="flex items-center text-gray-300 text-xs md:text-sm mt-1">
                            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {event.location}
                          </div>
                        )}
                        <button 
                          onClick={() => handleViewDetails(event)}
                          className="mt-2 text-xs md:text-sm bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <div className="flex space-x-1">
                    {upcomingEvents.map((_, index) => (
                      <button 
                        key={index} 
                        onClick={() => setActiveEventIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === activeEventIndex ? 'bg-white scale-125' : 'bg-white/40'}`}
                        aria-label={`View event ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => setActiveEventIndex(prev => (prev - 1 + upcomingEvents.length) % upcomingEvents.length)}
                      className="text-white text-xs bg-white/10 hover:bg-white/20 w-6 h-6 rounded-full flex items-center justify-center"
                      aria-label="Previous event"
                    >
                      ←
                    </button>
                    <button 
                      onClick={() => setActiveEventIndex(prev => (prev + 1) % upcomingEvents.length)}
                      className="text-white text-xs bg-white/10 hover:bg-white/20 w-6 h-6 rounded-full flex items-center justify-center"
                      aria-label="Next event"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Event Details Popup */}
              {showEventDetails && selectedEvent && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                  <div className="bg-black border border-white/20 rounded-xl p-5 max-w-md w-full relative">
                    <button 
                      onClick={closeEventDetails}
                      className="absolute top-2 right-2 text-white/60 hover:text-white"
                      aria-label="Close details"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{selectedEvent.title}</h3>
                    
                    <div className="flex items-center text-gray-300 text-sm mb-2">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {formatDate(selectedEvent.date)}
                    </div>
                    
                    {selectedEvent.location && (
                      <div className="flex items-center text-gray-300 text-sm mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {selectedEvent.location}
                      </div>
                    )}
                    
                    <p className="text-gray-300 mb-5">
                      Join us for this important event. More details will be provided soon.
                    </p>
                    
                    <div className="flex justify-center">
                      <button 
                        onClick={closeEventDetails}
                        className="bg-white text-black border-2 border-black px-6 py-2 rounded-full text-base font-semibold hover:bg-white/90 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
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