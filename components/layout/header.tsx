import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10 flex items-center justify-between px-8 py-6">
        {/* ロゴ */}
        <Link href="/">
            <Image
            src="/images/logo.svg"
            alt="cocozen-museum"
            width={140}
            height={48}
            priority
            />
        </Link>

        {/* ナビゲーション */}
        <nav className="flex gap-8 text-sm font-bold">
            <Link href="/about" className="hover:opacity-70 transition-opacity">
            about
            </Link>
            <Link href="/portfolio" className="hover:opacity-70 transition-opacity">
            portfolio
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity">
            contact
            </Link>
        </nav>
    </header>
  );
}
