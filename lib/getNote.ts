import Parser from "rss-parser";
import { SocialMedias } from "@/constants/socialMedia";

export type Post = {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
  thumbnail: string | null;
};

const parser = new Parser({
  customFields: {
    item: [["media:thumbnail", "thumbnail"]],
  },
});

function extractThumbnailFromContent(html?: string): string | null {
  if (!html) return null;
  const match = html.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : null;
}

export async function getNotePosts(): Promise<Post[]> {
  const feed = await parser.parseURL(SocialMedias[3].href + "/rss");

  return feed.items.map((item) => ({
    title: item.title ?? "",
    link: item.link ?? "",
    pubDate: item.pubDate ?? "",
    excerpt: (item.contentSnippet ?? "").replace(/続きをみる\s*$/, "").trim(),
    thumbnail: item.thumbnail ?? extractThumbnailFromContent(item.content),
  }));
}