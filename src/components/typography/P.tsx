import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "~/lib/utils";

export function P({ render, className, ...props }: useRender.ComponentProps<"p">) {
	const element = useRender({
		defaultTagName: "p",
		render,
		props: mergeProps<"p">(
			{
				className: cn("leading-7 not-first:mt-6", className),
			},
			props,
		),
	});

	return element;
}
