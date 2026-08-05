import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    heroImage: z.string().url().optional(),
    heroImageAlt: z.string().optional()
  })
});

export const collections = { blog };
