import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { PerformanceData, AttendanceData, Homework, Recommendation } from '../types';
import { getImprovementTips } from '../services/geminiService';
import { HomeworkIcon } from '../components/icons/HomeworkIcon';
import { RecommendationIcon } from '../components/icons/RecommendationIcon';
import { PerformanceIcon } from '../components/icons/PerformanceIcon';
import { CalendarIcon } from '../components/icons/CalendarIcon';
import { BadgeIcon } from '../components/icons/BadgeIcon';
import { LightbulbIcon } from '../components/icons/LightbulbIcon';
import { ClockIcon } from '../components/icons/ClockIcon';
import { CheckCircleIcon } from '../components/icons/CheckCircleIcon';
import { CopyrightFooter } from '../components/CopyrightFooter';

// Mock Data
const academicData: PerformanceData[] = [
    { subject: 'العربية', grade: 85 },
    { subject: 'العلوم', grade: 92 },
    { subject: 'الرياضيات', grade: 78 },
    { subject: 'الدراسات', grade: 88 },
    { subject: 'الإنجليزية', grade: 95 },
];

const attendanceData: AttendanceData[] = [
    { name: 'حضور', value: 95 },
    { name: 'غياب', value: 5 },
];

const homeworkData: Homework[] = [
  { id: 1, subject: 'الرياضيات', task: 'حل تمارين صفحة 20-22', dueDate: 'غدًا', completed: false },
  { id: 2, subject: 'العلوم', task: 'كتابة تقرير عن دورة الماء', dueDate: 'بعد 3 أيام', completed: false },
  { id: 3, subject: 'اللغة العربية', task: 'حفظ قصيدة "وطني"', dueDate: 'الأسبوع القادم', completed: true },
];

const recommendationData: Recommendation[] = [
  { id: 1, teacher: 'أ. فاطمة', subject: 'العلوم', comment: 'أداء متميز في المشاركة الصفية، تحتاج إلى تركيز أكبر في حل الواجبات.', date: '20-09-2024' },
  { id: 2, teacher: 'أ. عائشة', subject: 'اللغة العربية', comment: 'تطور ملحوظ في القراءة، يُنصح بتشجيعها على كتابة قصص قصيرة.', date: '18-09-2024' },
];

const badges = [
    { id: 1, title: 'نجمة الرياضيات', subject: 'الرياضيات', threshold: 90, color: 'text-blue-500 dark:text-blue-400', bgColor: 'bg-blue-50 dark:bg-blue-900/30' },
    { id: 2, title: 'عالمة العلوم', subject: 'العلوم', threshold: 90, color: 'text-green-500 dark:text-green-400', bgColor: 'bg-green-50 dark:bg-green-900/30' },
    { id: 3, title: 'مبدعة الإنجليزية', subject: 'الإنجليزية', threshold: 90, color: 'text-red-500 dark:text-red-400', bgColor: 'bg-red-50 dark:bg-red-900/30' },
    { id: 4, title: 'حضور مثالي', subject: 'attendance', threshold: 95, color: 'text-purple-500 dark:text-purple-400', bgColor: 'bg-purple-50 dark:bg-purple-900/30' },
];

const COLORS = ['#0d9488', '#be123c'];

