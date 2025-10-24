import React from 'react';

export const BookOpenIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2 6.5C2 4.015 4.015 2 6.5 2H17.5C19.985 2 22 4.015 22 6.5V17.5C22 19.985 19.985 22 17.5 22H6.5C4.015 22 2 19.985 2 17.5V6.5z" fill="#BE185D" fillOpacity="0.2"/>
    <path d="M12 20V5.5C12 4.119 10.88 3 9.5 3S7 4.119 7 5.5V20" stroke="#BE185D" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 20V5.5C12 4.119 13.12 3 14.5 3S17 4.119 17 5.5V20" stroke="#BE185D" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);