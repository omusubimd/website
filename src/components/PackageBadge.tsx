import { mergeProps, useRender } from "@base-ui/react";
import { SiRemark } from "@icons-pack/react-simple-icons";
import { cva } from "class-variance-authority";
import { LucideActivity, LucideCheck, LucideCircleDotDashed, LucideCircleX, LucidePackage } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "~/lib/utils";

import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const PackageOptions = {
	remark: {
		label: "remark",
		icon: SiRemark,
	},
	"markdown-it": {
		label: "markdown-it",
		icon: LucidePackage,
	},
};
export type PackageType = keyof typeof PackageOptions;
export type PackageStatus = "stable" | "beta" | "planned" | "not-started";

const packageBadgeVariants = cva("h-6 flex items-center gap-1 rounded-sm text-xs select-none", {
	variants: {
		status: {
			stable: "",
			beta: "",
			planned: "",
			"not-started": "",
		},
	},
});

export function PackageBadge({
	render,
	className,
	type,
	status,
	...props
}: { type: PackageType; status: PackageStatus } & useRender.ComponentProps<"span">) {
	const C = PackageOptions[type].icon;

	const element = useRender({
		defaultTagName: "span",
		render,
		props: mergeProps<"span">(
			{
				className: cn(packageBadgeVariants({ status }), className),
				children: (
					<>
						<C size={16} />
						{PackageOptions[type].label}

						<Tooltip>
							<TooltipTrigger
								render={(props) =>
									(() => {
										switch (status) {
											case "stable":
												return <LucideCheck size={16} className="text-green-700" {...props} />;
											case "beta":
												return (
													<LucideCircleDotDashed
														size={16}
														className="text-yellow-700"
														{...props}
													/>
												);
											case "planned":
												return (
													<LucideActivity size={16} className="text-blue-700" {...props} />
												);
											case "not-started":
												return <LucideCircleX size={16} className="text-gray-700" {...props} />;
										}
									})()
								}
							/>

							<TooltipContent>
								{status === "stable" && "使用可能"}
								{status === "beta" && "ベータ版"}
								{status === "planned" && "計画中"}
								{status === "not-started" && "未実装"}
							</TooltipContent>
						</Tooltip>
					</>
				),
			},
			props,
		),
	});

	return element;
}

function Link({
	type,
	status,
	url,
}: { status: "stable" | "beta" | "planned"; url: string } & ComponentProps<typeof PackageBadge>) {
	return (
		<PackageBadge
			className="font-normal no-underline"
			type={type}
			status={status}
			// oxlint-disable-next-line jsx-a11y/anchor-has-content
			render={(props) => <a href={url} target="_blank" rel="noopener noreferrer" {...props} />}
		/>
	);
}

PackageBadge.Link = Link;
