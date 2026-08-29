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

  return (
    <Link 
      href={href}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
      className={`transition-opacity text-sm text-white ${isTouched ? "opacity-50" : "opacity-100"} hover:opacity-50 ${className}`}
    >
      {children}
    </Link>
  );
}