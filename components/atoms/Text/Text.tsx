import { Children, type ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

type TextProps = ComponentProps<'p'>;

export default function Text({ className, children, ...props }: TextProps) {

  //子要素が存在しているか判定
  const isEmpty = !children || Children.count(children) === 0;

  return (
    <p
      className={twMerge(`
        tracking-[0.15em] leading-[2.3] break-words whitespace-pre-line 
        ${isEmpty ? "my-0" : "my-4"}
        `,
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}