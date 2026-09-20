import { defineCollection, defineConfig } from "@content-collections/core";
import { Schema } from "effect";

const pages = defineCollection({
	name: "pages",
	directory: "src/contents/pages",
	include: "**/*.md",
	schema: Schema.standardSchemaV1(
		Schema.Struct({
			title: Schema.String,
			content: Schema.String,
			packages: Schema.optional(
				Schema.Array(
					Schema.Struct({
						name: Schema.Literal("remark", "markdown-it"),
						status: Schema.Union(
							Schema.Literal("stable"),
							Schema.Literal("beta"),
							Schema.Literal("planned"),
							Schema.Literal("not-started"),
						),
						url: Schema.optional(Schema.String),
					}),
				),
			),
		}),
	),
});

export default defineConfig({
	content: [pages],
});
