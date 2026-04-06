import React from 'react';
import { HighlightPink, HighlightGreen } from '../ui/Highlights';
import { HeroAvatars } from './HeroAvatars';

export const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Right purple semi circle */}
      <div className="absolute right-0 top-[20%] w-[60px] md:w-[80px] h-[120px] md:h-[160px] bg-purpleShape rounded-l-full translate-x-4 rotate-12 z-0"></div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 pt-6 md:pt-16 pb-8 md:pb-32 text-center z-10 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] leading-tight md:leading-tight font-bold max-w-6xl mx-auto text-textDark tracking-tight font-gerbil relative z-10">
          <span className="block mb-1 md:mb-3">The thinkers and</span>
          <span className="block mb-1 md:mb-3">doers were <HighlightPink>changing</HighlightPink></span>
          <span className="block">the <HighlightGreen className="-rotate-1">status</HighlightGreen> Quo with</span>
        </h1>
        <p className="mt-6 md:mt-10 text-gray-600 text-[14px] md:text-[17px] max-w-[620px] mx-auto font-medium leading-relaxed px-4 relative z-20">
          We shape modern brands with strategic thinking, collaborative delivery, and a human-centered approach that feels as refined as it performs.
        </p>

        <HeroAvatars />
      </div>
    </section>
  );
};
