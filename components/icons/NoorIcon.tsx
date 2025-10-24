import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  isActive?: boolean;
}

export const NoorIcon: React.FC<IconProps> = ({ isActive, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`}
    {...props}
  >
    {/* Sun/Head element */}
    <circle cx="12" cy="6" r="3" />
    
    {/* Body/Book shape, representing the two figures of the official logo */}
    <path 
      d="M12.5 21.5C14.5 21.5 17.5 19 19 15C20.5 11 18.5 8.5 16.5 8.5C14.5 8.5 13 10.5 12.5 13V21.5Z"
    />
    <path 
      d="M11.5 21.5C9.5 21.5 6.5 19 5 15C3.5 11 5.5 8.5 7.5 8.5C9.5 8.5 11 10.5 11.5 13V21.5Z"
    />
  </svg>
);
