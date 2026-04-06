import React from 'react';

export const Navbar = () => (
  <nav className="flex justify-between items-center py-6 px-4 md:px-10 max-w-7xl mx-auto w-full z-50">
    <div className="font-gerbil font-semibold text-2xl tracking-tighter">Elementium</div>
    <div className="hidden md:flex gap-8 text-sm font-medium">
      <a href="#" className="hover:text-gray-500 transition">Home</a>
      <a href="#" className="hover:text-gray-500 transition">Studio</a>
      <a href="#" className="hover:text-gray-500 transition">Services</a>
      <a href="#" className="hover:text-gray-500 transition">Work</a>
      <a href="#" className="hover:text-gray-500 transition">FAQ</a>
    </div>
    <div className="w-8 h-8 flex flex-col justify-center items-end gap-[5px] cursor-pointer">
      <div className="w-6 h-[2px] bg-black"></div>
      <div className="w-4 h-[2px] bg-black"></div>
    </div>
  </nav>
);
