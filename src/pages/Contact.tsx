import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import axios from "axios";

type FormData = {
  name: string;
  email: string; // Added email field
  message: string;
  phoneNo: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "", // Initialize email
    message: "",
    phoneNo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    const webhookURL =
      "https://crm-sales-alpha.vercel.app/api/leads?action=getLeads&sourceId=c107a000-5808-4a8c-a1ef-1fc57ed63ab3&workspaceId=21";

    try {
      await axios.post(webhookURL, JSON.stringify(formData), {
      });
    } catch (error) {
      console.error("An error occurred while sending data to the webhook:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-black">
            I want to be a member of{" "}
            <span className="underline decoration-gray-800">
              Akhand Bharat
            </span>{" "}
            SC/ST/OBC Minority Joint Forum
          </h1>
          <p className="text-xl text-gray-700 mt-4">
            আমি অখন্ড ভারত SC/ST/OBC সংখ্যালঘু জয়েন্ট ফোরামের সদস্য হতে চাই
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gray-100 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-black">
                Our Address
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-black" />
                  <div>
                    <h3 className="font-semibold text-black">
                      Helpline Number
                    </h3>
                    <p className="text-gray-700">8145470663 / 8017508002</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-black" />
                  <div>
                    <h3 className="font-semibold text-black">Address</h3>
                    <p className="text-gray-700">Barakar Bus Stand</p>
                    <p className="text-gray-700">West Burdwan</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-black" />
                  <div>
                    <h3 className="font-semibold text-black">Email</h3>
                    <p className="text-gray-700">contact@akhandbharat.org</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-black">
                Send a Message
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={2}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-900 transition-colors font-medium"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
