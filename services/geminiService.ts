import { GoogleGenAI, Type } from "@google/genai";
import { SmartInsight } from '../types';

// This file simulates Gemini API calls.
// In a real application, ensure process.env.API_KEY is securely managed.
// FIX: Removed MOCK_API_KEY to adhere to guideline of exclusively using process.env.API_KEY.
// const MOCK_API_KEY = "YOUR_API_KEY_HERE"; // Placeholder

const getAIClient = () => {
    // FIX: Updated to only check for process.env.API_KEY and initialize client with it exclusively, per Gemini API guidelines.
    if (!process.env.API_KEY) {
        console.warn("Gemini API key not found. Using mocked responses.");
        return null;
    }
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
}

const getSchoolContext = (userType: 'parent' | 'student'): string => {
    const baseContext = `أنت 'دُرّة'، مساعد ذكي لمدرسة درة الهاشمية للتعليم الأساسي (٥-٩) في ولاية بركاء، سلطنة عُمان.
المدرسة للبنات فقط. كن ودودًا ومتعاونًا في إجاباتك.`;

    const userSpecificContext = userType === 'parent'
        ? "أنت تخاطبين ولية أمر طالبة في المدرسة. استخدمي صيغة مخاطبة رسمية ومحترمة مثل 'سيدتي' أو 'يا ولية الأمر'. ركزي على تقديم معلومات دقيقة ومفيدة تساعدها في متابعة أداء ابنتها."
        : "أنت تخاطبين طالبة في المدرسة. استخدمي لغة بسيطة ومشجعة وودودة. كوني كصديقة ومرشدة لها، وشجعيها على طرح الأسئلة والتعلم.";

    return `${baseContext}\n${userSpecificContext}\n
معلومات المدرسة:
- تنشر المدرسة أخبارها على حسابات X (تويتر سابقًا) وإنستغرام.
- هناك فعاليات تربوية وتوعوية منتظمة مثل حملات التوعية، ورش العمل، وأنشطة رياضية.
- الأخصائية الاجتماعية، إيمان الفارسية، تعد نشرات توعوية متنوعة حول مواضيع مثل الاستخدام الآمن للإنترنت وإدارة الوقت.
- الأخصائية النفسية، موزة المالكية، تقدم برامج مهمة مثل 'جرعة وعي في التربية' و'برنامج يستحق النقاش' لدعم الطالبات وأولياء الأمور.
- الإدارة المدرسية تقود عدة مبادرات هامة لتحفيز الطالبات والمعلمات، منها: 'الدرة المتألقة' لتكريم المعلمات المجيدات، 'كوبون نافس' و 'همم درة' و 'أبجديات درة' و 'إثراء درة' لدعم الطالبات، 'الصف المنضبط' للمنافسة بين الفصول، 'الصفر الأنيق' و 'بصمة البكور' لتشجيع الحضور، 'باركود الغياب' لتسهيل رصد الحضور، 'السمت العماني' لتعزيز القيم الثقافية، 'نقطة حوار' لمناقشة التحديات، 'خط أحمر' للتوعية باللوائح، و 'كفو كفو' لتقدير جهود المعلمات.
- قسم 'أصدقاء الحاسوب' (تقنية المعلومات) بقيادة الأستاذة بشرى الفليتية، يشرف على مبادرات رقمية هامة مثل 'مجتمع تكنو درة' و'أمانك الرقمي' لتعزيز الوعي التقني، بالإضافة إلى ورشات عمل للمعلمات مثل ورشة 'Active Inspire' التي تقدمها الأستاذة أمل المالكية.
- قسم 'العلوم المرحة' يقدم تجارب علمية ممتعة، بالإضافة إلى مواد إثرائية مثل كراسة 'الأحياء بين أيدينا' من إعداد الأستاذة سارة الرواحي لدعم الطالبات.
- هناك محاضرات عن أنماط الحياة الصحية.
- يتم الإعلان عن نتائج الفصول الدراسية عبر إدارة المدرسة.
`;
};


