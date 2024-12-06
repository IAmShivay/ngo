import { Calendar, Clock, MapPin, Users } from 'lucide-react';

interface Event {
  title: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
}

const upcomingEvents: Event[] = [
  {
    title: "Dr. B.R. Ambedkar Memorial Ceremony",
    date: "December 6, 2024",
    time: "10:00 AM",
    location: "Barakar Bus Stand",
    attendees: "All Members and Well-wishers"
  },
  {
    title: "Annual Conference",
    date: "January 15, 2025",
    time: "11:00 AM",
    location: "Asansol Town Hall",
    attendees: "All Members"
  }
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Upcoming Events</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-bold">{event.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>{event.attendees}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}