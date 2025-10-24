import React from 'react';

export const FollowUsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="followGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d946ef" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs>
    <path d="M18 8C20.2091 8 22 6.20914 22 4C22 1.79086 20.2091 0 18 0C15.7909 0 14 1.79086 14 4C14 6.20914 15.7909 8 18 8Z" transform="translate(0 2)" stroke="url(#followGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 14C8.20914 14 10 12.2091 10 10C10 7.79086 8.20914 6 6 6C3.79086 6 2 7.79086 2 10C2 12.2091 3.79086 14 6 14Z" stroke="url(#followGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 22C20.2091 22 22 20.2091 22 18C22 15.7909 20.2091 14 18 14C15.7909 14 14 15.7909 14 18C14 20.2091 15.7909 22 18 22Z" stroke="url(#followGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.59003 11.51L15.42 16.49" stroke="url(#followGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.41 7.51001L8.59003 12.49" stroke="url(#followGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);