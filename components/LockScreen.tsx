import React from 'react';
import { LockClosedIcon } from './icons/LockClosedIcon';

interface LockScreenProps {
  onUnlock: () => void;
}

export const LockScreen: React.FC<LockScreenProps> = ({ onUnlock }) => {
  return (
    <div className="absolute inset-0 bg-background dark:bg-darkBackground z-50 flex flex-col justify-center items-center p-4">
      <div className="text-center">
        <div className="w-24 h-24 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-6 mx-auto">
          <LockClosedIcon className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-textPrimary dark:text-darkTextPrimary">التطبيق مقفل</h1>
        <p className="text-textSecondary dark:text-darkTextSecondary mt-2 mb-8">لقد قمت بتفعيل خاصية قفل التطبيق لمزيد من الأمان.</p>
        <button
          onClick={onUnlock}
          className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary-dark transition-colors"
        >
          فتح التطبيق
        </button>
      </div>
    </div>
  );
};