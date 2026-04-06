import React from 'react';

export const LineBackground = () => (
  <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none opacity-80">
    {/* Large ambient red/pink center glow blur */}
    <div className="absolute top-[400px] md:top-[580px] left-[20%] md:left-[35%] w-[400px] h-[400px] md:w-[700px] md:h-[600px] bg-[#ffc3cf]/40 rounded-full blur-[100px] md:blur-[140px]"></div>

    {/* Background squiggle line that spans page */}
    <svg viewBox="0 0 1440 3000" className="w-full absolute top-0 left-0 hidden lg:block" preserveAspectRatio="xMidYMin slice">
     <path d="M1400,200 C300,300 200,600 -50,650 S-150,850 100,900 S350,1100 200,1200 C50,1300 850,1150 1100,1500 S1600,1900 800,2300 S1500,2700 300,2900" 
           fill="none" stroke="#fcdce8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </div>
);
