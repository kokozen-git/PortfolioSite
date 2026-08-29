import Link from "next/link";

export default function FooterLink({ 
  href,
  className = "",
  children,
  onClick,
}: { 
  href: string,
  className?: string
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  return (
    <Link 
      href={href} 
      className={`hover:opacity-50 transition-opacity text-sm text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
