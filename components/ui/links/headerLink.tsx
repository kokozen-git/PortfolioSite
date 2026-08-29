import Link from "next/link";

export default function HeaderLink({ 
  href,
  className = "",
  children,
}: { 
  href: string,
  className?: string
  children: React.ReactNode;
}) {
  return (
    <Link
        href={href} 
        className={`relative text-xl font-bold inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[var(--mainColor)] after:transition-all after:duration-300 hover:after:w-full ${className}`}
    >
        {children}
    </Link>
  );
}
