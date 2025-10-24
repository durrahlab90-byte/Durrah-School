import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export const DurraLogoIcon: React.FC<IconProps> = ({ isActive, ...props }) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="durraHijabGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0d9488" />
        <stop offset="100%" stopColor="#14b8a6" />
      </linearGradient>
      <linearGradient id="durraBookGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#be123c" />
        <stop offset="100%" stopColor="#e11d48" />
      </linearGradient>
       <radialGradient id="durraPearlGradient">
        <stop offset="0%" stopColor="#FFFFFF"/>
        <stop offset="70%" stopColor="#F0E6F7"/>
        <stop offset="100%" stopColor="#D8BFD8"/>
      </radialGradient>
    </defs>
    
    <g style={{ opacity: isActive ? 1 : 0.6, transition: 'opacity 0.2s ease-in-out' }}>
        {/* Book / Shoulders */}
        <path 
          d="M 10 95 C 10 60, 90 60, 90 95 L 80 98 C 70 90, 30 90, 20 98 Z" 
          fill="url(#durraBookGradient)" 
        />

        {/* Neck */}
        <rect x="45" y="55" width="10" height="15" fill="#f5f3ff" />

        {/* Head */}
        <circle cx="50" cy="40" r="25" fill="#f5f3ff" />
        
        {/* Hijab (Head Scarf) */}
        <path 
          d="M 50 15 A 25 25 0 0 0 25 40 L 28 45 A 22 22 0 0 1 50 18 A 22 22 0 0 1 72 45 L 75 40 A 25 25 0 0 0 50 15 Z" 
          fill="url(#durraHijabGradient)" 
        />
        <path 
          d="M 28 45 C 25 70, 45 70, 45 55 L 45 65 C 40 85, 20 85, 20 60 Z"
          fill="url(#durraHijabGradient)"
        />
         <path 
          d="M 72 45 C 75 70, 55 70, 55 55 L 55 65 C 60 85, 80 85, 80 60 Z"
          fill="url(#durraHijabGradient)"
        />

        {/* Features */}
        <circle cx="42" cy="42" r="2.5" fill="#4c0519" />
        <circle cx="58" cy="42" r="2.5" fill="#4c0519" />
        <path d="M 48 52 A 5 5 0 0 0 52 52" stroke="#4c0519" strokeWidth="2" fill="none" strokeLinecap="round" />

        {/* Pearl Earring */}
        <circle cx="23" cy="58" r="7" fill="url(#durraPearlGradient)" stroke="#0d9488" strokeWidth="0.5" />
         <path d="M 23 51 A 2 2 0 0 1 23 52" stroke="#14b8a6" strokeWidth="1" fill="none" />
    </g>
  </svg>
);