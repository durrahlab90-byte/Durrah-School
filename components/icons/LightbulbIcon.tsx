import React from 'react';

export const LightbulbIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
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
        {...props}
    >
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 14v4" />
        <path d="M8.5 12.5a4.5 4.5 0 1 1 7 0l-3.5 5.5Z" />
    </svg>
);
