'use client'
import { useState } from "react";

export default function PageTopButton() {
  const [isHovered, setIsHovered] = useState(false);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [isTouched, setIsTouched] = useState(false);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsTouched(true)}
      onTouchEnd={() => setIsTouched(false)}
      className="group flex items-center gap-4 text-white hover:cursor-pointer w-fit h-fit"
    >
      <span
        className={`
          flex h-10 w-7 items-center justify-center rounded-full 
          border border-white/60 transition-colors duration-300 
          group-hover:bg-white group-hover:text-(--mainColor)
          ${isTouched ? "bg-white text-(--mainColor)" : ""} 
        `}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`
            ${isHovered ? "animate-arrow-bounce-up" : "" }
            ${isTouched ? "animate-arrow-bounce-up" : "" }
          `} 
        >
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </span>
    </button>
  );
}