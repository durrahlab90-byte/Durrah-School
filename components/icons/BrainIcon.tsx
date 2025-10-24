import React from 'react';

export const BrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 20.5c-3.6 0-6.8-2-8.4-5.1-.3-.6-.3-1.2 0-1.8 1.6-3.1 4.8-5.1 8.4-5.1s6.8 2 8.4 5.1c.3.6.3 1.2 0 1.8-1.6 3.1-4.8 5.1-8.4 5.1z" 
      fill="currentColor" 
      fillOpacity="0.2"
    />
    <path 
      d="M12 8.5V4m0 16.5c-3.6 0-6.8-2-8.4-5.1-.3-.6-.3-1.2 0-1.8 1.6-3.1 4.8-5.1 8.4-5.1m0 12c3.6 0 6.8-2 8.4-5.1.3-.6.3 1.2 0-1.8-1.6-3.1-4.8-5.1-8.4-5.1m-3 5.5c-1.8 0-3.3-1-4-2.5m14 2.5c1.8 0 3.3-1 4-2.5" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);
