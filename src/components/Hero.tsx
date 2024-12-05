import { Calendar } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-20 bg-cover bg-center" />
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          A non-political organization{" "}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          অখণ্ড ভারত SC/ST/OBC যৌথ মঞ্চ{" "}
        </p>
        <div className="flex items-center justify-center space-x-2 text-yellow-400">
          <Calendar className="w-6 h-6" />
          <span className="text-lg">৬ ডিসেম্বর, ২০২৪</span>
        </div>
      </div>
    </div>
  );
}
