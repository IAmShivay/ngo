import { Heart } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[70vh] py-24 md:py-32">
          <div className="relative z-20">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              AKHAND BHARAT SC/ST/OBC/ MINORITY JOINT FORUM
            </h3>
            <p className="text-lg md:text-2xl mb-8 text-white/90">
              ( আখন্দ ভারত এসসি/এসটি/ওবিসি/সংখ্যালঘু জয়েন্ট ফোরাম ){" "}
            </p>
            <div className="flex gap-4">
              <button className="flex items-center bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-300 transition-colors">
                <Heart className="mr-2" /> Yes I Want To Help
              </button>

              <button className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/10 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-24 md:-right-48 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3"
                alt="Children"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
