import PageTopButton from '@/components/ui/buttons/pageTopButton';
import SNSLinks from '@/components/molecules/navigation/SNSNav/page';
import FooterLink from '@/components/ui/links/footerLink';
import Navigation from '@/components/atoms/navigation/page';

import { pagePath } from '@/constants/pagePath';
import Copyright from '@/components/atoms/copyright/page';

const footerLinks = [
  {
    label: '主要フッターナビ',
    links: [
      pagePath.top,
      pagePath.about,
      pagePath.museum,
      pagePath.blog,
      pagePath.contact,
    ],
    theme: {
      nav: 'pb-6 md:pb-2',
      ul: 'flex gap-3 px-3 justify-between md:justify-end md:px-6',
    },
    separator: true,
  },
  {
    label: '補助フッターナビ',
    links: [
      pagePath.policy,
      pagePath.tech,
    ],
    theme: {
      ul: 'flex gap-3 justify-center md:justify-end md:px-6 pt-6 md:pt-2',
    },
    separator: false,
  },
];

export default function Footer() {
  return (
    <footer
      className="
        w-full
        bg-(--mainColor-dark)
        px-4 py-6 pt-16
        text-white
        md:px-6
      "
    >
      <div
        className="
          md:flex md:items-center md:justify-between
          md:gap-4 md:px-12
        "
      >
        <SNSLinks />

        <div className="flex-1">
          {footerLinks.map((nav) => (
            <div key={nav.label}>
              <Navigation
                label={nav.label}
                theme={nav.theme}
                links={nav.links}
              >
                {(link) => (
                  <FooterLink href={link.href}>
                    {link.text}
                  </FooterLink>
                )}
              </Navigation>

              {nav.separator && <hr />}
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-6 md:block md:pt-0">
          <PageTopButton />
        </div>
      </div>

     <Copyright />
    </footer>
  );
}