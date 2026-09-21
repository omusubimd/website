import { markdown } from "@codemirror/lang-markdown";
import { remarkOmusubiIndent } from "@omusubimd/remark-omusubi-indent";
import { remarkOmusubiRuby } from "@omusubimd/remark-omusubi-ruby";
import { ClientOnly, createFileRoute } from "@tanstack/react-router";
import CodeMirror from "@uiw/react-codemirror";
import { Function, Schema } from "effect";
import { LucideGem, LucideSettings2, LucideSpace } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";

import { Main } from "~/components/Main";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "~/components/ui/item";
import { Switch } from "~/components/ui/switch";

const initialMarkdown = `# おむすび大作戦の各種記法

左側に Markdown を入力すると、右側に結果が表示されます。

## ルビ

角括弧 \`[ ]\` でルビを振りたい文字を囲み、つづけて２つずつの大なり・小なり記号 \`<< >>\` でルビを囲むことで、文字に振り仮名を振ることができます。

### ルビの例

[青空]<<あおぞら>>

[青天]<<せいてん>>の[霹靂]<<へきれき>>

## 字下げによる段落開始

全角スペース \`␣\` で文を開始することで、新しい段落になります。

### 字下げによる段落開始の例
　夜だかは、どこまでも、どこまでも、まっすぐに空へのぼって行きました。もう山焼けの火はたばこの吸殻すいがらのくらいにしか見えません。よだかはのぼってのぼって行きました。
　寒さにいきはむねに白く凍こおりました。空気がうすくなった為に、はねをそれはそれはせわしくうごかさなければなりませんでした。
　それだのに、ほしの大きさは、さっきと少しも変りません。つくいきはふいごのようです。寒さや霜しもがまるで剣のようによだかを刺さしました。よだかははねがすっかりしびれてしまいました。そしてなみだぐんだ目をあげてもう一ぺんそらを見ました。そうです。これがよだかの最後でした。もうよだかは落ちているのか、のぼっているのか、さかさになっているのか、上を向いているのかも、わかりませんでした。ただこころもちはやすらかに、その血のついた大きなくちばしは、横にまがっては居ましたが、たしかに少しわらって居おりました。
　それからしばらくたってよだかははっきりまなこをひらきました。そして自分のからだがいま燐りんの火のような青い美しい光になって、しずかに燃えているのを見ました。

`;

const Search = Schema.Struct({
	ruby: Schema.optionalWith(Schema.Boolean, { default: Function.constTrue }),
	indent: Schema.optionalWith(Schema.Boolean, { default: Function.constTrue }),
});

export const Route = createFileRoute("/(content)/playground")({
	validateSearch: Schema.standardSchemaV1(Search),
	component: Playground,
});

function Playground() {
	const [content, setContent] = useState(initialMarkdown);
	const { ruby: rubyEnabled, indent: indentEnabled } = Route.useSearch();
	const navigate = Route.useNavigate();

	return (
		<Main className="flex min-h-0 flex-col gap-6">
			<header className="border-b-border border-b pb-4">
				<h1 className="text-3xl font-bold">Playground</h1>
				<p className="text-muted-foreground mt-2 text-sm">Markdown を入力して表示を確認できます。</p>
			</header>

			<div className="grid min-h-0 flex-1 gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(min-content,25%)]">
				<section
					className="border-border min-w-0 overflow-hidden rounded-lg border"
					aria-labelledby="editor-heading"
				>
					<h2 id="editor-heading" className="bg-muted border-border border-b px-4 py-2 text-sm font-semibold">
						Markdown
					</h2>
					<ClientOnly
						fallback={<div className="text-muted-foreground p-4 text-sm">エディターを読み込み中…</div>}
					>
						<CodeMirror
							value={content}
							onChange={setContent}
							extensions={[markdown()]}
							height="min(65vh, 42rem)"
							minHeight="24rem"
							aria-label="Markdown 入力"
						/>
					</ClientOnly>
				</section>

				<section
					className="border-border min-w-0 overflow-hidden rounded-lg border"
					aria-labelledby="preview-heading"
				>
					<h2
						id="preview-heading"
						className="bg-muted border-border border-b px-4 py-2 text-sm font-semibold"
					>
						プレビュー
					</h2>
					<div className="prose prose-sm prose-pre:whitespace-pre-wrap max-h-[min(65vh,42rem)] min-h-96 max-w-none overflow-auto p-4">
						<ReactMarkdown
							remarkPlugins={[
								...(rubyEnabled ? [remarkOmusubiRuby] : []),
								...(indentEnabled ? [remarkOmusubiIndent] : []),
							]}
							skipHtml
						>
							{content}
						</ReactMarkdown>
					</div>
				</section>

				<section className="border-border flex flex-col gap-2 rounded-lg border">
					<section className="flex flex-col gap-2 px-4 py-4">
						<h2 className="mb-2 flex gap-1 text-sm font-medium">
							<LucideSettings2 size={20} />
							有効にする機能
						</h2>

						<div className="flex flex-col gap-2 [rule:solid_1px_var(--border)]">
							<Item>
								<ItemMedia>
									<LucideGem size={24} />
								</ItemMedia>
								<ItemContent>
									<ItemTitle>ルビ</ItemTitle>
									<ItemDescription>
										{"[振|り|仮名]<<ふ||がな>> を振ることができます。"}
									</ItemDescription>
								</ItemContent>
								<ItemActions>
									<Switch
										id="ruby-switch"
										checked={rubyEnabled}
										onCheckedChange={(checked) => navigate({ search: { ruby: checked } })}
									/>
								</ItemActions>
							</Item>

							<Item>
								<ItemMedia>
									<LucideSpace size={24} />
								</ItemMedia>
								<ItemContent>
									<ItemTitle>字下げによる段落開始</ItemTitle>
									<ItemDescription>␣段落の開始を全角スペースで行うことができます。</ItemDescription>
								</ItemContent>
								<ItemActions>
									<Switch
										id="indent-switch"
										checked={indentEnabled}
										onCheckedChange={(checked) => navigate({ search: { indent: checked } })}
									/>
								</ItemActions>
							</Item>
						</div>

						{/* <div className="flex items-center gap-2">
							<Switch id="ruby-switch" />
							<Label className="gap-0.5 font-normal">
								ルビ
							</Label>
						</div>

						<div className="flex items-center gap-2">
							<Switch id="indent-switch" />
							<Label className="gap-0.5 font-normal">
								字下げによる段落開始
							</Label>
						</div> */}
					</section>
				</section>
			</div>
		</Main>
	);
}
