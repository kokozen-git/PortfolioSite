import type { HeroBackgroundProps } from "@/types/ui/heroSection";
import { twMerge } from "tailwind-merge";

export default function HeroBackground({ imageSrc, className ,children }: HeroBackgroundProps) {
  return (
    <div
      className={twMerge(
        "relative w-full bg-cover bg-center", 
        className
      )}
      style={
        imageSrc 
          ? { backgroundImage : `url('${imageSrc}')` } 
          : undefined
      }
    >
      {children}
    </div>
  );
}