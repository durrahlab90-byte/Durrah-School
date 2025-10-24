import React, { useState } from 'react';
import { ChevronDownIcon } from './icons/ChevronDownIcon';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  startOpen?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children, startOpen = false }) => {
  const [isOpen, setIsOpen] = useState(startOpen);

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-right py-3 px-1 font-semibold text-textPrimary dark:text-darkTextPrimary"
        aria-expanded={isOpen}
      >
        <span className="text-base">{title}</span>
        <ChevronDownIcon className={`w-5 h-5 text-textSecondary dark:text-darkTextSecondary transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <div className="pb-4 px-1 text-textSecondary dark:text-darkTextSecondary">
          {children}
        </div>
      </div>
    </div>
  );
};
