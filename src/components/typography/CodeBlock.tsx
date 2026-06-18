import { mergeProps, useRender } from "@base-ui/react";
import { cn } from "~/lib/utils";

export function CodeBlock({ render, className, ...props }: useRender.ComponentProps<"pre">) {
	const element = useRender({
		defaultTagName: "pre",
		render,
		props: mergeProps<"pre">(
			{
				className: cn("my-4 overflow-x-auto rounded bg-muted p-2", className),
			},
			props,
		),
	});

	return element;
}

function Code({ render, className, ...props }: useRender.ComponentProps<"code">) {
	const element = useRender({
		defaultTagName: "code",
		render,
		props: mergeProps<"code">(
			{
				className: cn("mx-1 rounded bg-muted px-1.5 py-0.5 font-mono text-sm", className),
			},
			props,
		),
	});

	return element;
}

CodeBlock.Code = Code;
