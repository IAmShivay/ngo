import { Award, BookOpen, Mail } from 'lucide-react';

export default function Chairperson() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <div className="h-full bg-[url('https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center min-h-[300px]"></div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">Chairperson</div>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">Pinki Paul Mondal</h2>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-indigo-600" />
                    <span>B.TECH / MBA / IIM NAGPUR/LLB</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-indigo-600" />
                    <span>8811048111</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-indigo-600" />
                    <span>Social Worker and Educator</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-600">
                  Dedicated to social development, believing in social justice and transformation through education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}