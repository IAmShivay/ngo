import { Users, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">আমাদের সম্পর্কে</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-xl text-gray-600 mb-8 text-center">
              অখণ্ড ভারত SC/ST/OBC/সংখ্যালঘু যুক্ত মঞ্চ হল একটি অরাজনৈতিক সংগঠন যা সমাজের সকল শ্রেণীর মানুষের কল্যাণে কাজ করে।
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">আমাদের লক্ষ্য</h3>
                <p className="text-gray-600">সামাজিক ন্যায়বিচার প্রতিষ্ঠা ও সমতা আনয়ন</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <Heart className="w-12 h-12 mx-auto text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">আমাদের মূল্যবোধ</h3>
                <p className="text-gray-600">সততা, নিষ্ঠা ও মানবতা</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <Target className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">আমাদের উদ্দেশ্য</h3>
                <p className="text-gray-600">শিক্ষা ও সামাজিক উন্নয়ন</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}