import React from 'react';
import { HighlightGreen } from '../ui/Highlights';
import { UnderlineOrange } from '../ui/Underlines';

export const SectionThree = () => (
  <section className="relative max-w-6xl mx-auto px-6 py-8 md:py-24 flex flex-col md:flex-row-reverse items-center gap-6 md:gap-16">
    <div className="flex-1 space-y-4 md:space-y-6 md:pl-20 z-10 text-center md:text-left flex flex-col items-center md:items-start mt-8 md:mt-0 w-full">
      <h2 className="text-3xl md:text-5xl font-semibold leading-tight font-gerbil tracking-tight flex flex-col items-center md:items-start gap-1">
        <span><HighlightGreen rotate="rotate-2">See</HighlightGreen> how we can</span>
        <span>help you <UnderlineOrange>progress</UnderlineOrange></span>
      </h2>
      <p className="text-gray-500 max-w-[340px] text-[14px] md:text-[16px] leading-relaxed">
        From vision workshops to execution partnerships, our work turns ambiguity into well-paced, measurable progress for ambitious teams.
      </p>
      <button className="text-[13px] md:text-sm font-semibold flex items-center gap-4 mt-6 hover:opacity-80 transition group">
        See details <span className="w-12 h-[2px] bg-black group-hover:w-16 transition-all"></span>
      </button>
    </div>
    <div className="flex-1 relative pt-10 flex justify-center md:justify-start w-full">
      <div className="relative w-64 h-64 md:w-[380px] md:h-[380px] rounded-full overflow-hidden shadow-xl z-10 border-[6px] border-white">
        <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800" alt="team" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-10 left-10 md:left-24 w-16 h-16 md:w-24 md:h-24 bg-coralTri clip-triangle z-20 -rotate-12"></div>
      <div className="absolute bottom-10 right-10 md:-right-8 w-16 h-16 md:w-24 md:h-24 bg-coralTri clip-triangle z-20"></div>
    </div>
  </section>
);
