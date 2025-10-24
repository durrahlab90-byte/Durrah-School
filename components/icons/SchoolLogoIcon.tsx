import React from 'react';

export const SchoolLogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 100 80" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FBBF24', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    
    {/* Book Base */}
    <path 
      d="M 5,60 C 20,45 80,45 95,60 L 80,65 C 70,60 30,60 20,65 L 5,60 Z"
      fill="#0d9488" 
    />
    <path 
      d="M 5,60 C 20,75 80,75 95,60 L 80,65 C 70,70 30,70 20,65 L 5,60 Z"
      fill="#be123c"
    />

    {/* Sail */}
    <path 
      d="M 20,55 C 30,10 60,10 50,55 L 20,55 Z"
      fill="#0d9488"
    />

    {/* Pen and Calligraphy */}
    <path 
      d="M 65,15
          A 15 15 0 1 1 65, 45
          L 70, 50 L 75, 45 
          A 15 15 0 1 1 75,15 
          L 70, 20 L 65, 15 Z"
      fill="#be123c"
    />
    <path 
      d="M 70,50 L 65,60 L 75,60 L 70,50 Z"
      fill="#be123c"
    />
    
  </svg>
);