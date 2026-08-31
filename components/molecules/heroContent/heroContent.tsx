import type { HeroContentProp } from "@/types/ui/heroSection";

import { H1 } from "@/components/atoms/heading/page";
import { Text } from "@/components/atoms/Text/Page";

export default function HeroContent({ id, title, description }: HeroContentProp) {
  return (
    <div 
      className="relative px-3 py-9 md:py-24 md:px-16 text-sm"
    >
      <H1 
        id={id} 
        className="w-[70%] text-white"
      >
        {title}
      </H1>
      <Text 
        className="w-full md:w-[70%] text-white font-semibold"
      >
        {description}
      </Text>
    </div>
  );
}