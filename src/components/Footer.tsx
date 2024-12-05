import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">যোগাযোগ</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>হেল্পলাইন: ৮১৪৫৪৭০৬৬৩ / ৮০১৭৫০৮০০২</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>contact@akhandbharat.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>বরাকর বাস স্ট্যান্ড, পশ্চিম বর্ধমান</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">আমাদের সম্পর্কে</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">কার্যক্রম</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">সোশ্যাল মিডিয়া</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-lg">© ২০২৪ অখণ্ড ভারত SC/ST/OBC/সংখ্যালঘু যুক্ত মঞ্চ</p>
          <p className="text-sm text-gray-400 mt-2">সর্বস্বত্ব সংরক্ষিত</p>
        </div>
      </div>
    </footer>
  );
}