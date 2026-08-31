'use client'
import { useRouter } from "next/navigation";
import Header from "@/components/templetes/header";
import Main from "@/components/layout/main";
import ToggleButton from "@/components/ui/toggleButton";
import Link from "next/link";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";

export default function ContactCompletePage() {
  return (
    <>
        <Header/>
        <Main>
            <PageHero 
                sectionName="contact-complete-heading"
                title="お問い合わせ完了"
                description=
                {`お問い合わせありがとうございました。
                内容を確認次第、こちらからご連絡いたします。`}
                imageSrc="/images/contact/contact-conp.jpg"
            />
            <section
                className="pt-10 flex justify-center"
                aria-label="トップページへ移動"
            >
                <Link href="/" aria-label="トップページへ移動">
                    <ToggleButton/>
                </Link>
            </section>
            
        </Main>
    </>
  );
}