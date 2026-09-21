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
				title: "おむすび大作戦 ┊︎ 日本語のためのマークダウン",
			},
			{
				name: "description",
				content: "おむすび大作戦は、日本語の文章表記に馴染みやすいマークダウン記法を提供するプロジェクトです。",
			},

			// Open Graph properties
			{
				property: "og:title",
				content: "おむすび大作戦 ┊︎ 日本語のためのマークダウン",
			},
			{
				property: "og:type",
				content: "website",
			},
			{
				property: "og:image",
				content: "https://omusubimd.uoxou.moe/og-image.png",
			},
			{
				property: "og:image:width",
				content: "1200",
			},
			{
				property: "og:image:height",
				content: "630",
			},
			{
				property: "og:image:alt",
				content: "おむすび大作戦 ┊︎ 日本語のためのマークダウン",
			},
			{
				property: "og:url",
				content: "https://omusubimd.uoxou.moe/",
			},
			{
				property: "og:description",
				content: "おむすび大作戦は、日本語の文章表記に馴染みやすいマークダウン記法を提供するプロジェクトです。",
			},
			{
				property: "og:site_name",
				content: "おむすび大作戦",
			},

			// Twitter Card properties
			{
				name: "twitter:card",
				content: "summary_large_image",
			},
			{
				name: "twitter:title",
				content: "おむすび大作戦 ┊︎ 日本語のためのマークダウン",
			},
			{
				name: "twitter:description",
				content: "おむすび大作戦は、日本語の文章表記に馴染みやすいマークダウン記法を提供するプロジェクトです。",
			},
			{
				name: "twitter:image",
				content: "https://omusubimd.uoxou.moe/og-image.png",
			},
			{
				name: "twitter:image:alt",
				content: "おむすび大作戦 ┊︎ 日本語のためのマークダウン",
			},
			{
				name: "twitter:url",
				content: "https://omusubimd.uoxou.moe/",
			},
			{
				name: "twitter:site",
				content: "@uoxoumoe",
			},
			{
				name: "twitter:creator",
				content: "@uoxoumoe",
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
