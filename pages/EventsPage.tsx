import React, { useState } from 'react';
import { SchoolEvent } from '../types';
import { CopyrightFooter } from '../components/CopyrightFooter';

// Data for the exam schedule
interface Exam {
  date: string;
  day: string;
  subject: string;
}

const scheduleData: Record<string, Exam[]> = {
  "تاسع": [
    { date: '6-10', day: 'الاثنين', subject: 'دراسات' }, { date: '8-10', day: 'الأربعاء', subject: 'لغة عربية' }, { date: '9-10', day: 'الخميس', subject: 'احياء' }, { date: '13-10', day: 'الاثنين', subject: 'تربية اسلاميه' }, { date: '15-10', day: 'الأربعاء', subject: 'رياضيات' }, { date: '16-10', day: 'الخميس', subject: 'انجليزي' }, { date: '20-10', day: 'الاثنين', subject: 'فيزياء' }, { date: '22-10', day: 'الأربعاء', subject: 'كيمياء' },
  ],
  "ثامن": [
    { date: '6-10', day: 'الاثنين', subject: 'دراسات' }, { date: '8-10', day: 'الأربعاء', subject: 'لغة عربية' }, { date: '13-10', day: 'الاثنين', subject: 'رياضيات' }, { date: '15-10', day: 'الأربعاء', subject: 'تربية اسلاميه' }, { date: '16-10', day: 'الخميس', subject: 'انجليزي' }, { date: '20-10', day: 'الاثنين', subject: 'علوم' },
  ],
  "سابع": [
    { date: '6-10', day: 'الاثنين', subject: 'تربية اسلاميه' }, { date: '8-10', day: 'الأربعاء', subject: 'لغة عربية' }, { date: '13-10', day: 'الاثنين', subject: 'رياضيات' }, { date: '16-10', day: 'الخميس', subject: 'انجليزي' }, { date: '20-10', day: 'الاثنين', subject: 'علوم' }, { date: '23-10', day: 'الخميس', subject: 'دراسات' },
  ],
  "سادس": [
    { date: '6-10', day: 'الاثنين', subject: 'تربية اسلاميه' }, { date: '8-10', day: 'الأربعاء', subject: 'لغة عربية' }, { date: '9-10', day: 'الخميس', subject: 'دراسات' }, { date: '15-10', day: 'الأربعاء', subject: 'رياضيات' }, { date: '16-10', day: 'الخميس', subject: 'انجليزي' }, { date: '22-10', day: 'الأربعاء', subject: 'علوم' },
  ],
  "خامس": [
    { date: '8-10', day: 'الأربعاء', subject: 'لغة عربية' }, { date: '9-10', day: 'الخميس', subject: 'دراسات' }, { date: '13-10', day: 'الاثنين', subject: 'رياضيات' }, { date: '15-10', day: 'الأربعاء', subject: 'تربية اسلاميه' }, { date: '16-10', day: 'الخميس', subject: 'انجليزي' }, { date: '20-10', day: 'الاثنين', subject: 'علوم' },
  ]
};

