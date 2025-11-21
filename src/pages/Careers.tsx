// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// export default function Careers() {
//   const [openMessage, setOpenMessage] = useState(false);
//   const navigate = useNavigate();

//   return (
//     <div className="relative min-h-screen bg-white py-28 px-6 overflow-hidden">
      
//       {/* Spotlight */}
//       <motion.div
//         animate={{ opacity: 0.25 }}
//         className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)] blur-3xl"
//       />

//       {/* Title */}
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="text-center text-6xl font-bold text-gray-900 mb-10 tracking-tight"
//       >
//         Build Something{" "}
//         <span className="bg-gradient-to-r from-emerald-500 to-teal-600 text-transparent bg-clip-text">
//           That Matters
//         </span>
//       </motion.h1>

//       {/* Subheading */}
//       <motion.p
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.2, duration: 0.7 }}
//         className="max-w-3xl mx-auto text-center text-gray-600 text-lg leading-relaxed mb-20"
//       >
//         We’re looking for the first builders.
//         The people who shape the energy, the culture, and the future of The Visuplate.
//       </motion.p>

//       {/* Main Card */}
//       <motion.div
//         initial={{ opacity: 0, y: 40, scale: 0.97 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ delay: 0.3, duration: 0.8 }}
//         className="relative mx-auto bg-white border border-emerald-200 shadow-xl rounded-3xl p-14 max-w-3xl"
//       >
//         <h2 className="text-3xl font-bold text-emerald-700 mb-4">Join Us Early</h2>

//         <p className="text-gray-700 leading-relaxed mb-6">
//           Early teammates shape everything. If you want to help build the foundation of
//           something meaningful, we’d love to know you.
//         </p>

//         <p className="text-gray-800 mb-8">
//           Reach us at{" "}
//           <span className="text-emerald-600 font-semibold">thevisuplate@gmail.com</span>
//         </p>

//         <button
//           onClick={() => setOpenMessage(true)}
//           className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-all"
//         >
//           I Want To Build This
//         </button>
//       </motion.div>

//       {/* Footer */}
//       <motion.p
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.2, duration: 1 }}
//         className="text-center text-gray-500 text-sm mt-14"
//       >
//         Great stories start before the world notices.
//       </motion.p>

//       {/* Founder Message FULL-PAGE instead of popup */}
//       {openMessage && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
//           <motion.div
//             initial={{ scale: 0.85, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             className="bg-white p-10 rounded-3xl max-w-lg text-center shadow-2xl mx-4"
//           >
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">A note from the founders</h2>

//             <p className="text-gray-700 leading-relaxed mb-6">
//               Thank you for wanting to be part of this story.
//               We’re building something that will redefine how people see food and connect with restaurants.
//               The early team is the heart of everything we will become.
//             </p>

//             <p className="text-gray-700 mb-8">If you’re ready to build with us, continue below.</p>

//             <div className="flex justify-center gap-4">
//               <button
//                 onClick={() => navigate("/apply")}
//                 className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl"
//               >
//                 Continue
//               </button>

//               <button
//                 onClick={() => setOpenMessage(false)}
//                 className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-8 py-3 rounded-xl"
//               >
//                 Cancel
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       )}
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  short: string;
  description: string[];
  responsibilities: string[];
  requirements: string[];
  attachment_url?: string;
};

export default function Careers(): JSX.Element {
  const [openMessage, setOpenMessage] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/jobs.json")
      .then((r) => r.json())
      .then((data: Job[]) => setJobs(data))
      .catch(() => setJobs([]));
  }, []);

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
        We’re looking for the first builders. The people who shape the energy, the culture, and the future of The Visuplate.
      </motion.p>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative mx-auto bg-white border border-emerald-200 shadow-xl rounded-3xl p-14 max-w-3xl"
      >
        <h2 className="text-3xl font-bold text-emerald-700 mb-4">Join Us Early</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Early teammates shape everything. If you want to help build the foundation of something meaningful, we’d love to know you.
        </p>

        <p className="text-gray-800 mb-8">
          Reach us at <span className="text-emerald-600 font-semibold">thevisuplate@gmail.com</span>
        </p>

        <button
          onClick={() => setOpenMessage(true)}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-10 py-4 rounded-xl shadow-lg transition-all"
        >
          I Want To Build This
        </button>
      </motion.div>

      {/* Job list */}
      <div className="max-w-6xl mx-auto mt-16 px-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">Open Positions</h3>

        {jobs.length === 0 ? (
          <p className="text-gray-600">No active openings right now — you can still apply above.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <article
                key={job.id}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer"
                onClick={() => navigate(`/careers/${job.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => (e.key === "Enter" ? navigate(`/careers/${job.id}`) : undefined)}
              >
                <h4 className="text-xl font-semibold mb-1">{job.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{job.short}</p>
                <div className="flex items-center justify-between text-sm text-emerald-600 font-medium">
                  <span>{job.location}</span>
                  <span>{job.type}</span>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Founder Message Modal (unchanged behavior) */}
      {openMessage && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-8 rounded-3xl max-w-lg text-center shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A note from the founders</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Thank you for wanting to be part of this story. We’re building something that will redefine how people see food and connect with restaurants.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setOpenMessage(false);
                  navigate("/apply");
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-2 rounded-xl"
              >
                Continue
              </button>

              <button
                onClick={() => setOpenMessage(false)}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold px-6 py-2 rounded-xl"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-center text-gray-500 text-sm mt-14"
      >
        Great stories start before the world notices.
      </motion.p>
    </div>
  );
}
