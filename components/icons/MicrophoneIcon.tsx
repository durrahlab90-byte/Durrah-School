import React from 'react';

export const MicrophoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    {...props}>
    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
    <path 
      fillRule="evenodd" 
      d="M12 21a8.25 8.25 0 008.25-8.25V12a.75.75 0 00-1.5 0v.75a6.75 6.75 0 01-13.5 0V12a.75.75 0 00-1.5 0v.75A8.25 8.25 0 0012 21z" 
      clipRule="evenodd" 
    />
  </svg>
);
