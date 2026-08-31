import type { ComponentProps } from 'react';

export type HeroContentProp = {
  id         : string ;
  title      : string ;
  description: string ;
};

export type HeroBackgroundProps = {
  imageSrc  ?: string;
  className ?: string;
  children   : React.ReactNode;
};

export type HeroSectionProps = {
    sectionName:string;
    title: string;      
    description: string; 
    imageSrc?: string;
};