import { Target, Eye, Award } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Mission and Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
            <div className="flex items-center space-x-4 mb-6">
              <Target className="w-12 h-12 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  SC/ST/OBC/Minority দের ১০০ টা ইঞ্জিনিয়ারিং সিট
                  ফ্রি(পশ্চিমবঙ্গ/ঝাড়খন্ড
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  SC/ST/OBC/Minority দের বছরে ১০০০০০ টাকা স্কলারশীপ বিভিন্ন
                  শিক্ষা ক্ষেত্রে মেধাবী ছাত্রীদের দেওয়া হবে{" "}
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  SC/ST/OBC/Minority দের সমগ্র পশ্চিমবঙ্গ / ঝাড়খন্ড নির্ধারিত
                  হাসপাতালে কন্যা সন্তানের ক্ষেত্রে ডেলিভারী খরচা বিনামূল্যে
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  সুগারের রোগী দের জন্য ল্যাবরেটরির টেস্ট বিনামূল্যে নির্ধারিত
                  হাসপাতালে
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>১০০টা মহিলাকে নার্সিং (আয়া) ট্রেনিং বিনামূল্যে</span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  ১০০টি মহিলাকে Akhand Bharat SC/ST/OBC / Minority Joint forum
                  পক্ষ থেকে রোজগারের ব্যবস্থা
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  সমগ্র পশ্চিমবঙ্গ ও ঝাড়খণ্ডে আইনি সহায়তার উকিল বিনামূল্যে
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  সরকারী প্রকল্পের সমস্তধরনের ফর্ম ফিলাপের জন্য দুটো অফিস বরাকর
                  ও দুর্গাপুরে
                </span>
              </li>

              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  ১০০ টা SC/ST/OBC/Minority ছেলেকে কাজের সুযোগ ওয়ার্ড বয় /লেব
                  টেশনিশিয়ান ইত্যাদি ক্ষেত্রে
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-5 h-5 text-blue-600 mt-1" />
                <span>
                  পশ্চিমবঙ্গ ও ঝাড়খণ্ডের প্রতিটি স্কুলে ১৫% সিট রিজার্ভেশন
                  শিক্ষার জন্য।
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
            <div className="flex items-center space-x-4 mb-6">
              <Eye className="w-12 h-12 text-indigo-600" />
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <div className="text-gray-700">
              <p className="mb-4 font-semibold">Our Core Values:</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Empowering Marginalised Communities through Unity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                  <span>Education, and Economic Empowerment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-3 h-2 bg-indigo-600 rounded-full"></span>
                  <span>
                    To ensurenthat minorities get the benefits they are entitled
                    to by the state and Central Government
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
