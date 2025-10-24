import React from 'react';

export const MedicalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <defs>
      <linearGradient id="medicalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#f43f5e" />
      </linearGradient>
    </defs>
    <path d="M9.56006 20.44L11.5901 17.17C12.1101 16.3 13.2001 16.3 13.7201 17.17L15.6301 20.19" stroke="url(#medicalGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18.5 9.5V13.5C18.5 15.15 17.15 16.5 15.5 16.5H9.5C7.85 16.5 6.5 15.15 6.5 13.5V9.5C6.5 7.85 7.85 6.5 9.5 6.5H15.5C17.15 6.5 18.5 7.85 18.5 9.5Z" stroke="url(#medicalGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 4.5H15" stroke="url(#medicalGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.5 2V7" stroke="url(#medicalGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 12C22 16.42 18.42 20 14 20H11C6.58 20 3 16.42 3 12C3 7.58 6.58 4 11 4H14C18.42 4 22 7.58 22 12Z" stroke="url(#medicalGrad)" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);