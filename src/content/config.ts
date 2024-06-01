import { boolean } from "astro/zod";
import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      tags: z.string().array().optional(),
      links: z.object({ name: z.string(), url: z.string() }).array().optional(),
      // Transform string to Date object
      date: z
        .string()
        .or(z.date())
        .transform(val => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform(str => (str ? new Date(str) : undefined)),
      heroImage: image(),
      thumbnailImage: image(),
    }),
});

export const collections = { projects };