const mockResponses: { [key: string]: string } = {
    "ما هو جدول الاختبارات القادمة؟": "بالتأكيد. تبدأ الاختبارات الفترية الأولى في شهر أكتوبر. يمكنك الاطلاع على الجدول الكامل حسب الصف الدراسي في صفحة 'الأحداث' بالتقويم.",
    "ما هي رؤية المدرسة؟": "رؤية المدرسة هي: جيل متميز علميا مخلص لوطنه متسلح بالإيمان والقيم مواكب لتطورات العصر. يمكنك معرفة المزيد في صفحة 'مدرستنا'.",
    "هل هناك توصيات جديدة من المعلمات؟": "نعم، توجد توصية من معلمة العلوم بخصوص التركيز على الواجبات، وتوصية من معلمة اللغة العربية لتشجيع الكتابة. يمكنك الاطلاع على التفاصيل في صفحة 'الأداء'.",
};

export const getAIResponse = async (prompt: string, userType: 'parent' | 'student'): Promise<string> => {
    const ai = getAIClient();
    if (!ai) {
        return new Promise(resolve => 
            setTimeout(() => resolve(mockResponses[prompt] || "أنا هنا للمساعدة في أي استفسار يخص مدرسة درة الهاشمية. كيف يمكنني خدمتك اليوم؟"), 1000)
        );
    }

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction: getSchoolContext(userType)
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "عذرًا، حدث خطأ أثناء محاولة الحصول على إجابة. يرجى المحاولة مرة أخرى.";
    }
};

const allMockInsights: SmartInsight[] = [
    // الأداء الدراسي
    { id: '1', title: 'تقدم أكاديمي', content: 'لوحظ تحسن أداء ابنتك في مادة العلوم بنسبة 15% هذا الأسبوع. استمرّي في تشجيعها بالمراجعة اليومية القصيرة.', color: 'bg-green-100 dark:bg-green-900/50' },
    { id: '2', title: 'متابعة دراسية', content: 'انخفاض طفيف في درجات اللغة الإنجليزية، جربي مراجعة المفردات الجديدة معها لمدة 10 دقائق يوميًا.', color: 'bg-yellow-100 dark:bg-yellow-900/50' },
    { id: '3', title: 'نمط التعلّم', content: 'تبيّن أن ابنتك تتفاعل أكثر في الحصص الصباحية، حاولي تنظيم مواعيد المذاكرة في هذا الوقت.', color: 'bg-blue-100 dark:bg-blue-900/50' },
    // الصحة والرفاه
    { id: '4', title: 'نصيحة صحية', content: 'ذكّري ابنتك بشرب الماء خلال اليوم الدراسي، فدرجات الحرارة مرتفعة اليوم.', color: 'bg-sky-100 dark:bg-sky-900/50' },
    { id: '5', title: 'تنبيه الحضور', content: 'سُجِّل تأخر في الحضور لثلاثة أيام، يُنصح بضبط مواعيد النوم لتجنب الإرهاق.', color: 'bg-red-100 dark:bg-red-900/50' },
    { id: '6', title: 'استعداد للنشاط', content: 'اليوم توجد فعالية رياضية، تأكدي أن تفطر جيدًا قبل الذهاب للمدرسة.', color: 'bg-teal-100 dark:bg-teal-900/50' },
    // التفاعل الاجتماعي
    { id: '7', title: 'تطور اجتماعي', content: 'ابنتك شاركت في نشاط جماعي جديد! هذا مؤشر جميل على تنمية مهارات التعاون.', color: 'bg-purple-100 dark:bg-purple-900/50' },
    { id: '8', title: 'تعزيز الثقة', content: 'لاحظنا انخفاض مشاركاتها الصفية مؤخرًا، ربما تحتاج إلى تشجيع بسيط لتعزيز الثقة.', color: 'bg-orange-100 dark:bg-orange-900/50' },
    // الأنشطة والمناسبات
    { id: '9', title: 'تذكير بفعالية', content: 'يُقام غدًا معرض المواهب في المدرسة. ساعدي ابنتك في تجهيز فقرتها.', color: 'bg-pink-100 dark:bg-pink-900/50' },
    { id: '10', title: 'استعداد للمنافسة', content: 'ابنتك مسجلة في سباق الجري الأسبوع المقبل. تأكدي من استعدادها البدني.', color: 'bg-lime-100 dark:bg-lime-900/50' },
    // نصائح عامة
    { id: '11', title: 'تحليل الأسبوع', content: 'تحليل الأسبوع يُظهر توازنًا جيدًا بين الدراسة والنشاط. استمرّي على هذا النمط.', color: 'bg-indigo-100 dark:bg-indigo-900/50' },
    { id: '12', title: 'نصيحة للهدوء', content: 'يبدو أن ابنتك تتوتر قبل الاختبارات، يمكن للتنفس العميق والمراجعة الهادئة مساعدتها كثيرًا.', color: 'bg-cyan-100 dark:bg-cyan-900/50' },
];

