import HeaderNav from '@/components/molecules/navigation/headerNav/page';
import HamburgerMenu from '@/components/molecules/hamburgerMenu/page';
import Logo from '@/components/atoms/logo/page';

export default function Header() {
  return (
    <header
      className="
        relative z-30
        flex w-full items-center justify-between
        px-5 py-3
        md:px-16 md:py-6
        border-b-3 border-[var(--mainColor)]
      "
    >
      <Logo/>
      <HeaderNav />
      <HamburgerMenu />
    </header>
  );
}