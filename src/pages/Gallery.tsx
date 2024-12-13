import { useState } from "react";
import { Camera } from "lucide-react";
import womenday from "../assets/gallery/women.jpg";
import image2 from "../assets/gallery/2.jpg";
import image3 from "../assets/gallery/3.jpg";
import image4 from "../assets/gallery/4.jpg";
import image5 from "../assets/gallery/5.jpg";
import image6 from "../assets/gallery/6.jpg";
import image7 from "../assets/gallery/7.jpg";

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
  date: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    url: womenday,
    title: "Women's Day Celebration",
    description: "Empowering",
    date: "March 08, 2024",
  },
  {
    id: 2,
    url: image2,
    title: "Education Support Program",
    description: "Distribution of Educational Materials to Students",
    date: "November 20, 2023",
  },
  {
    id: 3,
    url: image3,
    title: "Social Awareness Workshop",
    description: "Interaction with Youth Society",
    date: "October 5, 2023",
  },
  {
    id: 4,
    url: image4,
    title: "Cultural Event",
    description: "Traditional Cultural Performance",
    date: "September 25, 2023",
  },
  {
    id: 5,
    url: image5,
    title: "Health Camp",
    description: "Free Health Checkup Camp",
    date: "August 10, 2023",
  },
  {
    id: 6,
    url: image6,
    title: "Tree Plantation Program",
    description: "Environmental Awareness Initiative",
    date: "June 5, 2023",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Camera className="w-8 h-8 text-black mr-3" />
          <h1 className="text-4xl font-bold text-center">Our Works</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64">
                <img
                  src={image.url}
                  // alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">
                    {/* {image.title} */}
                  </h3>
                  {/* <p className="text-gray-200 text-sm">{image.date}</p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full overflow-hidden">
              <img
                src={selectedImage.url}
                // alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              {/* <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 mb-2">
                  {selectedImage.description}
                </p>
                <p className="text-gray-500 text-sm">{selectedImage.date}</p>
              </div> */}
              <button
                className="absolute top-4 right-4 text-white text-xl font-bold bg-black/50 w-10 h-10 rounded-full hover:bg-black/70 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
