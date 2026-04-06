import React from 'react';
import { HighlightGreen } from '../ui/Highlights';
import { UnderlineStraight } from '../ui/Underlines';

export const SectionTwo = () => (
  <section className="relative max-w-6xl mx-auto px-6 py-8 md:py-24 flex flex-col md:flex-row items-center gap-6 md:gap-16">
    <div className="flex-1 space-y-4 md:space-y-6 z-10 text-center md:text-left flex flex-col items-center md:items-start w-full">
      <h2 className="text-3xl md:text-5xl font-semibold leading-tight font-gerbil tracking-tight flex flex-col items-center md:items-start gap-1 relative">
        <span><UnderlineStraight>Tomorrow should</UnderlineStraight></span>
        <span>be better than <HighlightGreen className="px-1">today</HighlightGreen></span>
      </h2>
      <p className="text-gray-800 font-medium max-w-[340px] text-[13px] md:text-[14px] leading-relaxed mt-4 relative md:text-left text-center">
        We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.
      </p>
      <div className="mt-4 md:mt-8 flex items-center gap-3 md:gap-4 cursor-pointer group">
        <span className="text-[12px] md:text-[13px] font-bold text-gray-800">Read more</span>
        <div className="opacity-60 group-hover:opacity-100 transition-opacity">
          <div className="h-[1px] w-16 md:w-20 bg-gray-500 relative">
            <div className="absolute -right-[1px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-r border-t border-gray-500 rotate-45 transform origin-center"></div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex-1 relative pb-10 flex justify-center md:justify-end w-full">
      <div className="relative w-64 h-64 md:w-[420px] md:h-[420px] rounded-full overflow-hidden shadow-xl z-10">
        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="meeting" className="w-full h-full object-cover" />
      </div>
      <div className="absolute right-10 md:right-32 top-10 w-48 h-48 bg-pinkHighlight rounded-full blur-[60px] -z-10 hidden md:block"></div>
      <div className="absolute -bottom-6 right-20 md:right-10 w-20 h-20 md:w-28 md:h-28 bg-coralTri clip-triangle z-20 rotate-12"></div>
    </div>
  </section>
);
