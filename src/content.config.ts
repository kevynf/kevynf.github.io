import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // 加载博客目录中的 Markdown 和 MDX 文件。
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // 使用 schema 校验文章 frontmatter。
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // 将日期值转换为 Date 对象。
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      collection: z.string().optional(),
      collectionDescription: z.string().optional(),
      tags: z.array(z.string()).optional(),
      enableComments: z.boolean().optional(),
    }),
});

const about = defineCollection({
  loader: glob({ base: "./src/content/about", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { blog, about };
