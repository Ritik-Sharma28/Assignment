import React from 'react';

export const Footer = () => (
  <footer className="bg-footerBg mt-12 md:mt-32 pt-16 md:pt-24 px-6 relative overflow-hidden flex flex-col">
    {/* Squiggles in header */}
    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-16 opacity-70 z-0">
      <svg viewBox="0 0 100 40" fill="none" stroke="#fec87b" strokeWidth="2" strokeLinecap="round">
        <path d="M0,20 Q25,5 50,20 T100,20" />
        <path d="M10,30 Q35,15 60,30 T110,30" stroke="#fcdce8" />
      </svg>
    </div>

    <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10 w-full text-center">
      <h2 className="text-4xl md:text-6xl font-semibold mb-4 md:mb-6 tracking-tight leading-tight font-gerbil flex flex-col items-center gap-1">
        <span>Subscribe to</span>
        <span>our newsletter</span>
      </h2>
      <p className="text-[13px] md:text-sm text-gray-700 mb-8 md:mb-10 font-medium tracking-wide">
        in case your story is small and more super appreciation
      </p>
      <div className="max-w-max mx-auto relative flex justify-center mb-8 md:mb-10 w-full">
        <button className="bg-black text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base font-semibold border-2 border-transparent hover:bg-white hover:text-black hover:border-black transition-colors duration-300">
          Subscribe Now
        </button>
      </div>
    </div>
    
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-20 md:w-24 h-[120px] md:h-[180px] bg-purpleIcon rounded-l-full z-0 translate-x-4"></div>
    
    <div className="max-w-7xl mx-auto mt-12 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 text-sm md:text-[15px] relative z-10 pb-16 w-full md:px-10">
      <div>
        <h4 className="font-semibold mb-4 md:mb-6 text-black">Company</h4>
        <ul className="space-y-3 md:space-y-4 text-gray-800 font-medium">
          <li><a href="#" className="hover:text-black transition">Home</a></li>
          <li><a href="#" className="hover:text-black transition">Studio</a></li>
          <li><a href="#" className="hover:text-black transition">Services</a></li>
          <li><a href="#" className="hover:text-black transition">Work</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 md:mb-6 text-black">Terms & Policies</h4>
        <ul className="space-y-3 md:space-y-4 text-gray-800 font-medium">
          <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-black transition">Terms & Conditions</a></li>
          <li><a href="#" className="hover:text-black transition">Return</a></li>
          <li><a href="#" className="hover:text-black transition">Guideline</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 md:mb-6 text-black">Follow Us</h4>
        <ul className="space-y-3 md:space-y-4 text-gray-800 font-medium">
          <li><a href="#" className="hover:text-black transition">Instagram</a></li>
          <li><a href="#" className="hover:text-black transition">LinkedIn</a></li>
          <li><a href="#" className="hover:text-black transition">Youtube</a></li>
          <li><a href="#" className="hover:text-black transition">Twitter</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-4 md:mb-6 text-black">Terms & Policies</h4>
        <ul className="space-y-3 md:space-y-4 text-gray-800 font-medium">
          <li>1498w Fluton ste, STE</li>
          <li>2D Chicgo, IL 63867.</li>
          <li>(123) 456789000</li>
          <li>info@elementium.com</li>
        </ul>
      </div>
    </div>
    <div className="text-center text-[11px] md:text-[13px] text-gray-800 pb-6 w-full font-medium opacity-90">
      ©2023 Elementum. All rights reserved
    </div>
  </footer>
);
