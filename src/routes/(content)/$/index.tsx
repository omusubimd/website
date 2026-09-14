import { createFileRoute, notFound } from "@tanstack/react-router";
import { allPages } from "content-collections";

import { Main } from "~/components/Main";
import { MarkdownContent } from "~/components/MarkdownContent";
import { PackageBadge } from "~/components/PackageBadge";

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

	return (
		<Main>
			<article className="prose prose-sm prose-code:not-[pre-code]:inline-flex prose-code:not-[pre-code]:align-middle prose-code:not-[pre-code]:items-center prose-code:not-[pre_code]:bg-secondary prose-code:not-[pre_code]:mx-1 prose-code:not-[pre_code]:text-sm prose-code:not-[pre_code]:px-1 prose-code:not-[pre_code]:py-0.5 prose-code:not-[pre_code]:rounded-sm prose-code:not-[pre_code]:before:content-[''] prose-code:not-[pre_code]:after:content-[''] prose-pre:text-wrap mx-auto w-full max-w-5xl">
				<header className="border-b-border border-b py-4">
					<h1 className="text-3xl font-bold">{page.title}</h1>

					{page.packages?.length ? (
						<div className="mt-2 flex flex-row flex-wrap gap-6">
							{page.packages.map((pkg) =>
								pkg.url && pkg.status !== "not-started" ? (
									<PackageBadge.Link
										key={pkg.name}
										type={pkg.name}
										status={pkg.status}
										url={pkg.url}
									/>
								) : (
									<PackageBadge key={pkg.name} type={pkg.name} status={pkg.status} />
								),
							)}
						</div>
					) : null}
				</header>

				<MarkdownContent content={page.content} />
			</article>
		</Main>
	);
}
