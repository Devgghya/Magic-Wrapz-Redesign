
import React from 'react';
import { Palette, ShieldCheck, Flame } from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      title: 'Color Change Wraps',
      desc: 'Limitless possibilities from Satin black to exotic chameleon finishes.',
      icon: <Palette className="w-10 h-10 text-[#E60000]" />,
      img: 'https://images.unsplash.com/photo-1599814472145-21919830f30c?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Paint Protection (PPF)',
      desc: 'Self-healing armor for your investment. Invisible and bulletproof.',
      icon: <ShieldCheck className="w-10 h-10 text-[#E60000]" />,
      img: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c15d?auto=format&fit=crop&q=80&w=600'
    },
    {
      title: 'Ceramic Coating',
      desc: 'Liquid glass protection that repels everything and enhances depth.',
      icon: <Flame className="w-10 h-10 text-[#E60000]" />,
      img: 'https://images.unsplash.com/photo-1598501479155-90b968726190?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-orbitron text-4xl md:text-5xl font-black italic tracking-tighter uppercase mb-4">
              Precision <span className="text-[#E60000]">Styling</span>
            </h2>
            <p className="text-gray-500 max-w-md uppercase tracking-widest text-sm font-bold">
              We don't just wrap cars, we redefine their presence.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow mx-10 bg-white/5"></div>
          <div className="text-right text-xs tracking-[0.4em] text-white/40 font-orbitron uppercase">
            01 / SERVICES
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div 
              key={idx}
              className="group relative h-[450px] rounded-none overflow-hidden glass-card red-glow-hover transition-all duration-500"
            >
              {/* Image Background (Low opacity) */}
              <div className="absolute inset-0 z-0">
                <img src={service.img} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" alt={service.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent"></div>
              </div>

              <div className="relative z-10 p-8 flex flex-col h-full justify-end">
                <div className="mb-6 transform group-hover:-translate-y-2 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-orbitron text-2xl font-bold uppercase mb-4 tracking-tight group-hover:text-[#E60000] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6 opacity-80 group-hover:opacity-100">
                  {service.desc}
                </p>
                <div className="h-1 w-12 bg-[#E60000] transform origin-left scale-x-50 group-hover:scale-x-100 transition-transform"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
