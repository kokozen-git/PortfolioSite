import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type H1Props = ComponentProps<'h1'>;
type H2Props = ComponentProps<'h2'>;

export function H1({ className, ...props }: H1Props) {
  return (
    <h1
      className={twMerge(
        'text-4xl font-bold',
        className
      )}
      {...props}
    />
  );
}

export function H2({ className, ...props }: H2Props) {
  return (
    <h2 
      className={twMerge(
        'text-xl font-bold',
        className
      )}
      {...props}
    />
  );
}

