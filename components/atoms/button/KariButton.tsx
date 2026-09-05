import type { ComponentProps } from "react";
import Text from "../Text/Text";

type ButtonProps = ComponentProps<"button"> & {
  text: string;
};
export default function Button({
  text,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className="
        min-w-64 rounded-full
        bg-linear-to-r from-(--mainColor-light) to-(--mainColor-dark)
        bg-size-[200%_100%] bg-left
        p-4
        text-white
        shadow-md
        transition-[background-position] duration-500
        hover:bg-right
        hover:cursor-pointer
      "
      {...props}
    >
      <Text className="m-0">
        {text}
      </Text>
      
    </button>
  );
}