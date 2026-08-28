import Link from "next/link";

export default function InlineLink({ 
    href,
    children,
    className = "",
}: { 
    href: string,
    children: React.ReactNode;
    className?: string
}) {
  return (
    <Link href={href} className={`underline underline-offset-2 hover:opacity-70 transition-opacity ${className}`}>
      {children}
    </Link>
  );
}
