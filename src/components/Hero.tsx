import React from "react";
import main from "../assets/main.jpg";
import backgroundImage from "../assets/gallery/2.jpg"; // You'll need to add this image

const PaintedFrame = () => {
  return (
    <div className="relative w-80 h-80">
      {/* Black Painted Frame */}
      <div
        className="absolute inset-0 bg-black -z-10"
        style={{
          clipPath: `polygon(
            0% 20%, 10% 0%, 80% 0%, 100% 20%, 
            100% 80%, 80% 100%, 20% 100%, 0% 80%
          )`,
        }}
      ></div>

      {/* Image */}
      <img
        src="/path-to-your-image.png" // Replace with your image path
        alt="Children"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
  );
};


const Hero = () => {
  return (
    <div className="relative min-h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50 z-0"
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/1440388/pexels-photo-1440388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
        }}
      ></div>

      <div className="container mx-auto px-4 h-full relative z-10">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh] py-24 md:py-32">
          <div className="relative z-20 order-2 md:order-1 lg:order-1 space-y-8 lg:pr-12">
            <div className="rounded-2xl p-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight text-center lg:text-left">
                AKHAND BHARAT SC/ST/OBC/ MINORITY JOINT FORUM
              </h3>
              <p className="text-lg md:text-2xl mb-8 text-white  text-center lg:text-left">
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
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-white/30 -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/30 translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/30 -translate-x-1/2 translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-white/30 translate-x-1/2 translate-y-1/2"></div>
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full z-20"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,192L48,208C96,224,192,256,288,261.3C384,267,480,245,576,224C672,203,768,181,864,176C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
