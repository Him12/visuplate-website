import { Award, Target, Users, Lightbulb, TrendingUp, Globe, Linkedin } from 'lucide-react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    document.title = "About Visuplate - Meet Our Team | Gagan Kaushik, Himanshu Kumar, Devang Singh";

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About Visuplate - Leadership Team",
      "description": "Learn about Visuplate's mission to transform restaurant dining with AR technology.",
      "publisher": {
        "@type": "Organization",
        "name": "Visuplate",
        "description": "AR-powered digital menus for restaurants",
        "url": "https://visuplate.com",
        "founder": [
          
          {
            "@type": "Person",
            "name": "Himanshu Kumar",
            "jobTitle": "CTO & Founder",
            "sameAs": "https://www.linkedin.com/in/himanshu-kumar-93518b173/"
          }
        ]
      }
    };

    const existingScript = document.getElementById('structured-data-about');
    if (existingScript) existingScript.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data-about';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Continuously pushing the boundaries of restaurant technology.' },
    { icon: Users, title: 'Customer-Centric', description: 'Focused on creating exceptional experiences for diners and restaurant owners.' },
    { icon: Award, title: 'Excellence', description: 'Committed to delivering the highest quality products and services.' },
    { icon: Globe, title: 'Sustainability', description: 'Dedicated to reducing environmental impact through digital solutions.' },
    { icon: TrendingUp, title: 'Growth', description: 'Empowering restaurants to grow their business and satisfaction.' },
    { icon: Target, title: 'Focus', description: 'Laser-focused on solving real problems in restaurant industry.' },
  ];

  const team = [
    {
      name: 'Himanshu Kumar',
      role: 'CEO & CTO - Founder',
      bio: 'Visionary entrepreneur in restaurant technology innovation and Expert in AR technology with background at leading tech companies.',
      image: "/images/CTO.jpg",
      social: { linkedin: "https://www.linkedin.com/in/himanshu-kumar-93518b173/" },
      achievements: ['AR Technology', 'Platform Architecture', 'Technical Innovation']
    },
    {
      name: 'Devang Pratap Singh',
      role: 'CMO & CSO',
      bio: 'Dedicated to supporting restaurant partners and their growth.',
      image: "/images/CMO.jpg",
      social: { linkedin: "https://www.linkedin.com/in/devang-pratap-singh-a947a2241/" },
      achievements: ['Growth Strategy', 'Partner Success', 'Brand Development']
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">About Visuplate</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transforming restaurant industry with interactive AR dining experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>Visuplate was born from diners wanting to see what they order and restaurants wanting smarter food showcasing.</p>
              <p>Founded in 2025 by two techies to eliminate printed menus with engaging interactive experiences.</p>
              <p>Partnering with 15+ restaurants across India, serving hundreds of diners with AR-powered menus daily.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-12 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-emerald-600 mb-4">15+</div>
              <div className="text-2xl font-semibold text-gray-800 mb-2">Restaurants</div>
              <div className="text-gray-600 mb-8">Across India</div>
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
              <div key={index} className="bg-gradient-to-br from-white to-emerald-50 rounded-2xl p-8 border-2 border-emerald-100 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Passionate innovators driving restaurant technology forward.
            </p>
          </div>

          {/* ✅ PERFECTLY CENTERED */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 text-center relative overflow-hidden"
              >
                {/* Hover BG */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                {/* Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={member.image}
                    alt={`${member.name} - ${member.role} at Visuplate`}
                    className="w-full h-full rounded-full object-cover border-4 border-emerald-300 shadow-lg"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>

                <p className="text-emerald-600 font-semibold mb-4">
                  {member.role}
                </p>

                <p className="text-gray-600 text-sm mb-6">
                  {member.bio}
                </p>

                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.achievements.map((achievement, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center pt-4 border-t border-gray-100">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-emerald-500 hover:text-white transition"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-12 lg:p-16 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Join Us in Revolutionizing Dining</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">Whether you're a restaurant owner or investor, we'd love to hear from you.</p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">Get In Touch</button>
          </Link>
        </div>
      </div>
    </div>
  );
}