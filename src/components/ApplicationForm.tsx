import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

/** Form State Interface */
interface FormState {
  name: string;
  email: string;
  role: string;
  portfolio: string;
  why: string;
  message: string;
  resume_url: string;
}

/** Allowed fields for mapping */
type FormField = keyof FormState;

export default function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    role: "",
    portfolio: "",
    why: "",
    message: "",
    resume_url: ""
  });

  /** Handle text inputs safely */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as FormField;
    setForm({ ...form, [field]: e.target.value });
  };

  /** Submit EmailJS form */
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await emailjs.send(
      "service_77qf29o",
      "template_el3mphs",
      {
        ...form,
        time: new Date().toLocaleString(),
        resume_file: "",       // no file
        resume_filename: ""    // no file
      },
      "B6wKR7DPbmnbWCbbz"
    );

    setSubmitted(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white max-w-lg mx-auto p-8 rounded-3xl shadow-xl border mt-28"
    >
      {!submitted ? (
        <>
          <h2 className="text-2xl font-bold mb-4 text-emerald-700 text-center">
            Early Team Application
          </h2>

          <form onSubmit={sendEmail} className="space-y-4">
            {(["name", "email", "role", "portfolio", "resume_url"] as FormField[])
              .map((field) => (
                <input
                  key={field}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "resume_url"
                      ? "Resume Link (Google Drive, Notion, etc.)"
                      : field.charAt(0).toUpperCase() + field.slice(1)
                  }
                  className="w-full border p-3 rounded-xl"
                  type={field === "email" ? "email" : "text"}
                  required={["name", "email", "role"].includes(field)}
                />
              ))}

            <textarea
              name="why"
              value={form.why}
              onChange={handleChange}
              placeholder="Why do you want to join the early team?"
              className="w-full border p-3 rounded-xl"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Additional message"
              className="w-full border p-3 rounded-xl"
            />

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 rounded-xl"
            >
              Submit Application
            </button>
          </form>
        </>
      ) : (
        <div className="text-center py-10">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">
            🎉 Application Submitted!
          </h2>
          <p className="text-gray-700 mb-6">
            Thank you! Our team will contact you after screening.
          </p>
        </div>
      )}
    </motion.div>
  );
}
