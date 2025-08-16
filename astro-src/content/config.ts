import { z, defineCollection } from 'astro:content';

// Define schema for page content
const pageSchema = z.object({
  title: z.string(),
  description: z.string(),
  lang: z.enum(['fr', 'en']),
  publishedAt: z.date(),
  updatedAt: z.date().optional(),
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
  }).optional(),
});

// Define schema for navigation items
const navigationSchema = z.object({
  label: z.string(),
  href: z.string(),
  order: z.number(),
  lang: z.enum(['fr', 'en']),
});

// Define schema for services
const serviceSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string().optional(),
  order: z.number(),
  lang: z.enum(['fr', 'en']),
});

// Define schema for portfolio items
const portfolioSchema = z.object({
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  url: z.string().url().optional(),
  github: z.string().url().optional(),
  image: z.string().optional(),
  featured: z.boolean().default(false),
  order: z.number(),
  lang: z.enum(['fr', 'en']),
});

// Define schema for translations
const translationSchema = z.object({
  key: z.string(),
  value: z.string(),
  lang: z.enum(['fr', 'en']),
  category: z.string().optional(),
});

// Define collections
export const collections = {
  'pages': defineCollection({
    type: 'content',
    schema: pageSchema,
  }),
  'navigation': defineCollection({
    type: 'data',
    schema: navigationSchema,
  }),
  'services': defineCollection({
    type: 'data',
    schema: serviceSchema,
  }),
  'portfolio': defineCollection({
    type: 'data',
    schema: portfolioSchema,
  }),
  'translations': defineCollection({
    type: 'data',
    schema: translationSchema,
  }),
};