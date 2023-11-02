import { Svgs } from '@/components/card-svg';
import { Icons } from '@/components/icons';

export interface NavigationItem {
  title: string;
  href: string;
  disabled?: boolean;
  offset?: number;
}

export interface NavigationConfig {
  items: NavigationItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  navLogo: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github?: string;
  };
}

export interface StoryCardContent {
  image: string;
  title: string;
  descriptions: string[];
}

export interface NFTImplementationCardContent {
  icon: keyof typeof Icons;
  count: number;
  title: string;
  description: string;
  borderColor: string;
  backgroundcolor?: string;
  svgBlur: keyof typeof Svgs;
}

export interface UseCaseCardContent {
  icon: keyof typeof Icons;
  title: string;
  description: string;
  className: string;
}

export type TMarqueeContent = Omit<UseCaseCardContent, 'description' | 'className'> & {
  hoverDescription: string | string[];
};

export interface Advisor {
  image: string;
  advisorName: string;
  advisorTitle: string;
}
