import React from 'react';

export const BuildingOfficeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8b5cf6" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
    <path d="M3 21H21" stroke="url(#buildingGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 21V6.5C4 5.21 4.84 4.5 6 4.5H18C19.16 4.5 20 5.21 20 6.5V21" stroke="url(#buildingGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
    <path d="M12 21V4.5" stroke="url(#buildingGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinejoin="round"/>
    <path d="M8 8.5H16" stroke="url(#buildingGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 12.5H16" stroke="url(#buildingGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 16.5H16" stroke="url(#buildingGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);