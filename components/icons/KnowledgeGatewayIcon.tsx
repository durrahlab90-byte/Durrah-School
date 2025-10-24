import React from 'react';

// A modern icon representing a gateway to knowledge, like a library or learning center.
export const KnowledgeGatewayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Book shape */}
    <path 
      d="M4 19.5C4 17.567 5.567 16 7.5 16H16.5C18.433 16 20 17.567 20 19.5V20.5C20 21.3284 19.3284 22 18.5 22H5.5C4.67157 22 4 21.3284 4 20.5V19.5Z"
      fill="currentColor"
      fillOpacity="0.2"
    />
    <path
      d="M4 19.5C4 17.567 5.567 16 7.5 16H16.5C18.433 16 20 17.567 20 19.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Radiating lines / gateway */}
    <path 
      d="M12 16V4" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M9 7L12 4L15 7" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M6.5 10L12 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 2"
    />
     <path 
      d="M17.5 10L12 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="2 2"
    />
  </svg>
);