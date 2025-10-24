import React from 'react';

export const StethoscopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="19" r="3" fill="currentColor" fillOpacity="0.2"/>
    <path 
      d="M12 16V6a4 4 0 00-4-4H7a3 3 0 00-3 3v2" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 6a4 4 0 014-4h1a3 3 0 013 3v2" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle cx="12" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);