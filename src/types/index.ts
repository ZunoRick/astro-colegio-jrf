import { z } from 'astro:content';

const imageSchema = z.object({
	url: z.string(),
	width: z.number(),
	height: z.number(),
});

const featureImagesSchema = z.object({
	thumbnail: imageSchema,
	medium: imageSchema,
	medium_large: imageSchema,
	large: imageSchema,
	full: imageSchema,
});

export const BaseWPSchema = z.object({
	id: z.number(),
	slug: z.string(),
	title: z.object({
		rendered: z.string(),
	}),
	content: z.object({
		rendered: z.string(),
	}),
	featured_images: featureImagesSchema,
	acf: z.object({
		subtitle: z.string(),
	}),
});

const gallerySchema = z.object({
	large: imageSchema,
	full: imageSchema,
});

export const HomePageSchema = BaseWPSchema.extend({
	gallery: z.array(gallerySchema),
});

export type Gallery = z.infer<typeof gallerySchema>;
