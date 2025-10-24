import React from 'react';

export const UsersGroupIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 16v-1a3 3 0 00-3-3H5a3 3 0 00-3 3v1h8zm4-9a3 3 0 100-6 3 3 0 000 6z" fill="currentColor" fillOpacity="0.2"/>
    <path 
      d="M10 16v-1a3 3 0 00-3-3H5a3 3 0 00-3 3v1m10-9a3 3 0 100-6 3 3 0 000 6zm5 9v-1a3 3 0 00-3-3h-2m-3-3a3 3 0 100-6 3 3 0 000 6z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);