import Link from "next/link";

export default function HeaderLink({ 
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
      onClick={onClick}
      className={`
        relative text-xl font-bold inline-block ${className}
      `}
    >
      {children}
    </Link>
  );
}
