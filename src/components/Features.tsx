import { Video, Box, Smartphone, Leaf, Eye, Zap } from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'Real Portion Videos',
    description: 'Show customers exactly what they\'re ordering with high-quality videos showcasing real food portions and presentation.',
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Box,
    title: '3D AR Visualization',
    description: 'Let diners see animated 3D food models on their table using augmented reality, making ordering decisions easier and more exciting.',
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
  },
  {
    icon: Smartphone,
    title: 'Instant QR Access',
    description: 'No app downloads needed. Customers simply scan a QR code to access your complete digital menu instantly.',
    gradient: 'from-emerald-500 to-teal-500',
    bgGradient: 'from-emerald-50 to-teal-50',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Solution',
    description: 'Go green and reduce waste. Eliminate paper menus while providing a better experience for environmentally conscious diners.',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
  },
  {
    icon: Eye,
    title: 'Visual Storytelling',
    description: 'Tell the story of each dish with rich media, ingredients, and preparation details that engage and inform your customers.',
    gradient: 'from-orange-500 to-red-500',
    bgGradient: 'from-orange-50 to-red-50',
  },
  {
    icon: Zap,
    title: 'Instant Updates',
    description: 'Update your menu in real-time. Change prices, add specials, or remove sold-out items instantly across all devices.',
    gradient: 'from-yellow-500 to-orange-500',
    bgGradient: 'from-yellow-50 to-orange-50',
  },
];

export default function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything Your Restaurant Needs
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features that transform how customers experience your menu
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>

              <div className={`relative z-10 w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
