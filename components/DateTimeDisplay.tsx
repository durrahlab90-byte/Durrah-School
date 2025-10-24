import React, { useState, useEffect } from 'react';

export const DateTimeDisplay: React.FC = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timerId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    
    const dateString = currentTime.toLocaleDateString('ar-OM', options);
    const timeString = currentTime.toLocaleTimeString('ar-OM', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    return (
        <div className="text-right">
            <p className="text-sm font-semibold text-primary dark:text-primary-light">{dateString}</p>
            <p className="text-xs text-textSecondary dark:text-darkTextSecondary font-mono tracking-wider">{timeString}</p>
        </div>
    );
};