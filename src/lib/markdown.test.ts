// @vitest-environment jsdom
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import { MarkdownContent } from "../components/MarkdownContent";

async function compileMarkdown(content: string) {
	return renderToStaticMarkup(createElement(MarkdownContent, { content }));
}

describe("Markdown directives", () => {
	it("renders symbol directives through the original inline component", async () => {
		const html = await compileMarkdown(
			':symbol[\\[]{name="左角括弧"} :symbol[<]{name="小なり記号"} :symbol[😀]{name="笑顔"}',
		);
		expect(html).toContain("&lt;");
		const container = document.createElement("div");
		container.innerHTML = html;
		expect(container.querySelectorAll("p")).toHaveLength(1);
		expect(Array.from(container.querySelectorAll("p code"), (node) => node.textContent)).toEqual(["[", "<", "😀"]);
	});

	it("preserves fullwidth spaces and leaves code examples untouched", async () => {
		const html = await compileMarkdown(':symbol[　]{name="全角スペース"}\n\n```md\n:symbol[|]{name="縦線"}\n```');
		const container = document.createElement("div");
		container.innerHTML = html;
		expect(container.querySelector("p code")?.textContent).toBe("　");
		expect(container.querySelector("pre code")?.textContent).toContain(':symbol[|]{name="縦線"}');
	});

	it("rejects unknown directives and malformed symbol attributes", async () => {
		await expect(compileMarkdown(":unknown[test]")).rejects.toThrow("Unsupported directive");
		await expect(compileMarkdown(":symbol[x]")).rejects.toThrow("nonempty name");
		await expect(compileMarkdown(':symbol[x]{name="x" onclick="alert(1)"}')).rejects.toThrow("nonempty name");
	});

	it("does not emit raw HTML from the source", async () => {
		const html = await compileMarkdown('<script>alert(1)</script>\n\n:symbol[x]{name="<img>"}');
		const container = document.createElement("div");
		container.innerHTML = html;
		expect(container.querySelector("script, img")).toBeNull();
		expect(container.querySelector("p code")?.textContent).toBe("x");
	});
});
