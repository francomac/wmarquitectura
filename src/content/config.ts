import { defineCollection, z } from 'astro:content';

const translation = z.object({
  title: z.string(),
  location: z.string(),
  description: z.string(),
});

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    order: z.number().default(100),
    year: z.number(),
    type: z.enum(['residencial', 'comercial', 'remodelacion', 'institucional']),
    cover: z.string(),
    coverAlt: z.string().optional(),
    images: z.array(z.string()).default([]),
    i18n: z.object({
      es: translation,
      en: translation,
      fr: translation,
    }),
  }),
});

export const collections = { projects };
