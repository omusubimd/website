import { remarkOmusubiIndent } from "@omusubimd/remark-omusubi-indent";
import { remarkOmusubiRuby } from "@omusubimd/remark-omusubi-ruby";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkDirective from "remark-directive";

import { remarkSymbols } from "../lib/markdown";
import { SymbolChip } from "./SymbolChip";

const components: Components = {
	span: ({ node, children, ...props }) => {
		const symbol = node?.properties.dataSymbol;
		const name = node?.properties.dataSymbolName;
		if (typeof symbol === "string" && typeof name === "string") {
			return <SymbolChip symbol={symbol} name={name} />;
		}
		return <span {...props}>{children}</span>;
	},
};

export function MarkdownContent({ content }: { content: string }) {
	return (
		<ReactMarkdown
			remarkPlugins={[remarkDirective, remarkSymbols, remarkOmusubiRuby, remarkOmusubiIndent]}
			components={components}
			skipHtml
		>
			{content}
		</ReactMarkdown>
	);
}
