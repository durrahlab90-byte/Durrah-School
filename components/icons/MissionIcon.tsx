import React from 'react';

export const MissionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 21h8c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2H8c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2z" fill="#14B8A6" fillOpacity="0.2"/>
    <path d="M14 7H9" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12.5 10.5L10.25 12.5l-1-1" stroke="#14B8A6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 21h8c1.105 0 2-.895 2-2V5c0-1.105-.895-2-2-2H8c-1.105 0-2 .895-2 2v14c0 1.105.895 2 2 2z" stroke="#14B8A6" strokeWidth="1.5"/>
  </svg>
);