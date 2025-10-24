
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export const InsightsIcon: React.FC<IconProps> = ({ isActive, ...props }) => (
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
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2Z" />
    <path d="m10 15.5 4-4" />
    <path d="m14 15.5-4-4" />
  </svg>
);
