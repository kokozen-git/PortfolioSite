import type { InputProps } from "@/types/ui/InputProps";
import { twMerge } from "tailwind-merge";

export default function TextInput({
  id,
  name,
  type = "text",
  isRequired = false,
  maxLength = 128,
  className,
  ...props
}: InputProps) {

  return (
    <input
      {...props}
      id        = {id}
      name      = {name}
      type      = {type}
      required  = {isRequired}
      maxLength = {maxLength}
      className = {twMerge(
        "w-full border-b border-gray-300 py-2 transition-colors focus:border-(--mainColor-dark) focus:outline-none",
        className
      )}
    />
  );
}
