import React from 'react';

export const SocialCareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="socialGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
    <path d="M15.75 9.75C15.75 11.1213 14.6213 12.25 13.25 12.25C11.8787 12.25 10.75 11.1213 10.75 9.75C10.75 8.37868 11.8787 7.25 13.25 7.25C14.6213 7.25 15.75 8.37868 15.75 9.75Z" stroke="url(#socialGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M13.25 12.25C11.23 12.25 8.75 13.24 8.75 15.25V16.75" stroke="url(#socialGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 17.5C20 19.99 17.99 22 15.5 22C13.01 22 11 19.99 11 17.5C11 15.01 13.01 13 15.5 13C16.88 13 18.09 13.62 18.89 14.61" stroke="url(#socialGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.25 9.75C8.25 11.1213 7.12132 12.25 5.75 12.25C4.37868 12.25 3.25 11.1213 3.25 9.75C3.25 8.37868 4.37868 7.25 5.75 7.25C7.12132 7.25 8.25 8.37868 8.25 9.75Z" stroke="url(#socialGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M5.75 12.25C3.73 12.25 1.25 13.24 1.25 15.25V16.75" stroke="url(#socialGrad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);