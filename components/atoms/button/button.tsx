import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
  variant?: "primary" | "outline";
  fullWidth?: boolean;
};

const variantStyles = {
  primary: "bg-[#014555] text-white hover:opacity-80",
  outline: "border border-gray-300 text-gray-900 hover:bg-gray-50",
};

export default function Button({
  text,
  variant = "primary",
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "rounded-full px-8 py-3 font-bold transition-colors disabled:opacity-50",
        variantStyles[variant],
        fullWidth && "flex-1",
        className
      )}
    >
      {text}
    </button>
  );
}