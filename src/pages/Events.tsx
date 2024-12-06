import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Events() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                Dr. B.R. Ambedkar Memorial Ceremony
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>December 6, 2024</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>From 10:00 AM</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Barakar Bus Stand</span>
                </div>
              </div>

              <div className="prose prose-lg">
                <h3 className="text-xl font-semibold mb-4">Event Schedule:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Floral Tribute and Homage</li>
                  <li>Memorial Speech</li>
                  <li>Cultural Program</li>
                  <li>Prasad Distribution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}