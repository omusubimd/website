import type { SVGProps } from "react";

export function OmusubiIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="28 28 200 200"
			fill="none"
			stroke="currentColor"
			strokeWidth="16"
			strokeLinecap="round"
			strokeLinejoin="round"
			aria-hidden="true"
			focusable="false"
			{...props}
		>
			<path d="M78 207C52 207 38 197 38 174C38 164 44 153 51 141L98 65C106 52 116 49 128 49C140 49 150 52 158 65L205 141C212 153 218 164 218 174C218 197 204 207 178 207Z" />
			<path d="M83 207V140Q83 134 89 134H101Q103 134 105 136L128 158L151 136Q153 134 155 134H167Q173 134 173 140V207" />
		</svg>
	);
}
