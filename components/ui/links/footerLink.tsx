import Link from "next/link";

export default function FooterLink({ 
  href,
  className = "",
  children,
}: { 
  href: string,
  className?: string
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className={`hover:opacity-50 transition-opacity text-sm text-white ${className}`}>
      {children}
    </Link>
  );
}
