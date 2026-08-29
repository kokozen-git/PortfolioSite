'use client';

import { useState } from 'react';

export default function HamburgerBtn() {
  const [isOpen, setIsOpen] = useState(false);

  const barClass =
    'h-1 w-8 bg-(--mainColor-dark) transition-all duration-300';

  return (
    <button
      type="button"
      onClick={() => setIsOpen((prev) => !prev)}
      aria-expanded={isOpen}
      aria-label="モバイル用ヘッダーメニュー"
      className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-2 md:hidden"
    >
      <span
        className={`${barClass} ${isOpen ? 'translate-y-3 rotate-45' : ''}`}
      />
      <span
        className={`${barClass} ${isOpen ? 'opacity-0' : ''}`}
      />
      <span
        className={`${barClass} ${isOpen ? '-translate-y-3 -rotate-45' : ''}`}
      />
    </button>
  );
}