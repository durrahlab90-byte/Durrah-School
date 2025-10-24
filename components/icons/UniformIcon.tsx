import React from 'react';

export const UniformIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9 3L7 9V19H17V9L15 3H9Z" fill="currentColor" fillOpacity="0.2"/>
    <path d="M9 3H15L17 9V19H7V9L9 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 9H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
