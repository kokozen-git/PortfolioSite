"use client";
import { useState } from "react";
import Link from "next/link";

export default function HeaderLink({ 
  href,
  className = "",
  spHoverClass = "",
  spNonHoverClass = "",
  children,
}: { 
  href: string,
  className?: string,
  spHoverClass?: string,
  spNonHoverClass?: string,
  children: React.ReactNode,
}) {

  const [isTouched, setIsTouched] = useState(false);

  return (
    <Link
      href={href} 
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
      className={`
        relative text-xl font-bold inline-block 
        ${isTouched ? spHoverClass : spNonHoverClass} 
        ${className}
      `}
    >
      {children}
    </Link>
  );
}
