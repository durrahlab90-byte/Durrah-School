import React from 'react';

export const ParentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="parentGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
      <linearGradient id="childGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#f9a8d4" />
      </linearGradient>
    </defs>
    {/* Parent Figure */}
    <circle cx="28" cy="20" r="10" fill="url(#parentGradient)" />
    <path d="M14,54 C14,40 42,40 42,54 Z" fill="url(#parentGradient)" />
    {/* Child Figure (in front) */}
    <circle cx="44" cy="28" r="8" fill="url(#childGradient)" />
    <path d="M34,56 C34,46 54,46 54,56 Z" fill="url(#childGradient)" />
  </svg>
);
