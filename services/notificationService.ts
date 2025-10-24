import { Notification } from '../types';
import { HomeworkIcon } from '../components/icons/HomeworkIcon';
import { PerformanceIcon } from '../components/icons/PerformanceIcon';
import { CalendarIcon } from '../components/icons/CalendarIcon';
import { HeartIcon } from '../components/icons/HeartIcon';
import { LightbulbIcon } from '../components/icons/LightbulbIcon';
import { CalendarPlusIcon } from '../components/icons/CalendarPlusIcon';

// A pool of potential notifications that don't sound like they are from a teacher.
const notificationPool: Omit<Notification, 'id' | 'timestamp' | 'read'>[] = [
  {
    icon: LightbulbIcon,
    title: "ميزة جديدة: نصائح ذكية!",
    description: "اكتشفي تحليلات مخصصة لأداء ابنتكِ لمساعدتها على التفوق.",
    link: 'insights'
  },
  {
    icon: CalendarPlusIcon,
    title: "ميزة جديدة: حجز المواعيد",
    description: "يمكنك الآن حجز موعد مباشر مع الإدارة عبر التطبيق بسهولة.",
    link: 'contact'
  },
  {
    icon: LightbulbIcon,
    title: "نصيحة ذكية جديدة",
    description: "تم تحليل الأداء وظهرت نصيحة جديدة قد تساعد في التحصيل الدراسي.",
    link: 'insights'
  },
  {
    icon: HomeworkIcon,
    title: "تذكير بواجب دراسي",
    description: "لا تنسي تسليم واجب العلوم القادم قبل نهاية الأسبوع.",
    link: 'reports'
  },
  {
    icon: PerformanceIcon,
    title: "متابعة أداء",
    description: "تم تحديث بيانات الأداء. اضغطي للاطلاع على أحدث النتائج.",
    link: 'reports'
  },
  {
    icon: CalendarIcon,
    title: "فعالية قادمة",
    description: "سيقام معرض المواهب المدرسي الأسبوع القادم. استعدي!",
    link: 'events'
  },
  {
    icon: HeartIcon,
    title: "متابعة الحضور",
    description: "تم تسجيل الحضور اليوم. نأمل أن يكون يومكِ الدراسي موفقًا.",
    link: 'reports'
  },
   {
    icon: CalendarIcon,
    title: "تحديث جدول الاختبارات",
    description: "تم نشر جدول الاختبارات الفترية. يمكنك الاطلاع عليه الآن.",
    link: 'events'
  },
];


const generateId = () => `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Function to get a set of initial notifications
export const getInitialNotifications = (): Notification[] => {
    const now = new Date();
    
    return [
        { 
            ...notificationPool[0], // New feature: Smart Tips
            id: generateId(),
            timestamp: new Date(now.getTime() - 1000 * 60 * 10), // 10 mins ago
            read: false
        },
        { 
            ...notificationPool[1], // New feature: Booking
            id: generateId(),
            timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 3), // 3 hours ago
            read: true
        },
        { 
            ...notificationPool[3], // Homework reminder
            id: generateId(),
            timestamp: new Date(now.getTime() - 1000 * 60 * 60 * 24), // 1 day ago
            read: true
        }
    ];
};

// Function to generate a single new notification
export const generateNewNotification = (): Notification => {
     // Pick a random notification from the pool that isn't the same as the last one
    const randomIndex = Math.floor(Math.random() * notificationPool.length);
    
    return {
        ...notificationPool[randomIndex],
        id: generateId(),
        timestamp: new Date(),
        read: false
    };
};
