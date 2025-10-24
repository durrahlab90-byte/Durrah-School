import React, { useState } from 'react';
import { CopyrightFooter } from '../components/CopyrightFooter';
import { NoorIcon } from '../components/icons/NoorIcon';

const InfoCard: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className }) => (
    <div className={`bg-surface dark:bg-darkSurface p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
        <div className="flex items-center mb-4">
            <div className="text-primary">{icon}</div>
            <h2 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary mr-3">{title}</h2>
        </div>
        {children}
    </div>
);

const faqData = [
    {
        question: "كيف يمكنني الدخول إلى المنصة؟",
        answer: "يتم الدخول باستخدام الرقم المدني للطالبة كاسم مستخدم، وكلمة المرور التي تم استلامها من إدارة المدرسة (عادةً ما تكون تاريخ الميلاد). إذا كانت هذه أول مرة، يرجى التواصل مع مربية الصف."
    },
    {
        question: "ماذا أفعل إذا نسيت كلمة المرور؟",
        answer: "في حال نسيان كلمة المرور، يجب على ولي الأمر التواصل مع إدارة المدرسة أو مربية الصف مباشرة لطلب إعادة تعيينها."
    },
    {
        question: "أين أجد الواجبات المنزلية؟",
        answer: "يمكنك العثور على الواجبات في قسم 'الواجبات الإلكترونية' أو 'الأنشطة' داخل كل مادة دراسية. تأكدي من متابعة الإعلانات من المعلمات."
    },
    {
        question: "كيف يمكن لولي الأمر متابعة أداء الطالبة؟",
        answer: "يمكن لولي الأمر استخدام حساب الطالبة للدخول إلى المنصة والاطلاع على قسم 'التقارير' أو 'الدرجات' لمتابعة الأداء الأكاديمي وسجل الحضور والغياب."
    }
];


export const NoorPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const handleLinkClick = () => {
        window.open('https://lms.moe.gov.om/', '_blank', 'noopener,noreferrer');
    };

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="p-4 space-y-6">
            <style>{`
                .faq-answer {
                    transition: all 0.3s ease-in-out;
                    max-height: 0;
                    overflow: hidden;
                    opacity: 0;
                }
                .faq-answer.open {
                    max-height: 200px; /* Adjust as needed */
                    opacity: 1;
                }
            `}</style>
            <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-xl">
                 <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-surface dark:bg-darkSurface mb-4 shadow-lg">
                    <NoorIcon isActive={true} className="w-16 h-16 text-primary" />
                 </div>
                <h1 className="text-3xl font-bold text-primary dark:text-primary-light">منصة نور التعليمية</h1>
                <p className="text-textSecondary dark:text-darkTextSecondary mt-2 max-w-2xl mx-auto">
                    بوابتك الرقمية للتعليم الإلكتروني في سلطنة عُمان، ومصدرك الأول للمواد التعليمية والتفاعل مع المعلمين.
                </p>
            </div>

            <InfoCard title="ما هي منصة نور؟" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
                 <p className="text-textSecondary dark:text-darkTextSecondary leading-relaxed">
                   منصة نور هي المنصة التعليمية الرسمية المعتمدة من وزارة التربية والتعليم في سلطنة عُمان. تم تصميمها لتكون بيئة تعليمية إلكترونية متكاملة تدعم الطلاب والمعلمين وأولياء الأمور، وتوفر لهم جميع الأدوات والمصادر اللازمة لتحقيق تجربة تعليمية غنية وفعالة عن بعد.
                </p>
            </InfoCard>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard title="أبرز المميزات" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}>
                    <ul className="list-disc list-inside space-y-2 text-textSecondary dark:text-darkTextSecondary">
                        <li>الوصول إلى الواجبات والاختبارات الإلكترونية.</li>
                        <li>متابعة الجداول الدراسية وحضور الحصص الافتراضية.</li>
                        <li>التواصل المباشر والآمن مع المعلمين.</li>
                        <li>مكتبة رقمية غنية بالمواد الإثرائية والتعليمية.</li>
                        <li>متابعة تقارير الأداء والدرجات بسهولة.</li>
                    </ul>
                </InfoCard>

                <InfoCard title="الأسئلة الشائعة" icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}>
                    <div className="space-y-2">
                        {faqData.map((item, index) => (
                            <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center text-right py-3 font-semibold text-textPrimary dark:text-darkTextPrimary"
                                >
                                    <span>{item.question}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                                    <p className="pb-3 text-textSecondary dark:text-darkTextSecondary">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </InfoCard>
            </div>

            <div 
                onClick={handleLinkClick}
                className="bg-surface dark:bg-darkSurface p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-2xl hover:border-primary dark:hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                    <h2 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary">الانتقال إلى المنصة</h2>
                    <p className="text-textSecondary dark:text-darkTextSecondary mt-1">lms.moe.gov.om</p>
            </div>

            <CopyrightFooter />
        </div>
    );
};