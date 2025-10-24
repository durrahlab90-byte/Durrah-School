import React from 'react';

export const PsychologyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="psychoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fbbd2d" />
        <stop offset="100%" stopColor="#f97316" />
      </linearGradient>
    </defs>
    <path d="M12 10.5V12.5" stroke="url(#psychoGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.5 12.5C15.5 10.84 14.16 9.5 12.5 9.5C11.56 9.5 10.74 10.01 10.27 10.77" stroke="url(#psychoGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="url(#psychoGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 12.5H14C14.83 12.5 15.5 13.17 15.5 14V14.5C15.5 15.33 14.83 16 14 16H13" stroke="url(#psychoGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 15.5C10.5 16.33 9.83 17 9 17H8.5C7.67 17 7 16.33 7 15.5V15C7 14.17 7.67 13.5 8.5 13.5H9" stroke="url(#psychoGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);