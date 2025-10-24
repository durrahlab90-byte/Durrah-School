import React from 'react';

export const BuildingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M3 21h18M5 21V7L12 3l7 4v14" fill="currentColor" fillOpacity="0.2"/>
    <path 
      d="M3 21h18M5 21V7L12 3l7 4v14H5zm4-8h6m-6 4h6" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);