import React, { useState } from 'react';
import { InstagramIcon } from '../components/icons/InstagramIcon';
import { TwitterIcon } from '../components/icons/TwitterIcon';
import { CopyrightFooter } from '../components/CopyrightFooter';
import { BookingIcon } from '../components/icons/BookingIcon';
import { BuildingOfficeIcon } from '../components/icons/BuildingOfficeIcon';
import { MedicalIcon } from '../components/icons/MedicalIcon';
import { SocialCareIcon } from '../components/icons/SocialCareIcon';
import { PsychologyIcon } from '../components/icons/PsychologyIcon';
import { DateIcon } from '../components/icons/DateIcon';
import { DirectCallIcon } from '../components/icons/DirectCallIcon';
import { FollowUsIcon } from '../components/icons/FollowUsIcon';
import { MapPinIcon } from '../components/icons/MapPinIcon';


const recipientOptions = [
    { value: 'school_administration', text: 'الإدارة المدرسية', icon: BuildingOfficeIcon },
    { value: 'health_practitioner', text: 'الممارسة الصحية', icon: MedicalIcon },
    { value: 'social_worker', text: 'الإخصائية الاجتماعية', icon: SocialCareIcon },
    { value: 'psychologist', text: 'الإخصائية النفسية', icon: PsychologyIcon },
];

const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00'
];

const InfoCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className }) => (
    <div className={`bg-surface dark:bg-darkSurface p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
        <div className="flex items-center mb-4">
            <div className="text-primary">{icon}</div>
            <h2 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary mr-3">{title}</h2>
        </div>
        {children}
    </div>
);


export const ContactPage: React.FC = () => {
    const [recipient, setRecipient] = useState(recipientOptions[0].value);
    const [bookingDate, setBookingDate] = useState('');
    const [bookingTime, setBookingTime] = useState(timeSlots[0]);
    const [error, setError] = useState('');


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (!bookingDate) {
            setError('يرجى اختيار تاريخ للموعد.');
            return;
        }
        
        const selectedDate = new Date(`${bookingDate}T00:00:00`);
        const day = selectedDate.getUTCDay(); // Sunday=0, ..., Thursday=4, Friday=5, Saturday=6
        
        if (day === 4 || day === 5 || day === 6) { // Block Thursday, Friday, Saturday
            setError('لا يمكن حجز موعد في عطلة نهاية الأسبوع (الخميس، الجمعة، السبت). يرجى اختيار يوم آخر.');
            return;
        }
        
        const recipientText = recipientOptions.find(opt => opt.value === recipient)?.text || 'جهة غير محددة';
        const formattedDate = new Date(bookingDate).toLocaleDateString('ar-OM', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
        });

        const fullMessage = `
طلب حجز موعد

*الجهة المطلوبة:* ${recipientText}
*التاريخ:* ${formattedDate}
*الوقت:* الساعة ${bookingTime} صباحًا

هل هذا الموعد متاح؟
        `.trim();

        const phoneNumber = "96899446676";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(fullMessage)}`;
        
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        
        setBookingDate('');
        setBookingTime(timeSlots[0]);
    };

    return (
        <div className="p-4 space-y-6">
            
            <InfoCard title="حجز موعد مباشر" icon={<BookingIcon className="w-7 h-7" />}>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-md font-semibold text-textSecondary dark:text-darkTextSecondary mb-3">الجهة المطلوبة</label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {recipientOptions.map(opt => {
                                const Icon = opt.icon;
                                return (
                                     <div
                                        key={opt.value}
                                        onClick={() => setRecipient(opt.value)}
                                        className={`flex flex-col items-center justify-start text-center p-2 cursor-pointer transition-all duration-300 transform h-24 ${
                                            recipient === opt.value
                                                ? 'text-primary scale-110'
                                                : 'text-textSecondary dark:text-darkTextSecondary hover:text-primary'
                                        }`}
                                    >
                                        <Icon className="w-10 h-10 mb-2" />
                                        <span className="text-sm font-semibold leading-tight">{opt.text}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="bookingDate" className="block text-sm font-medium text-textSecondary dark:text-darkTextSecondary mb-1">اختر اليوم (الأحد - الأربعاء)</label>
                            <div className="relative">
                                <input
                                    type="date"
                                    id="bookingDate"
                                    value={bookingDate}
                                    onChange={(e) => { setBookingDate(e.target.value); setError(''); }}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="w-full bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg p-3 pr-10 focus:ring-2 focus:ring-primary focus:border-primary appearance-none"
                                    required
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <DateIcon className="w-5 h-5 text-gray-400" />
                                </div>
                            </div>
                        </div>
                        <div>
                             <label htmlFor="bookingTime" className="block text-sm font-medium text-textSecondary dark:text-darkTextSecondary mb-1">اختر الوقت</label>
                             <select
                                id="bookingTime"
                                value={bookingTime}
                                onChange={(e) => setBookingTime(e.target.value)}
                                className="w-full bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-primary"
                                required
                             >
                                {timeSlots.map(time => (
                                    <option key={time} value={time}>الساعة {time}</option>
                                ))}
                             </select>
                        </div>
                    </div>

                    {error && <p className="text-red-500 text-sm font-semibold text-center py-2 bg-red-50 dark:bg-red-900/20 rounded-lg">{error}</p>}
                    
                    <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-3 px-4 rounded-lg hover:shadow-lg hover:from-green-600 transition-all duration-300 flex items-center justify-center gap-2 text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.3 4.7a12 12 0 1 0-14.6 14.6A12 12 0 0 0 19.3 4.7zM12 21.6c-5.3 0-9.6-4.3-9.6-9.6S6.7 2.4 12 2.4s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6z"/>
                          <path d="M16.6 14.3c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1s-.7.8-.8 1c-.1.2-.3.2-.5.1-1.8-.9-3.2-2.3-3.3-2.5-.1-.2 0-.4.1-.5l.5-.5c.1-.1.2-.3.3-.4.1-.1.1-.3 0-.4l-.8-2c-.2-.5-.4-.6-.5-.6s-.5 0-.6.1c-.2.1-.8.8-.8 1.9s.8 2.2.9 2.3c.1.2 1.5 2.3 3.7 3.2.5.2.9.4 1.2.5.5.1 1 .1 1.3.1.4 0 1.1-.5 1.3-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.4-.3z"/>
                        </svg>
                        إرسال طلب الحجز عبر واتساب
                    </button>
                </form>
            </InfoCard>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard title="اتصال مباشر" icon={<DirectCallIcon className="w-7 h-7" />}>
                     <a href="tel:+96899446676" className="flex flex-col items-center justify-center text-center -m-2">
                        <p className="text-textSecondary dark:text-darkTextSecondary text-2xl font-mono tracking-wider">99446676</p>
                        <p className="text-xs text-textSecondary dark:text-darkTextSecondary mt-2 bg-gray-100 dark:bg-gray-700/50 px-2 py-1 rounded-full">الأحد - الخميس | 8:00 صباحًا - 1:00 ظهرًا</p>
                    </a>
                </InfoCard>

                <InfoCard title="تابعنا على" icon={<FollowUsIcon className="w-7 h-7" />}>
                    <div className="flex justify-center items-center gap-12 -m-2">
                         <a href="https://www.instagram.com/dura_alhashmiya" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-pink-600 transition-colors">
                            <InstagramIcon className="w-10 h-10" />
                        </a>
                         <a href="https://x.com/Dura_alhashmiya" target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-black dark:hover:text-white transition-colors">
                            <TwitterIcon className="w-9 h-9" />
                        </a>
                    </div>
                </InfoCard>
            </div>
            
            <InfoCard title="موقع المدرسة" icon={<MapPinIcon className="w-7 h-7" />}>
                <div className="rounded-lg overflow-hidden border dark:border-gray-700 -mx-2 -mb-2">
                    <iframe
                        src="https://maps.google.com/maps?q=23.7095,57.8821&z=13&output=embed"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="موقع المدرسة"
                    ></iframe>
                </div>
            </InfoCard>
            <CopyrightFooter />
        </div>
    );
};