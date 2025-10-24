import React from 'react';

export const ComputerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="4" width="18" height="12" rx="2" fill="#22D3EE" fillOpacity="0.2"/>
    <path d="M8 20H16M12 16V20" stroke="#22D3EE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="3" y="4" width="18" height="12" rx="2" stroke="#22D3EE" strokeWidth="1.5"/>
  </svg>
);