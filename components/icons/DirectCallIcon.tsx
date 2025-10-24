import React from 'react';

export const DirectCallIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="callGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#84cc16" />
      </linearGradient>
    </defs>
    <path d="M14.53 2H9.47C4.84 2 2 4.84 2 9.47V14.53C2 19.16 4.84 22 9.47 22H14.53C19.16 22 22 19.16 22 14.53V9.47C22 4.84 19.16 2 14.53 2Z" stroke="url(#callGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17.8398 12.98C17.8398 12.98 16.2198 14.34 14.6798 12.8C13.1398 11.26 14.4998 9.64 14.4998 9.64L15.4298 8.71C15.9398 8.2 16.7698 8.21 17.2798 8.72L18.4398 9.88C18.9498 10.39 18.9498 11.22 18.4398 11.73L17.8398 12.98Z" stroke="url(#callGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9.63984 14.5C9.63984 14.5 8.27984 16.12 6.73984 14.58C5.19984 13.04 6.71984 11.4 6.71984 11.4L7.64984 10.47C8.15984 9.96 8.98984 9.97 9.49984 10.48L10.6598 11.64C11.1698 12.15 11.1698 12.98 10.6598 13.49L9.63984 14.5Z" stroke="url(#callGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.5 2V22" stroke="url(#callGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5"/>
  </svg>
);