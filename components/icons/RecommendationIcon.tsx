import React from 'react';

export const RecommendationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}>
    <path d="m9 12 2 2 4-4"/>
    <path d="M12 2v4"/>
    <path d="m16.2 3.8 2.8 2.8"/>
    <path d="M20 12h4"/>
    <path d="m16.2 20.2 2.8-2.8"/>
    <path d="M12 20v4"/>
    <path d="m4.9 20.2 2.8-2.8"/>
    <path d="M4 12h4"/>
    <path d="m4.9 3.8 2.8 2.8"/>
  </svg>
);
