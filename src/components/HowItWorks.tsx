import { QrCode, Smartphone, Eye, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { icon: QrCode, title: "Scan QR Code", description: "Guests scan instantly.", number: "01" },
  { icon: Smartphone, title: "Browse Menu", description: "Modern visual menu.", number: "02" },
  { icon: Eye, title: "View in AR", description: "3D dishes on the table.", number: "03" },
  { icon: CheckCircle, title: "Order", description: "Confident, clear ordering.", number: "04" },
];

export default function HowItWorks() {
  return (
    <div className="relative py-20 bg-gradient-to-br from-gray-50 to-emerald-50 overflow-hidden">

      {/* OUT-OF-THE-BOX BACKGROUND: ANIMATED PROCESS PATH */}
      <motion.svg
        viewBox="0 0 800 300"
        className="absolute inset-0 w-full h-full opacity-25 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.5 }}
      >
        {/* Curved Path */}
        <motion.path
          d="M 50 250 C 200 80, 600 80, 750 250"
          fill="none"
          stroke="url(#grad)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Gradient for path */}
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="50%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#34d399" />
          </linearGradient>
        </defs>

        {/* Floating dots representing steps */}
        <motion.circle
          cx="50"
          cy="250"
          r="10"
          fill="#34d399"
          animate={{ cx: [50, 200, 400, 600, 750] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            A clean and smart flow your customers instantly understand
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 h-full">

                {/* STEP NUMBER */}
                <motion.div
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-5 right-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg"
                >
                  {step.number}
                </motion.div>

                {/* ICON FLOAT */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6"
                >
                  <step.icon className="w-8 h-8 text-emerald-600" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
