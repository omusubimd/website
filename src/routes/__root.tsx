import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				name: "description",
				content: "おむすび大作戦は、日本語の文章表記に馴染みやすいマークダウン記法を提供するプロジェクトです。",
			},
			{
				title: "おむすび大作戦 ┊︎ 日本語のためのマークダウン",
			},
			{
				name: "og:title",
				content: "おむすび大作戦 ┊︎ 日本語のためのマークダウン",
			},
			{
				name: "og:description",
				content: "おむすび大作戦は、日本語の文章表記に馴染みやすいマークダウン記法を提供するプロジェクトです。",
			},
			{
				name: "og:image",
				content: "/og.png",
			},
			{
				name: "og:url",
				content: "https://omusubimd.uoxou.moe/",
			},
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				sizes: "any",
				href: "/favicon-light.svg",
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				sizes: "any",
				href: "/favicon-dark.svg",
				media: "(prefers-color-scheme: dark)",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<head>
				<HeadContent />
			</head>

			<body>
				{children}
				<TanStackDevtools
					config={{
						position: "bottom-right",
					}}
					plugins={[
						{
							name: "Tanstack Router",
							render: <TanStackRouterDevtoolsPanel />,
						},
					]}
				/>
				<Scripts />
			</body>
		</html>
	);
}
