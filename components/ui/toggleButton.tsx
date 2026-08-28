'use client'
import Script from "next/script";

export default function ToggleButton() {
  return (
    <>
      <Script src="/scripts/toggle-button.js" strategy="afterInteractive" />
      <toggle-button 
        aria-hidden="true"
        
        data-width="200px"
        data-height="50px"

        data-off-background = "#a9c9d0"
        data-on-background = "#014555"
        data-off-content="TOPページに戻る"
      />
    </>
  );
}