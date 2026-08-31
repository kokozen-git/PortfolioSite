"use client";
import { useState } from "react";

import Image from "next/image";
import { Text } from "@/components/ui/text";

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
    <ul
      className="flex flex-wrap gap-12"
    >
      {posts.map((post) => (
        <li 
          key={post.link}

          onTouchStart={() => setIsTouched(true)}
          onTouchEnd={() => setIsTouched(false)}

          className={`
            sm:h-38 rounded-xl overflow-hidden sm:overflow-visible 
            border-[var(--mainColor)]/20 sm:shadow-none sm:border-none 
            transition-shadow w-full
            ${isTouched ? "shadow-md" : "shadow-sm"} 
          `}

        >
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:flex h-full overflow-hidden rounded-xl sm:border border-[var(--mainColor)]/20 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            {post.thumbnail && (
              <div className="relative sm:w-48 flex-none aspect-video">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            <div className="p-3 sm:p-4 md:flex-initial">
              <h3 className="text-lg font-bold tracking-wide line-clamp-1">
                {post.title}
              </h3>
              <Text className="text-xs text-(--mainColor-dark) leading-relaxed line-clamp-3">
                {post.excerpt}
              </Text>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
