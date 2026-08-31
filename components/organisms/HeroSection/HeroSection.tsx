import type { HeroSectionProps } from "@/types/ui/heroSection";
import  HeroContent from "@/components/molecules/heroContent/heroContent";
import HeroOverlay from "@/components/atoms/heroOverlay/heroOverlay";
import HeroBackground from "@/components/atoms/heroBackground/heroBackground";

export default function HeroSection({ 
  sectionName,
  title, 
  description,
  imageSrc,
}: HeroSectionProps) {
  return (
    <section 
      className       = "w-full h-full" 
      aria-labelledby = {sectionName}
    >
      <HeroBackground 
        imageSrc={imageSrc}
      >
        <HeroOverlay />
        <HeroContent 
          id={sectionName}
          title={title}
          description={description}
        />
      </HeroBackground>
    </section>
  );
}