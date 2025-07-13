import React, { useState, useEffect } from 'react';

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  location?: string;
  imageUrl?: string;
  category?: string;
}

const EventBulletin: React.FC = () => {
  // Sample events data - in a real app, you would fetch this from an API
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Community Health Camp',
      date: '2025-07-25',
      description: 'Free health checkup and consultation for all community members',
      location: 'Community Center, Kolkata',
      imageUrl: '/images/events/health-camp.jpg',
      category: 'Health'
    },
    {
      id: '2',
      title: 'Educational Scholarship Program',
      date: '2025-08-10',
      description: 'Scholarship distribution for underprivileged students',
      location: 'Pinky Foundation Headquarters',
      imageUrl: '/images/events/education.jpg',
      category: 'Education'
    },
    {
      id: '3',
      title: 'Legal Rights Workshop',
      date: '2025-08-15',
      description: 'Workshop on legal rights and government schemes for SC/ST/OBC communities',
      location: 'District Court Auditorium',
      imageUrl: '/images/events/legal.jpg',
      category: 'Legal'
    },
    {
      id: '4',
      title: 'Cultural Festival',
      date: '2025-09-05',
      description: 'Celebrating the diverse cultural heritage of our communities',
      location: 'City Park',
      imageUrl: '/images/events/cultural.jpg',
      category: 'Culture'
    }
  ]);

  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [visibleEvents, setVisibleEvents] = useState<Event[]>(events);

  // Filter events by category
  useEffect(() => {
    if (activeCategory) {
      setVisibleEvents(events.filter(event => event.category === activeCategory));
    } else {
      setVisibleEvents(events);
    }
  }, [activeCategory, events]);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Get all unique categories
  const categories = Array.from(new Set(events.map(event => event.category).filter(Boolean) as string[]));

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in our upcoming events and be a part of the change we're bringing to our communities.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all
              ${activeCategory === null 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            All Events
          </button>
          
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleEvents.map((event) => (
            <div 
              key={event.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                {event.imageUrl ? (
                  <img 
                    src={event.imageUrl} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/events/default.jpg'; // Fallback image
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-xl font-bold">{event.category || 'Event'}</span>
                  </div>
                )}
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 m-2 rounded-full text-xs font-semibold">
                  {event.category}
                </div>
              </div>
              
              <div className="p-5">
                <div className="text-xs text-gray-500 mb-2 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(event.date)}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                
                {event.location && (
                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </div>
                )}
                
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {visibleEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No events found in this category.</p>
          </div>
        )}

        <div className="text-center mt-10">
          <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-full transition-colors duration-300">
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventBulletin;
