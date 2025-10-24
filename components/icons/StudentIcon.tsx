import React from 'react';

export const StudentIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="studentGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="capGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1f2937" />
                <stop offset="100%" stopColor="#4b5563" />
            </linearGradient>
        </defs>
        {/* Body */}
        <circle cx="32" cy="32" r="12" fill="url(#studentGradient)" />
        <path d="M20,60 C20,44 44,44 44,60 Z" fill="url(#studentGradient)" />
        
        {/* Graduation Cap */}
        <path d="M12,28 L32,20 L52,28 L32,36 Z" fill="url(#capGradient)" />
        <path d="M32,20 V28" stroke="#FBBF24" strokeWidth="2" />
        <rect x="30" y="27" width="4" height="6" fill="url(#capGradient)" />
  </svg>
);
