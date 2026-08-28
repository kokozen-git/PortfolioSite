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
            className="relative w-full h-100 bg-cover bg-center py-24 px-16"
            style={{ backgroundImage: `url('${imageSrc}')` }}
        >
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-black/40" />
  
            {/* テキストは相対配置＆z-indexで前面に */}
            <div className="relative z-10">
                <H1 
                    id={sectionName}
                    className="w-[70%] text-white"
                >
                    {title}
                </H1>
                <Text className="font-semibold w-[70%] text-white">{description}</Text>
            </div>
        </div>
    </section>
  );
}