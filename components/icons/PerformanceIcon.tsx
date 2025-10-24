
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export const PerformanceIcon: React.FC<IconProps> = ({ isActive, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`}
    {...props}
  >
    <path d="M3 3v18h18" />
    <path d="M18.7 8a6 6 0 0 0-8.3-5.7" />
    <path d="M11 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M13 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path d="M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
  </svg>
);
