import React, { useState, useEffect } from 'react';
import { getSmartInsights } from '../services/geminiService';
import { SmartInsight } from '../types';
import { TipOfTheDay } from '../components/TipOfTheDay';
import { PerformanceIcon } from '../components/icons/PerformanceIcon';
import { CalendarIcon } from '../components/icons/CalendarIcon';
import { LightbulbIcon } from '../components/icons/LightbulbIcon';
import { HeartIcon } from '../components/icons/HeartIcon';
import { UsersIcon } from '../components/icons/UsersIcon';
import { CopyrightFooter } from '../components/CopyrightFooter';
import { PencilSquareIcon } from '../components/icons/PencilSquareIcon';
import { ArrowDownTrayIcon } from '../components/icons/ArrowDownTrayIcon';

// Helper to select an icon based on insight title keywords
const getIconForInsight = (title: string): React.ReactElement => {
    const lowerTitle = title.toLowerCase();
    if (['أكاديمي', 'دراسة', 'درجات', 'تعلّم', 'دراسي', 'أداء'].some(kw => lowerTitle.includes(kw))) {
        return <PerformanceIcon />;
    }
    if (['صحية', 'صحة', 'حضور', 'نوم', 'رياضية', 'ماء', 'نشاط'].some(kw => lowerTitle.includes(kw))) {
        return <HeartIcon />;
    }
    if (['اجتماعي', 'ثقة', 'مشاركات', 'تعاون'].some(kw => lowerTitle.includes(kw))) {
        return <UsersIcon />;
    }
    if (['فعالية', 'معرض', 'منافسة', 'تذكير', 'سباق'].some(kw => lowerTitle.includes(kw))) {
        return <CalendarIcon />;
    }
    return <LightbulbIcon />;
};

// Map card background colors to icon container colors
const colorMap: { [key: string]: { iconBg: string, iconColor: string } } = {
    'bg-red-100 dark:bg-red-900/50': { iconBg: 'bg-red-200/70 dark:bg-red-800/50', iconColor: 'text-red-600 dark:text-red-300' },
    'bg-green-100 dark:bg-green-900/50': { iconBg: 'bg-green-200/70 dark:bg-green-800/50', iconColor: 'text-green-600 dark:text-green-300' },
    'bg-yellow-100 dark:bg-yellow-900/50': { iconBg: 'bg-yellow-200/70 dark:bg-yellow-800/50', iconColor: 'text-yellow-600 dark:text-yellow-300' },
    'bg-blue-100 dark:bg-blue-900/50': { iconBg: 'bg-blue-200/70 dark:bg-blue-800/50', iconColor: 'text-blue-600 dark:text-blue-300' },
    'bg-sky-100 dark:bg-sky-900/50': { iconBg: 'bg-sky-200/70 dark:bg-sky-800/50', iconColor: 'text-sky-600 dark:text-sky-300' },
    'bg-teal-100 dark:bg-teal-900/50': { iconBg: 'bg-teal-200/70 dark:bg-teal-800/50', iconColor: 'text-teal-600 dark:text-teal-300' },
    'bg-purple-100 dark:bg-purple-900/50': { iconBg: 'bg-purple-200/70 dark:bg-purple-800/50', iconColor: 'text-purple-600 dark:text-purple-300' },
    'bg-orange-100 dark:bg-orange-900/50': { iconBg: 'bg-orange-200/70 dark:bg-orange-800/50', iconColor: 'text-orange-600 dark:text-orange-300' },
    'bg-pink-100 dark:bg-pink-900/50': { iconBg: 'bg-pink-200/70 dark:bg-pink-800/50', iconColor: 'text-pink-600 dark:text-pink-300' },
    'bg-lime-100 dark:bg-lime-900/50': { iconBg: 'bg-lime-200/70 dark:bg-lime-800/50', iconColor: 'text-lime-600 dark:text-lime-300' },
    'bg-indigo-100 dark:bg-indigo-900/50': { iconBg: 'bg-indigo-200/70 dark:bg-indigo-800/50', iconColor: 'text-indigo-600 dark:text-indigo-300' },
    'bg-cyan-100 dark:bg-cyan-900/50': { iconBg: 'bg-cyan-200/70 dark:bg-cyan-800/50', iconColor: 'text-cyan-600 dark:text-cyan-300' },
};
const defaultColor = { iconBg: 'bg-gray-200/70 dark:bg-gray-800/50', iconColor: 'text-gray-600 dark:text-gray-300' };

