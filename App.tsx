import React, { useState, useEffect } from 'react';
import { BottomNav } from './components/BottomNav';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';
import { SettingsPage } from './pages/SettingsPage';
import { SplashScreen } from './components/SplashScreen';
import { ContactPage } from './pages/ContactPage';
import { Header } from './components/Header';
import { OnboardingScreen } from './components/OnboardingScreen';
import { navConfig } from './data/navigation';
import { PerformancePage } from './pages/PerformancePage';
import { LockScreen } from './components/LockScreen';
import { SchoolPage } from './pages/SchoolPage';
import { Notification } from './types';
import { getInitialNotifications, generateNewNotification } from './services/notificationService';
import { NotificationPanel } from './components/NotificationPanel';
import { NoorPage } from './pages/NoorPage';
import { InsightsPage } from './pages/InsightsPage';
import { TrophyPage } from './pages/TrophyPage';


const App: React.FC = () => {
    const [activePage, setActivePage] = useState('home');
    const [showSplash, setShowSplash] = useState(true);
    const [userName, setUserName] = useState<string | null>(null);
    const [userType, setUserType] = useState<'parent' | 'student'>('parent');
    const [profilePic, setProfilePic] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isLocked, setIsLocked] = useState(false);
    
    // Settings state
    const [appLockEnabled, setAppLockEnabled] = useState(false);
    const [saveChatHistory, setSaveChatHistory] = useState(true);
    const [voiceInputEnabled, setVoiceInputEnabled] = useState(true);

    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [showNotifications, setShowNotifications] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowSplash(false), 2400);
        
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }

        try {
            const savedName = localStorage.getItem('userName');
            const savedUserType = localStorage.getItem('userType') as 'parent' | 'student' | null;
            if (savedName && savedUserType) {
                setUserName(savedName);
                setUserType(savedUserType);
            }
            const savedPic = localStorage.getItem('profilePic');
            if (savedPic) {
                setProfilePic(savedPic);
            }
            
            // Load settings
            const lockSetting = localStorage.getItem('appLockEnabled') === 'true';
            setAppLockEnabled(lockSetting);
            if (lockSetting) {
                setIsLocked(true);
            }
            
            const chatSetting = localStorage.getItem('saveChatHistory') !== 'false';
            setSaveChatHistory(chatSetting);

            const voiceSetting = localStorage.getItem('voiceInputEnabled') !== 'false';
            setVoiceInputEnabled(voiceSetting);
            
            // Load notifications
            const savedNotifications = localStorage.getItem('notifications');
            if (savedNotifications) {
                const parsed = JSON.parse(savedNotifications).map((n: any) => ({...n, timestamp: new Date(n.timestamp)}));
                setNotifications(parsed);
            } else {
                const initialNotifications = getInitialNotifications();
                setNotifications(initialNotifications);
                localStorage.setItem('notifications', JSON.stringify(initialNotifications));
            }

        } catch (error)
        {
            console.error("Failed to read from localStorage", error);
        } finally {
            setIsLoading(false);
        }
        
        // Simulate a new notification arriving after 10 seconds
        const newNotificationTimer = setTimeout(() => {
           if (localStorage.getItem('userName')) { // Only show if user is logged in
                const newNotif = generateNewNotification();
                setNotifications(prev => {
                    const updated = [newNotif, ...prev];
                    localStorage.setItem('notifications', JSON.stringify(updated));
                    return updated;
                });
           }
        }, 10000);

        return () => {
            clearTimeout(timer);
            clearTimeout(newNotificationTimer);
        };
    }, []);

    const handleOnboardingComplete = (name: string, type: 'parent' | 'student') => {
        try {
            localStorage.setItem('userName', name);
            localStorage.setItem('userType', type);
        } catch (error) {
            console.error("Failed to save user data to localStorage", error);
        }
        setUserName(name);
        setUserType(type);
    };

    const handleProfilePicChange = (picDataUrl: string) => {
        try {
            localStorage.setItem('profilePic', picDataUrl);
            setProfilePic(picDataUrl);
        } catch (error) {
            console.error("Failed to save profile picture to localStorage", error);
            setProfilePic(picDataUrl);
        }
    };
    
    // Settings Handlers
    const handleAppLockChange = (enabled: boolean) => {
        localStorage.setItem('appLockEnabled', String(enabled));
        setAppLockEnabled(enabled);
        if (enabled) {
            alert('تم تفعيل قفل التطبيق. سيتم طلب الفتح عند إعادة تشغيل التطبيق.');
        }
    };

    const handleSaveChatHistoryChange = (enabled: boolean) => {
        localStorage.setItem('saveChatHistory', String(enabled));
        setSaveChatHistory(enabled);
    };

    const handleVoiceInputChange = (enabled: boolean) => {
        localStorage.setItem('voiceInputEnabled', String(enabled));
        setVoiceInputEnabled(enabled);
    };

    // Notification Handlers
    const handleToggleNotifications = () => {
        setShowNotifications(prev => !prev);
    };
    
    const handleMarkAsRead = (id: string) => {
        const updated = notifications.map(n => n.id === id ? { ...n, read: true } : n);
        setNotifications(updated);
        localStorage.setItem('notifications', JSON.stringify(updated));
    };

    const handleMarkAllAsRead = () => {
        const updated = notifications.map(n => ({ ...n, read: true }));
        setNotifications(updated);
        localStorage.setItem('notifications', JSON.stringify(updated));
    };

    const handleNotificationClick = (notification: Notification) => {
        handleMarkAsRead(notification.id);
        if (notification.link) {
            setActivePage(notification.link);
        }
        setShowNotifications(false);
    };
    
    const validPageIds = navConfig.map(p => p.id);
    if (!validPageIds.includes(activePage) && activePage !== 'reports') {
        setActivePage('home');
    }

    const renderPage = () => {
        if (!userName) return null; // Should not be reached, but as a safeguard
        switch (activePage) {
            case 'home':
                return <HomePage 
                            userName={userName} 
                            userType={userType}
                            saveChatHistory={saveChatHistory}
                            voiceInputEnabled={voiceInputEnabled}
                            profilePic={profilePic}
                        />;
            case 'insights':
                return <InsightsPage />;
            case 'trophy':
                return <TrophyPage />;
            case 'school':
                return <SchoolPage />;
            case 'reports':
                 return <PerformancePage />;
            case 'events':
                return <EventsPage />;
            case 'noor':
                return <NoorPage />;
            case 'contact':
                return <ContactPage />;
            case 'settings':
                return <SettingsPage 
                            setActivePage={setActivePage} 
                            onProfilePicChange={handleProfilePicChange} 
                            profilePic={profilePic} 
                            userName={userName} 
                            userType={userType} 
                            appLockEnabled={appLockEnabled}
                            saveChatHistory={saveChatHistory}
                            voiceInputEnabled={voiceInputEnabled}
                            onAppLockChange={handleAppLockChange}
                            onSaveChatHistoryChange={handleSaveChatHistoryChange}
                            onVoiceInputChange={handleVoiceInputChange}
                        />;
            default:
                return <HomePage 
                            userName={userName} 
                            userType={userType}
                            saveChatHistory={saveChatHistory}
                            voiceInputEnabled={voiceInputEnabled}
                            profilePic={profilePic}
                        />;
        }
    };
    
    if (showSplash) {
        return <SplashScreen />;
    }

    if (isLoading) {
        return null; // Render nothing while checking for the name
    }

    if (isLocked) {
        return <LockScreen onUnlock={() => setIsLocked(false)} />;
    }
    
    if (!userName) {
        return <OnboardingScreen onOnboardingComplete={handleOnboardingComplete} />;
    }

    const currentPage = navConfig.find(item => item.id === activePage);
    const pageTitle = currentPage ? currentPage.title : (activePage === 'reports' ? '📊 التقارير الذكية' : 'الرئيسية');


    return (
        <div className="h-full flex flex-col font-sans text-textPrimary dark:text-darkTextPrimary bg-background dark:bg-darkBackground">
            <Header 
                userName={userName} 
                userType={userType} 
                pageTitle={pageTitle} 
                profilePic={profilePic}
                notifications={notifications}
                onToggleNotifications={handleToggleNotifications}
                activePage={activePage}
            />
            {showNotifications && (
                <NotificationPanel 
                    notifications={notifications}
                    onClose={() => setShowNotifications(false)}
                    onNotificationClick={handleNotificationClick}
                    onMarkAllAsRead={handleMarkAllAsRead}
                />
            )}
            <main className="flex-grow overflow-y-auto pb-20">
                {renderPage()}
            </main>
            <BottomNav activePage={activePage} setActivePage={setActivePage} />
        </div>
    );
};

export default App;