export const getSmartInsights = async (): Promise<SmartInsight[]> => {
    const ai = getAIClient();
    if (!ai) {
        // Shuffle the array and pick the first 4 for a dynamic feel
        const shuffled = [...allMockInsights].sort(() => 0.5 - Math.random());
        return Promise.resolve(shuffled.slice(0, 4));
    }
    
    try {
         const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: "Generate 4 smart insights for a student at Durrat Al Hashimiya School. The insights should cover different categories like academic performance, health, social interaction, and reminders for events.",
            config: {
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            title: { type: Type.STRING },
                            content: { type: Type.STRING },
                        },
                        required: ["title", "content"],
                    },
                },
                systemInstruction: getSchoolContext('parent'),
            },
        });

        const colors = ['bg-red-100 dark:bg-red-900/50', 'bg-green-100 dark:bg-green-900/50', 'bg-yellow-100 dark:bg-yellow-900/50', 'bg-blue-100 dark:bg-blue-900/50'];
        // FIX: Added .trim() to handle potential leading/trailing whitespace in JSON response.
        const insightsData = JSON.parse(response.text.trim());

        return insightsData.map((item: any, index: number) => ({
            id: `${index + 1}`,
            ...item,
            color: colors[index % colors.length],
        }));

    } catch (error) {
        console.error("Error fetching smart insights:", error);
        return [];
    }
}

const mockTips: { [key: string]: string } = {
    "الرياضيات": "1. **التدريب اليومي:** خصصي 15 دقيقة يوميًا لحل مسائل متنوعة.\n2. **ربط الرياضيات بالحياة:** استخدمي أمثلة من الواقع كحساب المشتريات لتبسيط المفاهيم.\n3. **الألعاب التعليمية:** استعيني بتطبيقات وألعاب الرياضيات لجعل التعلم ممتعًا.",
    "العلوم": "1. **التجارب البسيطة:** قوموا بعمل تجارب علمية بسيطة في المنزل",
};

export const getImprovementTips = async (subject: string, grade: number): Promise<string> => {
    const ai = getAIClient();
    if (!ai) {
        return new Promise(resolve => 
            setTimeout(() => resolve(mockTips[subject] || `نصائح عامة لمادة ${subject}: المراجعة المستمرة وحل التمارين بانتظام هما مفتاح النجاح.`), 1000)
        );
    }

    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `قدم 3 نصائح قصيرة ومباشرة لتحسين مستوى طالبة في مادة ${subject} درجتها الحالية هي ${grade} من 100.`,
            config: {
                systemInstruction: getSchoolContext('parent')
            }
        });
        return response.text;
    } catch (error) {
        console.error("Error fetching improvement tips:", error);
        return "عذرًا، لم أتمكن من جلب النصائح الآن. يرجى المحاولة لاحقًا.";
    }
};