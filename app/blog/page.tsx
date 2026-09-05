import { getNotePosts } from "@/lib/getNote";

import PostList from "@/components/organisms/PostList/PostList";
import HeroSection from "@/components/organisms/HeroSection/HeroSection";
import Button from "@/components/atoms/Button/KariButton";
import Link from "next/link";
import Container from "@/components/atoms/Container/container";


//1時間ごとにISR再生成
export const revalidate = 3600; 

export default async function BlogPage() {

  const posts = await getNotePosts();
  
  return (
    <>
      <HeroSection 
        sectionName="contact-complete-heading"
        title="ブログ"
        description=
        {`制作の裏側や技術的な挑戦や感想など
        日々の学びなどを様々なことを記録しています。`}
        imageSrc="/images/blog.jpg"
      />
      <Container>
        <PostList posts={posts}/>
      </Container> 
      <Container>
        <Link href="/">
          <Button text="noteページを見に行く"/>
        </Link>
      </Container>
    </>
  );
}