
import React from 'react';
import { Award, Zap, Star } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-[#E60000]" />,
      title: 'Certified Installers',
      desc: 'Factory-trained technicians with over 10 years of combined elite experience.'
    },
    {
      icon: <Zap className="w-8 h-8 text-[#E60000]" />,
      title: 'Premium Materials',
      desc: 'We exclusively use 3M, Avery Dennison, and Inozetek for unrivaled finishes.'
    },
    {
      icon: <Star className="w-8 h-8 text-[#E60000]" />,
      title: '5-Star Rated',
      desc: 'Northridge’s most trusted studio with a focus on absolute client satisfaction.'
    }
  ];

  return (
    <section id="why-us" className="relative py-32 carbon-pattern">
      <div className="absolute inset-0 bg-[#080808]/80 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#E60000] font-orbitron text-xs tracking-[0.5em] mb-4 block font-bold">WHY MAGIC WRAPZ</span>
            <h2 className="font-orbitron text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-tight mb-8">
              No Compromise. <br />
              Just <span className="text-[#E60000] text-glow">Perfection.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 font-light leading-relaxed">
              We started Magic Wrapz with a single mission: To provide the highest level of automotive detailing and protection services in the San Fernando Valley. Our facility is temperature-controlled and dust-filtered to ensure a clean install every single time.
            </p>
            
            <div className="flex gap-4">
              <div className="bg-white/5 border border-white/10 p-4 transform -skew-x-12">
                <p className="font-orbitron text-3xl font-black text-white skew-x-12">1500+</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold skew-x-12">Cars Styled</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-4 transform -skew-x-12">
                <p className="font-orbitron text-3xl font-black text-white skew-x-12">100%</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold skew-x-12">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((f, i) => (
              <div key={i} className="glass-card p-8 group hover:bg-white/[0.05] transition-all duration-300 transform hover:-translate-x-2">
                <div className="flex gap-6 items-start">
                  <div className="bg-[#080808] p-3 rounded-none border border-white/5 group-hover:border-[#E60000]/50 transition-all">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-orbitron text-xl font-bold uppercase mb-2 tracking-tight">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
