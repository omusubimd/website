import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { Schema } from "effect";

const pages = defineCollection({
	name: "pages",
	directory: "src/contents/pages",
	include: ["**/*.md", "**/*.mdx"],
	schema: Schema.standardSchemaV1(Schema.Struct({
		title: Schema.String,
	})),
	transform: async (document, context) => {
		const mdx = await compileMDX(context, document);
		return {
			...document,
			mdx,
		};
	},
});

export default defineConfig({
	content: [pages],
});
