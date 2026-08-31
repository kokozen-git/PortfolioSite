import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ErrorTextProps = ComponentProps<"p">;

export default function ErrorText({
  className,
  children,
  ...props
}: ErrorTextProps) {
  return (
    <p
      className={twMerge(
        "mt-1 text-sm font-bold text-red-600",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}