import React from 'react';
import { CopyrightFooter } from '../components/CopyrightFooter';
import { VisionIcon } from '../components/icons/VisionIcon';
import { UsersIcon } from '../components/icons/UsersIcon';
import { HeartHandIcon } from '../components/icons/HeartHandIcon';
import { PuzzlePieceIcon } from '../components/icons/PuzzlePieceIcon';
import { ComputerFriendsIcon } from '../components/icons/ComputerFriendsIcon';
import { FunScienceIcon } from '../components/icons/FunScienceIcon';
import { BookOpenIcon } from '../components/icons/BookOpenIcon';
import { MissionIcon } from '../components/icons/MissionIcon';
import { HistoryIcon } from '../components/icons/HistoryIcon';
import { Accordion } from '../components/Accordion';
import { MindGrowthIcon } from '../components/icons/MindGrowthIcon';
import { KnowledgeGatewayIcon } from '../components/icons/KnowledgeGatewayIcon';

const topRowInfo = [
    {
        icon: VisionIcon,
        title: "رؤية المدرسة",
        content: <p>جيل متميز علميا مخلص لوطنه متسلح بالإيمان والقيم مواكب لتطورات العصر.</p>,
    },
    {
        icon: MissionIcon,
        title: "رسالة المدرسة",
        content: <p>تقديم تعليم متميز يرتقي بفكر الطالبات وينمي مهاراتهن من خلال منظومة تربوية مبدعة تستخدم أساليب تربوية حديثة.</p>,
    },
    {
        icon: HistoryIcon,
        title: "تاريخ المدرسة",
        content: <p>تأسست لتكون منارة للعلم والمعرفة، حاملة على عاتقها مسؤولية إعداد أجيال واعية تساهم في رفعة الوطن وازدهاره.</p>,
    },
];

