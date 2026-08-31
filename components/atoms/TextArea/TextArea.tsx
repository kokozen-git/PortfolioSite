import type { TextAreaProps } from "@/types/ui/textAreaProps";
import { twMerge } from "tailwind-merge";

export default function TextArea({
  id,
  name,
  rows = 6,
  isRequired = false,
  maxLength = 2048,
  className,
  ...props
}: TextAreaProps) {

  return (
    <textarea
      {...props}
      id        = {id}
      name      = {name}
      rows      = {rows}
      required  = {isRequired}
      maxLength = {maxLength}
      className = {twMerge(
        "w-full rounded-md border border-gray-300 p-3 transition-colors focus:border-(--mainColor-dark) focus:outline-none",
        className
      )}
    />
  );
}
