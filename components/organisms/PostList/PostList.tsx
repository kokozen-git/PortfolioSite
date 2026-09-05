"use client";
import PostCard from "@/components/molecules/PostCard/PostCard";
import { useState } from "react";


type Post = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail: string | null;
};

export default function BlogPostList({ posts }: { posts: Post[] }) {
  
  const [isTouched, setIsTouched] = useState(false);
  
  return (
    <ul className="flex flex-wrap gap-12 sm:gap-6 text-left">
      {posts.map((post) => (
        <PostCard
          key={post.link}
          post={post}
          isTouched={isTouched}
          onTouchStart={() => setIsTouched(true)}
          onTouchEnd={() => setIsTouched(false)}
        />
      ))}
    </ul>
  );
}
