import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import { H1 } from "@/components/ui/heading";
import ContactForm from "@/components/layout/contactForm";
export default function Home() {
  return (
    <>
      <Header/>
      <Main>
        <div className="w-full max-w-xl">
          <H1>Contact</H1>
          <p className="text-sm opacity-70 mb-10">
            お問い合わせは以下のフォームよりお願いします。
          </p>
          <ContactForm/>
        </div>
      </Main>
    </>
  );
}
