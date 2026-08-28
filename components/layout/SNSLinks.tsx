import LogoLink from "@/components/ui/links/logoLink";
import { SocialMedias } from "@/constants/socialMedia";


export default function SNSLinks({ 
  nav_className = "",
  ul_className = "",
}: { 
  nav_className?: string,
  ul_className?: string
}) {
  
  return (
    <nav className={nav_className} aria-label="SNS・外部リンク">
      <ul className={`w-full flex items-center gap-6 w-fit h-fit justify-center mb-5 md:justify-start md:mb-0 ${ul_className}`}>
        {SocialMedias.map((link) => (
          <li key={link.alt} className="w-fit h-7">
            <LogoLink href={link.href} src={link.src} alt={link.alt} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
