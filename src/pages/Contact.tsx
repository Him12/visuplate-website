import { Phone, MapPin, Clock, Send, Sparkles } from "lucide-react";
import { useState, FormEvent } from "react";

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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Restaurant Name:* ${formData.restaurantName || 'Not provided'}%0A*Message:* ${formData.message}`;

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/918851796110?text=${whatsappMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');

    // Show success message
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
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 overflow-hidden">

      {/* Background Blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-emerald-300/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-emerald-200/20 blur-3xl rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-teal-200/10 blur-3xl rounded-full animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 -z-10 opacity-20 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg mb-6 animate-bounce-slow">
            <Sparkles className="w-4 h-4" />
            We're here to help
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Get In Touch
          </h1>

          <p className="text-xl text-gray-700">
            Ready to transform your restaurant? Our team is here every step of the way.
          </p>
        </div>

        {/* CONTACT CARDS */}
        <div className="grid lg:grid-cols-4 gap-10 mb-20">

         {/* PRIMARY CONTACT – EMAIL ONLY */}
        <div className="group bg-white border border-emerald-200 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8 text-blue-600"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" ry="2"></rect>
      <polyline points="3,7 12,13 21,7"></polyline>
    </svg>
  </div>

  <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
  <p className="text-gray-600 mb-4">Primary contact</p>

  <a
    href="mailto:thevisuplate@gmail.com"
    className="text-emerald-600 font-semibold hover:text-emerald-700 block"
  >
    thevisuplate@gmail.com
  </a>
</div>




          {/* PHONE */}
          <div className="group bg-white border border-emerald-200 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <Phone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-600 mb-4">Immediate assistance</p>
            <div className="space-y-2">
              <a href="tel:+918851796110" className="block text-emerald-600 hover:text-emerald-700 font-medium">
                +91-88517-96110
              </a>
              
              <a href="tel:+918377861214" className="block text-emerald-600 hover:text-emerald-700 font-medium">
                +91-63878-11493
              </a>
            </div>
          </div>

          {/* WHATSAPP - ALTERNATE */}
          <div className="group bg-white border border-emerald-200 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-8 h-8"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Whatsapp contact</p>
            <div className="space-y-2">
              <a
                href="https://wa.me/918851796110?text=Hi,%0AI'm%20interested%20in%20your%20Digital%20QR%20menu.%20Can%20we%20talk?"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-emerald-600 hover:text-emerald-700 font-medium"
              >
                +91-88517-96110
              </a>
              
            </div>
          </div>

          {/* OFFICE */}
          <div className="group bg-white border border-purple-200 rounded-3xl p-10 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Office</h3>
            <p className="text-gray-600 mb-4">Based in Delhi, India</p>
            <span className="text-purple-600 font-semibold">Delhi, India</span>
          </div>

        </div>

        {/* FORM SECTION */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>
            <div className="inline-flex bg-emerald-100 text-emerald-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
              Contact VisuPlate
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send us a Message via WhatsApp
            </h2>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-3xl p-10 text-center shadow-xl">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-600 mb-2">Redirecting to WhatsApp!</h3>
                <p className="text-gray-600">You'll be redirected to WhatsApp to send your message.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 shadow-sm"
                  placeholder="Your Name"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 shadow-sm"
                  placeholder="Your Email"
                />

                <input
                  type="text"
                  name="restaurantName"
                  value={formData.restaurantName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 shadow-sm"
                  placeholder="Restaurant Name (optional)"
                />

                <textarea
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 shadow-sm"
                  placeholder="How can we help you?"
                />

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  Send via WhatsApp
                  <img 
  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
  alt="WhatsApp" 
  className="w-5 h-5 invert brightness-0"
/>
                </button>
              </form>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Response Times
            </h3>

            {[
              { title: "WhatsApp Support", desc: "Reply within 1-2 hours" },
              { title: "Phone Support", desc: "Mon–Fri, 9AM to 6PM IST" },
              { title: "Demo Scheduling", desc: "Book a demo in 24 hours" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-emerald-100 shadow hover:-translate-y-1 hover:shadow-md transition-all flex space-x-4"
              >
                <Clock className="w-7 h-7 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* WHATSAPP CTA */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-10 shadow-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Prefer to talk directly?</h3>
              <p className="text-emerald-50 mb-6">
                Schedule a demo call instantly via WhatsApp.
              </p>
              <a 
                href="https://wa.me/918851796110" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="w-full px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition">
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