import headerLinks from '@/lib/headerLinks';

import Navigation from '@/components/atoms/navigation/page';
import TouchLink from '@/components/atoms/TouchLink/TouchLink';

import headerNav from '@/styles/navItem/headerNav';
import underline from '@/styles/link/underline';

export default function HeaderNav() {
  return (
    <Navigation
      label="PCサイズ：ヘッダーナビ"
      theme={headerNav}
      links={headerLinks}
    >
      {(link) => (
        <TouchLink
          href={link.href}
          className={underline.className}
          touchActiveClass={underline.touchActiveClass}
        >
          {link.text}
        </TouchLink>
      )}
    </Navigation>
  );
}