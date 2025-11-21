import React, { useState } from "react";
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

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  /** Handle text inputs safely */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.name as FormField;
    setForm({ ...form, [field]: e.target.value });
  };

  /** Convert file → base64 */
  const fileToBase64 = (file: File): Promise<string> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = () => reject("File reading failed");
      reader.readAsDataURL(file);
    });

  /** File upload handler */
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError(null);

    const file = e.target.files?.[0] ?? null;

    if (!file) {
      setResumeFile(null);
      return;
    }

    if (file.size > 50 * 1024) {
      setFileError("File must be under 50 KB");
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
  };

  /** Submit & send EmailJS request */
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let base64 = "";
    let filename = "";

    if (resumeFile) {
      base64 = await fileToBase64(resumeFile);
      filename = resumeFile.name;
    }

    await emailjs.send(
      "service_77qf29o",
      "template_el3mphs",
      {
        ...form,
        time: new Date().toLocaleString(),
        resume_file: base64,
        resume_filename: filename
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
            {(["name", "email", "role", "portfolio", "resume_url"] as FormField[]).map(
              (field) => (
                <input
                  key={field}
                  name={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={
                    field === "resume_url"
                      ? "Resume URL (optional)"
                      : field.charAt(0).toUpperCase() + field.slice(1)
                  }
                  className="w-full border p-3 rounded-xl"
                  type={field === "email" ? "email" : "text"}
                  required={["name", "email", "role"].includes(field)}
                />
              )
            )}

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

            <div>
              <label className="block text-sm mb-2">
                Upload Resume (Max size: 50 KB) — optional
              </label>

              <input
                type="file"
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                onChange={onFileChange}
                className="w-full border p-2 rounded-xl"
              />

              {fileError && (
                <p className="text-sm text-red-500 mt-2">{fileError}</p>
              )}

              {resumeFile && !fileError && (
                <p className="text-sm text-gray-600 mt-2">
                  Attached: {resumeFile.name} (
                  {Math.round(resumeFile.size / 1024)} KB)
                </p>
              )}
            </div>

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
