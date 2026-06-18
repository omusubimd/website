import { MDXContent } from "@content-collections/mdx/react";
import { createFileRoute, notFound } from "@tanstack/react-router";
import { allPages } from "content-collections";
import { Main } from "~/components/Main";
import { useMDXComponents } from "../../../../mdx-components";

export const Route = createFileRoute("/(content)/$/")({
	loader: ({ params }) => {
		const page = allPages.find((p) => p._meta.path.replace("\\", "/") === params._splat);
		if (!page) {
			throw notFound();
		}

		return page;
	},
	component: RouteComponent,
});

function RouteComponent() {
	const page = Route.useLoaderData();
	const mdxComponents = useMDXComponents();

	return (
		<Main>
			<article className="w-full max-w-5xl mx-auto prose prose-sm prose-code:not-[pre-code]:inline-flex prose-code:not-[pre-code]:align-middle prose-code:not-[pre-code]:items-center prose-code:not-[pre_code]:bg-secondary prose-code:not-[pre_code]:mx-1 prose-code:not-[pre_code]:text-sm prose-code:not-[pre_code]:px-1 prose-code:not-[pre_code]:py-0.5 prose-code:not-[pre_code]:rounded-sm prose-code:not-[pre_code]:before:content-[''] prose-code:not-[pre_code]:after:content-['']">
				<MDXContent
					components={{
						...mdxComponents,
					}}
					code={page.mdx}
				/>
			</article>
		</Main>
	);
}
