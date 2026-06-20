export type CubeTheme = 'neon' | 'glass' | 'retro' | 'cyber';
export type CubeMode = 'breathe' | 'spin' | 'solve' | 'scatter';

export interface CubeletState {
  id: number;
  initialX: number;
  initialY: number;
  initialZ: number;
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  mockType: 'phone' | 'browser' | 'card' | 'custom' | 'portrait';
  mockContent: {
    title: string;
    subtitle?: string;
    metric?: string;
    type?: string;
    chartData?: number[];
    color?: string;
    iconName?: string;
    imageUrl?: string;
    videoUrl?: string;
  };
}

export interface SharingItem {
  id: string;
  title: string;
  type: 'workshop' | 'book' | 'talk' | 'article';
  platformString: string;
  attendees?: string;
  badge?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface PassionItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  aspectRatio: string;
}
