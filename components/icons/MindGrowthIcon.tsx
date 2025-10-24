import React from 'react';

// A modern icon representing mental growth and well-being.
export const MindGrowthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Head Silhouette Base */}
    <path 
      d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z" 
      fill="currentColor" 
      fillOpacity="0.2"
    />
    
    {/* Sprout/Leaf inside head */}
    <path 
      d="M12 17V11" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="M12 11C12 11 14 9.5 14 8C14 6.5 13 6 12 6C11 6 10 6.5 10 8C10 9.5 12 11 12 11Z" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </svg>
);