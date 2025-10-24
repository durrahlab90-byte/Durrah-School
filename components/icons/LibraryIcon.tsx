import React from 'react';

export const LibraryIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    {...props} 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M4 3H12.5C13.8807 3 15 4.11929 15 5.5V18.5C15 19.8807 13.8807 21 12.5 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="#78716C" fillOpacity="0.2"/>
    <path d="M15 5.5H19.5C20.3284 5.5 21 6.17157 21 7V17C21 17.8284 20.3284 18.5 19.5 18.5H15" stroke="#78716C" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M4 3H12.5C13.8807 3 15 4.11929 15 5.5V18.5C15 19.8807 13.8807 21 12.5 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" stroke="#78716C" strokeWidth="1.5"/>
  </svg>
);