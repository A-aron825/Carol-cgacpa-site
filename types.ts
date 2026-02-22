
import React from 'react';

// Message interface for AI Chat history and state management
export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface NavItem {
  label: string;
  href: string;
}
