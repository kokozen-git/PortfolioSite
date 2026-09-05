import HeroSection         from "@/components/organisms/HeroSection/HeroSection";
import PrivacyPolicyNotice from '@/components/molecules/PrivacyPolicyNotice/PrivacyPolicyNotice';

import ContactForm from "@/components/organisms/ContactForm/ContactForm";
import Container from "@/components/atoms/Container/container";

export default function ContactPage() {

  return (
    <>
      <HeroSection 
        sectionName="contact-request-heading"
        title="お問い合わせ"
        description=
        {`ご質問やご感想など、お気軽にお問い合わせください。
          下記フォームに必要情報をご入力のうえ送信いただければ、
          内容を確認次第、こちらからご連絡いたします。
        `}
        imageSrc="/images/contact/contact.jpg"
      />
      <Container>
        <PrivacyPolicyNotice />
        <ContactForm />
      </Container>
      
    </>
  );
}