const schoolAdminInitiatives = [
    {
        title: "مبادرة: الدرة المتألقة",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>تحفيز الهيئة التعليمية على الجد والاجتهاد وبذل قصارى الجهد في العملية التعليمية بمختلف جوانبها.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>حث الهيئة التعليمية على البذل والعطاء.</li>
                        <li>تحفيز المعلمات على المبادرة والابداع في العمل.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">آلية التنفيذ:</h4>
                     <ul className="list-disc list-inside space-y-2">
                        <li>حصر المعلمات المجيدات كل شهر.</li>
                        <li>تكريم المعلمات المجيدات في الطابور المدرسي.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "مبادرة: كوبون (نافس)",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>تحفيز الطالبات على المشاركة والتفاعل في جميع المواد والارتقاء بمستوياتهن التحصيلية من خلال توزيع كوبون نافس من قبل المعلمات في الحصص ومن ثم السحب بالقرعة وتكريم الطالبات.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>تكريم الطالبات المتفاعلات في الحصص.</li>
                        <li>الارتقاء بالمستويات التحصيلية للطالبات.</li>
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">الفئة المستهدفة:</h4>
                    <p>طالبات دون المستوى التحصيلي في مادة اللغة العربية من الصف الخامس الأساسي.</p>
                </div>
            </div>
        )
    },
     {
        title: "مبادرة: الصف المنضبط",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>مسابقة بين الفصول الدراسية بقيادة المعلمات رائدات الفصول، تتناول جوانب مثل النظافة والنظام وسلامة الأثاث. يتم تجميع الدرجات لتحديد الفصول الفائزة وتكريمها مع رائدة الصف.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>غرس القيم الحميدة في نفوس الطالبات.</li>
                        <li>المحافظة على البيئة الصفية نظيفة ومرتبة.</li>
                        <li>توفير البيئة التعليمية المحفزة.</li>
                        <li>تعويد الطالبات على تحمل المسؤولية.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "مبادرة: الصفر الأنيق",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>تحفيز المعلمات غير المتغيبات بتكريمهن نهاية كل شهر لحثهن على الاستمرارية في الدوام دون غياب.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>تمكين المعلمات من الانضباط التام.</li>
                        <li>تحفيز المعلمات على الالتزام بالدوام الرسمي.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "مبادرة: بصمة البكور",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>حث الهيئة التعليمية على الحضور المبكر للدوام المدرسي من خلال تكريم شهري للمبادرات بالحضور المبكر حسب متابعة إدارة المدرسة للبصمة من الايقونة بالبوابة التعليمية.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>ضبط الهيئة التعليمية في الحضور اليومي للمدرسة.</li>
                        <li>حث الهيئة التعليمية على الحضور المبكر.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "مبادرة: باركود الغياب",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>نشر باركود من قبل اخصائية قواعد بيانات في جميع القاعات الصفية، لتقوم كل معلمة بأخذ غياب الطالبات بشكل يومي اختصاراً للوقت والجهد.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>نشر التقانة في المدرسة.</li>
                        <li>اختصار الوقت والجهد.</li>
                        <li>الدقة في البيانات.</li>
                    </ul>
                </div>
            </div>
        )
    },
     {
        title: "مبادرة: همم درة",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>تقديم معلمات مادتي اللغة العربية والرياضيات لدروس تقوية في الفترة المسائية عن بعد عبر منصة الكلاس روم، من أجل الارتقاء بمستويات الطالبات.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>رفع المستوى التحصيلي للطالبات.</li>
                        <li>الارتقاء بمستويات الطالبات دون المستوى في مادتي اللغة العربية والرياضيات.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "مبادرة: أبجديات درة",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>الاستعانة بأولياء الأمور المتقاعدات من التربية والتعليم لتقديم حصص تقوية للطالبات دون المستوى التحصيلي في مادتي اللغة العربية والرياضيات.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>رفع المستوى التحصيلي للطالبات دون المستوى.</li>
                        <li>الارتقاء بمستويات الطالبات في اللفة العربية والرياضيات.</li>
                        <li>إكساب الطالبات مهارات القراءة والكتابة الصحيحة.</li>
                    </ul>
                </div>
            </div>
        )
    },
     {
        title: "مبادرة: إثراء درة",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>طرح أسئلة من امتحانات فصلية سابقة تتناسب مع موضوع الدرس في الحصة الدراسية، لتعويد الطالبات على نمط الأسئلة وتسهيل الاختبار الفصلي النهائي عليهن.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>تعويد الطالبات على أسئلة الاختبارات النهائية.</li>
                        <li>رفع المستوى التحصيلي للطالبات.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "مبادرة: السمت العماني",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>نشر وغرس العادات العمانية المعروفة في نفوس الطالبات من خلال تمثيل الأدوار، البرامج الإذاعية، وتفعيل حصص النشاط الأسبوعية.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>التعرف على العادات والتقاليد العمانية.</li>
                        <li>غرس القيم والعادات العمانية في نفوس الطالبات.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "مبادرة: نقطة حوار",
        content: (
             <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>عقد مديرة المدرسة لقاءات متفرقة مع معلمات المواد لمناقشة كل ما يخص المادة والوقوف على احتياجات المعلمات والتحديات وإيجاد الحلول المناسبة.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>التعرف على كل مادة واحتياجاتها.</li>
                        <li>العمل على إيجاد الحلول المناسبة التي ترتقي بالمادة للأفضل.</li>
                        <li>الارتقاء بمستويات الطالبات التحصيلية.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "مبادرة: خط أحمر",
        content: (
             <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>مسابقة بين الهيئة التعليمية تتناول الأنظمة واللوائح المنظمة للعمل، حيث يتم طرح أسئلة على المعلمات ويتم السحب على الإجابات الصحيحة وتكريم الفائزات.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>تعريف الهيئة التعليمة باللوائح والقوانين المنظمة للعمل.</li>
                        <li>نشر ثقافة القوانين المنظمة للعمل في المجتمع المدرسي.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "مبادرة: كفو كفو",
        content: (
             <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فكرة المشروع:</h4>
                    <p>بوستات تحفيزية للهيئة التعليمية تبث بين فترة وأخرى من أجل شحذ همم المعلمات للعطاء والتألق والتميز، وتتضمن عبارات شكر وتشجيع.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المشروع:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>بث روح العطاء والعمل في نفوس الهيئة التعليمية بالمدرسة.</li>
                    </ul>
                </div>
            </div>
        )
    },
];


const socialWorkerContent = [
    {
        title: "الاستخدام الآمن للإنترنت",
        content: (
            <ul className="list-disc list-inside space-y-2">
                <li>يجب تزويد أبنائكم بالمعرفة والمعلومات التي يحتاجونها للتنقل بأمان عبر المنصات الإلكترونية.</li>
                <li>تقديم الرعاية لأبنائكم لوضع قواعد توضح كيفية الاستخدام الآمن للإنترنت ومتابعتهم باستمرار.</li>
            </ul>
        )
    },
    {
        title: "إدارة الوقت",
        content: (
            <>
                <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">فائدة تنظيم الوقت:</h4>
                <ul className="list-disc list-inside space-y-2 mb-4">
                    <li>رفع المستوى الدراسي والحصول على درجات جيدة والتفوق المستمر.</li>
                    <li>الشعور بالسعادة نتيجة تنفيذ النشاطات والواجبات في وقتها المحدد.</li>
                    <li>رضا الأهل والمعلم والمدرسة نتيجة الإنجاز والتفوق.</li>
                </ul>
                <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">عوامل إضاعة الوقت:</h4>
                <ul className="list-disc list-inside space-y-2">
                    <li>تأخير الواجبات وحلها في أوقات متأخرة.</li>
                    <li>اللعب ومشاهدة التلفزيون لساعات طويلة.</li>
                    <li>كثرة الاتصالات الهاتفية وزيارات الأصدقاء غير المنظمة.</li>
                    <li>تأجيل النشاطات والواجبات. تذكر: "لا تؤجل عمل اليوم إلى الغد".</li>
                </ul>
            </>
        )
    },
    {
        title: "همسات النجاح",
        content: (
            <ul className="list-disc list-inside space-y-2">
                <li>أفضل وأنجح تنافس هو التنافس مع الذات.</li>
                <li>لا تستسلم أبداً للفشل، وكن طاقة إيجابية مؤثرة.</li>
                <li>السمعة الجيدة ثروة عظيمة، فحافظ عليها.</li>
                <li>أسعد شيء في الحياة أن تكون مقتنعاً بأنك تكافح للحصول على كل ما تستحقه.</li>
                <li>كن متسامحاً، لا تنس ذكر الله، واستمتع في تحقيق المستحيل.</li>
            </ul>
        )
    },
    {
        title: "أهمية ممارسة الرياضة",
        content: (
            <ul className="list-disc list-inside space-y-2">
                <li>تقوي العضلات وتمنحك النشاط والحيوية.</li>
                <li>تحمي من مخاطر السمنة وأمراض القلب والسكري.</li>
                <li>تساعد في تكوين الصداقات وتزيد من استمتاعك بوقت الفراغ.</li>
                <li>تساعد على التركيز والتذكر في الدراسة.</li>
                <li>تعزز الثقة بالنفس وتقلل من التوتر النفسي.</li>
            </ul>
        )
    },
    {
        title: "نصائح تربوية",
        content: (
             <ul className="list-disc list-inside space-y-2">
                <li>التحكم الزائد في الأبناء يشوه شخصيتهم. امنحوهم مساحة من الحرية لاتخاذ قراراتهم.</li>
                <li>علموا أبناءكم العطاء، فليس شرطاً أن يكون مادياً. كلمة خير، ابتسامة، وكف الأذى عن الآخرين هي من أسمى أنواع العطاء.</li>
            </ul>
        )
    },
    {
        title: "قيمة الانضباط",
        content: (
           <p>الانضباط قيمة رائعة نزرعها في نفوس أبنائنا، وتحقيقها مسؤولية مشتركة بين الأسرة والمدرسة، ونتيجتها التميز والتفوق.</p>
        )
    },
    {
        title: "تخفيف الحقيبة المدرسية",
        content: (
            <ul className="list-disc list-inside space-y-2">
                <li>ساعدي ابنتك على ترتيب حقيبتها يومياً بما تحتاجه فقط.</li>
                <li>اجعليها تحمل ملفاً في يدها لتخفيف الحمل.</li>
                <li>ذكريها بحمل الحقيبة على الكتفين معاً لتوزيع الوزن.</li>
            </ul>
        )
    },
    {
        title: "الزي المدرسي (إناث - الصفوف من ٥ - ١٢)",
        content: (
            <div className="space-y-3">
                 <p>الزي المدرسي المعتمد للطالبات من الصف الخامس حتى الثاني عشر يتكون من الأجزاء التالية:</p>
                 <ul className="list-disc list-inside space-y-2">
                    <li><span className="font-semibold text-textPrimary dark:text-darkTextPrimary">اللحاف:</span> أبيض</li>
                    <li><span className="font-semibold text-textPrimary dark:text-darkTextPrimary">المريول:</span> أزرق نيلي والقميص أبيض</li>
                    <li><span className="font-semibold text-textPrimary dark:text-darkTextPrimary">السروال (البنطال):</span> أبيض</li>
                    <li><span className="font-semibold text-textPrimary dark:text-darkTextPrimary">الحذاء:</span> أسود مع الجوارب البيضاء</li>
                </ul>
            </div>
        )
    }
];

const psychologistPrograms = [
    {
        title: "جرعة وعي في التربية",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف البرنامج:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>توعية الأمهات حول أساليب تربوية فعالة بحيث تعزز سلوكاً حسناً عند الابناء ولا تدمرهم عاطفياً.</li>
                        <li>توعية الأمهات حول ضرورة وجود الحب الاسري والتعبير عنه وذلك بالاحتواء داخل الاسرة والمصاحبة بين الوالدين والأبناء.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">آلية تنفيذ البرنامج:</h4>
                    <p>يتم نشر بوستر توعوي كل يوم أحد في مواقع التواصل الاجتماعي.</p>
                </div>
                 <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">جرعات من الوعي:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>إن خمس دقائق تنصت فيها لأبناءك قد تجعلك تتفادى تضييع ساعات في معالجة مشكلات ناجمة عن قلة التواصل والمناقشة. فتخصيص القليل من الوقت لهم يعني أنك تود التواصل معهم، وتحاول فهمهم وتفهم حاجاتهم ورغباتهم، وأنك تشعر بهم.</li>
                        <li>هناك أمور شائعة منتشرة أصبحت تسبب صعوبات في التربية، بيدنا التحكم بها. لا ننكر أن التربية صعبة وتتطلب مجهود كبير، ولكن في بعض الأوقات نحن من نجعلها رحلة أصعب.</li>
                    </ul>
                </div>
            </div>
        )
    },
    {
        title: "برنامج يستحق النقاش",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">مبررات البرنامج:</h4>
                    <p>نظراً لخصائص ومشكلات مرحلة المراهقة التي تعتبر من أدق المراحل في الإدراك والإحتواء وذلك لتدفقها وإستقلالالها وما يطرأ فيها من تغيرات فسيولوجية جسدية وتطورات نفسية عاطفية.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف البرنامج:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>إحتواء وحوار ومناقشة الطالبات في سن المراهقة.</li>
                        <li>تقديم توعية للطالبات والأمهات حول المشكلات التي تواجه الطالبات في سن المراهقة.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">آلية تنفيذ البرنامج:</h4>
                    <p>البرنامج عبارة عن حلقات توعوية تحمل عناوين خاصة تناقش مشكلات تختص بمرحلة المراهقة ويتم تنفيذها في حصة النشاط. حلقات من البودكاست للأمهات يتم إرسالها في مواقع التواصل الاجتماعي.</p>
                </div>
            </div>
        )
    },
    {
        title: "مبادرة بناء قادة التغيير",
        content: (
            <div className="space-y-4">
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">مبررات المبادرة:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>تغير حاجة الطالبات النفسية تبعاً لتغير مراحل العمر المختلفة.</li>
                        <li>التغيرات الدرسية والإجتماعية للطالبات وحاجتهم للإرشاد بالأقران ليساعدهم على التعايش مع هذا التغير.</li>
                        <li>زيادة الكثافة الطلابية في المدرسة.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">أهداف المبادرة:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>تعزيز طور الارشاد الطلابي في جميع مجالاته.</li>
                        <li>مساعدة التخصصية النفسية في التعرف والحد من المشكلات السلوكية والنفسية.</li>
                        <li>تعزيز التعاون المشترك بين الطالبات.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">آلية التنفيذ:</h4>
                    <ul className="list-disc list-inside space-y-2">
                        <li>عمل لقاء أولي لتعريفهم بفكرة ونهذف المبادرة.</li>
                        <li>عمل إستبيان قبلي لهم.</li>
                        <li>عمل مجموعة ورش تدريبية لتهيئتهم في التعامل مع المشكلات والتعرف على بعض الاستراتيجيات لبناء قادة التغيير.</li>
                    </ul>
                </div>
            </div>
        )
    }
];

