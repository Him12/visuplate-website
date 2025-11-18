import { Award, Target, Users, Lightbulb, TrendingUp, Globe } from 'lucide-react';
import { Link } from "react-router-dom";


export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously pushing the boundaries of restaurant technology to deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Customer-Centric',
      description: 'Every decision we make is focused on creating exceptional experiences for diners and restaurant owners.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality products and services that exceed expectations.',
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Dedicated to reducing environmental impact through digital-first solutions that go green.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Empowering restaurants to grow their business and increase customer satisfaction.',
    },
    {
      icon: Target,
      title: 'Focus',
      description: 'Laser-focused on solving real problems in the restaurant industry with practical solutions.',
    },
  ];

  const team = [
    {
      name: 'Gagan Kaushik',
      role: 'CEO & Co-Founder',
      bio: 'Visionary entrepreneur in restaurant technology.',
      image: "/visuplate-website/images/CEO.jpg",
    },
    {
      name: 'Himanshu Kumar',
      role: 'CTO & Co-Founder',
      bio: 'Experience in AR technology with background at leading tech companies',
      image: "/visuplate-website/images/CTO.jpg",
    },
    {
      name: 'Devang Pratap Singh',
      role: 'CMO & Co-Founder, Head of Customer Success and Marketing',
      bio: 'Dedicated to supporting restaurant partners and their growth',
      image: "/visuplate-website/images/CMO.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About The Visuplate
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We're transforming the restaurant industry by bridging the gap between static menus and interactive dining experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                The Visuplate was born from a simple observation: diners wanted to see what they were ordering, and restaurants wanted a smarter way to showcase their food.
              </p>
              <p>
                Founded in 2025, we started with a mission to eliminate printed menus while creating an engaging, interactive experience that excites customers and increases order values.
              </p>
              <p>
                Today, we partner with over 5+ restaurants across multiple countries, serving millions of happy diners who experience our innovative AR and video-powered menus every day.
              </p>
              <p>
                We're committed to sustainability, technology, and creating real value for both restaurants and their customers.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-12 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-emerald-600 mb-4">5+</div>
              <div className="text-2xl font-semibold text-gray-800 mb-2">Restaurants</div>
              <div className="text-gray-600 mb-8">Trusted worldwide</div>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-teal-600">1K+</span>
                  <span className="text-gray-700">Happy diners monthly</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-emerald-600">40%</span>
                  <span className="text-gray-700">Average order increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-100">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-center">

            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-36 h-36 mx-auto mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-emerald-300 shadow-lg"
                  />
                </div>



                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-12 lg:p-16 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Revolutionizing Dining</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Whether you're a restaurant owner or an investor, we'd love to hear from you. Together, we're building the future of dining.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-200">
              Get In Touch
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
}
