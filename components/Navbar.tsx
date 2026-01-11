
import React, { useState } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Process', href: '#why-us' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#080808]/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#E60000] p-1.5 rounded-sm transform -skew-x-12">
               <ShieldCheck className="text-white w-6 h-6 skew-x-12" />
            </div>
            <span className="font-orbitron text-xl font-bold tracking-tighter uppercase italic">
              Magic <span className="text-[#E60000]">Wrapz</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium tracking-widest uppercase hover:text-[#E60000] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#E60000] px-6 py-2 text-xs font-bold tracking-widest uppercase transform -skew-x-12 hover:bg-red-700 transition-all red-glow">
              <span className="block skew-x-12">Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#080808] border-b border-white/10 p-4 absolute w-full left-0 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium tracking-widest uppercase border-l-2 border-transparent hover:border-[#E60000] hover:pl-4 transition-all"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#E60000] w-full py-4 text-sm font-bold tracking-widest uppercase transform -skew-x-6">
              Get A Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
