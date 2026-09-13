import { createFileRoute } from "@tanstack/react-router";

import { Main } from "~/components/Main";

export const Route = createFileRoute("/(content)/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Main>
			<article className="prose prose-sm prose-code:not-[pre-code]:inline-flex prose-code:not-[pre-code]:align-middle prose-code:not-[pre-code]:items-center prose-code:not-[pre_code]:bg-secondary prose-code:not-[pre_code]:mx-1 prose-code:not-[pre_code]:text-sm prose-code:not-[pre_code]:px-1 prose-code:not-[pre_code]:py-0.5 prose-code:not-[pre_code]:rounded-sm prose-code:not-[pre_code]:before:content-[''] prose-code:not-[pre_code]:after:content-[''] prose-pre:text-wrap mx-auto w-full max-w-5xl">
				<header className="border-b-border border-b py-4">
					<h1 className="text-3xl font-bold">おむすび大作戦：日本語のためのマークダウン記法</h1>
				</header>
			</article>
		</Main>
	);
}
