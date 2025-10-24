import React from 'react';

export const CameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
    <path
      fillRule="evenodd"
      d="M.667 5.5a2.5 2.5 0 012.5-2.5h13.666a2.5 2.5 0 012.5 2.5v9a2.5 2.5 0 01-2.5 2.5H3.167a2.5 2.5 0 01-2.5-2.5v-9zM3.167 5a1 1 0 00-1 1v9a1 1 0 001 1h13.666a1 1 0 001-1v-9a1 1 0 00-1-1H3.167z"
      clipRule="evenodd"
    />
  </svg>
);
