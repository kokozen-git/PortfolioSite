import Image from "next/image";
import Link from "next/link";

export default function Header() {

  const links = [
    { href:"/about", text:"about"},
    { href: "/portfolio", text: "museum" },
    { href: "/blog", text: "blog" },
    { href: "/contact", text: "contact" },
  ];

  const linkStyle = {
    underLine:"#014555",
  }


  return (
    <header 
      className="top-0 left-0 w-full z-10 flex items-center justify-between px-16 py-6"
      style={{ "--underline-color": linkStyle.underLine } as React.CSSProperties}
    >
      {/* ロゴ */}
      <Link href="/">
        <Image
        src="/images/logo.svg"
        alt="cocozen-museum_logo"
        width={140}
        height={48}
        priority
        />
      </Link>

      {/* ナビゲーション */}
      <nav>
        <ul className="flex gap-8 text-xl font-bold">
          {links.map((link) => (
            <li key={link.href}>
              <Link
               href={link.href} 
               className="relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[var(--underline-color)] after:transition-all after:duration-300 hover:after:w-full"
              >{link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
