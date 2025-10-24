import React from 'react';

// A modern icon for "Fun Science"
export const FunScienceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Beaker */}
    <path d="M6 3h12l-2 18H8L6 3z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M6.5 3L8 21m9.5-18L16 21M5 9h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>

    {/* Bubbles */}
    <circle cx="10" cy="14" r="1" fill="currentColor" />
    <circle cx="14" cy="16" r="0.8" fill="currentColor" />
    <circle cx="11.5" cy="18" r="0.6" fill="currentColor" />

    {/* Sparkles */}
    <path d="M16 4l.5-1.5L18 2l-1.5-.5L16 0l-.5 1.5L14 2l1.5.5L16 4z" fill="currentColor" />
    <path d="M9 5l.3-.9L10 3.8l-.9-.3L8.8 3l-.3.9L8 4.2l.9.3.3.9z" fill="currentColor" />
  </svg>
);