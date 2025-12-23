import React from 'react';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}