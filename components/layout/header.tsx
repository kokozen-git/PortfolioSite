'use client';
import { useState , useEffect} from 'react';

import Image from "next/image";
import Link from "next/link";
import HeaderLink from "@/components/ui/links/headerLink";
import {pagePath} from "@/constants/pagePath";
import PageLinks from "@/components/layout/pageLinks";
import HamburgerBtn from "@/components/ui/buttons/hamburger";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const [isTouched,setIsTouched] = useState(false);
  const handleClick = (e:React.MouseEvent<HTMLAnchorElement>) =>{
    if(window.matchMedia("(hover:none)").matches && !isTouched){
      e.preventDefault();
      setIsTouched(true);
    }
  }
  
  const headerLinks = [
    pagePath.top,
    pagePath.about,
    pagePath.museum,
    pagePath.blog,
    pagePath.contact,
  ];

  return (
    <header 
      className="relative z-30 top-0 left-0 w-full flex items-center justify-between px-5 md:px-16 py-6 border-b-3 border-[var(--mainColor)]"
    >
      <Link href="/">
        <div className="relative w-30 md:w-36 h-12 z-10">
          <Image
            src="/images/logo.svg"
            alt="cocozen-museum_logo"
            fill
            className="fit"
            priority
          />
        </div>
      </Link>
      
      <HamburgerBtn isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)}/>

      <PageLinks
        label="PCサイズ：ヘッダーナビ"
        nav_className="hidden md:block "
        ul_className="flex gap-8"
        links={headerLinks}
        
        renderItem={(link) => (
          <HeaderLink href={link.href} 
            className={
              "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:w-0 after:bg-[var(--mainColor)] after:transition-all after:duration-300 hover:after:w-full "
            }
          >
            {link.text}
          </HeaderLink>
        )}
      />
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-10 md:hidden"
        />
      )}
      <div className={`fixed w-[80%] h-screen bg-(--mainColor) top-0 right-0 z-30 md:hidden pt-24 transition-transform duration-300
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <PageLinks
          label="SPサイズ：ヘッダーナビ"
          ul_className="text-white px-6"
          links={headerLinks}
          
          renderItem={(link) => (
            <>
              <HeaderLink href={link.href} className='py-3 hover:text-white/80 w-full' onClick={handleClick}>
                {link.text}
              </HeaderLink>
              <hr/>
            </>
            
          )}
        />
      </div>
    </header>
  );
}
