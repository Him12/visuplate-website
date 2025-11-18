import { CheckCircle } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Silver",
      oneTime: "5999 INR",
      monthly: "599 INR",
      includes:
        "Complete digital menu + 5 QR codes per restaurant (upto 10 bestseller animated 3D AR and video preview)",
      terms: "45% advance | Remaining after delivery",
    },
    {
      name: "Gold",
      oneTime: "6999 INR",
      monthly: "699 INR",
      includes:
        "Complete Digital Menu + AR images & videos (upto 20 bestseller animated 3D AR and video preview); 5 QR codes per restaurant",
      terms: "45% advance | Remaining after delivery",
    },
    {
      name: "Platinum",
      oneTime: "9999 INR",
      monthly: "999 INR",
      includes:
        "Complete Digital Menu (Full website) include AR + Video + 3D image of food (upto 30 bestseller animated 3D AR and video preview); 5 QR codes per restaurant",
      terms: "45% advance | Remaining after delivery",
    },
  ];

  const extraNotes = [
    "T&C photos and videos provided by restaurant",
    "For more than 5 QR it will be 99 INR per QR",
    "24/7 Support",
    "After the given limit you have to pay 59 INR per AR and Video both",
    "Advance amount is not refundable",
    "We will deliver menu in 15 days (10th day demo + improvements → final on 15th day)",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
          TheVisuPlate Pricing
        </h1>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 border-2 border-emerald-200 shadow-lg hover:shadow-2xl hover:border-emerald-400 transition-all duration-300"
            >
              <h2 className="text-3xl font-bold text-emerald-600 mb-4 text-center">
                {plan.name}
              </h2>

              <div className="text-center mb-6">
                <p className="text-xl font-semibold text-gray-700">
                  One-Time Payment
                </p>
                <p className="text-3xl font-bold text-gray-900">{plan.oneTime}</p>
              </div>

              <div className="text-center mb-6">
                <p className="text-xl font-semibold text-gray-700">
                  Monthly Subscription
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {plan.monthly}
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Includes</h3>
                <p className="text-gray-700 leading-relaxed">{plan.includes}</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Payment Terms</h3>
                <p className="text-gray-700">{plan.terms}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Notes */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Additional Information
          </h2>

          <div className="space-y-4">
            {extraNotes.map((note, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-gradient-to-br from-white to-emerald-50 p-4 rounded-xl border border-emerald-100"
              >
                <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
