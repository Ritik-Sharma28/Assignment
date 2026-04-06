import React from 'react';

export const HighlightGreen = ({ children, rotate = "-rotate-2", className="" }) => (
  <span className={`relative inline-block whitespace-nowrap z-0 px-2 ${className}`}>
    <span className={`absolute inset-0 bg-greenHighlight rounded-full ${rotate} -z-10 scale-y-100 lg:scale-y-110 scale-x-105`}></span>
    <span className="relative z-10">{children}</span>
  </span>
);

export const HighlightPink = ({ children, className="" }) => (
  <span className={`relative inline-block whitespace-nowrap z-0 px-2 ${className}`}>
    <span className={`absolute inset-0 bg-pinkHighlight rounded-full rotate-2 -z-10 scale-y-100 lg:scale-y-[1.12] scale-x-105`}></span>
    <span className="relative z-10">{children}</span>
  </span>
);
