import { Target, Award, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on measurable outcomes that directly impact your bottom line.',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Years of experience across diverse industries and marketing channels.',
  },
  {
    icon: Users,
    title: 'Client-Centric',
    description: 'Your success is our success. We build lasting partnerships.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'Staying ahead with cutting-edge strategies and tools.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-6">
              About ASKAA Media
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                ASKAA Media is a full-service digital marketing agency dedicated to helping businesses thrive in the digital landscape. With a team of passionate experts and a proven track record of success, we transform marketing challenges into opportunities for growth.
              </p>

              <p>
                We focus on creating campaigns that deliver measurable results and real business growth. While we are a young team, we bring fresh ideas, hands-on attention, and a results-first approach to every client we work with.
              </p>

              <div className="bg-[#1a237e] text-white p-6 rounded-lg mt-8">
                <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
                <p className="text-gray-100">
                  Our mission is to connect businesses with their customers through performance-focused campaigns that drive leads, sales, and growth.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="rounded-xl shadow-2xl w-full h-[500px] object-cover"
            />
            
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1a237e] to-[#283593] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#1a237e] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
