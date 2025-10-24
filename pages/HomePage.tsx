import React, { useState, useRef, useEffect } from 'react';
import { getAIResponse } from '../services/geminiService';
import { ChatMessage, Sender } from '../types';
import { CopyrightFooter } from '../components/CopyrightFooter';
import { UserCircleIcon } from '../components/icons/UserCircleIcon';
import { DurraLogoIcon } from '../components/icons/DurraLogoIcon';

// FIX: Add window types for SpeechRecognition to fix TypeScript errors.
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const formatMessageTime = (date: Date): string => {
    return date.toLocaleTimeString('ar-OM', {
        hour: 'numeric',
        minute: '2-digit',
    });
};

const ChatBubble: React.FC<{ message: ChatMessage; profilePic: string | null; }> = ({ message, profilePic }) => {
    const isUser = message.sender === Sender.User;
    
    const UserAvatar = () => (
        <div className="w-10 h-10 rounded-full flex-shrink-0 bg-gray-200 dark:bg-gray-700 overflow-hidden ml-3">
            {profilePic ? (
                <img src={profilePic} alt="User" className="w-full h-full object-cover" />
            ) : (
                <UserCircleIcon className="w-10 h-10 text-gray-400" />
            )}
        </div>
    );
    
    const AiAvatar = () => (
       <div className="w-10 h-10 rounded-full flex-shrink-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mr-3 p-1">
            <DurraLogoIcon />
       </div>
    );

    return (
        <div className={`flex items-end gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
            {!isUser && <AiAvatar />}
            <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
                <div
                    className={`max-w-xs md:max-w-md lg:max-w-lg px-4 py-3 rounded-2xl shadow-md ${
                        isUser
                            ? 'bg-primary text-white rounded-br-none'
                            : 'bg-surface dark:bg-darkSurface text-textPrimary dark:text-darkTextPrimary rounded-bl-none'
                    }`}
                >
                    <p>{message.text}</p>
                </div>
                <span className="text-xs text-textSecondary dark:text-darkTextSecondary mt-1.5 px-2">
                    {formatMessageTime(message.timestamp)}
                </span>
            </div>
             {isUser && <UserAvatar />}
        </div>
    );
};

interface HomePageProps {
    userName: string;
    userType: 'parent' | 'student';
    saveChatHistory: boolean;
    voiceInputEnabled: boolean;
    profilePic: string | null;
}

export const HomePage: React.FC<HomePageProps> = ({ userName, userType, saveChatHistory, voiceInputEnabled, profilePic }) => {
    const getInitialMessage = (name: string): ChatMessage => {
        const text = userType === 'parent'
            ? `أهلاً بكِ يا ولية أمر الطالبة ${name}! أنا 'دُرّة'، مساعدتك الذكية لمتابعة رحلتها التعليمية. كيف يمكنني خدمتك اليوم؟`
            : `أهلاً بكِ يا ${name} المبدعة! أنا 'دُرّة'، رفيقتكِ الذكية في رحلتكِ التعليمية. أنا هنا لمساعدتكِ. ما الذي تودين استكشافه اليوم؟`;

        return {
            id: 1,
            text: text,
            sender: Sender.AI,
            timestamp: new Date()
        };
    };

    const [messages, setMessages] = useState<ChatMessage[]>(() => {
        if (!saveChatHistory) {
            return [getInitialMessage(userName)];
        }

        try {
            const savedMessages = localStorage.getItem('chatHistory');
            if (savedMessages) {
                const parsed = JSON.parse(savedMessages);
                return parsed.map((msg: any) => ({
                    ...msg,
                    timestamp: new Date(msg.timestamp),
                }));
            }
            return [getInitialMessage(userName)];
        } catch (error) {
            console.error("Failed to parse chat history from localStorage", error);
            return [getInitialMessage(userName)];
        }
    });


    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);
    
    useEffect(() => {
        if (!saveChatHistory) {
            try {
                localStorage.removeItem('chatHistory');
            } catch (error) {
                console.error("Failed to remove chat history from localStorage", error);
            }
            return;
        }

        try {
            localStorage.setItem('chatHistory', JSON.stringify(messages));
        } catch (error) {
            console.error("Failed to save chat history to localStorage", error);
        }
    }, [messages, saveChatHistory]);

    useEffect(() => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.continuous = false;
            recognition.lang = 'ar-SA';
            recognition.interimResults = false;

            recognition.onstart = () => setIsListening(true);
            recognition.onend = () => setIsListening(false);
            
            recognition.onerror = (event: any) => {
                console.error('Speech recognition error:', event.error);
                setIsListening(false);

                let errorMessage: string | null = null;
                switch (event.error) {
                    case 'audio-capture':
                        errorMessage = "لم يتمكن المتصفح من الوصول إلى الميكروفون. يرجى التحقق من إعدادات الميكروفون والأذونات.";
                        break;
                    case 'not-allowed':
                        errorMessage = "تم رفض إذن استخدام الميكروفون. يرجى تفعيل الإذن في إعدادات المتصفح للمتابعة.";
                        break;
                    case 'network':
                        errorMessage = "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.";
                        break;
                    case 'language-not-supported':
                         errorMessage = "اللغة العربية غير مدعومة للتعرف على الصوت في هذا المتصفح.";
                         break;
                    case 'service-not-allowed':
                        errorMessage = "تم تعطيل خدمة التعرف على الصوت. يرجى التحقق من إعدادات المتصفح.";
                        break;
                    case 'no-speech': 
                    case 'aborted':   
                        break;
                    default:
                        errorMessage = `عذرًا، حدث خطأ غير متوقع في التعرف على الصوت (${event.error}).`;
                        break;
                }
                
                if (errorMessage) {
                    alert(errorMessage);
                }
            };

            recognition.onresult = (event: any) => {
                const transcript = event.results[0][0].transcript;
                handleSend(transcript);
            };
            recognitionRef.current = recognition;
        } else {
            console.warn("Speech Recognition not supported in this browser.");
        }

        return () => {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
        };
    }, []);

    const handleSend = async (query?: string) => {
        const textToSend = query || input;
        if (!textToSend.trim()) return;

        const userMessage: ChatMessage = { id: Date.now(), text: textToSend, sender: Sender.User, timestamp: new Date() };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const aiResponseText = await getAIResponse(textToSend, userType);
        const aiMessage: ChatMessage = { id: Date.now() + 1, text: aiResponseText, sender: Sender.AI, timestamp: new Date() };
        
        setMessages(prev => [...prev, aiMessage]);
        setIsLoading(false);
    };
    
    const handleMicClick = () => {
        if (!recognitionRef.current) {
            alert('خاصية التعرف على الصوت غير مدعومة في هذا المتصفح.');
            return;
        }

        if (isListening) {
            recognitionRef.current.stop();
        } else {
            recognitionRef.current.start();
        }
    };
    

    return (
        <div className="flex flex-col h-full p-4">

            <div className="flex-grow overflow-y-auto space-y-6 pb-4">
                {messages.map(msg => <ChatBubble key={msg.id} message={msg} profilePic={profilePic} />)}
                {isLoading && (
                    <div className="flex justify-start items-end gap-2">
                       <div className="w-10 h-10 rounded-full flex-shrink-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mr-3 p-1">
                         <DurraLogoIcon />
                       </div>
                        <div className="bg-surface dark:bg-darkSurface text-textPrimary dark:text-darkTextPrimary rounded-2xl rounded-bl-none px-4 py-3 shadow-md">
                            <div className="flex items-center space-x-2 rtl:space-x-reverse">
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={chatEndRef} />
            </div>

            <div className="flex items-center gap-2 bg-surface dark:bg-darkSurface p-2 rounded-full shadow-md mt-4">
                {voiceInputEnabled && (
                    <button 
                        onClick={handleMicClick}
                        className={`p-3 transition-colors rounded-full ${isListening ? 'text-white bg-accent animate-pulse' : 'text-primary dark:text-primary-light hover:bg-primary/10'}`}
                        aria-label={isListening ? "إيقاف الاستماع" : "بدء الاستماع"}
                    >
                        <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line></svg>
                    </button>
                )}
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSend()}
                    placeholder={isListening ? "استمع الآن..." : "اسأل دُرّة عن أي شيء..."}
                    className="flex-grow bg-transparent focus:outline-none text-textPrimary dark:text-darkTextPrimary"
                    disabled={isLoading}
                />
                <button
                    onClick={() => handleSend()}
                    className="bg-gradient-to-br from-primary to-primary-dark text-white rounded-full p-3 hover:shadow-lg transition-transform duration-200 transform hover:scale-110 disabled:bg-gradient-none disabled:bg-gray-300 dark:disabled:bg-gray-600 disabled:shadow-none disabled:scale-100"
                    disabled={isLoading || !input.trim()}
                    aria-label="إرسال الرسالة"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform -rotate-45 -translate-y-px"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
            </div>
            <CopyrightFooter />
        </div>
    );
};