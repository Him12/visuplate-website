import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    restaurantName: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -----------------------------------------
  // EMAILJS — AUTO SEND EMAIL TO YOU
  // -----------------------------------------
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .send(
        "service_n0tdloi",   // <-- Replace
        "template_7flpxvj",  // <-- Replace
        {
          name: formData.name,
          email: formData.email,
          restaurant: formData.restaurantName,
          message: formData.message,
        },
        "B6wKR7DPbmnbWCbbz"    // <-- Replace
      )
      .then(() => {
        console.log("Email sent successfully");
        setSubmitted(true);

        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            restaurantName: "",
            message: "",
          });
          setSubmitted(false);
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600">
            Have questions? We'd love to hear from you. Our team is ready to help
            you transform your restaurant.
          </p>
        </div>

        {/* 3 Contact Cards (Updated to 4 Cards) */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">

          {/* Email */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600 mb-4">
              Send us an email and we'll respond within 24 hours.
            </p>
            <a
              href="mailto:thevisuplate@gmail.com"
              className="text-emerald-600 font-semibold hover:text-emerald-700"
            >
              thevisuplate@gmail.com
            </a>
          </div>

          {/* Phone Only */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">Available Mon–Fri, 9AM to 6PM IST.</p>
            <a
              href="tel:+918377861214"
              className="text-emerald-600 font-semibold hover:text-emerald-700"
            >
              +91-8377861214
            </a>
          </div>

          {/* WhatsApp Support – New Card */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 448 512"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 224.9 32 103.5 32 4 131.5 4 252.9c0 43.7 11.4 86.3 33.1 123.7L0 480l108.8-35.7c35.1 19.2 74.8 29.3 116 29.3h.1c121.3 0 220.9-99.5 220.9-220.9 0-58.3-23.1-114.1-65.9-156.8zM224.9 438.4c-36.5 0-72.3-9.8-103.6-28.3l-7.4-4.4-64.5 21.2 21.6-63.1-4.8-7.8c-20.5-33.2-31.4-71.5-31.4-110.5C35.8 147.5 121.5 61.8 224.9 61.8c50.6 0 98.1 19.7 133.8 55.4 35.7 35.7 55.4 83.2 55.4 133.8-.1 103.3-85.8 188.4-188.2 188.4zm101.2-138.3c-5.5-2.8-32.8-16.1-37.9-17.9-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 17.9-17.6 21.6c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66.1-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7s-12.5-30.2-17.1-41.1c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.2 0 27.2 19.9 53.4 22.7 57.1 2.8 3.7 39.1 59.7 94.5 83.8 13.2 5.7 23.5 9.1 31.5 11.6 13.2 4.2 25.2 3.6 34.7 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.3-5-3.7-10.5-6.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp Support</h3>
            <p className="text-gray-600 mb-4">Chat with us instantly on WhatsApp.</p>
            <a
              href="https://wa.me/918377861214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 font-semibold hover:text-emerald-700"
            >
              +91-8377861214
            </a>
          </div>

          {/* Office */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Office</h3>
            <p className="text-gray-600">Delhi, India</p>
          </div>

        </div>

        {/* FORM SECTION */}
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send us a Message
            </h2>

            {/* SUCCESS MESSAGE */}
            {submitted ? (
              <div className="bg-emerald-50 border-2 border-emerald-300 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-emerald-600 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. We'll contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Restaurant Name (Optional)
                  </label>
                  <input
                    type="text"
                    name="restaurantName"
                    value={formData.restaurantName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500"
                    placeholder="Your restaurant name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Response Times
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl border-2 border-emerald-100">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Email Support
                    </h4>
                    <p className="text-gray-600">Typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl border-2 border-emerald-100">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Phone Support
                    </h4>
                    <p className="text-gray-600">
                      Available Mon–Fri, 9AM–6PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-gradient-to-br from-white to-emerald-50 p-6 rounded-xl border-2 border-emerald-100">
                  <Clock className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Demo Scheduling
                    </h4>
                    <p className="text-gray-600">Book a demo within 48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* WHATSAPP CTA */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">
                Prefer to Schedule a Call?
              </h3>
              <p className="text-emerald-50 mb-6">
                Let's talk directly about how The Visuplate can transform your
                restaurant.
              </p>

              <a
                href="https://wa.me/918377861214"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <button className="w-full px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-200">
                  Schedule Demo Call
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
