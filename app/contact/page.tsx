import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import ContactForm from "@/components/layout/contactForm";
import PageHero from "@/components/layout/PageHero";
import { Text } from "@/components/ui/text";
import InlineLink from "@/components/ui/links/InlineLink";
import Container from "@/components/ui/container";


export default function Home() {
  return (
    <>
      <Header/>
      <Main>
        <PageHero 
          sectionName="contact-request-heading"
          title="お問い合わせ"
          description=
          {`ご質問やご感想など、お気軽にお問い合わせください。
            下記フォームに必要事項をご入力のうえ送信いただければ、
            内容を確認次第、こちらからご連絡いたします。
          `}
          imageSrc="/images/contact/contact.jpg"
        />
        <Container>
          <Text className="pb-6">
            送信情報の取り扱いについては
            <InlineLink href="/policy">
              プライバシーポリシー
            </InlineLink>
            をご確認ください。
          </Text>
          <ContactForm />
        </Container>
      </Main>
    </>
  );
}
