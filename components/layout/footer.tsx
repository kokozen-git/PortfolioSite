import PageTopButton from "@/components/ui/buttons/pageTopButton";
import SNSLinks from "@/components/layout/SNSLinks";
import FooterLink from "@/components/ui/links/footerLink";


export default function Footer() {

  return (
    <footer className="bg-(--mainColor-dark) text-white pt-16 py-6 px-4 md:px-6 w-full">
      <div className="md:flex md:gap-4 md:justify-between md:items-center md:px-12">
        <SNSLinks nav_className="flex-1"/>
        <div className="flex-1">
          <nav className="pb-6 md:pb-2">
            <ul className="flex gap-3 px-3 justify-between md:justify-end md:px-6">
              <li>
                <FooterLink href="/">
                  top
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/about">
                  about
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/museum">
                  museum
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/blog">
                  blog
                </FooterLink>
              </li>
              <li>
                <FooterLink href="contact">
                  contact
                </FooterLink>
              </li>
            </ul>
          </nav>
          <hr/>
          <nav>
            <ul className="flex gap-3 justify-center md:justify-end md:px-6 pt-6 md:pt-2">
              <li>
                <FooterLink href="/policy" className="text-sm text-white/80">
                  プライバシーポリシー
                </FooterLink>
              </li>
              <li>
                <FooterLink href="/policy" className="text-sm text-white/80">
                  ページ使用技術
                </FooterLink>
              </li>
            </ul>
          </nav>
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
