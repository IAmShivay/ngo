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
    title: "ডঃ বি.আর. আম্বেদকর স্মরণ অনুষ্ঠান",
    date: "৬ ডিসেম্বর, ২০২৪",
    time: "সকাল ১০:০০ টা",
    location: "বরাকর বাস স্ট্যান্ড",
    attendees: "সকল সদস্য ও শুভানুধ্যায়ী"
  },
  {
    title: "বার্ষিক সম্মেলন",
    date: "১৫ জানুয়ারি, ২০২৫",
    time: "সকাল ১১:০০ টা",
    location: "আসানসোল টাউন হল",
    attendees: "সকল সদস্য"
  }
];

export default function UpcomingEvents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">আসন্ন অনুষ্ঠানসমূহ</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <div className="bg-indigo-600 text-white p-4">
                <h3 className="text-xl font-bold">{event.title}</h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Calendar className="w-5 h-5 text-indigo-600" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Clock className="w-5 h-5 text-indigo-600" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-indigo-600" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Users className="w-5 h-5 text-indigo-600" />
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