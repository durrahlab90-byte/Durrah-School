import React from 'react';

export const CalendarPlusIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" fill="#8B5CF6" fillOpacity="0.2"/>
    <path 
      d="M3 10h18m-14 6h8M12 12v8" 
      stroke="#8B5CF6" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path d="M8 2v4m8-4v4" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);