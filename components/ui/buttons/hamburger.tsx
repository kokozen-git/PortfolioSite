'use client';
import { useState } from 'react';

type HamburgerBtnProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function HamburgerBtn({ isOpen, onClick }: HamburgerBtnProps) {

  const barClass =
    'h-1 w-8 bg-(--mainColor-dark) transition-all duration-300';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="モバイル用ヘッダーメニュー"
      className="relative z-40 flex h-8 w-8 flex-col items-center justify-center gap-2 md:hidden cursor-pointer"
    >
      <span
        className={`${barClass} ${isOpen ? 'translate-y-3 rotate-45 bg-white' : ''}`}
      />
      <span
        className={`${barClass} ${isOpen ? 'opacity-0' : ''}`}
      />
      <span
        className={`${barClass} ${isOpen ? '-translate-y-3 -rotate-45 bg-white' : ''}`}
      />
    </button>
  );
}