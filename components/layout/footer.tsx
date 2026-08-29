'use client';
import { useState } from "react";

import PageTopButton from "@/components/ui/buttons/pageTopButton";
import SNSLinks from "@/components/layout/SNSLinks";
import FooterLink from "@/components/ui/links/footerLink";
import {pagePath} from "@/constants/pagePath";
import PageLinks from "./pageLinks";


export default function Footer() {

  const footerLinks = {
    up:[
      pagePath.top,
      pagePath.about,
      pagePath.museum,
      pagePath.blog,
      pagePath.contact,
    ],
    under:[
      pagePath.policy,
      pagePath.tech,
    ],
  };

  const [isTouched,setIsTouched] = useState(false);
  const handleClick = (e:React.MouseEvent<HTMLAnchorElement>) =>{
    if(window.matchMedia("(hover:none)").matches && !isTouched){
      e.preventDefault();
      setIsTouched(true);
    }
  }

  return (
    <footer className="bg-(--mainColor-dark) text-white pt-16 py-6 px-4 md:px-6 w-full">
      <div className="md:flex md:gap-4 md:justify-between md:items-center md:px-12">
        <SNSLinks nav_className="flex-1"/>
        <div className="flex-1">
          <PageLinks
            label="主要フッターナビ"
            nav_className="pb-6 md:pb-2"
            ul_className="flex gap-3 px-3 justify-between md:justify-end md:px-6"
            links={footerLinks.up}
            
            renderItem={(link) => (
              <FooterLink href={link.href}  onClick={handleClick}>
                {link.text}
              </FooterLink>
            )}
          />
          <hr/>
          <PageLinks
            label="補助フッターナビ"
            ul_className="flex gap-3 justify-center md:justify-end md:px-6 pt-6 md:pt-2"
            links={footerLinks.under}
            
            renderItem={(link) => (
              <FooterLink href={link.href}  onClick={handleClick}>
                {link.text}
              </FooterLink>
            )}
          />
        </div>
        <div className="flex justify-center pt-6 md:block md:pt-0">
          <PageTopButton />
        </div>
        
      </div>
      <p className="text-xs text-white/60 text-right pt-12">
        © {new Date().getFullYear()} cocozen-museum <br className="md:hidden"/> Powered by Next.js / Tailwind CSS
      </p>
    </footer>
  );
}