const academicYearEvents: Record<string, SchoolEvent[]> = {
    // September 2025
    "2025-9": [
        { id: 901, day: 5, title: 'المولد النبوي الشريف', type: 'event' },
        { id: 902, day: 8, title: 'اليوم العالمي لمحو الأمية', type: 'event' },
        { id: 903, day: 16, title: 'اليوم العالمي لحماية طبقة الأوزون', type: 'event' },
        { id: 904, day: 21, title: 'اليوم العالمي للسلام', type: 'event' },
        { id: 905, day: 25, title: 'يوم منظمة المؤتمر الاسلامي', type: 'event' },
        { id: 906, day: 25, title: 'اليوم العالمي للملاحة البحرية', type: 'event' },
        { id: 907, day: 27, title: 'يوم الزراعة العربية', type: 'event' },
    ],
    // October 2025
    "2025-10": [
        { id: 1001, day: 1, title: 'اليوم العالمي لموسيقى الشباب', type: 'event' },
        { id: 1002, day: 5, title: 'اليوم العالمي للمعلم', type: 'event' },
        { id: 1003, day: 9, title: 'اليوم العالمي للبريد', type: 'event' },
        { id: 1004, day: 10, title: 'يوم الطفل العربي', type: 'event' },
        { id: 1005, day: 10, title: 'اليوم العالمي للصحة النفسية', type: 'event' },
        { id: 1006, day: 13, title: 'يوم المكتبة المدرسية', type: 'event' },
        { id: 1007, day: 14, title: 'يوم البيئة العربي', type: 'event' },
        { id: 1008, day: 14, title: 'يوم التقييس العالمي', type: 'event' },
        { id: 1009, day: 15, title: 'اليوم العالمي للعصا البيضاء', type: 'event' },
        { id: 1010, day: 16, title: 'يوم الغذاء العالمي', type: 'event' },
        { id: 1011, day: 17, title: 'يوم المرأة العمانية', type: 'event' },
        { id: 1012, day: 17, title: 'يوم الوثيقة العربية', type: 'event' },
        { id: 1013, day: 24, title: 'يوم هيئة الأمم المتحدة', type: 'event' },
        { id: 1014, day: 31, title: 'يوم عيد الشجرة', type: 'event' },
    ],
    // November 2025
    "2025-11": [
        { id: 1101, day: 2, title: 'يوم المرشدة العربية', type: 'event' },
        { id: 1102, day: 4, title: 'يوم اليونسكو', type: 'event' },
        { id: 1103, day: 11, title: 'اليوم العالمي للعلوم', type: 'event' },
        { id: 1104, day: 14, title: 'اليوم العالمي للسكري', type: 'event' },
        { id: 1105, day: 16, title: 'اليوم العالمي للتسامح', type: 'event' },
        { id: 1106, day: 18, title: 'العيد الوطني للسلطنة', type: 'event' },
        { id: 1107, day: 20, title: 'يوم تنصيب جلالة السلطان كشافاً', type: 'event' },
        { id: 1108, day: 21, title: 'اليوم العالمي للفلسفة', type: 'event' },
    ],
    // December 2025
    "2025-12": [
        { id: 1201, day: 1, title: 'اليوم العالمي للإيدز', type: 'event' },
        { id: 1202, day: 2, title: 'اليوم العالمي لإذاعة برامج الأطفال', type: 'event' },
        { id: 1203, day: 3, title: 'اليوم العالمي للمعوقين', type: 'event' },
        { id: 1204, day: 5, title: 'اليوم العالمي للتطوع', type: 'event' },
        { id: 1205, day: 7, title: 'يوم الأسرة العربية', type: 'event' },
        { id: 1206, day: 7, title: 'يوم الطيران المدني الدولي', type: 'event' },
        { id: 1207, day: 10, title: 'اليوم العالمي لحقوق الإنسان', type: 'event' },
        { id: 1208, day: 11, title: 'يوم القوات المسلحة العمانية', type: 'event' },
        { id: 1209, day: 12, title: 'يوم المعاق الخليجي', type: 'event' },
    ],
    // January 2026
    "2026-1": [
        { id: 101, day: 5, title: 'يوم شرطة عمان السلطانية', type: 'event' },
        { id: 102, day: 8, title: 'اليوم العربي لمحو الأمية', type: 'event' },
        { id: 103, day: 8, title: 'يوم البيئة العماني', type: 'event' },
        { id: 104, day: 15, title: 'يوم الطفل الخليجي', type: 'event' },
        { id: 105, day: 24, title: 'اليوم الخليجي للتعاون البلدي', type: 'event' },
        { id: 106, day: 25, title: 'ليلة الإسراء والمعراج (تقريبي)', type: 'event' },
    ],
    // February 2026
    "2026-2": [
        { id: 201, day: 9, title: 'يوم الصناعة العمانية', type: 'event' },
        { id: 202, day: 22, title: 'يوم المرشدة العالمي', type: 'event' },
        { id: 203, day: 24, title: 'يوم المعلم', type: 'event' },
    ],
    // March 2026
    "2026-3": [
        { id: 301, day: 1, title: 'اليوم العالمي للدفاع المدني', type: 'event' },
        { id: 302, day: 1, title: 'يوم الأشبال والزهرات', type: 'event' },
        { id: 303, day: 8, title: 'اليوم العالمي للمرأة', type: 'event' },
        { id: 304, day: 10, title: 'اليوم العربي للمكتبة', type: 'event' },
        { id: 305, day: 15, title: 'يوم المدينة العربية', type: 'event' },
        { id: 306, day: 15, title: 'غزوة بدر الكبرى (تقريبي)', type: 'event' },
        { id: 307, day: 21, title: 'عيد الأم', type: 'event' },
        { id: 308, day: 22, title: 'اليوم العالمي للمياه', type: 'event' },
        { id: 309, day: 22, title: 'توقيع ميثاق جامعة الدول العربية', type: 'event' },
        { id: 310, day: 22, title: 'يوم الأخوة الكشفية العربية', type: 'event' },
        { id: 311, day: 23, title: 'اليوم العالمي للأرصاد الجوية', type: 'event' },
        { id: 312, day: 24, title: 'اليوم العالمي للسل', type: 'event' },
        { id: 313, day: 29, title: 'عيد الفطر المبارك (تقريبي)', type: 'event' },
    ],
    // April 2026
    "2026-4": [
        { id: 401, day: 5, title: 'بداية أسبوع المرور الخليجي', type: 'activity' },
        { id: 402, day: 7, title: 'يوم الصحة العالمي', type: 'event' },
        { id: 403, day: 20, title: 'بداية أسبوع الأصم العربي', type: 'activity' },
        { id: 404, day: 22, title: 'يوم كوكب الأرض', type: 'event' },
        { id: 405, day: 24, title: 'يوم البيئة الإقليمي', type: 'event' },
    ],
    // May 2026
    "2026-5": [
        { id: 501, day: 3, title: 'اليوم العالمي لحرية الصحافة', type: 'event' },
        { id: 502, day: 3, title: 'اليوم العالمي لمكافحة الربو', type: 'event' },
        { id: 503, day: 22, title: 'اليوم العالمي للتنوع البيولوجي', type: 'event' },
        { id: 504, day: 25, title: 'تأسيس مجلس التعاون الخليجي', type: 'event' },
        { id: 505, day: 31, title: 'اليوم العالمي للامتناع عن التدخين', type: 'event' },
    ],
    // June 2026
    "2026-6": [
        { id: 601, day: 5, title: 'يوم البيئة العالمي', type: 'event' },
        { id: 602, day: 5, title: 'عيد الأضحى المبارك (تقريبي)', type: 'event' },
        { id: 603, day: 17, title: 'اليوم العالمي لمكافحة التصحر', type: 'event' },
        { id: 604, day: 26, title: 'اليوم العالمي لمكافحة المخدرات', type: 'event' },
        { id: 605, day: 27, title: 'رأس السنة الهجرية (1447)', type: 'event' },
    ],
    // July 2026
    "2026-7": [
        { id: 701, day: 23, title: 'يوم النهضة المباركة', type: 'event' },
    ],
    // August 2026
    "2026-8": [
        { id: 801, day: 1, title: 'بداية الأسبوع العالمي للرضاعة', type: 'activity' },
    ],
};

