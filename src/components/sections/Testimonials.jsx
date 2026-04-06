import React from 'react';
import { HighlightGreen } from '../ui/Highlights';
import { UnderlineOrange } from '../ui/Underlines';
import { Avatar } from '../ui/Avatar';

export const Testimonials = () => (
  <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-24 relative mt-2 md:mt-10 w-full overflow-hidden">
    <div className="flex justify-center relative z-20 mb-6 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-semibold leading-tight font-gerbil tracking-tight flex flex-col items-center gap-1 md:gap-3">
        <span><HighlightGreen rotate="-rotate-3">What</HighlightGreen> our customer</span>
        <span>says <UnderlineOrange>About Us</UnderlineOrange></span>
      </h2>
    </div>

    <div className="relative flex flex-col lg:flex-row items-center justify-center w-full min-h-[auto] md:min-h-[400px]">
      
      {/* Left Avatars Group */}
      <div className="hidden lg:block absolute left-4 w-[280px] h-full z-10">
        <Avatar src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?auto=format&fit=crop&q=80&w=150" size="w-10 h-10" className="absolute top-[20%] left-[20%]" />
        <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" size="w-20 h-20" className="absolute top-[10%] right-[10%]" />
        <Avatar src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80&w=150" size="w-32 h-32" className="absolute top-[35%] right-0" />
        <Avatar src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150" size="w-16 h-16" className="absolute bottom-[20%] left-[30%]" />
      </div>

      <div className="relative bg-[#f5fbf7] rounded-[2rem] p-6 pt-10 md:p-14 max-w-[640px] w-full mx-auto shadow-sm z-20">
        <div className="absolute top-2 md:top-10 left-4 md:left-10 text-gray-300 font-serif text-5xl md:text-8xl leading-none h-10 w-10">“</div>
        <p className="text-[13px] md:text-[17px] text-textDark relative z-10 font-medium leading-[1.8] px-2 md:px-12 pt-0 md:pt-4">
          Elementium delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
        </p>
        <div className="absolute bottom-6 md:bottom-10 right-10 text-gray-300 font-serif text-6xl md:text-8xl leading-none h-10 w-10 rotate-180">“</div>
      </div>
      
      {/* Right Avatars Group */}
      <div className="hidden lg:block absolute right-4 w-[280px] h-full z-10">
        <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150" size="w-12 h-12" className="absolute top-[30%] left-[10%]" />
        <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" size="w-24 h-24" className="absolute top-[15%] right-[15%]" />
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" size="w-[70px] h-[70px]" className="absolute top-[45%] left-0" />
        <Avatar src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&q=80&w=150" size="w-[140px] h-[140px]" className="absolute bottom-[5%] right-[20%]" />
      </div>

    </div>
  </section>
);
