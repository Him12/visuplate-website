// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";

// interface FormState {
//   name: string;
//   email: string;
//   role: string;
//   portfolio: string;
//   why: string;
//   message: string;
//   resume_url: string;
// }

// /**
//  * Local uploaded file path (from conversation history).
//  * Per your instruction we'll send this path as the resume_url
//  * when user does not upload a file or provide a resume link.
//  */
// const FALLBACK_LOCAL_FILE_PATH = "/mnt/data/22c01a12-7a76-40b8-a56c-438e1a82dee6.png";

// export default function Careers() {
//   const [openModal, setOpenModal] = useState(false);
//   const [showForm, setShowForm] = useState(false);

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
//           onClick={() => setOpenModal(true)}
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

//       {/* Founder Welcome Modal */}
//       {openModal && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="
//     fixed 
//     top-0 left-0 
//     w-full h-full 
//     bg-black/50 
//     backdrop-blur-sm 
//     flex 
//     items-center 
//     justify-center 
//     z-50
//     md:pt-20      /* ⬅️ Added spacing only for desktop */
//   "
//         >


//           {!showForm ? (
//             <motion.div
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.4 }}
//               className="bg-white p-10 rounded-3xl max-w-lg text-center shadow-2xl"
//             >
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">A note from the founders</h2>

//               <p className="text-gray-700 leading-relaxed mb-6">
//                 Thank you for wanting to be part of this story.
//                 We’re building something that will redefine how people see food and connect with restaurants.
//                 The early team is the heart of everything we will become.
//               </p>

//               <p className="text-gray-700 mb-8">If you’re ready to build with us, continue below.</p>

//               <div className="flex justify-center gap-4">
//                 <button
//                   onClick={() => setShowForm(true)}
//                   className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl"
//                 >
//                   Continue
//                 </button>

//                 <button
//                   onClick={() => setOpenModal(false)}
//                   className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-8 py-3 rounded-xl"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </motion.div>
//           ) : (
//             <ApplicationForm
//               onClose={() => {
//                 setOpenModal(false);
//                 setShowForm(false);
//               }}
//             />
//           )}
//         </motion.div>
//       )}
//     </div>
//   );
// }

// /* -------------------------------
//    Application Form Component
// --------------------------------*/
// function ApplicationForm({ onClose }: { onClose: () => void }) {
//   const [submitted, setSubmitted] = useState(false);

//   const [form, setForm] = useState<FormState>({
//     name: "",
//     email: "",
//     role: "",
//     portfolio: "",
//     why: "",
//     message: "",
//     resume_url: "" // user can paste a resume link (optional)
//   });

//   // optional file (max 50 KB)
//   const [resumeFile, setResumeFile] = useState<File | null>(null);
//   const [fileError, setFileError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const fileToBase64 = (file: File): Promise<string> =>
//     new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result as string);
//       reader.onerror = () => reject(new Error("Failed to read file"));
//       reader.readAsDataURL(file);
//     });

//   const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFileError(null);
//     const file = e.target.files?.[0] ?? null;
//     if (!file) {
//       setResumeFile(null);
//       return;
//     }

//     // limit to 50 KB
//     if (file.size > 50 * 1024) {
//       setFileError("File must be under 50 KB");
//       setResumeFile(null);
//       return;
//     }

//     setResumeFile(file);
//   };

//   const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     try {
//       let attachmentBase64 = "";
//       let attachmentFilename = "";

//       if (resumeFile) {
//         attachmentBase64 = await fileToBase64(resumeFile);
//         attachmentFilename = resumeFile.name;
//       }

//       // If user didn't upload a file and didn't provide resume_url, send fallback local path
//       const resumeUrlToSend = form.resume_url.trim() !== "" ? form.resume_url.trim() : FALLBACK_LOCAL_FILE_PATH;

//       // EmailJS template variables:
//       // name, email, role, portfolio, why, message, resume_url, time, resume_file (base64), resume_filename
//       await emailjs.send(
//         "service_77qf29o", // replace with your service ID if different
//         "template_el3mphs", // replace with your template ID if different
//         {
//           name: form.name,
//           email: form.email,
//           role: form.role,
//           portfolio: form.portfolio,
//           why: form.why,
//           message: form.message,
//           resume_url: resumeUrlToSend,
//           time: new Date().toLocaleString(),
//           // send file only if present (EmailJS expects base64 data URI)
//           resume_file: attachmentBase64, // e.g. "data:application/pdf;base64,...." or "" if not provided
//           resume_filename: attachmentFilename // empty string if none
//         },
//         "B6wKR7DPbmnbWCbbz" // replace with your public key if different
//       );

