import { Calendar, Clock, MapPin } from 'lucide-react';

export default function Events() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">আসন্ন অনুষ্ঠান</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">
                ডঃ বি.আর. আম্বেদকর স্মরণ অনুষ্ঠান
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>৬ ডিসেম্বর, ২০২৪</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>সকাল ১০:০০ টা থেকে</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>বরাকর বাস স্ট্যান্ড</span>
                </div>
              </div>

              <div className="prose prose-lg">
                <h3 className="text-xl font-semibold mb-4">অনুষ্ঠান সূচি:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>মাল্যদান ও শ্রদ্ধাঞ্জলি</li>
                  <li>স্মারক বক্তৃতা</li>
                  <li>সাংস্কৃতিক অনুষ্ঠান</li>
                  <li>প্রসাদ বিতরণ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}