import React from 'react';

export const BadgeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}>
    <path d="M12.83 15.17l-3.66-3.66 7.32-7.32 3.66 3.66-7.32 7.32z"/>
    <path d="M12 22a7 7 0 0 0 7-7"/>
    <path d="M2 12a7 7 0 0 0 7 7"/>
    <path d="M12 2L2 12"/>
  </svg>
);