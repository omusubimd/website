import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "~/lib/utils";

export function H1({ render, className, ...props }: useRender.ComponentProps<"h1">) {
	const element = useRender({
		defaultTagName: "h1",
		render,
		props: mergeProps<"h1">(
			{
				className: cn("scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance", className),
			},
			props,
		),
	});

	return element;
}