const gradeColors: Record<string, string> = { "تاسع": 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200', "ثامن": 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-200', "سابع": 'bg-pink-100 text-pink-800 dark:bg-pink-900/50 dark:text-pink-200', "سادس": 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200', "خامس": 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200', };
const gradeBorderColors: Record<string, string> = { "تاسع": 'border-green-500', "ثامن": 'border-yellow-500', "سابع": 'border-pink-500', "سادس": 'border-blue-500', "خامس": 'border-green-500', };
const grades = ["تاسع", "ثامن", "سابع", "سادس", "خامس"];

const daysOfWeek = ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
const monthNames = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];

const getEventStyle = (type?: string): string => {
    switch (type) {
        case 'exam': return 'bg-red-200 text-red-800 dark:bg-red-900/60 dark:text-red-200';
        case 'activity': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200';
        default: return 'bg-secondary/80 text-white';
    }
};

const CalendarDay: React.FC<{ day?: number; events?: SchoolEvent[]; isWeekend?: boolean; isToday?: boolean }> = ({ day, events, isWeekend, isToday }) => {
    const weekendText = "للراحة ولقاء الأسرة والنزهة والاستجمام والمراجعة";
    return (
        <div className={`border border-gray-200 dark:border-gray-700 h-28 flex flex-col p-2 overflow-hidden relative ${isToday ? 'bg-primary/10' : isWeekend ? 'bg-green-50 dark:bg-green-900/20' : ''}`}>
            {day && <span className={`font-semibold ${isToday ? 'text-primary' : isWeekend ? 'text-green-700 dark:text-green-300' : 'text-textPrimary dark:text-darkTextPrimary'}`}>{day}</span>}
            <div className="space-y-1 mt-1 overflow-y-auto">
                {isWeekend && (!events || events.length === 0) && (
                    <div className="text-center text-xs text-green-600 dark:text-green-400 font-semibold mt-2 p-1 bg-green-100 dark:bg-green-900/40 rounded" title={weekendText}>
                        عطلة نهاية الأسبوع
                    </div>
                )}
                {events && events.map(event => (
                    <div key={event.id} className={`text-xs p-1 rounded-md truncate ${getEventStyle(event.type)}`} title={event.title}>
                        {event.title}
                    </div>
                ))}
            </div>
        </div>
    );
};

