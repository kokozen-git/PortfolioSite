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

  const url = SocialMedias[3].href + "/rss";

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch RSS: ${response.status}`);
  }

  const xml = await response.text();
  const feed = await parser.parseString(xml);

  return feed.items.map((item) => ({
    title: item.title ?? "",
    link: item.link ?? "",
    pubDate: item.pubDate ?? "",
    excerpt: (item.contentSnippet ?? "")
      .replace(/続きをみる\s*$/, "")
      .trim(),
    thumbnail:
      item.thumbnail ?? extractThumbnailFromContent(item.content),
  }));
}