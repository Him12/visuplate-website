import { QrCode, Smartphone, Eye, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: QrCode,
    title: 'Scan QR Code',
    description: 'Place QR codes on tables. Customers scan with their phone camera - no app needed.',
    number: '01',
  },
  {
    icon: Smartphone,
    title: 'Browse Digital Menu',
    description: 'Customers explore your menu with rich photos, videos, and detailed descriptions.',
    number: '02',
  },
  {
    icon: Eye,
    title: 'View in AR',
    description: 'See dishes come to life in 3D AR, placed right on their table before ordering.',
    number: '03',
  },
  {
    icon: CheckCircle,
    title: 'Order with Confidence',
    description: 'Make informed decisions and place orders knowing exactly what to expect.',
    number: '04',
  },
];

export default function HowItWorks() {
  return (
    <div className="py-24 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            A seamless experience from scan to order in just four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-300 to-transparent"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-emerald-200 h-full">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.number}
                </div>

                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-emerald-600" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
