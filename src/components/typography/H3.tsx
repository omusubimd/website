import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "~/lib/utils";

export function H3({ render, className, ...props }: useRender.ComponentProps<"h3">) {
	const element = useRender({
		defaultTagName: "h3",
		render,
		props: mergeProps<"h3">(
			{
				className: cn("scroll-m-20 text-2xl font-semibold tracking-tight", className),
			},
			props,
		),
	});

	return element;
}
