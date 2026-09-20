import type { Root } from "mdast";
import type {} from "remark-directive";
import { visit } from "unist-util-visit";

export function remarkSymbols() {
	return (tree: Root) => {
		visit(tree, (node) => {
			if (node.type !== "textDirective" && node.type !== "leafDirective" && node.type !== "containerDirective")
				return;
			if (node.type !== "textDirective" || node.name !== "symbol") {
				throw new Error(`Unsupported directive: ${node.name}. Use :symbol[text]{name="記号名"}.`);
			}
			const name = node.attributes?.name;
			const symbol = node.children.map((child) => (child.type === "text" ? child.value : "")).join("");
			if (
				!name?.trim() ||
				!symbol ||
				node.children.some((child) => child.type !== "text") ||
				Object.keys(node.attributes ?? {}).some((key) => key !== "name")
			) {
				throw new Error('Use :symbol[text]{name="記号名"} with plain text and a nonempty name.');
			}
			node.data = {
				hName: "span",
				hProperties: { dataSymbol: symbol, dataSymbolName: name },
			};
		});
	};
}
