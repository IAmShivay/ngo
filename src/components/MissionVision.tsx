import { Target, Eye, Award } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 bg-white text-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-black">
          Our Mission and Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <Target className="w-12 h-12 text-gray-400" />
              <h3 className="text-2xl font-bold text-black">Our Mission</h3>
            </div>
            <ul className="space-y-4 text-black">
              <li className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-gray-400 mt-1" />
                <span>
                  100 Engineering seats free for SC/ST/OBC Minority students (
                  West Bengal / Jharkhand) SC/ST/OBC Minority দের ১০০ টা
                  ইঞ্জিনিয়ারিং সিট ফ্রি (পশ্চিমবঙ্গ/ ঝাড়খণ্ড)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-gray-400 mt-1" />
                <span>
                  1 lakh scholarship will be given to meritorious girls students
                  in various fields for SC/ST/OBC/Minority students.
                  (SC/ST/OBC/Minority দের বছরে ১০০০০০ টাকা স্কলারশিপ বিভিন্ন
                  শিক্ষা ক্ষেত্রে মেধাবী ছাত্রীদের দেওয়া হবে )
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-gray-400 mt-1" />
                <span>
                  Tottaly Free Doctor checkup in specified hospital for
                  SC/ST/OBC Minority SC/ST/OBC/Minority( দের ক্ষেত্রে ডাক্তার
                  চেক-আপ সম্পূর্ণ বিনামূল্যে নির্ধারিত হাসপাতালে ।)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-gray-400 mt-1" />
                <span>
                  Free legal aid advocates in entire West Bengal & Jharkhand for
                  SC/ST/OBC/Minority(সমগ্র পশ্চিমবঙ্গ ও ঝাড়খণ্ডে আইনি সহায়তার
                  উকিল বিনামূল্যে ।)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <div className="flex items-center space-x-4 mb-6">
              <Eye className="w-12 h-12 text-gray-400" />
              <h3 className="text-2xl font-bold text-black">Our Vision</h3>
            </div>
            <div className="text-black">
              <p className="mb-4 font-semibold">Our Core Values:</p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span>
                    Empowering Marginalised Communities through Unity,
                    Education, and Economic Empowerment.( একতা, শিক্ষা এবং
                    অর্থনৈতিক ক্ষমতায়নের মাধ্যমে প্রান্তিক জনগোষ্ঠীর ক্ষমতায়ন
                    )
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  <span>
                    To ensurenthat minorities get the benefits they are entitled
                    to by the state and Central Government (রাজ্য ও
                    কেন্দ্রসরকারী কর্তৃক যে সুবিধা সংখ্যালঘুদের প্রাপ্য সেটা
                    যাতে তারা সঠিক ভাবে পায় )
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
