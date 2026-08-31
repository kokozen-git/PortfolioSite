'use client';

import { useEffect, useState } from 'react';

import headerLinks from '@/lib/headerLinks';

import HamburgerBtn from '@/components/ui/buttons/hamburger';
import Navigation from '@/components/atoms/navigation/page';
import Overlay from '@/components/atoms/overlay/page';
import HamburgerNavItem from '../hamburgerNavItem/page';

import hamburgerNav from '@/styles/navItem/hamburgerNav';

export default function HamburgerMenu() {

  //ハンバーガーメニューの開閉状態
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //メニュー表示中のスクロール不可
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  //ハンバーガーメニューを閉じる
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <HamburgerBtn
        isOpen={isMenuOpen}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      />

      {isMenuOpen && <Overlay onClick={closeMenu} />}

      <nav
        className={`
          fixed top-0 right-0 z-30
          h-screen w-[80%]
          bg-(--mainColor)
          pt-24
          transition-transform duration-300
          md:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <Navigation
          label="SPサイズ：ヘッダーナビ"
          theme={hamburgerNav}
          links={headerLinks}
        >
          {(link) => <HamburgerNavItem link={link} />}
        </Navigation>
      </nav>
    </>
  );
}