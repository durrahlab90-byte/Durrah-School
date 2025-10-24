import React from 'react';

export const BeakerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 3h12l-2 18H8L6 3z" fill="#34D399" fillOpacity="0.2"/>
    <path d="M6.5 3L8 21m9.5-18L16 21M5 9h14" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);