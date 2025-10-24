import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';
import { allTips } from '../data/tips';

export const TipOfTheDay: React.FC = () => {
    // Get a deterministic tip based on the day of the year
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now.getTime() - start.getTime()) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
    const tipIndex = dayOfYear % allTips.length;
    const tip = allTips[tipIndex];

    return (
        <div className="bg-gradient-to-br from-primary/5 via-background to-secondary/5 dark:from-gray-800 dark:via-slate-800 dark:to-gray-900 p-4 rounded-xl shadow-md border border-white/50 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-3">
              <SparklesIcon className="w-7 h-7 text-amber-500" />
              <h3 className="font-bold text-lg text-primary dark:text-primary-light">نصيحة اليوم الذهبية</h3>
            </div>
            <div>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full ${tip.categoryColor}`}>
                  {tip.category}
              </span>
              <h4 className="font-semibold text-base text-textPrimary dark:text-darkTextPrimary mt-3 mb-1">{tip.title}</h4>
              <p className="text-textSecondary dark:text-darkTextSecondary text-sm">{tip.description}</p>
          </div>
        </div>
    );
};