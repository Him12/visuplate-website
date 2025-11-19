export default function Terms() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-emerald-50/30 to-teal-50/30 px-6 py-24 overflow-hidden">

      {/* Soft animated background blobs */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-emerald-300/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 -right-32 w-[25rem] h-[25rem] bg-teal-200/20 blur-3xl rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-green-200/10 blur-3xl rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Page container */}
      <div className="max-w-4xl mx-auto relative z-10">

        {/* HEADER */}
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Terms of Service
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Welcome to The Visuplate. By accessing or using our website and services, 
          you agree to the terms outlined below.
        </p>

        {/* CONTENT SECTIONS */}
        <div className="space-y-10">

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              1. Use of Service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You agree not to misuse our platform, perform unauthorized access attempts, 
              or engage in any activity that violates applicable laws or disrupts our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              2. User Responsibilities
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You are responsible for providing accurate information, maintaining the security 
              of your account, and complying with all policies associated with The Visuplate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              3. Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All logos, graphics, text, models, and media provided on The Visuplate platform 
              are owned or licensed by us. You may not copy, modify, distribute, or reproduce 
              any content without explicit written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The Visuplate is not liable for any indirect, incidental, or consequential damages 
              arising from your use of our services. All features are provided “as is” without warranties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              5. Updates to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms occasionally. Continued use of our website and services 
              after any changes constitutes acceptance of the updated terms.
            </p>
          </section>

        </div>

        {/* FOOTER NOTE */}
        <p className="text-gray-700 mt-14">
          For questions or concerns, reach out to{" "}
          <a
            href="mailto:thevisuplate@gmail.com"
            className="text-emerald-600 font-semibold hover:text-emerald-700"
          >
            thevisuplate@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
}
