import React from 'react';
import { navConfig } from '../data/navigation';

interface BottomNavProps {
  activePage: string;
  setActivePage: (page: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ activePage, setActivePage }) => {
  return (
    <div className="absolute bottom-0 right-0 left-0 bg-surface dark:bg-darkSurface border-t border-gray-200 dark:border-gray-700 shadow-lg">
      <div className="flex justify-around max-w-lg mx-auto">
        {navConfig.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className="flex flex-col items-center justify-center w-full pt-3 pb-2 text-center transition-transform duration-200 ease-in-out transform hover:scale-105 focus:outline-none"
          >
            <item.icon isActive={activePage === item.id} />
            <span
              className={`text-xs mt-1 transition-colors ${
                activePage === item.id ? 'text-primary' : 'text-textSecondary dark:text-darkTextSecondary'
              }`}
            >
              {item.navLabel}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};