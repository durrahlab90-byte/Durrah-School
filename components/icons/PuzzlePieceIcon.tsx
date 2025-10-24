import React from 'react';

export const PuzzlePieceIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.5 6.5A3.5 3.5 0 0014 10V4.5a2.5 2.5 0 10-5 0V10a3.5 3.5 0 003.5 3.5h-1a2.5 2.5 0 110-5H14" fill="#FBBF24" fillOpacity="0.2"/>
    <path d="M19.5 14a2.5 2.5 0 100-5H14m5.5 5a3.5 3.5 0 01-3.5 3.5V20a2.5 2.5 0 11-5 0v-.5a3.5 3.5 0 013.5-3.5h-1a2.5 2.5 0 100 5H16" stroke="#FBBF24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);