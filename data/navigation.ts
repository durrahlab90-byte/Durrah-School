import React from 'react';
import { DurraLogoIcon } from '../components/icons/DurraLogoIcon';
import { CalendarIcon } from '../components/icons/CalendarIcon';
import { SettingsIcon } from '../components/icons/SettingsIcon';
import { ContactIcon } from '../components/icons/ContactIcon';
import { SchoolIcon } from '../components/icons/SchoolIcon';
import { NoorIcon } from '../components/icons/NoorIcon';
import { InsightsIcon } from '../components/icons/InsightsIcon';
import { TrophyIcon } from '../components/icons/TrophyIcon';

interface NavItem {
  id: string;
  title: string;
  navLabel: string;
  icon: React.FC<{ isActive?: boolean }>;
}

export const navConfig: NavItem[] = [
  { id: 'home', title: '🪄 «اسأل دُرّة»', navLabel: 'الرئيسية', icon: DurraLogoIcon },
  { id: 'insights', title: '✨ التحفيز الذاتي', navLabel: 'التحفيز', icon: InsightsIcon },
  { id: 'trophy', title: '🏆 الكأس', navLabel: 'الكأس', icon: TrophyIcon },
  { id: 'school', title: '🏫 مدرستنا', navLabel: 'مدرستنا', icon: SchoolIcon },
  { id: 'events', title: '📅 الجداول والأحداث', navLabel: 'الأحداث', icon: CalendarIcon },
  { id: 'noor', title: '📚 منصة نور', navLabel: 'نور', icon: NoorIcon },
  { id: 'contact', title: '💬 التواصل مع المدرسة', navLabel: 'التواصل', icon: ContactIcon },
  { id: 'settings', title: '⚙️ الإعدادات', navLabel: 'الإعدادات', icon: SettingsIcon },
];