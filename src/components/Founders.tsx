import { Award, BookOpen, Mail } from 'lucide-react';

interface FounderProps {
  name: string;
  title: string;
  qualifications: string;
  contact: string;
  role: string;
  description: string;
  imageUrl: string;
}

function FounderCard({ name, title, qualifications, contact, role, description, imageUrl }: FounderProps) {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="md:flex">
        <div className="md:w-1/3">
          <div 
            className="h-full bg-cover bg-center min-h-[300px]"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        </div>
        <div className="md:w-2/3 p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-600 font-semibold">{title}</div>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">{name}</h2>
          <div className="mt-4 space-y-4">
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-indigo-600" />
              <span>{qualifications}</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-indigo-600" />
              <span>{contact}</span>
            </div>
            <div className="flex items-center space-x-3">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>{role}</span>
            </div>
          </div>
          <p className="mt-6 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Founders() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">প্রতিষ্ঠাতা সদস্যবৃন্দ</h2>
        <div className="space-y-8">
          <FounderCard
            name="পিঙ্কি পল মণ্ডল"
            title="চেয়ারপার্সন"
            qualifications="B.TECH / MBA / IIM NAGPUR/LLB"
            contact="৮৮১১০৪৮১১১"
            role="সামাজিক কর্মী এবং শিক্ষাবিদ"
            description="সমাজের উন্নয়নে নিবেদিত প্রাণ, সামাজিক ন্যায়বিচার ও শিক্ষার মাধ্যমে সমাজের পরিবর্তনে বিশ্বাসী।"
            imageUrl="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          />
          <FounderCard
            name="রাহুল বউরি"
            title="সম্মানীয় সভাপতি"
            qualifications="উচ্চ শিক্ষিত সামাজিক কর্মী"
            contact="৯৮৩২৮০৮২১৩"
            role="TMC SC/ST CELL এর ভাইস প্রেসিডেন্ট"
            description="পশ্চিম বর্ধমানের সামাজিক ন্যায়বিচার ও উন্নয়নের জন্য নিরলস কর্মী।"
            imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          />
        </div>
      </div>
    </section>
  );
}