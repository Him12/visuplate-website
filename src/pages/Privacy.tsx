export default function Privacy() {
  return (
    <div className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          Your privacy is important to us. This policy explains how The
          Visuplate collects, uses, and safeguards your information.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-2">
          Information We Collect
        </h2>
        <p className="text-gray-600 mb-4">
          We may collect personal details such as your name, email, and contact
          information when you interact with our platform.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-10 mb-2">
          How We Use Your Information
        </h2>
        <p className="text-gray-600 mb-4">
          Your data is used to improve our platform, deliver better support, and
          personalize your experience.
        </p>

        <p className="text-gray-600 mt-10">
          If you have any questions, contact us at{" "}
          <a href="mailto:hello@thevisuplate.com" className="text-emerald-600">
            hello@thevisuplate.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
