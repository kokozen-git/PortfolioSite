// FooterLink.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function FooterLink({ 
  href,
  className = "",
  children,
}: { 
  href: string,
  className?: string
  children: React.ReactNode;
}) {
  const [isTouched, setIsTouched] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (window.matchMedia("(hover:none)").matches && !isTouched) {
      e.preventDefault();
      setIsTouched(true);
    }
  };

  return (
    <Link 
      href={href} 
      className={`hover:opacity-50 transition-opacity text-sm text-white ${className}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
