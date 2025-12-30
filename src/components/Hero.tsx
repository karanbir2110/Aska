import { ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-[#1a237e] to-[#283593] text-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-8">
            

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Elevate Your Digital Presence
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Transform your brand with data-driven digital marketing strategies that deliver measurable results and sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="group bg-white text-[#1a237e] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Get Started Today</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>

              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#1a237e] transition-all duration-300 shadow-lg"
              >
                Explore Services
              </button>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full h-96 md:h-[500px]">
              <div className="absolute inset-0 bg-white/10 rounded-2xl backdrop-blur-sm transform rotate-3 animate-pulse"></div>
              <div className="absolute inset-0 bg-white/5 rounded-2xl backdrop-blur-sm transform -rotate-3"></div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital Marketing Strategy"
                className="absolute inset-4 w-auto h-auto object-cover rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
