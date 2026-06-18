import { mergeProps, useRender } from "@base-ui/react";
import type { ReactElement } from "react";
import { cn } from "~/lib/utils";

export function Main({ render, className, ...props }: useRender.ComponentProps<"main">): ReactElement {
	const element = useRender({
		defaultTagName: "main",
		render,
		props: mergeProps<"main">(
			{
				className: cn("container mx-auto flex-1 p-4", className),
			},
			props,
		),
	});

	return element;
}
