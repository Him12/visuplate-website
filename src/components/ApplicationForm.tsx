import { useState, useEffect } from "react";
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

type FormField = keyof FormState;

export default function ApplicationForm({ jobTitle }: { jobTitle?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    role: jobTitle ?? "",
    portfolio: "",
    why: "",
    message: "",
    resume_url: ""
  });

  /** Auto-fill role when coming from a job card */
  useEffect(() => {
    if (jobTitle) {
      setForm((prev) => ({ ...prev, role: jobTitle }));
    }
  }, [jobTitle]);

  /** Handle safe input typing */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as FormField;
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  /** Handle submission */
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_77qf29o",
        "template_el3mphs",
        {
          ...form,
          job_title: jobTitle || form.role,
          time: new Date().toLocaleString(),
          resume_file: "",
          resume_filename: ""
        },
        "B6wKR7DPbmnbWCbbz"
      );

      setSubmitted(true);
    } catch {
      alert("Failed to send application. Try again later.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="
        bg-white
        w-full
        max-w-md
        mx-auto
        p-8
        rounded-3xl
        shadow-xl
        border
      "
    >
      {!submitted ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-emerald-700 text-center">
            {jobTitle ? `Apply for ${jobTitle}` : "Early Team Application"}
          </h2>

          <form onSubmit={sendEmail} className="space-y-5">
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
                  className="
                    w-full 
                    border 
                    p-3 
                    rounded-xl 
                    text-gray-700 
                    focus:ring-2 
                    focus:ring-emerald-500 
                    focus:outline-none
                  "
                  type={field === "email" ? "email" : "text"}
                  required={["name", "email", "role"].includes(field)}
                />
              ))}

            <textarea
              name="why"
              value={form.why}
              onChange={handleChange}
              placeholder="Why do you want this role?"
              className="
                w-full 
                border 
                p-3 
                rounded-xl 
                text-gray-700 
                focus:ring-2 
                focus:ring-emerald-500 
                focus:outline-none
              "
              rows={3}
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Additional message"
              className="
                w-full 
                border 
                p-3 
                rounded-xl 
                text-gray-700 
                focus:ring-2 
                focus:ring-emerald-500 
                focus:outline-none
              "
              rows={3}
            />

            <button
              type="submit"
              className="
                w-full 
                bg-emerald-600 
                hover:bg-emerald-700 
                text-white 
                py-3 
                rounded-xl 
                font-semibold 
                transition
              "
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
          <p className="text-gray-700 text-lg">
            Thank you — our team will contact you after screening.
          </p>
        </div>
      )}
    </motion.div>
  );
}
