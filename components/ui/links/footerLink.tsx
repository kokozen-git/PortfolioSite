import Link from "next/link";

export default function FooterLink({ 
    href,
    children,
}: { 
    href: string,
    children: React.ReactNode;
    className?: string
}) {
  return (
    <Link href={href} className={`hover:opacity-50 transition-opacity text-sm text-white`}>
      {children}
    </Link>
  );
}
