import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "~/lib/utils";

export function InlineCode({ render, className, ...props }: useRender.ComponentProps<"code">) {
	const element = useRender({
		defaultTagName: "code",
		render,
		props: mergeProps<"code">(
			{
				className: cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm", className),
			},
			props,
		),
	});

	return element;
}
