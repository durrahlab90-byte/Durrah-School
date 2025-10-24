import React from 'react';

export const ShareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M8.59 13.51l6.83 3.98m0-10.98l-6.83 3.98" 
      stroke="#8B5CF6" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <circle cx="18" cy="5" r="3" stroke="#8B5CF6" strokeWidth="1.5" fill="#8B5CF6" fillOpacity="0.2"/>
    <circle cx="6" cy="12" r="3" stroke="#8B5CF6" strokeWidth="1.5" fill="#8B5CF6" fillOpacity="0.2"/>
    <circle cx="18" cy="19" r="3" stroke="#8B5CF6" strokeWidth="1.5" fill="#8B5CF6" fillOpacity="0.2"/>
  </svg>
);