import React, { useState, useEffect, useRef } from 'react';
import { CopyrightFooter } from '../components/CopyrightFooter';
import { LockClosedIcon } from '../components/icons/LockClosedIcon';
import { ChatBubbleLeftRightIcon } from '../components/icons/ChatBubbleLeftRightIcon';
import { ChevronRightIcon } from '../components/icons/ChevronRightIcon';
import { XMarkIcon } from '../components/icons/XMarkIcon';
import { InformationCircleIcon } from '../components/icons/InformationCircleIcon';
import { CameraIcon } from '../components/icons/CameraIcon';
import { UserCircleIcon } from '../components/icons/UserCircleIcon';
import { MicrophoneIcon } from '../components/icons/MicrophoneIcon';

interface SettingsPageProps {
  setActivePage: (page: string) => void;
  onProfilePicChange: (picDataUrl: string) => void;
  profilePic: string | null;
  userName: string;
  userType: 'parent' | 'student';
  appLockEnabled: boolean;
  saveChatHistory: boolean;
  voiceInputEnabled: boolean;
  onAppLockChange: (enabled: boolean) => void;
  onSaveChatHistoryChange: (enabled: boolean) => void;
  onVoiceInputChange: (enabled: boolean) => void;
}

const Modal: React.FC<{ title: string; onClose: () => void; children: React.ReactNode }> = ({ title, onClose, children }) => (
    <div className="absolute inset-0 bg-black/60 z-50 flex justify-center items-center p-4 backdrop-blur-sm animate-fade-in">
         <style>{`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .animate-fade-in { animation: fade-in 0.3s ease-out; }
        `}</style>
        <div className="bg-surface dark:bg-darkSurface rounded-lg shadow-xl w-full max-w-lg max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b dark:border-gray-700">
                <h3 className="text-lg font-bold text-textPrimary dark:text-darkTextPrimary">{title}</h3>
                <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    <XMarkIcon className="w-6 h-6 text-gray-500" />
                </button>
            </div>
            <div className="p-6 overflow-y-auto space-y-4 text-textSecondary dark:text-darkTextSecondary">
                {children}
            </div>
        </div>
    </div>
);

const ToggleSwitch: React.FC<{ label: string, enabled: boolean, setEnabled: (enabled: boolean) => void, icon: React.ReactNode }> = ({ label, enabled, setEnabled, icon }) => (
    <div className="flex justify-between items-center bg-gray-50 dark:bg-darkSurface/50 p-3 rounded-lg">
        <div className="flex items-center gap-3">
            <div className="text-gray-500 dark:text-gray-400">{icon}</div>
            <span className="text-textPrimary dark:text-darkTextPrimary font-medium">{label}</span>
        </div>
        <button
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors ${
                enabled ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
            }`}
            aria-label={`Toggle ${label}`}
        >
            <span
                className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${
                    enabled ? 'translate-x-6' : 'translate-x-1'
                }`}
            />
        </button>
    </div>
);

const SettingsCard: React.FC<{ title: string; children: React.ReactNode; icon?: React.ReactNode; }> = ({ title, children, icon }) => (
    <div className="bg-surface dark:bg-darkSurface p-4 rounded-xl shadow-sm">
        {icon ? (
            <div className="flex items-center gap-3 mb-4 px-2">
                <div className="text-gray-500 dark:text-gray-400">{icon}</div>
                <h2 className="text-lg font-bold text-textPrimary dark:text-darkTextPrimary">{title}</h2>
            </div>
        ) : (
            <h2 className="text-lg font-bold text-textPrimary dark:text-darkTextPrimary mb-4 px-2">{title}</h2>
        )}
        <div className="space-y-3">
            {children}
        </div>
    </div>
);

const AccountLink: React.FC<{ text: string; onClick: () => void; }> = ({ text, onClick }) => (
    <button onClick={onClick} className="flex justify-between items-center w-full text-start bg-gray-50 dark:bg-darkSurface/50 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors">
        <span className="text-textPrimary dark:text-darkTextPrimary font-medium">{text}</span>
        <ChevronRightIcon className="w-5 h-5 text-gray-400 dark:text-gray-500 transform -rotate-180" />
    </button>
);

