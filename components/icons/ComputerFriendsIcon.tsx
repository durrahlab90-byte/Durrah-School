import React from 'react';

// A modern icon representing 'Friends of the Computer' / IT department
export const ComputerFriendsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Monitor shape */}
    <rect x="3" y="4" width="18" height="12" rx="2" fill="currentColor" fillOpacity="0.2"/>
    <path d="M8 20H16M12 16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    
    {/* Friendly heart inside monitor */}
    <path 
      d="M12 12.75C11.5833 12.3333 10.9167 12 10.25 12C9.00736 12 8 13.0074 8 14.25C8 16.25 10 17.5 12 18.5C14 17.5 16 16.25 16 14.25C16 13.0074 14.9926 12 13.75 12C13.0833 12 12.4167 12.3333 12 12.75Z"
      transform="translate(0 -4)"
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="currentColor" 
      fillOpacity="0.3"
    />
  </svg>
);