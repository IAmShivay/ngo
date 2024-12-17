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
  const foundingMembers = [
    {
      name: "Pinky Paul Mondal",
      title: "Chairman & Social worker",
      subtitle: "SC/ST/OBC Minority Joint Forum",
      qualifications: "B.Tech/ MBA/IIM Nagpur/LLB",
      image: founder1,
    },
    {
      name: "Rahul Bouri",
      title: "Honorary President",
      subtitle: "TMC SC/ST Cell Paschim Bardhaman",
      image: founder2,
    },
    {
      name: "Dablu Bauri",
      title: "National Vice President ",
      subtitle: "Social worker & Ex. Chairman Chirkunda Nagar Nigam",
      image:
        "https://imgs.search.brave.com/oJUxonEvz7P_qkOC_-rYriP6a_qd9HESeJEXuACr75k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc",
    },
    {
      name: "Mala Majhi",
      title: "State President",
      subtitle: "Mohila Morcha & Child cell Asansol Division",
      image:
        "https://imgs.search.brave.com/oJUxonEvz7P_qkOC_-rYriP6a_qd9HESeJEXuACr75k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc",
    },
    {
      name: "Dara Bauri",
      title: "National President",
      subtitle: "Renowned Social Activist",
      image:
        "https://imgs.search.brave.com/oJUxonEvz7P_qkOC_-rYriP6a_qd9HESeJEXuACr75k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc",
    },
    {
      name: "Sayed Iqbal Khan",
      title: "State Minorty President",
      subtitle: "",
      image:
        "https://imgs.search.brave.com/oJUxonEvz7P_qkOC_-rYriP6a_qd9HESeJEXuACr75k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc",
    },
    {
      name: "Mukesh Paswan",
      title: "President ( SC )",
      subtitle: "Asansol Division",
      image:
        "https://imgs.search.brave.com/oJUxonEvz7P_qkOC_-rYriP6a_qd9HESeJEXuACr75k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc",
    },
    {
      name: "Ranjan Kumar Singh",
      title: "President ( OBC )",
      subtitle: "Asansol Division",
      image:
        "https://imgs.search.brave.com/oJUxonEvz7P_qkOC_-rYriP6a_qd9HESeJEXuACr75k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAyLzk5LzczLzI2/LzM2MF9GXzI5OTcz/MjY2OF9nWnFLVmJ1/Mktqcm9MWXRUOWhS/WmZFMzdBWldGSEpR/bi5qcGc",
    },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Founding Members Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-8 text-center border-b border-white/20 pb-4">
            Founding Members
          </h2>

          {/* First Row with Two Founders' Images */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {foundingMembers.slice(0, 2).map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={`${member.name} portrait`}
                  className="rounded-full mx-auto mb-4 h-40 w-40 object-cover border-4 border-white/20"
                />
                <h4 className="font-semibold text-xl">{member.name}</h4>
                <p className="text-white font-semibold text-base">
                  {member.title}
                </p>
                {member.qualifications && (
                  <p className="text-gray-white font-semibold text-sm italic">
                    Serial entrepreneur <br />
                    {member.qualifications}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Second Row with Other Founders' Details */}
          <div className="grid md:grid-cols-4 gap-6 bg-white/5 p-6 rounded-lg">
            {foundingMembers.slice(2).map((member, index) => (
              <div key={index} className="text-center">
                <h4 className="font-bold text-lg mb-2">{member.name}</h4>
                <p className="text-gray-300 text-sm mb-1">{member.title}</p>
                <p className="text-gray-300 text-sm mb-1">{member.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rest of the Footer remains the same as previous implementation */}
        <div className="grid md:grid-cols-3 gap-8 mb-8  pt-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-500" />
                <span>Helpline: +91 8017508002 / +91 9832808213</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-500" />
                <span>contact@scstobcmf.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-gray-500" />
                <span>Barakar Bus Stand, West Burdwan</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="hover:text-gray-400 transition-colors"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">
              Social Media
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-lg font-light">
            © 2024 AKHAND BHARAT SC/ST/OBC/ MINORITY JOINT FORUM
          </p>
          <p className="text-sm text-gray-500 mt-2">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
