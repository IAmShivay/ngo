import { Target, Eye, Award } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Mission and Vision</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
            <div className="flex items-center space-x-4 mb-6">
              <Target className="w-12 h-12 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>Establish Social Justice</span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>Expand and Develop Education</span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>Increase Social Awareness</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
            <div className="flex items-center space-x-4 mb-6">
              <Eye className="w-12 h-12 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 mb-6">
              Build an equitable society where every individual's rights are protected and equal opportunities are ensured for all.
            </p>
            <div className="text-gray-700">
              <p className="mb-4 font-semibold">Our Core Values:</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Integrity and Dedication</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Social Responsibility</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Humanism</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}