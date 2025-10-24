import React from 'react';

export const VisionIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" fill="#8B5CF6" fillOpacity="0.2"/>
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" fill="#8B5CF6" fillOpacity="0.3"/>
    <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 12H9" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);