const Card: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className }) => (
    <div className={`bg-surface dark:bg-darkSurface p-4 rounded-lg shadow ${className}`}>
        <div className="flex items-center mb-4">
            <div className="text-primary">{icon}</div>
            <h2 className="text-lg font-semibold text-textPrimary dark:text-darkTextPrimary mr-3">{title}</h2>
        </div>
        {children}
    </div>
);

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    if (percent === 0) return null;

    return (
        <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" className="font-bold text-sm pointer-events-none">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export const PerformancePage: React.FC = () => {
    const [subjectFilter, setSubjectFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('default');
    const [tips, setTips] = useState<{ [key: string]: string }>({});
    const [loadingTips, setLoadingTips] = useState<string | null>(null);

    const averageGrade = useMemo(() => {
        if (academicData.length === 0) return 0;
        const total = academicData.reduce((sum, item) => sum + item.grade, 0);
        return (total / academicData.length).toFixed(1);
    }, []);

    const displayedAcademicData = useMemo(() => {
        let data = [...academicData];
        if (subjectFilter !== 'all') {
            data = data.filter(item => item.subject === subjectFilter);
        }
        if (sortOrder === 'asc') {
            data.sort((a, b) => a.grade - b.grade);
        } else if (sortOrder === 'desc') {
            data.sort((a, b) => b.grade - a.grade);
        }
        return data;
    }, [subjectFilter, sortOrder]);

    const earnedBadges = useMemo(() => {
        return badges.filter(badge => {
            if (badge.subject === 'attendance') {
                const attendance = attendanceData.find(d => d.name === 'حضور')?.value || 0;
                return attendance >= badge.threshold;
            }
            const subjectData = academicData.find(d => d.subject === badge.subject);
            return subjectData && subjectData.grade >= badge.threshold;
        });
    }, []);

    const handleGetTips = async (subject: string, grade: number) => {
        if (tips[subject]) {
            setTips(prev => {
                const newTips = { ...prev };
                delete newTips[subject];
                return newTips;
            });
            return;
        }
        setLoadingTips(subject);
        const result = await getImprovementTips(subject, grade);
        setTips(prev => ({ ...prev, [subject]: result }));
        setLoadingTips(null);
    };


    return (
        <div className="p-4 space-y-6">
             <style>{`
                @keyframes slide-down {
                  from {
                    opacity: 0;
                    transform: translateY(-10px);
                    max-height: 0;
                  }
                  to {
                    opacity: 1;
                    transform: translateY(0);
                    max-height: 500px;
                  }
                }
                .animate-slide-down {
                  overflow: hidden;
                  animation: slide-down 0.4s ease-out forwards;
                }
            `}</style>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-surface dark:bg-darkSurface p-4 rounded-lg shadow flex flex-col items-center justify-center">
                    <h2 className="text-lg font-semibold text-textPrimary dark:text-darkTextPrimary mb-2">المعدل العام</h2>
                    <p className="text-5xl font-bold text-primary">{averageGrade}</p>
                    <p className="text-sm text-textSecondary dark:text-darkTextSecondary mt-1">بناءً على أحدث التقديرات</p>
                </div>

                <Card title="أوسمة التميز" icon={<BadgeIcon className="w-6 h-6" />}>
                    {earnedBadges.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {earnedBadges.map(badge => (
                                <div key={badge.id} className={`p-3 rounded-lg text-center ${badge.bgColor}`}>
                                    <div className={`mx-auto w-10 h-10 flex items-center justify-center rounded-full ${badge.color} bg-current/10`}>
                                        <BadgeIcon className="w-6 h-6"/>
                                    </div>
                                    <p className={`mt-2 text-sm font-semibold ${badge.color}`}>{badge.title}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-textSecondary dark:text-darkTextSecondary text-center py-4">لا توجد أوسمة بعد. واصلي الاجتهاد!</p>
                    )}
                </Card>
            </div>

            <Card title="الواجبات المنزلية" icon={<HomeworkIcon className="w-6 h-6" />}>
                <div className="space-y-3">
                    {[...homeworkData]
                        .sort((a, b) => Number(a.completed) - Number(b.completed))
                        .map(hw => (
                        <div key={hw.id} className={`flex items-center p-3 rounded-md ${hw.completed ? 'bg-green-50 dark:bg-green-900/40 opacity-70' : 'bg-gray-50 dark:bg-darkSurface/60'}`}>
                           {hw.completed ? <CheckCircleIcon className="w-6 h-6 text-green-500 ml-3" /> : <ClockIcon className="w-6 h-6 text-yellow-500 ml-3" />}
                            <div className="flex-grow">
                                <p className={`font-semibold ${hw.completed ? 'line-through text-textSecondary dark:text-darkTextSecondary' : 'text-textPrimary dark:text-darkTextPrimary'}`}>{hw.task}</p>
                                <p className="text-sm text-textSecondary dark:text-darkTextSecondary">{hw.subject} - التسليم: {hw.dueDate}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>

            <Card title="توصيات المعلمات" icon={<RecommendationIcon className="w-6 h-6" />}>
                 <div className="space-y-4">
                    {recommendationData.map(rec => (
                        <div key={rec.id} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-md">
                            <p className="font-semibold text-textPrimary dark:text-darkTextPrimary text-base">{rec.comment}</p>
                            <p className="text-sm text-textSecondary dark:text-gray-400 mt-1">
                                <span className="font-semibold">{rec.teacher}</span> - {rec.subject} ({rec.date})
                            </p>
                        </div>
                    ))}
                </div>
            </Card>

            <Card title="التقديرات الأكاديمية" icon={<PerformanceIcon isActive className="w-6 h-6" />}>
                <div className="flex items-center justify-between mb-4 border-b border-gray-200 dark:border-gray-700 pb-3">
                    <h3 className="font-semibold text-textPrimary dark:text-darkTextPrimary">نظرة عامة على المواد</h3>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 mb-4">
                    <select
                        className="w-full sm:w-1/3 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md p-2 focus:ring-primary focus:border-primary text-sm"
                        aria-label="Filter by time period"
                    >
                        <option value="month">هذا الشهر</option>
                        <option value="term">هذا الفصل</option>
                        <option value="all">كل الأوقات</option>
                    </select>
                    <select
                        value={subjectFilter}
                        onChange={(e) => setSubjectFilter(e.target.value)}
                        className="w-full sm:w-1/3 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md p-2 focus:ring-primary focus:border-primary text-sm"
                        aria-label="Filter by subject"
                    >
                        <option value="all">كل المواد</option>
                        {academicData.map(s => <option key={s.subject} value={s.subject}>{s.subject}</option>)}
                    </select>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="w-full sm:w-1/3 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md p-2 focus:ring-primary focus:border-primary text-sm"
                        aria-label="Sort order"
                    >
                        <option value="default">ترتيب افتراضي</option>
                        <option value="desc">من الأعلى للأقل</option>
                        <option value="asc">من الأقل للأعلى</option>
                    </select>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={displayedAcademicData} layout="vertical" margin={{ top: 5, right: 20, left: 25, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.2} />
                        <XAxis type="number" domain={[0, 100]} stroke="currentColor" />
                        <YAxis dataKey="subject" type="category" width={80} stroke="currentColor" />
                        <Tooltip 
                          contentStyle={{ 
                            fontFamily: 'Noto Kufi Arabic', 
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderColor: '#14b8a6'
                          }} 
                          cursor={{ fill: 'rgba(13, 148, 136, 0.1)' }}/>
                        <Bar dataKey="grade" name="الدرجة" fill="#0d9488" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                </ResponsiveContainer>
                 <div className="mt-4 space-y-3">
                    <h3 className="font-semibold text-textPrimary dark:text-darkTextPrimary">نصائح تحسين المستوى</h3>
                    {displayedAcademicData.map(item => (
                        <div key={item.subject} className="bg-gray-50 dark:bg-darkSurface/60 p-3 rounded-md">
                            <div className="flex items-center justify-between">
                                <p className="font-semibold">{item.subject}</p>
                                <button
                                    onClick={() => handleGetTips(item.subject, item.grade)}
                                    disabled={loadingTips === item.subject}
                                    className="flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-amber-400 text-black font-semibold hover:bg-amber-500 transition-colors disabled:opacity-50 disabled:bg-gray-300"
                                >
                                    {loadingTips === item.subject ? (
                                        'جارِ التحميل...'
                                    ) : (
                                        <>
                                            <LightbulbIcon className="w-4 h-4" />
                                            <span>{tips[item.subject] ? 'إخفاء النصائح' : 'احصل على نصائح'}</span>
                                        </>
                                    )}
                                </button>
                            </div>
                             {tips[item.subject] && (
                                <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-600 text-textSecondary dark:text-darkTextSecondary whitespace-pre-wrap text-sm">
                                    {tips[item.subject]}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Card>

            <Card title="الحاضر والانصراف" icon={<CalendarIcon className="w-6 h-6" />}>
                 <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            data={attendanceData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            outerRadius={100}
                            fill="#8884d8"
                            dataKey="value"
                            label={renderCustomizedLabel}
                        >
                            {attendanceData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                         <Tooltip 
                          contentStyle={{ 
                            fontFamily: 'Noto Kufi Arabic', 
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            borderColor: '#14b8a6'
                          }}/>
                         <Legend wrapperStyle={{ fontFamily: 'Noto Kufi Arabic' }} />
                    </PieChart>
                </ResponsiveContainer>
            </Card>
            <CopyrightFooter />
        </div>
    );
};