const mockInsightDetails: Record<string, { title: string; steps: string[] }> = {
  '1': { title: "خطة تشجيعية للعلوم", steps: ["مراجعة الرسومات البيانية معها.", "مشاهدة فيديو تعليمي قصير عن موضوع الدرس.", "تحضير سؤالين للدرس القادم معًا."] },
  '2': { title: "خطة تقوية اللغة الإنجليزية", steps: ["استخدام بطاقات تعليمية للمفردات الجديدة.", "مشاهدة مقطع كرتون قصير باللغة الإنجليزية.", "قراءة قصة بسيطة قبل النوم."] },
  '3': { title: "استغلال فترة الصباح", steps: ["التأكد من حصولها على فطور جيد.", "مراجعة سريعة لمدة 5 دقائق للمواد التي لديها في الحصص الأولى.", "تشجيعها بكلمات إيجابية قبل الذهاب للمدرسة."] },
  '4': { title: "خطة الترطيب اليومية", steps: ["تخصيص عبوة ماء أنيقة لها.", "وضع علامات على العبوة لتشجيعها على شرب كميات محددة بحلول أوقات معينة.", "إضافة نكهات طبيعية للماء كالليمون أو النعناع."] },
  '5': { title: "خطة تحسين الالتزام بالوقت", steps: ["وضع روتين مسائي للنوم في ساعة محددة.", "تجهيز الحقيبة والملابس المدرسية في المساء.", "استخدام منبه ممتع للاستيقاظ."] },
  '6': { title: "نصائح ليوم رياضي ممتع", steps: ["تجهيز وجبة خفيفة غنية بالطاقة (موز، تمر).", "التأكد من ارتداء ملابس رياضية مريحة.", "تذكيرها بأهمية الإحماء قبل البدء."] },
  '7': { title: "تعزيز المهارات الاجتماعية", steps: ["سؤالها عن أصدقائها في النشاط وكيف تعاونوا معًا.", "تشجيعها على دعوة صديقة للمذاكرة أو اللعب.", "مدح روح الفريق لديها."] },
  '8': { title: "خطة بناء الثقة بالنفس", steps: ["الطلب منها أن تشرح لكِ أحد الدروس التي فهمتها جيدًا.", "تكليفها بمسؤولية بسيطة في المنزل وإعطائها الثقة لإنجازها.", "تذكيرها بنجاحاتها السابقة."] },
  '9': { title: "الاستعداد لمعرض المواهب", steps: ["مساعدتها في التدريب على فقرتها.", "تحضير الأدوات التي تحتاجها مسبقًا.", "دعوة أفراد الأسرة لمشاهدة عرض تجريبي."] },
  '10': { title: "التجهيز لسباق الجري", steps: ["القيام بتمارين إحماء بسيطة معًا.", "التأكد من أنها تتناول طعامًا صحيًا.", "تشجيعها بأن الأهم هو المشاركة والاستمتاع."] },
  '11': { title: "الحفاظ على التوازن", steps: ["تخصيص وقت في نهاية الأسبوع لنشاط ترفيهي بعيدًا عن الدراسة.", "مشاركتها في هواية تحبها (رسم، قراءة).", "الثناء على قدرتها على تنظيم وقتها."] },
  '12': { title: "استراتيجيات التعامل مع التوتر", steps: ["تعليمها تمارين التنفس العميق (شهيق من الأنف وزفير بطيء من الفم).", "المراجعة معها في مكان هادئ ومريح.", "التأكيد على أن الاختبار هو مجرد وسيلة للتقييم وليس للحكم عليها."] },
};


