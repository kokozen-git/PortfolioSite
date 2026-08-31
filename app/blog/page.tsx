import { getNotePosts } from "@/lib/getNote";

import Header from "@/components/layout/header";
import Main from "@/components/layout/main";
import PageHero from "@/components/layout/PageHero";
import Container from "@/components/ui/container";
import BlogPostList from "@/components/layout/blog/BlogPostList";
import Footer from "@/components/layout/footer";

//1時間ごとにISR再生成
export const revalidate = 3600; 

export default async function BlogPage() {

  const posts = await getNotePosts();
  console.log(posts);
  
  return (
    <>
      <Header/>
      <Main>
        <PageHero 
          sectionName="contact-complete-heading"
          title="ブログ"
          description=
          {`制作の裏側や技術的な挑戦や感想など
          日々の学びなどを様々なことを記録しています。`}
          imageSrc="/images/blog.jpg"
        />
        <Container>
          <BlogPostList posts={posts}/>
          <a href="/#">
            noteページを見に行く
          </a>
        </Container>
      </Main>
      <Footer/>
    </>
  );
}