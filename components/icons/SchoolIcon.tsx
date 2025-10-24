import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export const SchoolIcon: React.FC<IconProps> = ({ isActive, ...props }) => (
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
    <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
    <path d="M18 10v6" />
    <path d="M6 10v6" />
    <path d="M2 22h20" />
    <path d="M10 2h4" />
    <path d="M3 10h18" />
    <path d="M18 18H6a3 3 0 0 0-3 3v0a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v0a3 3 0 0 0-3-3Z" />
    <path d="m11 6 1 4 1-4" />
    <path d="M10 2h.5" />
    <path d="M13.5 2H14" />
  </svg>
);