export const InsightsPage: React.FC = () => {
    const [insights, setInsights] = useState<SmartInsight[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expandedInsightId, setExpandedInsightId] = useState<string | null>(null);
    const [myNote, setMyNote] = useState('');
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saved'>('idle');

    useEffect(() => {
        const fetchInsights = async () => {
            setIsLoading(true);
            const data = await getSmartInsights();
            setInsights(data);
            setIsLoading(false);
        };
        fetchInsights();
        
        const savedNote = localStorage.getItem('selfMotivationNote');
        if (savedNote) {
            setMyNote(savedNote);
        }
    }, []);

    const handleSaveNote = () => {
        try {
            localStorage.setItem('selfMotivationNote', myNote);
            setSaveStatus('saved');
            setTimeout(() => {
                setSaveStatus('idle');
            }, 2500);
        } catch (error) {
            console.error("Failed to save note to localStorage", error);
            alert("عذرًا، لم نتمكن من حفظ الملاحظة. قد تكون مساحة التخزين ممتلئة.");
        }
    };

    const handleInsightToggle = (insightId: string) => {
        setExpandedInsightId(prevId => (prevId === insightId ? null : insightId));
    };

    return (
        <div className="p-4 space-y-8">
             <style>{`
                @keyframes fadeInUp {
                  from {
                    opacity: 0;
                    transform: translate3d(0, 20px, 0);
                  }
                  to {
                    opacity: 1;
                    transform: translate3d(0, 0, 0);
                  }
                }
                .card-animation {
                  animation: fadeInUp 0.5s ease-out forwards;
                  opacity: 0;
                }
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
            <div>
                <h1 className="text-2xl font-bold text-textPrimary dark:text-darkTextPrimary mb-4">✨ التحفيز الذاتي</h1>
                
                <div className="bg-surface dark:bg-darkSurface p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-6">
                    <div className="flex items-center mb-3">
                        <PencilSquareIcon className="w-7 h-7 text-primary" />
                        <h2 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary mr-3">ملاحظتي الخاصة</h2>
                    </div>
                    <textarea
                        value={myNote}
                        onChange={(e) => setMyNote(e.target.value)}
                        placeholder="اكتبي هنا ملاحظاتكِ وأهدافكِ الشخصية لتحفيز نفسك..."
                        className="w-full h-32 p-3 bg-gray-50 dark:bg-darkSurface/50 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-textPrimary dark:text-darkTextPrimary"
                        aria-label="ملاحظتي الخاصة"
                    />
                    <div className="mt-3 flex items-center justify-between">
                        <button
                            onClick={handleSaveNote}
                            className="bg-primary text-white font-semibold py-2 px-5 rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2 disabled:bg-primary/50"
                            disabled={!myNote.trim()}
                        >
                            <ArrowDownTrayIcon className="w-5 h-5" />
                            حفظ الملاحظة
                        </button>
                        {saveStatus === 'saved' && (
                            <p className="text-green-600 dark:text-green-400 text-sm font-semibold animate-pulse">
                                ✅ تم الحفظ بنجاح!
                            </p>
                        )}
                    </div>
                </div>
                
                {isLoading ? (
                    <div className="space-y-4">
                        {[...Array(3)].map((_, i) => (
                           <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-gray-200 dark:bg-darkSurface animate-pulse">
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                                <div className="flex-grow space-y-2">
                                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
                                    <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                                     <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-3/4"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : insights.length > 0 ? (
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary -mb-2">💡 نصائح ذكية</h2>
                        {insights.map((insight, index) => {
                            const Icon = getIconForInsight(insight.title);
                            const colors = colorMap[insight.color] || defaultColor;
                            const isExpanded = expandedInsightId === insight.id;

                            return (
                                <div
                                    key={insight.id}
                                    className={`p-4 rounded-lg shadow-sm ${insight.color} card-animation transition-all duration-300`}
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div
                                        className="flex items-start gap-4 cursor-pointer"
                                        onClick={() => handleInsightToggle(insight.id)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && handleInsightToggle(insight.id)}
                                        aria-expanded={isExpanded}
                                    >
                                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${colors.iconBg}`}>
                                            {React.cloneElement(Icon, { className: `w-6 h-6 ${colors.iconColor}` })}
                                        </div>
                                        <div className="flex-grow">
                                            <h2 className="font-bold text-lg text-textPrimary dark:text-darkTextPrimary mb-1">{insight.title}</h2>
                                            <p className="text-textSecondary dark:text-darkTextSecondary">{insight.content}</p>
                                        </div>
                                        <div className="flex-shrink-0 pt-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24" height="24"
                                                viewBox="0 0 24 24" fill="none"
                                                stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className={`w-5 h-5 transition-transform duration-300 text-textSecondary dark:text-darkTextSecondary ${isExpanded ? 'transform rotate-180' : ''}`}
                                            >
                                                <polyline points="6 9 12 15 18 9"></polyline>
                                            </svg>
                                        </div>
                                    </div>

                                    {isExpanded && mockInsightDetails[insight.id] && (
                                        <div className="animate-slide-down mt-4 pt-4 border-t border-gray-300/50 dark:border-gray-600/50">
                                            <h3 className="font-semibold text-primary mb-2">{mockInsightDetails[insight.id].title}</h3>
                                            <ul className="list-disc list-inside space-y-1 text-textSecondary dark:text-darkTextSecondary">
                                                {mockInsightDetails[insight.id].steps.map((step, i) => <li key={i}>{step}</li>)}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-8 bg-gray-50 dark:bg-darkSurface rounded-lg">
                        <p className="text-textSecondary dark:text-darkTextSecondary">لا توجد نصائح ذكية مخصصة حاليًا.</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">يقوم الذكاء الاصطناعي بتحليل الأداء لتقديم نصائح قريباً.</p>
                    </div>
                )}
            </div>
            
            <TipOfTheDay />
            <CopyrightFooter />
        </div>
    );
};