export const EventsPage: React.FC = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 1)); // Start Sep 2025
    const [selectedGrade, setSelectedGrade] = useState(grades[0]);

    const changeMonth = (delta: number) => {
        setCurrentDate(prevDate => {
            const newDate = new Date(prevDate);
            newDate.setMonth(newDate.getMonth() + delta);
            // Clamp navigation between Sep 2025 and Aug 2026
            if (newDate < new Date(2025, 8, 1) || newDate > new Date(2026, 7, 31)) {
                return prevDate;
            }
            return newDate;
        });
    };
    
    const handleDateSelectorChange = (year: number, month: number) => {
        const newDate = new Date(year, month, 1);
        const minDate = new Date(2025, 8, 1);
        const maxDate = new Date(2026, 7, 31);
        if (newDate >= minDate && newDate <= maxDate) {
            setCurrentDate(newDate);
        }
    }

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0-11
    const monthKey = `${year}-${month + 1}`;
    
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0=Sun, 1=Mon...
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const getEventsForDay = (day: number): SchoolEvent[] => {
        const dayEvents: SchoolEvent[] = (academicYearEvents[monthKey] || []).filter(e => e.day === day);
        const currentDayDate = new Date(year, month, day);
        const dayOfWeek = currentDayDate.getDay(); // Sunday=0, Tuesday=2
        
        // Add weekly activity on Tuesdays
        if (dayOfWeek === 2) {
            dayEvents.push({ id: 4000 + day, day, title: 'فعالية: حصة النشاط', type: 'activity' });
        }

        // Add exams for October 2025
        if (year === 2025 && month === 9) { // month 9 is October
            const examsForDay = scheduleData[selectedGrade].filter(exam => {
                const examDay = parseInt(exam.date.split('-')[0], 10);
                return examDay === day;
            });
            examsForDay.forEach((exam, index) => {
                 dayEvents.push({ id: 2000 + day + index, day, title: `اختبار ${exam.subject}`, type: 'exam' });
            });
        }
        return dayEvents;
    };

    const isPrevDisabled = currentDate <= new Date(2025, 8, 1);
    const isNextDisabled = currentDate >= new Date(2026, 7, 1);

    return (
        <div className="p-4 space-y-8">
            <div className="bg-surface dark:bg-darkSurface p-4 rounded-lg shadow">
                <div className="flex justify-between items-center mb-4">
                    <button onClick={() => changeMonth(-1)} disabled={isPrevDisabled} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed text-lg font-bold">‹</button>
                     <div className="flex items-center gap-2">
                        <select
                            value={month}
                            onChange={(e) => handleDateSelectorChange(year, parseInt(e.target.value))}
                            className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md p-2 focus:ring-primary focus:border-primary text-sm font-semibold"
                        >
                            {monthNames.map((name, index) => {
                                const isDisabled = (year === 2025 && index < 8) || (year === 2026 && index > 7);
                                return <option key={index} value={index} disabled={isDisabled}>{name}</option>
                            })}
                        </select>
                         <select
                            value={year}
                            onChange={(e) => handleDateSelectorChange(parseInt(e.target.value), month)}
                            className="bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md p-2 focus:ring-primary focus:border-primary text-sm font-semibold"
                        >
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                        </select>
                    </div>
                    <button onClick={() => changeMonth(1)} disabled={isNextDisabled} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed text-lg font-bold">›</button>
                </div>

                {year === 2025 && month === 9 && ( // Show grade filter only for Oct 2025
                    <div className="flex justify-center flex-wrap gap-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4">
                        {grades.map(grade => (
                            <button
                                key={grade}
                                onClick={() => setSelectedGrade(grade)}
                                className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-200 ${selectedGrade === grade ? `${gradeColors[grade]} border-2 ${gradeBorderColors[grade]}` : 'bg-gray-100 dark:bg-gray-700 text-textSecondary dark:text-darkTextSecondary hover:bg-gray-200 dark:hover:bg-gray-600'}`}
                            >
                                الصف {grade}
                            </button>
                        ))}
                    </div>
                )}

                <div className="grid grid-cols-7 gap-1">
                    {daysOfWeek.map(day => <div key={day} className="text-center font-semibold text-textSecondary dark:text-darkTextSecondary text-sm">{day}</div>)}
                    {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`} className="border-r border-gray-200 dark:border-gray-700"></div>)}
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(day => {
                        const dayDate = new Date(year, month, day);
                        const dayOfWeek = dayDate.getDay();
                        const isWeekend = dayOfWeek === 5 || dayOfWeek === 6;
                        const today = new Date();
                        const isToday = today.getDate() === day && today.getMonth() === month && today.getFullYear() === year;

                        return <CalendarDay key={day} day={day} events={getEventsForDay(day)} isWeekend={isWeekend} isToday={isToday} />;
                    })}
                </div>
            </div>
            <CopyrightFooter />
        </div>
    );
};