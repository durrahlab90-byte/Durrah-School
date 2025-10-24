import React from 'react';

// A modern icon representing the school team.
export const TeamIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background shape */}
    <path 
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" 
      fill="currentColor" 
      fillOpacity="0.2"
    />
    
    {/* Team Figures */}
    <path 
      d="M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15Z" 
      stroke="currentColor" 
      strokeWidth="1.5"
    />
    <path 
      d="M17.5 18C17.5 16.3431 15.1866 15 12 15C8.8134 15 6.5 16.3431 6.5 18" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
     <path 
      d="M5 11C5 8.79086 6.79086 7 9 7" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M3.5 16C3.5 14.3431 4.5634 13 6 13" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
    <path 
      d="M19 11C19 8.79086 17.2091 7 15 7" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
     <path 
      d="M20.5 16C20.5 14.3431 19.4366 13 18 13" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      strokeLinecap="round"
    />
  </svg>
);