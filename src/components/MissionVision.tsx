import { Target, Eye, Award } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">আমাদের লক্ষ্য ও দর্শন</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <Target className="w-12 h-12 text-indigo-600" />
              <h3 className="text-2xl font-bold">আমাদের লক্ষ্য</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-indigo-600 mt-1" />
                <span>সামাজিক ন্যায়বিচার প্রতিষ্ঠা</span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-indigo-600 mt-1" />
                <span>শিক্ষার প্রসার ও উন্নয়ন</span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-indigo-600 mt-1" />
                <span>সামাজিক সচেতনতা বৃদ্ধি</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <Eye className="w-12 h-12 text-purple-600" />
              <h3 className="text-2xl font-bold">আমাদের দর্শন</h3>
            </div>
            <p className="text-gray-700 mb-6">
              একটি সমতাভিত্তিক সমাজ গঠন যেখানে প্রতিটি মানুষের অধিকার সুরক্ষিত এবং সকলের জন্য সমান সুযোগ নিশ্চিত করা।
            </p>
            <div className="text-gray-700">
              <p className="mb-4">আমাদের মূল্যবোধ:</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>সততা ও নিষ্ঠা</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>সামাজিক দায়বদ্ধতা</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                  <span>মানবতাবোধ</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}