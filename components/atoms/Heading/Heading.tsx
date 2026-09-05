import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type H1Props = ComponentProps<'h1'>;
type H2Props = ComponentProps<'h2'>;
type H3Props = ComponentProps<'h3'>;

export function H1({ className, ...props }: H1Props) {
  return (
    <h1
      className={twMerge(
        'text-4xl font-bold tracking-wide',
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
        'text-2xl font-bold tracking-wide',
        className
      )}
      {...props}
    />
  );
}

export function H3({ className, ...props }: H3Props) {
  return (
    <h2 
      className={twMerge(
        'text-xl font-bold tracking-wide',
        className
      )}
      {...props}
    />
  );
}

