import React from "react";
import main from "../assets/main.jpg";
import backgroundImage from "../assets/gallery/2.jpg"; // You'll need to add this image

const Hero = () => {
  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-black">
      {/* Background Image */}

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh] py-24 md:py-32">
          <div className="relative z-20 order-2 md:order-1 lg:order-1 space-y-8 lg:pr-12">
            <div className="rounded-2xl p-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight text-center lg:text-left">
                AKHAND BHARAT SC/ST/OBC/ MINORITY JOINT FORUM
              </h3>
              <p className="text-lg md:text-2xl mb-8 text-white text-center lg:text-left">
                ( আখন্দ ভারত এসসি/এসটি/ওবিসি/সংখ্যালঘু জয়েন্ট ফোরাম )
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                <a href="/about">
                  <button className="bg-white text-black border-2 border-black px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="relative z-10 order-1 md:order-2 lg:order-2 w-full">
            <div className="relative group w-full">
              <div className="absolute -inset-1 bg-gradient-to-br from-black/50 via-black/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 border-8 border-transparent">
                 
                </div>
                <img
                  src={main}
                  alt="Children"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* White Wave SVG */}
    </div>
  );
};

export default Hero;
