import React from 'react';
import { DurraLogoIcon } from './icons/DurraLogoIcon';

export const SplashScreen: React.FC = () => {
  return (
    <div className="absolute inset-0 bg-background dark:bg-darkBackground flex flex-col justify-center items-center z-50 animate-fadeOut">
      <style>{`
        @keyframes sparkle {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.3); opacity: 1; }
        }
        @keyframes fadeOut {
          0% { opacity: 1; }
          80% { opacity: 1; }
          100% { opacity: 0; visibility: hidden; }
        }
        .sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }
        .animate-fadeOut {
          animation: fadeOut 2.5s forwards;
        }
      `}</style>
      <div className="relative">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-200 flex items-center justify-center p-2">
                 <DurraLogoIcon />
            </div>
        </div>
        <div className="sparkle absolute top-0 right-0 w-4 h-4 bg-white rounded-full opacity-75" style={{ animationDelay: '0s' }}></div>
        <div className="sparkle absolute top-1/4 left-0 w-3 h-3 bg-white rounded-full opacity-75" style={{ animationDelay: '0.5s' }}></div>
        <div className="sparkle absolute bottom-0 left-1/4 w-2 h-2 bg-white rounded-full opacity-75" style={{ animationDelay: '1s' }}></div>
      </div>
      <h1 className="text-3xl font-bold text-primary mt-6">اسأل دُرّة</h1>
      <p className="text-textSecondary dark:text-darkTextSecondary mt-2">رفيقك الذكي في التعليم</p>
    </div>
  );
};