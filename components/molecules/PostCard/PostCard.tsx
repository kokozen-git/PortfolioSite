import { H3 } from "@/components/atoms/Heading/Heading";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";

type PostCardProps = {
  post: {
    link: string;
    title: string;
    excerpt: string;
    thumbnail: string | null;
  };
  isTouched: boolean;
  onTouchStart: () => void;
  onTouchEnd: () => void;
};

export default function PostCard({
  post,
  isTouched,
  onTouchStart,
  onTouchEnd,
}: PostCardProps) {
  return (
    <li
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      className={`
        w-full overflow-hidden rounded-xl border-[var(--mainColor)]/20
        shadow-sm transition-shadow
        sm:h-38 sm:overflow-visible sm:border-none sm:shadow-none
        ${isTouched ? "shadow-md" : "shadow-sm"}
      `}
    >
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="
          h-full overflow-hidden rounded-xl border-[var(--mainColor)]/20
          bg-white shadow-sm transition-shadow hover:shadow-md
          sm:flex sm:border
        "
      >
        {post.thumbnail && (
          <div className="relative aspect-video flex-none sm:w-48">
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
          <H3 className="line-clamp-1">
            {post.title}
          </H3>

          <Text className="text-xs leading-relaxed text-(--mainColor-dark) line-clamp-3">
            {post.excerpt}
          </Text>
        </div>
      </a>
    </li>
  );
}