import { motion } from "framer-motion";
import { useState } from "react";

export default function Careers() {
  const [openModal, setOpenModal] = useState(false);

  const mailtoLink =
    "mailto:thevisuplate@gmail.com?subject=Joining%20The%20Visuplate%20%E2%80%93%20Early%20Team%20Interest&body=Hello%20Visuplate%20Team%2C%0D%0A%0D%0AI%E2%80%99m%20reaching%20out%20because%20I%E2%80%99m%20excited%20about%20the%20opportunity%20to%20join%20The%20Visuplate%20as%20part%20of%20the%20early%20team.%20I%20love%20the%20vision%20you%20are%20building%20and%20would%20like%20to%20contribute%20my%20skills%20and%20experience.%0D%0A%0D%0AName%3A%0D%0ARole%20%2F%20Skillset%3A%0D%0APortfolio%20%2F%20GitHub%20%2F%20LinkedIn%3A%0D%0AWhy%20I%20want%20to%20be%20part%20of%20the%20early%20team%3A%0D%0AAnything%20else%20you'd%20like%20to%20share%3A%0D%0A%0D%0ALooking%20forward%20to%20hearing%20from%20you.%0D%0A%0D%0AThank%20you%2C%0D%0A%5BYour%20Name%5D";

  return (
    <div className="relative min-h-screen bg-white py-28 px-6 overflow-hidden">

      {/* Spotlight */}
      <motion.div
        animate={{ opacity: 0.25 }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)] blur-3xl"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-6xl font-bold text-gray-900 mb-10 tracking-tight"
      >
        Build Something{" "}
        <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-transparent bg-clip-text">
          That Matters
        </span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed mb-20"
      >
        We’re looking for the first builders.  
        The people who shape the energy, the culture, and the future of The Visuplate.
      </motion.p>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative mx-auto bg-white border border-emerald-200 shadow-xl rounded-3xl p-14 max-w-3xl"
      >
        <h2 className="text-3xl font-bold text-emerald-700 mb-4">
          Join Us Early
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Early teammates shape everything. If you want to help build the foundation of 
          something meaningful, we’d love to know you.
        </p>

        <p className="text-gray-800 mb-8">
          Reach us at{" "}
          <span className="text-emerald-600 font-semibold">
            thevisuplate@gmail.com
          </span>
        </p>

        {/* Button that triggers modal */}
        <button
          onClick={() => setOpenModal(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-all"
        >
          I Want To Build This
        </button>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-center text-gray-500 text-sm mt-14"
      >
        Great stories start before the world notices.
      </motion.p>

      {/* Founder Welcome Modal */}
      {openModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-10 rounded-3xl max-w-lg text-center shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              A note from the founders
            </h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Thank you for wanting to be part of this story.  
              We’re building something that will redefine how people see food and connect with restaurants.  
              The early team is the heart of everything we will become.
            </p>

            <p className="text-gray-700 mb-8">
              If you’re ready to build with us, continue below.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => window.location.href = mailtoLink}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl"
              >
                Continue
              </button>

              <button
                onClick={() => setOpenModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-8 py-3 rounded-xl"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
