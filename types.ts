// FIX: Add import for React to resolve namespace error.
import React from 'react';

export enum Sender {
  User = 'user',
  AI = 'ai',
}

export interface ChatMessage {
  id: number;
  text: string;
  sender: Sender;
  timestamp: Date;
}

export interface SmartInsight {
  id: string;
  title: string;
  content: string;
  color: string;
}

export interface PerformanceData {
  subject: string;
  grade: number;
}

export interface AttendanceData {
  name: string;
  value: number;
}

export interface SchoolEvent {
  id: number;
  day: number;
  title: string;
  type?: 'event' | 'activity' | 'exam';
}

export interface Homework {
  id: number;
  subject: string;
  task: string;
  dueDate: string;
  completed: boolean;
}

export interface Recommendation {
  id: number;
  teacher: string;
  subject: string;
  comment: string;
  date: string;
}

export interface Notification {
  id: string;
  icon: React.FC<any>;
  title: string;
  description: string;
  timestamp: Date;
  read: boolean;
  link?: string;
}

export interface Tip {
  category: string;
  categoryColor: string;
  title: string;
  description: string;
}