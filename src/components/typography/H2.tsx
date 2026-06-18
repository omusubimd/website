import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "~/lib/utils";

export function H2({ render, className, ...props }: useRender.ComponentProps<"h2">) {
	const element = useRender({
		defaultTagName: "h2",
		render,
		props: mergeProps<"h2">(
			{
				className: cn("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className),
			},
			props,
		),
	});

	return element;
}
