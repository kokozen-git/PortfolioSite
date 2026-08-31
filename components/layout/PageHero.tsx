import { H1 } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

type PageHeroProps = {
    sectionName:string;
    title: string;      
    description: string; 
    imageSrc?: string;
};

export default function PageHero({ 
    sectionName,
    title, 
    description,
    imageSrc,
}: PageHeroProps) {
  return (
    <section className="w-full h-full" aria-labelledby={sectionName}>
        <div
            className="relative w-full bg-cover bg-center"
            style={{ backgroundImage: `url('${imageSrc}')` }}
        >
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative px-3 py-9 md:py-24 md:px-16 text-sm">
                <H1 
                    id={sectionName}
                    className="w-[70%] text-white"
                >
                    {title}
                </H1>
                <Text className="font-semibold w-full md:w-[70%] text-white">
                    {description}
                </Text>
            </div>
        </div>
    </section>
  );
}