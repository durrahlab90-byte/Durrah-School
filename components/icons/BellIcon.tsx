import React from 'react';

export const BellIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12 2.25c-2.828 0-5.38 1.99-6.082 4.718-.703 2.728-3.418 4.77-3.418 8.032v1.5a.75.75 0 00.75.75h17.5a.75.75 0 00.75-.75v-1.5c0-3.262-2.715-5.304-3.418-8.032C17.38 4.24 14.828 2.25 12 2.25zM10.5 18a1.5 1.5 0 103 0h-3z"
      clipRule="evenodd"
    />
  </svg>
);