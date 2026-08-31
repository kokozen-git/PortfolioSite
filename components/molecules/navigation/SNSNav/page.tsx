import { SocialMedias } from "@/constants/socialMedia";

import Navigation from "@/components/atoms/navigation/page";
import LogoLink from "@/components/ui/links/logoLink";

export default function SNSLinks() {
  
  const test = {
    nav:"flex-1",
    ul:"w-full flex items-center gap-6 w-fit h-fit justify-center mb-5 md:justify-start md:mb-0"
  };

  return (
    <Navigation
      label="SNS・外部リンク"
      theme={test}
      links={SocialMedias}
    >
      {(link) => (
        <LogoLink href={link.href} src={link.src} alt={link.alt} />
      )}
    </Navigation>

   
  );
}
