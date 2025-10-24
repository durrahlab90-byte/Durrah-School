import React from 'react';

export const LocationPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 0 1 16 0Z" 
      fill="#8B5CF6" 
      fillOpacity="0.2"
    />
    <circle cx="12" cy="10" r="3" stroke="#8B5CF6" strokeWidth="1.5"/>
    <path d="M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 0 1 16 0Z" stroke="#8B5CF6" strokeWidth="1.5"/>
  </svg>
);