import React from 'react';
import { Notification } from '../types';
import { TipOfTheDay } from './TipOfTheDay';
import { XMarkIcon } from './icons/XMarkIcon';

interface NotificationPanelProps {
  notifications: Notification[];
  onClose: () => void;
  onNotificationClick: (notification: Notification) => void;
  onMarkAllAsRead: () => void;
}

const formatDistanceToNow = (date: Date): string => {
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    
    if (seconds < 60) return "الآن";
    
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `قبل ${minutes} د`;
    
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `قبل ${hours} س`;
    
    const days = Math.floor(hours / 24);
    if (days < 7) return `قبل ${days} ي`;
    
    return date.toLocaleDateString('ar-OM');
};

export const NotificationPanel: React.FC<NotificationPanelProps> = ({ notifications, onClose, onNotificationClick, onMarkAllAsRead }) => {
    const unreadCount = notifications.filter(n => !n.read).length;

    return (
        <div className="absolute inset-0 bg-black/30 z-30" onClick={onClose}>
            <div 
                className="absolute top-20 right-4 w-full max-w-sm bg-surface dark:bg-darkSurface rounded-lg shadow-2xl border dark:border-gray-700 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-textPrimary dark:text-darkTextPrimary">التنبيهات والنصائح</h3>
                     <div className="flex items-center gap-4">
                        {unreadCount > 0 && (
                             <button 
                                onClick={onMarkAllAsRead}
                                className="text-sm text-primary hover:underline whitespace-nowrap"
                            >
                                تحديد الكل كمقروء
                            </button>
                        )}
                        <button 
                            onClick={onClose} 
                            className="p-1 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            aria-label="إغلاق"
                        >
                            <XMarkIcon className="w-6 h-6" />
                        </button>
                    </div>
                </div>
                
                <div className="max-h-96 overflow-y-auto">
                    <div className="p-2 border-b dark:border-gray-700/50">
                        <TipOfTheDay />
                    </div>
                    <h4 className="p-3 text-sm font-semibold text-textSecondary dark:text-darkTextSecondary bg-gray-50 dark:bg-darkSurface/50">آخر التنبيهات</h4>
                    {notifications.length > 0 ? (
                        notifications.map(notification => (
                            <div
                                key={notification.id}
                                onClick={() => onNotificationClick(notification)}
                                className={`flex items-start gap-4 p-4 border-b dark:border-gray-700/50 cursor-pointer transition-colors ${notification.read ? 'opacity-70' : 'bg-primary/5 dark:bg-primary/10'}`}
                            >
                                {!notification.read && (
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-label="غير مقروء"></div>
                                )}
                                <div className={`flex-shrink-0 text-primary ${notification.read ? 'ml-4' : ''}`}>
                                    <notification.icon className="w-6 h-6" />
                                </div>
                                <div className="flex-grow">
                                    <p className="font-semibold text-textPrimary dark:text-darkTextPrimary">{notification.title}</p>
                                    <p className="text-sm text-textSecondary dark:text-darkTextSecondary">{notification.description}</p>
                                </div>
                                <p className="text-xs text-textSecondary dark:text-darkTextSecondary flex-shrink-0">{formatDistanceToNow(notification.timestamp)}</p>
                            </div>
                        ))
                    ) : (
                        <div className="text-center p-8 text-textSecondary dark:text-darkTextSecondary">
                            <p>لا توجد إشعارات أخرى لعرضها.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};