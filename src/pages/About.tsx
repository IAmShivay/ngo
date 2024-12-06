import { Users, Heart, Target } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg">
            <p className="text-xl text-gray-600 mb-8 text-center">
              Akhand Bharat SC/ST/OBC/Minority United Platform is a non-political organization working for the welfare of all sections of society.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <Users className="w-12 h-12 mx-auto text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Goal</h3>
                <p className="text-gray-600">Establishing social justice and bringing equality</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <Heart className="w-12 h-12 mx-auto text-red-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-gray-600">Integrity, Dedication, and Humanity</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-md">
                <Target className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Objective</h3>
                <p className="text-gray-600">Education and Social Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}