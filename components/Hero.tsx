
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1603584173870-7f3ca99a3466?auto=format&fit=crop&q=80&w=2000" 
          alt="White Aston Martin Vantage" 
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-6 opacity-0 animate-[fadeIn_0.6s_ease-out_forwards]">
            <div className="h-[2px] w-12 bg-[#E60000]"></div>
            <span className="text-[#E60000] font-orbitron text-xs tracking-[0.3em] uppercase font-bold">
              Northridge, CA
            </span>
          </div>
          
          <h1 className="font-orbitron text-5xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.9] mb-6 opacity-0 animate-[slideIn_0.8s_ease-out_0.2s_forwards]">
            Reinvent <br />
            <span className="text-white/20 outline-text">Your</span> <br />
            <span className="text-[#E60000] text-glow">Ride.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 font-light mb-10 max-w-lg opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
            LA’s Premier Paint Protection & Vinyl Styling. Expert craftsmanship for the elite automotive enthusiast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            <button className="bg-[#E60000] hover:bg-red-700 text-white font-orbitron font-bold py-5 px-10 tracking-widest uppercase transform -skew-x-12 transition-all red-glow">
              <span className="block skew-x-12">Get A Quote</span>
            </button>
            <button className="bg-transparent border border-white/20 hover:border-[#E60000] text-white font-orbitron font-bold py-5 px-10 tracking-widest uppercase transform -skew-x-12 transition-all">
              <span className="block skew-x-12">View Work</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E60000] via-[#E60000]/20 to-transparent"></div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .outline-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.2);
          color: transparent;
        }
      `}</style>
    </section>
  );
};
