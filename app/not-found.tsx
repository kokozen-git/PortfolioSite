import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import Container   from "@/components/atoms/container/container";
import Text from "@/components/atoms/Text/Text";

export default function errorPage(){
  return (
    <>
      <HeroSection 
        sectionName="notFount"
        title="404 ERROR"
        description={``}
        imageSrc="/images/contact/contact-conp.jpg"
      />
      <Container>
        <Text>
          ページが見つかりませんでした。<br/>
          移動または削除された可能性があります。
        </Text>
      </Container>
    </>
  );
}
