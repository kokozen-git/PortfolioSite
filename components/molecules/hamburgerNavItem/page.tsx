
import TouchLink from '@/components/atoms/TouchLink/TouchLink';
import fullWidth from '@/styles/link/fullWidth';

type HamburgerNavItemProps = {
  link: {
    href: string;
    text: string;
  };
};

export default function HamburgerNavItem({link,
}: HamburgerNavItemProps) {
  return (
    <>
      <TouchLink
        href={link.href}
        className={fullWidth.className}
        touchActiveClass={fullWidth.touchActiveClass}
      >
        {link.text}
      </TouchLink>
      <hr />
    </>
  );
}
