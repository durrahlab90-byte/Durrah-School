import React from 'react';
import { CopyrightFooter } from '../components/CopyrightFooter';
import { Accordion } from '../components/Accordion';

const InfoCard: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className }) => (
    <div className={`bg-surface dark:bg-darkSurface p-4 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 ${className}`}>
        <h2 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary mb-4">{title}</h2>
        <div className="space-y-4 text-textSecondary dark:text-darkTextSecondary">{children}</div>
    </div>
);

export const TrophyPage: React.FC = () => {
    return (
        <div className="p-4 space-y-6">
            <div className="text-center p-6 bg-gradient-to-br from-amber-100 to-primary/10 dark:from-amber-900/20 dark:to-primary/20 rounded-xl">
                 <div className="mx-auto w-24 h-24 flex items-center justify-center rounded-full bg-surface dark:bg-darkSurface mb-4 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" /><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" /><path d="M4 22h16" /><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" /><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" /><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" /></svg>
                 </div>
                <h1 className="text-3xl font-bold text-amber-600 dark:text-amber-400">المسابقات الطلابية في المواهب والإبداع</h1>
                <p className="text-textSecondary dark:text-darkTextSecondary mt-2 max-w-2xl mx-auto">
                    بوابة الطالبة الموهوبة لاستكشاف والمشاركة في المسابقات الوزارية (للصفوف 5-9).
                </p>
            </div>

            <InfoCard title="مسابقات وزارة التربية والتعليم">
                <Accordion title="📖 مسابقة القرآن الكريم">
                     <div className="space-y-4">
                        <p>تُعد من أقدم المبادرات التربوية، وتهدف إلى ترسيخ قيم ومبادئ كتاب الله تعالى في نفوس الطلبة.</p>
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">المسار الأول: الحفظ العام</h4>
                            <p>يستهدف جميع طلبة المدارس من التعليم المبكر حتى ما بعد الأساسي، ويتضمن خمسة مستويات تنافسية.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">المسار الثاني: الحفظ الخاص بذوي الإعاقة</h4>
                            <p>يضمن الشمولية لجميع الطلبة ذوي الإعاقة (سمعية، بصرية، فكرية)، وينقسم إلى ثلاثة أقسام فرعية، كل منها يضم ثلاثة مستويات.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">المسار الثالث: إتقان التلاوة والصوت الحسن</h4>
                            <p>مخصص للطلبة العُمانيين، ويركز على الأداء الصوتي والجمالي في التلاوة، ويتضمن ثلاثة مستويات.</p>
                        </div>
                    </div>
                </Accordion>
                 <Accordion title="✍️ مسابقات اللغة العربية">
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">جائزة الفراهيدي للغة العربية</h4>
                            <p>تهدف إلى تعميق الارتباط باللغة العربية الفصحى وتشجيع الإبداع اللغوي. مجالاتها:</p>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li><strong>القراءة العربية:</strong> استيعاب وتحليل النصوص.</li>
                                <li><strong>الكتابة العربية:</strong> التعبير الكتابي المنظم والحجاجي.</li>
                                <li><strong>الإبداع الأدبي:</strong> كتابة القصة، القصيدة، الخطبة، والمسرحية.</li>
                                <li><strong>المحادثة والإلقاء:</strong> الأداء الشفهي المؤثر والمناظرات.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">المسابقات الشفهية المنهجية</h4>
                            <p>تُجرى بشكل مستمر داخل المدرسة طوال العام الدراسي وتستهدف جميع طلاب الصفوف من الخامس إلى العاشر لضمان تطبيقها المنهجي.</p>
                        </div>
                    </div>
                </Accordion>
                 <Accordion title="🎨 مسابقات الفنون التشكيلية">
                    <div className="space-y-4">
                        <p>تتبنى الوزارة منهجاً تربوياً دقيقاً يقوم على تصنيف الطلاب المشاركين بناءً على مراحلهم النمائية والفنية.</p>
                         <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">الفئات المستهدفة (5-9):</h4>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li><strong>الفئة الثانية (الصفوف 4-6):</strong> مرحلة محاولة التعبير الواقعي.</li>
                                <li><strong>الفئة الثالثة (الصفوف 7-9):</strong> مرحلة التعبير الواقعي.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">الشروط العامة:</h4>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li>الالتزام بموضوع الرسم المحدد والخامة اللونية والمقاس.</li>
                                <li>تعبئة استمارة الاشتراك بالكامل وتثبيتها خلف اللوحة.</li>
                                <li>لا يحق للمتسابق المطالبة بلوحته بعد انتهاء المسابقة.</li>
                            </ul>
                        </div>
                    </div>
                </Accordion>
                 <Accordion title="💡 ريادة الأعمال والمهارات الحياتية">
                     <div className="space-y-4">
                        <h4 className="font-semibold text-primary dark:text-primary-light">برنامج ومسابقة "الشركة"</h4>
                        <p>
                            يُعد هذا البرنامج مثالاً بارزاً للتعاون الاستراتيجي بين وزارة التربية والتعليم ومؤسسة "إنجاز عُمان"، ويهدف بشكل أساسي إلى تعزيز مهارات الطلبة في مجال ريادة الأعمال وتوظيف الأفكار المبتكرة.
                            يتم اكتشاف الطلبة أصحاب المشاريع الريادية ومساعدتهم على تحويل أفكارهم إلى مشروعات فعلية، مع التركيز على الحلول المستدامة للتحديات البيئية والصناعية والتقنية.
                        </p>
                    </div>
                </Accordion>
                <Accordion title="💻 المسابقة العمانية للبرمجة">
                    <div className="space-y-4">
                        <p>
                            مسابقة وطنية تهدف إلى نشر ثقافة البرمجة بين النشء، وتشجيعهم على التفكير المنطقي وحل المشكلات باستخدام التقنية. تُنظم بالتعاون مع الجمعية العمانية لتقنية المعلومات.
                        </p>
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">الفئات المستهدفة (الحلقة الثانية):</h4>
                            <p>
                                تركز المسابقة في هذه المرحلة على البرمجة المرئية (Block-based programming) مثل سكراتش (Scratch) وتحديات الروبوتات البسيطة، مما يجعلها مدخلاً ممتعاً لعالم البرمجة.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">أهداف المسابقة:</h4>
                            <ul className="list-disc list-inside space-y-1 mt-2">
                                <li>اكتشاف المواهب الشابة في مجال البرمجة والروبوت.</li>
                                <li>تنمية مهارات التفكير الحاسوبي والإبداع التقني.</li>
                                <li>تأهيل الطلاب للمشاركة في المسابقات الإقليمية والدولية.</li>
                            </ul>
                        </div>
                    </div>
                </Accordion>
            </InfoCard>

            <InfoCard title="مسابقات تعليمية جنوب الباطنة (2024/2025)">
                <Accordion title="📖 مسابقة حفظ وإتقان تلاوة القرآن الكريم">
                    <div className="space-y-4">
                        <p>تُعتبر نشاطاً تعليمياً وثقافياً مركزياً في المحافظة، حيث شهدت مشاركة واسعة بلغت <strong>730 متسابقاً ومتسابقة</strong> في العام الدراسي 2024/2025، وتم تكريم 176 من حفظة القرآن الكريم.</p>
                    </div>
                </Accordion>
                <Accordion title="🗣️ مسابقة المناظرات الطلابية">
                    <div className="space-y-4">
                        <p>مسابقة رائدة تهدف إلى صقل المهارات الفكرية ومهارات القرن الحادي والعشرين. يشارك فيها الطلاب لتحليل القضايا ومناقشتها بأسلوب علمي، مما ينمي لديهم مهارات التفكير النقدي، الخطابة، والقيادة الفكرية.</p>
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">مؤشرات الأداء:</h4>
                            <p>شارك في تصفيات العام الدراسي 2024/2025م <strong>288 طالباً وطالبة</strong>، وتم إعدادهم وتأهيلهم عبر مدربين ومحكمين دوليين لتمثيل المحافظة على مستوى سلطنة عُمان.</p>
                        </div>
                    </div>
                </Accordion>
                 <Accordion title="🔬 برامج الموهبة والابتكار (STEM)">
                    <div className="space-y-4">
                        <p>تركز المحافظة على بناء بنية تحتية قوية لإعداد فرق تنافسية في مجال العلوم والتكنولوجيا والهندسة والرياضيات (STEM).</p>
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">جائزة تعليمية جنوب الباطنة للابتكار:</h4>
                            <p>مسابقة محلية ينفذها قسم الابتكار والأولمبياد العلمي، وتهدف إلى تشجيع الطلاب على تقديم حلول مبتكرة للتحديات العلمية والتكنولوجية، وتطبيق ما تعلموه في بيئة تنافسية منظمة.</p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">البرنامج الوطني "ثروة 4":</h4>
                            <p>هو الآلية الرسمية لاكتشاف ورعاية الطلبة الموهوبين، ويمثل المرحلة التأسيسية لتأهيلهم للمسابقات التخصصية في الابتكار والعلوم.</p>
                        </div>
                         <div>
                            <h4 className="font-semibold text-primary dark:text-primary-light">برنامج "روبوتات VEX IQ":</h4>
                            <p>برنامج تدريبي متخصص لإعداد فرق قادرة على المشاركة بفاعلية في مسابقات الروبوتات على المستويين الوطني والدولي.</p>
                        </div>
                    </div>
                </Accordion>
                 <Accordion title="☀️ الأنشطة والمسابقات الصيفية">
                     <div className="space-y-4">
                        <p>
                           بالتعاون مع بلدية جنوب الباطنة، يتم تنظيم برامج صيفية مثل "تواصل ونماء" لاستثمار الإجازة في تنمية مهارات الطالبات. تشمل هذه البرامج مسابقات ثقافية وأنشطة رياضية وحلقات إبداعية لضمان استمرارية صقل المهارات على مدار العام.
                        </p>
                    </div>
                </Accordion>
            </InfoCard>

            <CopyrightFooter />
        </div>
    );
};