export const SettingsPage: React.FC<SettingsPageProps> = ({ 
    setActivePage, 
    onProfilePicChange, 
    profilePic, 
    userName, 
    userType,
    appLockEnabled,
    saveChatHistory,
    voiceInputEnabled,
    onAppLockChange,
    onSaveChatHistoryChange,
    onVoiceInputChange
}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);
    const [showPrivacyModal, setShowPrivacyModal] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark');
        setIsDarkMode(isDark);
    }, []);

    const toggleDarkMode = (enabled: boolean) => {
        setIsDarkMode(enabled);
        if (enabled) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };

    const handleImageUpload = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onProfilePicChange(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };
    
    const nameLabel = userType === 'parent' ? 'اسم الطالبة' : 'اسمك';


    return (
        <div className="p-4 space-y-6">
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
            />
            <div className="flex flex-col items-center text-center py-4">
                <div className="relative mb-3">
                    <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                        {profilePic ? (
                            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <UserCircleIcon className="w-20 h-20 text-gray-400 dark:text-gray-500" />
                        )}
                    </div>
                    <button
                        onClick={handleImageUpload}
                        className="absolute bottom-0 left-0 bg-primary text-white rounded-full p-1.5 border-2 border-surface dark:border-darkSurface hover:bg-primary-dark transition-colors"
                        aria-label="Change profile picture"
                    >
                        <CameraIcon className="w-5 h-5" />
                    </button>
                </div>
                <p className="text-sm text-textSecondary dark:text-darkTextSecondary">{nameLabel}</p>
                <h1 className="text-xl font-bold text-textPrimary dark:text-darkTextPrimary">{userName}</h1>
            </div>

            <SettingsCard title="الإعدادات العامة">
                <ToggleSwitch 
                    label="الوضع الليلي" 
                    enabled={isDarkMode} 
                    setEnabled={toggleDarkMode}
                    icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
                />
            </SettingsCard>
            
             <SettingsCard title="الخصوصية والأمان">
                 <ToggleSwitch 
                    label="الاستماع الصوتي" 
                    enabled={voiceInputEnabled} 
                    setEnabled={onVoiceInputChange}
                    icon={<MicrophoneIcon className="w-6 h-6" />}
                />
                <ToggleSwitch 
                    label="قفل التطبيق" 
                    enabled={appLockEnabled} 
                    setEnabled={onAppLockChange}
                    icon={<LockClosedIcon className="w-6 h-6" />}
                />
                 <ToggleSwitch 
                    label="حفظ سجل المحادثة" 
                    enabled={saveChatHistory} 
                    setEnabled={onSaveChatHistoryChange}
                    icon={<ChatBubbleLeftRightIcon className="w-6 h-6" />}
                />
            </SettingsCard>

            <SettingsCard title="عن التطبيق" icon={<InformationCircleIcon className="w-6 h-6" />}>
                <AccountLink text="شروط الاستخدام" onClick={() => setShowTermsModal(true)} />
                <AccountLink text="سياسة الخصوصية" onClick={() => setShowPrivacyModal(true)} />
                 <div className="text-sm text-center text-textSecondary dark:text-darkTextSecondary px-3 pt-2">
                    <p>الإصدار 1.0.0 (تجريبي)</p>
                </div>
            </SettingsCard>
            
            {showTermsModal && (
                <Modal title="شروط الاستخدام" onClose={() => setShowTermsModal(false)}>
                    <p className="font-semibold text-textPrimary dark:text-darkTextPrimary">مرحبًا بك في تطبيق 'اسأل دُرّة'.</p>
                    <p>هذا التطبيق هو أداة ذكية مصممة خصيصًا لأولياء أمور طالبات مدرسة درة الهاشمية (5-9) لتعزيز التواصل وتقديم الدعم.</p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        <li>يُستخدم التطبيق للأغراض التعليمية والتربوية فقط، بهدف متابعة أداء الطالبة وتسهيل التواصل مع المدرسة.</li>
                        <li>المعلومات المقدمة من 'دُرّة' هي إرشادية وتعتمد على البيانات المتاحة.</li>
                        <li>يُمنع استخدام التطبيق لأي أغراض غير قانونية أو بطريقة قد تسبب إزعاجًا للآخرين.</li>
                        <li>تحتفظ إدارة المدرسة بالحق في تحديث هذه الشروط والأحكام في أي وقت لضمان أفضل خدمة.</li>
                    </ul>
                </Modal>
            )}

            {showPrivacyModal && (
                <Modal title="سياسة الخصوصية" onClose={() => setShowPrivacyModal(false)}>
                    <p className="font-semibold text-textPrimary dark:text-darkTextPrimary">سياسة الخصوصية لتطبيق 'اسأل دُرّة'</p>
                    <p><strong className="text-textPrimary dark:text-darkTextPrimary">المسؤولية:</strong> الخصوصية وحماية بيانات المستخدمين هي مسؤولية مباشرة لمدرسة درة الهاشمية.</p>
                    <div>
                        <p><strong className="text-textPrimary dark:text-darkTextPrimary">جمع البيانات وتخزينها:</strong></p>
                         <ul className="list-disc list-inside space-y-2 mt-2">
                             <li>يجمع التطبيق البيانات التي تقدمها فقط، مثل: اسم الطالبة، الصورة الشخصية (اختياري)، وسجل المحادثة (في حال تفعيل خيار الحفظ).</li>
                             <li><strong className="text-green-600 dark:text-green-400">جميع بياناتك تُخزن بشكل آمن ومحلي على جهازك فقط</strong>، ولا يتم رفعها أو مشاركتها مع أي خوادم خارجية أو أطراف ثالثة.</li>
                        </ul>
                    </div>
                     <div>
                        <p><strong className="text-textPrimary dark:text-darkTextPrimary">التحكم في بياناتك:</strong></p>
                         <ul className="list-disc list-inside space-y-2 mt-2">
                             <li>لديك التحكم الكامل في بياناتك. يمكنك تغيير الصورة الشخصية، أو تفعيل/إلغاء حفظ سجل المحادثات من صفحة الإعدادات في أي وقت.</li>
                              <li>عند إلغاء تفعيل "حفظ سجل المحادثة"، يتم حذف السجل السابق من جهازك.</li>
                        </ul>
                    </div>
                </Modal>
            )}
            
            <CopyrightFooter />
        </div>
    );
};