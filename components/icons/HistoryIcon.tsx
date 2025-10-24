import React from 'react';

export const HistoryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M15 3H9C5.686 3 3 5.686 3 9v6c0 3.314 2.686 6 6 6h6c3.314 0 6-2.686 6-6V9c0-3.314-2.686-6-6-6z" fill="#F97316" fillOpacity="0.2"/>
    <path d="M15 8l-4 4 4 4" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.5 8H9" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);