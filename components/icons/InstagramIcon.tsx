import React from 'react';

export const InstagramIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="instaGrad" cx="0.3" cy="1" r="1">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="30%" stopColor="#D946EF" />
        <stop offset="100%" stopColor="#4F46E5" />
      </radialGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" ry="6" stroke="url(#instaGrad)" strokeWidth="2"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="url(#instaGrad)" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="url(#instaGrad)"/>
  </svg>
);