const departmentsInfo = [
    {
        icon: UsersIcon,
        title: "فريق درة الهاشمية (5-9)",
        content: (
             <>
                <p className="mb-4">يعمل فريق الإدارة على ضمان سير العملية التعليمية بسلاسة وفعالية، وتوفير الدعم اللازم للمعلمات والطالبات وأولياء الأمور. تجدون أدناه أبرز المبادرات التي تقودها الإدارة:</p>
                <div className="border-t border-gray-200 dark:border-gray-700">
                    {schoolAdminInitiatives.map((item, index) => (
                        <Accordion key={index} title={item.title}>
                            {item.content}
                        </Accordion>
                    ))}
                </div>
                 <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm font-semibold text-textSecondary dark:text-darkTextSecondary">
                    الإدارة المدرسية
                </div>
            </>
        ),
    },
    {
        icon: HeartHandIcon,
        title: "البوابة الاجتماعية",
        content: (
            <>
                <p className="mb-4">تقدم الدعم النفسي والاجتماعي للطالبات، وتساعد في حل المشكلات السلوكية والأسرية، وتعزز القيم الإيجابية في البيئة المدرسية. تجدون أدناه نشرات توعوية هامة من إعدادها.</p>
                <div className="border-t border-gray-200 dark:border-gray-700">
                    {socialWorkerContent.map((item, index) => (
                        <Accordion key={index} title={item.title}>
                            {item.content}
                        </Accordion>
                    ))}
                </div>
                 <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm font-semibold text-textSecondary dark:text-darkTextSecondary">
                    الاخصائية الاجتماعية: إيمان الفارسية
                </div>
            </>
        ),
    },
    {
        icon: MindGrowthIcon,
        title: "ما حوته النفس",
        content: (
            <>
                <p className="mb-4">متخصصة في تقييم وتشخيص الصعوبات النفسية والتعليمية، وتقديم جلسات إرشاد فردية وجماعية لتحسين الصحة النفسية للطالبات. تجدون أدناه برامج ومبادرات من إعدادها.</p>
                <div className="border-t border-gray-200 dark:border-gray-700">
                    {psychologistPrograms.map((item, index) => (
                        <Accordion key={index} title={item.title}>
                            {item.content}
                        </Accordion>
                    ))}
                </div>
                 <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm font-semibold text-textSecondary dark:text-darkTextSecondary">
                    الاخصائية النفسية: موزة المالكية
                </div>
            </>
        ),
    },
    {
        icon: PuzzlePieceIcon,
        title: "قسم أخصائية أنشطة مدرسية",
        content: <p>مسؤولة عن تنظيم وتنفيذ الأنشطة اللاصفية التي تهدف إلى تنمية مواهب الطالبات وتعزيز مهاراتهن في مختلف المجالات.</p>,
    },
    {
        icon: KnowledgeGatewayIcon,
        title: "بوابة العلم والمعرفة",
        content: (
            <>
                <p className="mb-4">يوفر مجموعة واسعة من الكتب والمصادر الرقمية والوسائل التعليمية لدعم المناهج الدراسية وتشجيع الطالبات على القراءة والبحث. لضمان بيئة تعليمية مناسبة للجميع، يرجى الالتزام بالأخلاقيات التالية:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>التزام الهدوء عند استخدام المركز.</li>
                    <li>يمنع الأكل والشرب داخل المركز.</li>
                    <li>عدم إخراج مواد من المركز بدون استعارتها.</li>
                    <li>عدم تشويه وإتلاف محتويات المركز.</li>
                    <li>يمنع الكتابة على كتب المركز.</li>
                    <li>عدم العبث بأجهزة الحاسب الآلي.</li>
                    <li>الحرص على ترك المكان أفضل مما كان.</li>
                </ul>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm font-semibold text-textSecondary dark:text-darkTextSecondary">
                    أخصائية مركز مصادر التعلم: زيون الشرجية
                </div>
            </>
        ),
    },
    {
        icon: ComputerFriendsIcon,
        title: "أصدقاء الحاسوب",
        content: (
            <>
                <p className="mb-4">قسم مخصص لتمكين الطالبات والمعلمات من اكتساب المهارات التقنية اللازمة للعصر الرقمي، ويشرف على مبادرات رائدة لتعزيز الوعي الرقمي.</p>
                <div className="border-t border-gray-200 dark:border-gray-700">
                    <Accordion title="ورشة: برنامج السبورة التفاعلية (Active Inspire)">
                        <div className="space-y-2 text-center">
                            <p className="font-semibold">"من الصفر وحتى الاحتراف"</p>
                            <p className="text-sm">ورشة تدريبية مقدمة للمعلمات لتعزيز مهاراتهن في استخدام السبورة التفاعلية.</p>
                            <p className="text-xs pt-2 mt-2 border-t border-gray-200 dark:border-gray-700">تنفيذ الورشة: الأستاذة أمل المالكية</p>
                        </div>
                    </Accordion>
                    <Accordion title="مبادرة: مجتمع تكنو درة وأمانك الرقمي (للطالبات وأولياء الأمور)">
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">الفكرة العامة:</h4>
                                <p>إنشاء قناة تعليمية لنشر المعرفة الرقمية وبناء مجتمع واعٍ بالأحداث والأخبار الرقمية الجديدة والمفيدة.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2 text-primary dark:text-primary-light">الأهداف:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>بناء جيل صالح في نشر الهوية العمانية الرقمية.</li>
                                    <li>مواكبة كل جديد يخدم الطلبة وأولياء أمورهم في الحفاظ والوعي بمجريات الأحداث التقنية.</li>
                                    <li>التوعية بأهمية الذكاء الاصطناعي وأهمية استخدامه بتقنين.</li>
                                </ul>
                            </div>
                            <p className="text-xs text-center p-2 bg-gray-100 dark:bg-gray-700/50 rounded-md">تشرف على المبادرة الأستاذة: بشرى بنت سالم بن حميد الفليتية</p>
                        </div>
                    </Accordion>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm font-semibold text-textSecondary dark:text-darkTextSecondary">
                    معلمات تقنية المعلومات
                </div>
            </>
        ),
    },
    {
        icon: FunScienceIcon,
        title: "العلوم المرحة",
        content: (
            <>
                <p className="mb-4">بيئة عملية مجهزة لإجراء التجارب العلمية، مما يساعد الطالبات على فهم المفاهيم النظرية وتطبيقها عملياً بشكل آمن وممتع.</p>
                <div className="border-t border-gray-200 dark:border-gray-700">
                    <Accordion title="كراسة الأنشطة الإثرائية: الأحياء بين أيدينا">
                        <div className="space-y-3">
                            <p>كراسة إثرائية ممتعة لمادة الأحياء للصف التاسع، مصممة لتكون دليلاً في رحلة استكشاف المادة وتعزيز الفهم.</p>
                            <h4 className="font-semibold text-primary dark:text-primary-light pt-2">أهداف الكراسة:</h4>
                            <ul className="list-disc list-inside text-sm">
                                <li>تبسيط المفاهيم العلمية.</li>
                                <li>ربط المعلومات بالحياة اليومية.</li>
                                <li>تنمية مهارات التفكير العلمي والاستقصاء.</li>
                            </ul>
                            <p className="text-xs text-center p-2 bg-gray-100 dark:bg-gray-700/50 rounded-md mt-2">
                                إعداد: أ/ سارة الرواحي
                            </p>
                        </div>
                    </Accordion>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center text-sm font-semibold text-textSecondary dark:text-darkTextSecondary">
                    معلمات وفنية مختبرات العلوم
                </div>
            </>
        ),
    },
     {
        icon: BookOpenIcon,
        title: "عمان والتاريخ",
        content: <p>ركن مخصص لإثراء معرفة الطالبات بتاريخ سلطنة عُمان العريق وحضارتها، وتعزيز الانتماء الوطني والاعتزاز بالهوية العُمانية.</p>,
    },
];


const InfoCard: React.FC<{ icon: React.FC<any>; title: string; children: React.ReactNode; }> = ({ icon: Icon, title, children }) => (
    <div className="bg-surface dark:bg-darkSurface p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 h-full">
        <div className="flex items-center mb-4">
            <div className="text-primary">
                 <Icon className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary mr-4">{title}</h2>
        </div>
        <div className="text-textSecondary dark:text-darkTextSecondary">{children}</div>
    </div>
);

export const SchoolPage: React.FC = () => {
    return (
        <div className="p-4 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {topRowInfo.map((item, index) => (
                    <InfoCard key={index} icon={item.icon} title={item.title}>
                        {item.content}
                    </InfoCard>
                ))}
            </div>
            <div className="border-t border-gray-200 dark:border-gray-700 my-6"></div>
            <h2 className="text-2xl font-bold text-center text-textPrimary dark:text-darkTextPrimary">الأقسام والمرافق</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {departmentsInfo.map((item, index) => (
                    <InfoCard key={index} icon={item.icon} title={item.title}>
                        {item.content}
                    </InfoCard>
                ))}
            </div>
            <CopyrightFooter />
        </div>
    );
};