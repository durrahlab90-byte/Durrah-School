import React from 'react';

export const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M3.905 15.253C2.81 12.637 2.725 9.778 3.68 7.152L4.5 5.01a2 2 0 012.418-1.12l3.44.86a2 2 0 011.45 2.15l-.54 3.78a1 1 0 001.44 1.04l2.5-1.78c3.57-2.55 8.43.15 8.16 4.4l-.2 3.18c-.3 4.7-4.77 7.7-9.06 6.34l-2.65-.85a1 1 0 00-1.1.3l-2.07 2.07a1 1 0 01-1.42 0l-1.02-1.02a1 1 0 01-.1-1.52l1.9-2.28z" 
      fill="#8B5CF6" 
      fillOpacity="0.2"
    />
    <path 
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
      stroke="#8B5CF6" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);