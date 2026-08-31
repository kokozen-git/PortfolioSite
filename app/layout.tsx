import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

import Footer from "@/components/layout/footer";
import Header from "@/components/templetes/header";
import Main from "@/components/layout/main";

const notoSans = Noto_Sans_JP({
  weight: ["400", "500", "700"], // 使うウェイトを指定
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "cocozen-museum",
    template: "%s | cocozen-museum",
  },
  description: "ココゼンの制作物ポートフォリオサイト",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "cocozen-museum",
    description: "制作物ポートフォリオサイト",
    siteName: "cocozen-museum",
  },
  twitter: {
    card: "summary_large_image",
    title: "cocozen-museum",
    description: "制作物ポートフォリオサイト",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${notoSans.className} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Header />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}
