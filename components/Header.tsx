import React from 'react';
import { BellIcon } from './icons/BellIcon';
import { Notification } from '../types';
import { DateTimeDisplay } from './DateTimeDisplay';

interface HeaderProps {
    userName: string;
    userType: 'parent' | 'student';
    pageTitle: string;
    profilePic: string | null;
    notifications: Notification[];
    onToggleNotifications: () => void;
    activePage: string;
}

export const Header: React.FC<HeaderProps> = ({ userName, userType, pageTitle, profilePic, notifications, onToggleNotifications, activePage }) => {
    const subHeaderText = userType === 'parent' ? `الطالبة: ${userName}` : `أهلاً بكِ، ${userName}`;
    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <header className="bg-surface dark:bg-darkSurface sticky top-0 z-20 p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
            <style>{`
                @keyframes ring {
                    0% { transform: rotate(0deg); }
                    10% { transform: rotate(25deg); }
                    20% { transform: rotate(-25deg); }
                    30% { transform: rotate(25deg); }
                    40% { transform: rotate(-25deg); }
                    50% { transform: rotate(0deg); }
                    100% { transform: rotate(0deg); }
                }
                .animate-ring {
                    animation: ring 1.5s ease-in-out infinite;
                    transform-origin: 50% 4px; /* Adjust origin for better ringing effect */
                }
            `}</style>
            <div className="flex-1">
                <h1 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary">{pageTitle}</h1>
                <p className="text-sm text-textSecondary dark:text-darkTextSecondary">{subHeaderText}</p>
                 {activePage !== 'settings' && (
                    <div className="mt-2">
                        <DateTimeDisplay />
                    </div>
                )}
            </div>
            <div className="flex items-center gap-4">
                <button 
                    onClick={onToggleNotifications}
                    className="relative text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors" 
                    aria-label={`الإشعارات (${unreadCount} غير مقروء)`}
                >
                    <BellIcon className={`w-7 h-7 transition-colors ${unreadCount > 0 ? 'animate-ring text-primary' : ''}`} />
                    {unreadCount > 0 && (
                        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold ring-2 ring-surface dark:ring-darkSurface">
                            {unreadCount}
                        </span>
                    )}
                </button>
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20 overflow-hidden">
                     {profilePic ? (
                        <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <span className="text-2xl font-bold text-primary dark:text-primary-light">
                            {userName.charAt(0)}
                        </span>
                    )}
                </div>
            </div>
        </header>
    );
};