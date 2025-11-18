export default function Terms() {
  return (
    <div className="min-h-screen bg-white px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Terms of Service
        </h1>

        <p className="text-gray-600 leading-relaxed mb-6">
          By using The Visuplate website and services, you agree to the
          following terms and conditions.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Use of Service
        </h2>
        <p className="text-gray-600 mb-4">
          You agree not to misuse our platform, attempt unauthorized access, or
          violate any applicable laws.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          User Responsibilities
        </h2>
        <p className="text-gray-600 mb-4">
          You are responsible for providing accurate information and maintaining
          the confidentiality of your account.
        </p>

        <p className="text-gray-600 mt-10">
          For questions, contact{" "}
          <a href="mailto:hello@thevisuplate.com" className="text-emerald-600">
            hello@thevisuplate.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}
