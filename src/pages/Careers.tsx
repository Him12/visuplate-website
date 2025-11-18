export default function Careers() {
  return (
    <div className="min-h-screen bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          We're Hiring Soon!
        </h1>

        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
          The Visuplate is expanding rapidly, and we’re building a strong,
          passionate team. We will soon open positions for developers, designers,
          marketing specialists, and customer success professionals.
        </p>

        <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-emerald-700 mb-4">
            Want to Join Early?
          </h2>
          <p className="text-gray-700">
            Send your resume or portfolio to{" "}
            <a
              href="mailto:hello@thevisuplate.com"
              className="text-emerald-600 font-semibold"
            >
              hello@thevisuplate.com
            </a>
            <br />
            We'll contact you as soon as roles become available.
          </p>
        </div>
      </div>
    </div>
  );
}
