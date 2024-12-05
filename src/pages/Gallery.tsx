import { useState } from 'react';
import { Camera } from 'lucide-react';

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
    url: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "বার্ষিক সম্মেলন ২০২৩",
    description: "সদস্যদের সাথে আলোচনা সভা",
    date: "১৫ ডিসেম্বর, ২০২৩"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "শিক্ষা সহায়তা কর্মসূচি",
    description: "ছাত্রছাত্রীদের মাঝে শিক্ষা উপকরণ বিতরণ",
    date: "২০ নভেম্বর, ২০২৩"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "সামাজিক সচেতনতা কর্মশালা",
    description: "যুব সমাজের সাথে মতবিনিময়",
    date: "৫ অক্টোবর, ২০২৩"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "সাংস্কৃতিক অনুষ্ঠান",
    description: "ঐতিহ্যবাহী সাংস্কৃতিক পরিবেশনা",
    date: "২৫ সেপ্টেম্বর, ২০২৩"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "স্বাস্থ্য শিবির",
    description: "বিনামূল্যে স্বাস্থ্য পরীক্ষা ক্যাম্প",
    date: "১০ আগস্ট, ২০২৩"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "বৃক্ষরোপণ কর্মসূচি",
    description: "পরিবেশ সচেতনতা কর্মসূচি",
    date: "৫ জুন, ২০২৩"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Camera className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-4xl font-bold text-center">আমাদের স্মৃতিময় মুহূর্ত</h1>
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
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.date}</p>
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
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 mb-2">{selectedImage.description}</p>
                <p className="text-gray-500 text-sm">{selectedImage.date}</p>
              </div>
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