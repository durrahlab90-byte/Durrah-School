import React, { useState } from 'react';
import { ParentIcon } from './icons/ParentIcon';
import { StudentIcon } from './icons/StudentIcon';

interface OnboardingScreenProps {
  onOnboardingComplete: (name: string, userType: 'parent' | 'student') => void;
}

export const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ onOnboardingComplete }) => {
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState<'parent' | 'student'>('parent');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userName.trim()) {
      onOnboardingComplete(userName.trim(), userType);
    }
  };

  const nameLabel = userType === 'parent' ? 'الرجاء إدخال اسم الطالبة' : 'الرجاء إدخال اسمك';
  const namePlaceholder = userType === 'parent' ? 'اكتبي اسم الطالبة هنا...' : 'اكتبي اسمك هنا...';

  const UserTypeButton: React.FC<{ type: 'parent' | 'student'; label: string; icon: React.ReactNode }> = ({ type, label, icon }) => (
    <button
      type="button"
      onClick={() => setUserType(type)}
      className={`w-full p-4 rounded-lg flex flex-col items-center gap-2 transition-all duration-300 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-primary/50 ${
        userType === type
          ? 'scale-110'
          : 'scale-90 opacity-70 hover:opacity-100 hover:scale-100'
      }`}
    >
      <div className="w-24 h-24 flex items-center justify-center">
        {icon}
      </div>
      <span className={`font-semibold text-xl ${userType === type ? 'text-primary dark:text-primary-light' : 'text-textPrimary dark:text-darkTextPrimary'}`}>{label}</span>
    </button>
  );

  return (
    <div className="h-screen bg-background dark:bg-darkBackground flex flex-col justify-center items-center p-4 text-center">
      <div className="w-full max-w-sm">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-200 to-amber-100 shadow-lg flex items-center justify-center mb-6 mx-auto">
          <div className="w-20 h-20 rounded-full bg-white dark:bg-gray-200 flex items-center justify-center">
            <span className="text-4xl">👋</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-textPrimary dark:text-darkTextPrimary">أهلاً بك في تطبيق دُرّة</h1>
        <p className="text-textSecondary dark:text-darkTextSecondary mt-2 mb-8">
            لتجربة مخصصة، يرجى تحديد هويتك أولاً.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="w-full max-w-sm mt-4">
        <div className="grid grid-cols-2 gap-4 mb-8">
            <UserTypeButton type="parent" label="ولي الأمر" icon={<ParentIcon />} />
            <UserTypeButton type="student" label="طالبة" icon={<StudentIcon />} />
        </div>
        
        <label className="text-textPrimary dark:text-darkTextPrimary font-semibold mb-2 block">{nameLabel}</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder={namePlaceholder}
          className="w-full text-center bg-surface dark:bg-darkSurface border border-gray-300 dark:border-gray-600 rounded-full p-3 focus:ring-2 focus:ring-primary focus:border-primary text-textPrimary dark:text-darkTextPrimary"
          aria-label={nameLabel}
          required
        />
        
        <button
          type="submit"
          className="w-full mt-6 bg-primary text-white font-bold py-3 px-4 rounded-full hover:bg-primary-dark transition-colors disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
          disabled={!userName.trim()}
        >
          متابعة
        </button>
      </form>
    </div>
  );
};