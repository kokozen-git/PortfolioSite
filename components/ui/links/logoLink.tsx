"use client";
import { useState } from "react";
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
  const [isTouched, setIsTouched] = useState(false);

  return (
    <Link 
      href={href} 
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
      className={`
        inline-block w-7 h-7 hover:opacity-70 transition
        ${isTouched ? "opacity-70" : "opacity-100"} `
      }
      target="_blank"
    >
      <Image src={src} alt={alt} width={16} height={16} priority className="w-full h-full"/>
    </Link>
  );
}
