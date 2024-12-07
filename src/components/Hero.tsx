import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-24">
      <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20 bg-cover bg-center" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          আখন্দ ভারত এসসি/এসটি/ওবিসি/সংখ্যালঘু জয়েন্ট ফোরাম(SC/ST/OBC/MF)
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          A Non-Political Organization Dedicated to Social Empowerment
        </p>
        <div className="flex items-center justify-center space-x-4 text-yellow-300">
          <Calendar className="w-8 h-8 animate-pulse" />
          <span className="text-xl font-semibold">December 6, 2024</span>
        </div>
      </div>
    </div>
  );
}
