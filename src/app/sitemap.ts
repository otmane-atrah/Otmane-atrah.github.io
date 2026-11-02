import type { MetadataRoute } from "next";
import { getAllPosts } from "~/lib/blog";
import { siteConfig } from "~/data/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...(posts.length > 0
      ? [
          {
            url: `${siteConfig.url}/blog`,
            lastModified: new Date(posts[0].date),
            changeFrequency: "weekly" as const,
            priority: 0.8,
          },
        ]
      : []),
    ...blogEntries,
  ];
}
