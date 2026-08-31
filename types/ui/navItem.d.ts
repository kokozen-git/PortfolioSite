import type { ComponentProps } from 'react';

type NavItem<T> = { 
  label  : string ,
  theme ?: {
    nav ?: string ,
    ul  ?: string ,
  };
  links: T[];
  children: (link: T) => React.ReactNode;
}