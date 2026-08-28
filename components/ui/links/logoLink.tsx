import Image from "next/image";
import Link from "next/link";

export default function LogoLink({ 
    href,
    src,
    alt,
}: { 
    href: string,
    src: string
    alt:string,
}) {
  return (
    <Link 
        href={href} 
        className={"inline-block w-7 h-7 hover:opacity-70 transition"}
        target="_blank"
    >
      <Image src={src} alt={alt} width={16} height={16} priority className="w-full h-full"/>
    </Link>
  );
}
