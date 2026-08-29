import Image from "next/image";
import Link from "next/link";
import HeaderLink from "@/components/ui/links/headerLink";
import {pagePath} from "@/constants/pagePath";
import PageLinks from "./pageLinks";
import HamburgerBtn from "../ui/buttons/hamburger";

export default function Header() {

  const headerLinks = [
    pagePath.top,
    pagePath.about,
    pagePath.museum,
    pagePath.blog,
    pagePath.contact,
  ];

  const isOpen = false;
  return (
    <header 
      className="relative top-0 left-0 w-full z-10 flex items-center justify-between px-5 md:px-16 py-6 border-b-3 border-[var(--mainColor)]"
    >
      <Link href="/">
        <div className="relative w-30 md:w-36 h-12">
          <Image
            src="/images/logo.svg"
            alt="cocozen-museum_logo"
            fill
            className="fit"
            priority
          />
        </div>
      </Link>
      
      <HamburgerBtn />
      
      <PageLinks
        label="ヘッダーナビ"
        nav_className="hidden md:block"
        ul_className="flex gap-8"
        links={headerLinks}
        
        renderItem={(link) => (
          <HeaderLink href={link.href}>
            {link.text}
          </HeaderLink>
        )}
      />

      
     
    </header>
  );
}
