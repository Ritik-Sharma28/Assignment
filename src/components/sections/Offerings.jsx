import React from 'react';
import { HighlightGreen } from '../ui/Highlights';
import { UnderlineOrange } from '../ui/Underlines';

export const Offerings = () => {
  const items = [
    { cat: "Office of multiple \n human numbers", title: "Colaborative & partnership" },
    { cat: "The longest US Air force \n digital experimental", title: "We talk about our weight" },
    { cat: "Delta is a mid concept \n studio digital", title: "Piloting digital confidence" }
  ];
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-24 overflow-hidden">
      <h2 className="text-3xl md:text-[3.5rem] font-semibold mb-6 md:mb-20 leading-tight font-gerbil tracking-tight flex flex-col items-center md:items-start gap-1 md:gap-2">
        <span>What we <HighlightGreen className="-translate-y-0.5 md:-translate-y-1 px-2">can</HighlightGreen></span>
        <span><UnderlineOrange>offer you!</UnderlineOrange></span>
      </h2>
      <div className="flex flex-col border-t border-gray-300">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-gray-300 group hover:bg-gray-50/50 transition cursor-pointer md:px-4">
            <p className="text-[10px] md:text-[11px] text-gray-400 w-full md:w-48 mb-2 md:mb-0 uppercase tracking-widest font-semibold whitespace-pre-line leading-relaxed text-center md:text-left">{item.cat}</p>
            <p className="text-2xl md:text-[32px] flex-1 font-medium font-gerbil text-center md:text-left">{item.title}</p>
            <div className="hidden md:block mt-4 md:mt-0 text-gray-300 group-hover:text-black transition transform group-hover:translate-x-2 shrink-0 ml-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
