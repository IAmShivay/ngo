import { Heart } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-4 h-full">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh] py-24 md:py-32">
          <div className="relative z-20 order-2 md:order-1 lg:order-1 space-y-8 lg:pr-12">
            <div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight text-center lg:text-left">
                AKHAND BHARAT SC/ST/OBC/ MINORITY JOINT FORUM
              </h3>
              <p className="text-lg md:text-2xl mb-8 text-white/90 text-center lg:text-left">
                ( আখন্দ ভারত এসসি/এসটি/ওবিসি/সংখ্যালঘু জয়েন্ট ফোরাম ){" "}
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <button className="flex items-center bg-white text-black px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-yellow-300 transition-colors">
                  <Heart className="mr-2" /> Yes I Want To Help
                </button>

                <button className="hidden md:block border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="relative z-10 order-1 md:order-2 lg:order-2 w-full">
            <div className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-white/20 via-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden">
                <div className="absolute inset-0 border-8 border-transparent">
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/30 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/30 translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/30 -translate-x-1/2 translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/30 translate-x-1/2 translate-y-1/2"></div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3"
                  alt="Children"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
