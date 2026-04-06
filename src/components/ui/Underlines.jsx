import React from 'react';

export const UnderlineOrange = ({ children, className="" }) => (
  <span className={`relative inline-block whitespace-nowrap ${className}`}>
    <span className="relative z-10">{children}</span>
    <svg className="absolute -bottom-1 left-0 w-full h-[18px]" preserveAspectRatio="none" viewBox="0 0 100 10">
      <path d="M0,4 Q45,2 100,2" fill="none" stroke="#fec87b" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10,8 Q50,6 90,8" fill="none" stroke="#fec87b" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </span>
);

export const UnderlineStraight = ({ children, className="" }) => (
  <span className={`relative inline-block whitespace-nowrap ${className}`}>
    <span className="relative z-10">{children}</span>
    <svg className="absolute -bottom-2 left-0 w-full h-[12px]" preserveAspectRatio="none" viewBox="0 0 100 8">
      <path d="M0,2 L100,2" fill="none" stroke="#fec87b" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20,6 L80,6" fill="none" stroke="#fec87b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </span>
);
