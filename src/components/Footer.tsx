import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Link } from "react-router-dom";
import founder1 from "../assets/gallery/madam.jpg";
import founder2 from "../assets/gallery/sir.jpg";
export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">
            Founding Members
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {/* Member 1 */}
            <div className="text-center">
              <img
                src="https://imgs.search.brave.com/oJUxonEvz7P_qkOC_-rYriP6a_qd9HESeJEXuACr75k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc"
                alt="Founding Member"
                className="rounded-full mx-auto mb-4 h-28 w-28 "
              />
              <h4 className="font-semibold text-lg">Dablu Bauri</h4>
              <p className="text-gray-400 text-sm">
                National Vice President <br /> (Social worker & Ex. Chairman
                Chirkunda Nagar Nigam )
              </p>
            </div>
            <div className="text-center">
              <img
                src={founder1}
                alt="Founding Member"
                className="rounded-full mx-auto mb-4 h-28 w-28"
              />
              <h4 className="font-semibold text-lg">Pinky Paul Mondal</h4>
              <p className="text-gray-400 text-sm">
                Chairman & Social worker <br /> SC/ST/OBC Minority Joint Forum{" "}
                <br />
                (B.Tech/ MBA/IIM Nagpur/LLB)
              </p>
            </div>
            {/* Member 2 */}
            <div className="text-center">
              <img
                src={founder2}
                alt="Founding Member"
                className="rounded-full mx-auto mb-4 h-28 w-28"
              />
              <h4 className="font-semibold text-lg">Rahul Bouri</h4>
              <p className="text-gray-400 text-sm">
                "Honorary President Vice President TMC SC/ST Cell Paschim
                Bardhaman."
              </p>
            </div>
            {/* Member 3 */}

            {/* Member 4 */}
            <div className="text-center">
              <img
                src="https://imgs.search.brave.com/oJUxonEvz7P_qkOC_-rYriP6a_qd9HESeJEXuACr75k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc"
                alt="Founding Member"
                className="rounded-full mx-auto mb-4 h-28 w-28"
              />
              <h4 className="font-semibold text-lg">Mala Majhi</h4>
              <p className="text-gray-400 text-sm">
                State President Mohila Morcha & Child cell Asansol Division
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span>Helpline: +91 81454 70663 / +91 80175 08002</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>contact@akhandbharat.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span>Barakar Bus Stand, West Burdwan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="hover:text-gray-500 transition-colors"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Founding Members */}

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-lg">
            © 2024 All India SC/ST/OBC Minority Joint Forum
          </p>
          <p className="text-sm text-gray-500 mt-2">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
