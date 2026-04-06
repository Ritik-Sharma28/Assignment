import React from 'react';
import { Avatar } from '../ui/Avatar';

export const HeroAvatars = () => (
  <div className="relative mt-24 sm:mt-2 md:mt-20 h-48 md:h-80 w-full max-w-[1100px] mx-auto scale-[0.55] sm:scale-100 overflow-visible origin-top">
    {/* Left abstract shapes from Image 3 */}
    <svg className="absolute -top-16 -left-12 w-28 h-48 hidden lg:block" viewBox="0 0 100 200" fill="none">
       <path d="M 0,20 A 40,40 0 0,1 0,120" stroke="#f87171" strokeWidth="4" />
       <path d="M 20,0 C 40,30 90,40 60,100 C 30,160 20,160 50,190" stroke="#111" strokeWidth="4" strokeLinecap="round"/>
    </svg>

    {/* Group 1: Hat Guy and Glasses Guy */}
    <div className="absolute top-20 left-[2%] md:left-[10%]">
      <Avatar src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150" size="w-20 h-20 md:w-24 md:h-24" className="absolute z-10 bottom-[-40px] left-[-30px]" />
      <Avatar src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150" size="w-24 h-24 md:w-28 md:h-28" className="relative z-0 shadow-lg" />
    </div>

    {/* Group 2: Red Jacket Guy */}
    <div className="absolute -top-10 left-[25%] md:left-[30%]">
      <Avatar src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" size="w-28 h-28 md:w-[130px] md:h-[130px]" className="relative z-0" />
    </div>

    {/* Group 3: Hoodie Guy */}
    <div className="absolute bottom-0 left-[38%] md:left-[45%]">
      <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150" size="w-20 h-20 md:w-24 md:h-24" />
    </div>

    {/* Group 4: Glasses guy + Architect overlapping */}
    <div className="absolute top-10 right-[35%] md:right-[32%]">
      <Avatar src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&q=80&w=150" size="w-20 h-20 md:w-24 md:h-24" className="relative z-0" />
      <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" size="w-24 h-24 md:w-[110px] md:h-[110px]" className="absolute z-10 -bottom-12 -right-[60px]" />
    </div>

    {/* Group 5: Smiling Bearded guy */}
    <div className="absolute -top-12 right-[12%] md:right-[15%]">
      <Avatar src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?auto=format&fit=crop&q=80&w=150" size="w-[110px] h-[110px] md:w-[130px] md:h-[130px]" />
    </div>

    {/* Group 6: Blue hat striped shirt */}
    <div className="absolute bottom-6 right-[-2%] md:right-[5%]">
      <Avatar src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150" size="w-20 h-20 md:w-[100px] md:h-[100px]" />
    </div>
  </div>
);
