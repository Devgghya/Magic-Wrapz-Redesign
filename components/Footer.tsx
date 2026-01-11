
import React from 'react';
import { Instagram, Facebook, MapPin, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <span className="font-orbitron text-3xl font-bold tracking-tighter uppercase italic">
                Magic <span className="text-[#E60000]">Wrapz</span>
              </span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Experience the pinnacle of automotive aesthetics. From protective films to exotic color transformations, your dream build starts here.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-[#E60000] transition-colors"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-[#E60000] transition-colors"><Facebook /></a>
            </div>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-sm tracking-[0.2em] uppercase mb-8">Location</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#E60000] shrink-0" />
                <span>12345 Reseda Blvd,<br />Northridge, CA 91324</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-[#E60000] shrink-0" />
                <span>(818) 555-0123</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-[#E60000] shrink-0" />
                <span>magicwrapz.com@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-orbitron font-bold text-sm tracking-[0.2em] uppercase mb-8">Hours</h4>
            <ul className="space-y-2 text-gray-400 text-xs tracking-widest uppercase">
              <li className="flex justify-between"><span>Mon - Fri</span> <span className="text-white">9am - 6pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span className="text-white">10am - 4pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span className="text-red-600 font-bold">Closed</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-xs tracking-widest uppercase">
            &copy; 2026 Magic Wrapz Northridge. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
