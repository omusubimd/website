import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "~/lib/utils";

export function H4({ render, className, ...props }: useRender.ComponentProps<"h4">) {
	const element = useRender({
		defaultTagName: "h4",
		render,
		props: mergeProps<"h4">(
			{
				className: cn("scroll-m-20 text-xl font-semibold tracking-tight", className),
			},
			props,
		),
	});

	return element;
}