//       // show success UI (do not auto-close)
//       setSubmitted(true);
//     } catch (error: unknown) {
//       // keep simple: show inline message (we'll use alert for unexpected error text)
//       if (error instanceof Error) {
//         // If you want to show inline error UI instead of alert, swap this out.
//         // For now show alert for failed send.
//         alert("Failed to send: " + error.message);
//       } else {
//         alert("Something went wrong while sending the application.");
//       }
//     }
//   };

//   // fields we render as single-line inputs
//   const inputFields: Array<keyof FormState> = ["name", "email", "role", "portfolio", "resume_url"];

//   return (
//     <motion.div
//       initial={{ scale: 0.9, opacity: 0 }}
//       animate={{ scale: 1, opacity: 1 }}
//       className="
//       relative 
//       bg-white 
//       p-6 
//       rounded-3xl 
//       shadow-xl 
//       max-w-lg 
//       w-full 
//       max-h-[85vh] 
//       overflow-y-auto
//     "
//     >

//       {/* Close Button */}
//       <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl">
//         ×
//       </button>

//       {/* SUCCESS SCREEN */}
//       {submitted ? (
//         <div className="text-center py-10">
//           <h2 className="text-3xl font-bold text-emerald-700 mb-4">🎉 Application Submitted!</h2>

//           <p className="text-gray-700 text-lg leading-relaxed mb-6">
//             Thank you for applying!
//             <br />
//             After screening, our HR team will get in touch with you soon.
//           </p>

//           <button onClick={onClose} className="mt-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl">
//             Close
//           </button>
//         </div>
//       ) : (
//         <>
//           <h2 className="text-2xl font-bold mb-4 text-emerald-700 text-center">Early Team Application</h2>

//           <form onSubmit={sendEmail} className="space-y-4">
//             {inputFields.map((field) => (
//               <input
//                 key={field}
//                 name={field}
//                 value={form[field]}
//                 onChange={handleChange}
//                 placeholder={field === "resume_url" ? "Resume URL (optional)" : field.charAt(0).toUpperCase() + field.slice(1)}
//                 required={field === "name" || field === "email" || field === "role"} // basic requiredness: name, email, role required
//                 className="w-full border p-3 rounded-xl"
//                 type={field === "email" ? "email" : "text"}
//               />
//             ))}

//             <textarea
//               name="why"
//               value={form.why}
//               onChange={handleChange}
//               placeholder="Why do you want to join the early team?"
//               className="w-full border p-3 rounded-xl"
//             />

//             <textarea
//               name="message"
//               value={form.message}
//               onChange={handleChange}
//               placeholder="Additional message"
//               className="w-full border p-3 rounded-xl"
//             />

//             {/* File Upload (optional) */}
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume (Max size: 50 KB) — optional</label>

//               <input
//                 type="file"
//                 accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
//                 onChange={onFileChange}
//                 className="w-full border p-2 rounded-xl"
//               />

//               {fileError && <p className="text-sm text-red-500 mt-2">{fileError}</p>}

//               {resumeFile && !fileError && (
//                 <p className="text-sm text-gray-600 mt-2">
//                   Attached: {resumeFile.name} ({Math.round(resumeFile.size / 1024)} KB)
//                 </p>
//               )}
//             </div>

//             <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl">
//               Submit Application
//             </button>
//           </form>
//         </>
//       )}
//     </motion.div>
//   );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Careers() {
  const [openMessage, setOpenMessage] = useState(false);
  const navigate = useNavigate();

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
        <h2 className="text-3xl font-bold text-emerald-700 mb-4">Join Us Early</h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Early teammates shape everything. If you want to help build the foundation of
          something meaningful, we’d love to know you.
        </p>

        <p className="text-gray-800 mb-8">
          Reach us at{" "}
          <span className="text-emerald-600 font-semibold">thevisuplate@gmail.com</span>
        </p>

        <button
          onClick={() => setOpenMessage(true)}
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

      {/* Founder Message FULL-PAGE instead of popup */}
      {openMessage && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-10 rounded-3xl max-w-lg text-center shadow-2xl mx-4"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A note from the founders</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              Thank you for wanting to be part of this story.
              We’re building something that will redefine how people see food and connect with restaurants.
              The early team is the heart of everything we will become.
            </p>

            <p className="text-gray-700 mb-8">If you’re ready to build with us, continue below.</p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => navigate("/apply")}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-xl"
              >
                Continue
              </button>

              <button
                onClick={() => setOpenMessage(false)}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-8 py-3 rounded-xl"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
