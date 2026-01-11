
import React from 'react';

export const Showcase: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <section id="showcase" className="py-24 bg-[#050505]">
      <div className="max-w-[1600px] mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <span className="text-[#E60000] font-orbitron text-xs tracking-[0.5em] mb-4 font-bold">THE GALLERY</span>
          <h2 className="font-orbitron text-5xl font-black italic uppercase tracking-tighter">Midnight <span className="text-white/20">Spec</span></h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden group aspect-[4/5] ${
                i === 0 || i === 3 ? 'md:row-span-2' : ''
              }`}
            >
              <img 
                src={img} 
                alt="Automotive styling project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/10 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent w-full">
                <p className="font-orbitron text-sm font-bold tracking-widest uppercase">Project_0{i + 1}</p>
                <p className="text-xs text-[#E60000] uppercase font-bold">Completed</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center gap-4 text-white hover:text-[#E60000] transition-colors font-orbitron font-bold tracking-[0.3em] uppercase group">
            Follow our journey
            <span className="h-[2px] w-12 bg-white/20 group-hover:bg-[#E60000] transition-all"></span>
          </button>
        </div>
      </div>
    </section>
  );
};
