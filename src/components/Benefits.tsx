import { TrendingUp, Users, Clock, DollarSign, Heart, Globe } from 'lucide-react';
import { Check } from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Increase Orders by 40%',
    description: 'Rich visuals and AR experiences lead to higher order values and customer satisfaction.',
    stats: '+40% Average',
  },
  {
    icon: Users,
    title: 'Enhanced Customer Experience',
    description: 'Provide a modern, engaging dining experience that customers love and remember.',
    stats: '98% Satisfaction',
  },
  {
    icon: Clock,
    title: 'Reduce Decision Time',
    description: 'Customers order faster when they can see exactly what they\'re getting.',
    stats: '60% Faster',
  },
  {
    icon: DollarSign,
    title: 'Lower Operating Costs',
    description: 'Eliminate printing costs and reduce menu waste while being eco-friendly.',
    stats: 'Save Money',
  },
  {
    icon: Heart,
    title: 'Build Customer Loyalty',
    description: 'Create memorable experiences that keep customers coming back.',
    stats: '3x Return Rate',
  },
  {
    icon: Globe,
    title: 'Multilingual Support',
    description: 'Serve international customers with automatic menu translation.',
    stats: 'Languages',
  },
];

const testimonials = [
  {
    quote: "The Visuplate transformed our restaurant. Customers love the AR feature and our orders increased by 45% in the first month!",
    author: "Maria Rodriguez",
    role: "Owner, Bella Vista Restaurant",
  },
  {
    quote: "Going digital was the best decision. We save thousands on printing and our customers appreciate the eco-friendly approach.",
    author: "James Chen",
    role: "Manager, Urban Bistro",
  },
];

export default function Benefits() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Restaurants Choose Us
          </h2>
          <p className="text-xl text-gray-600">
            Proven results that drive growth and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-100 hover:shadow-2xl hover:border-emerald-300 transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">
                    {benefit.stats}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              What Restaurant Owners Say
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                  <p className="text-lg leading-relaxed mb-6 text-white/95">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold">{testimonial.author[0]}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-white/80 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex flex-wrap justify-center gap-4 text-sm">
                {['Easy Setup', 'No Hardware Required', 'Real-Time Analytics', '24/7 Support'].map((feature, i) => (
                  <div key={i} className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-lg">
                    <Check className="w-4 h-4" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
