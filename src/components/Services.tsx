import { Target, Share2, MousePointerClick, BarChart3, MessageCircle, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Lead and Sales Generation',
    description: 'Drive qualified leads and boost sales with targeted strategies that convert prospects into loyal customers.',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Engage your audience across all major platforms with compelling content and data-driven social media campaigns.',
  },
  {
    icon: MousePointerClick,
    title: 'Pay-Per-Click Advertising',
    description: 'Maximize ROI with targeted PPC campaigns on Google Ads that convert clicks into customers.',
  },
  {
    icon: BarChart3,
    title: 'Conversion Tracking & Analytics',
    description: 'We track calls, leads, purchases, and key actions across your campaigns. This helps you clearly understand what is working and where money is spent.',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Marketing',
    description: 'Connect directly with customers through personalized WhatsApp campaigns, automated messaging, and conversational marketing.',
  },
  {
    icon: TrendingUp,
    title: 'Campaign Optimization & Scaling',
    description: 'We regularly optimize ads, audiences, and budgets to improve performance. Winning campaigns are scaled carefully to maximize returns.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions designed to amplify your brand and accelerate growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#1a237e] transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#1a237e] to-[#283593] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-[#1a237e] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}