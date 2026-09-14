import { createFileRoute, Link } from "@tanstack/react-router";

import { Main } from "~/components/Main";

export const Route = createFileRoute("/(content)/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<Main>
			<article className="prose prose-sm prose-code:not-[pre-code]:inline-flex prose-code:not-[pre-code]:align-middle prose-code:not-[pre-code]:items-center prose-code:not-[pre_code]:bg-secondary prose-code:not-[pre_code]:mx-1 prose-code:not-[pre_code]:text-sm prose-code:not-[pre_code]:px-1 prose-code:not-[pre_code]:py-0.5 prose-code:not-[pre_code]:rounded-sm prose-code:not-[pre_code]:before:content-[''] prose-code:not-[pre_code]:after:content-[''] prose-pre:text-wrap mx-auto w-full max-w-5xl">
				<header className="border-b-border border-b py-4">
					<h1 className="text-3xl font-bold">おむすび大作戦：日本語のためのマークダウン記法</h1>
				</header>

				<section>
					<h2>はじめに</h2>
					<p>
						おむすび大作戦は、日本語のためのマークダウン拡張を定め、提供するオープンソースプロジェクトです。
					</p>
					<p>
						日本語の文章表現をマークダウンで扱えるようにすることを目的に、記法の仕様と、それを利用するための実装を整備しています。
					</p>
				</section>

				<section>
					<h2>このドキュメントについて</h2>
					<p>
						このドキュメントは、おむすび大作戦の記法を使って文章を書く方と、アプリケーションやツールへの導入・実装を行う方に向けたものです。
					</p>
					<p>
						各仕様ページには、記述方法、使用例、構文の解釈をまとめています。調べたい項目をサイドバー、または以下のリンクから選んでください。
					</p>
					<ul>
						<li>
							<Link to="/$" params={{ _splat: "syntax/ruby" }}>
								ルビ
							</Link>
						</li>
						<li>
							<Link to="/$" params={{ _splat: "syntax/indent" }}>
								字下げによる段落開始
							</Link>
						</li>
					</ul>
				</section>

				<section>
					<h2>開発者の方へ</h2>
					<p>
						おむすび大作戦の各種記法をアプリケーションやツールに導入するには、各仕様ページのパッケージ情報を参照してください。実装ごとの開発状況と配布先を確認できます。インストールや設定の手順は、リンク先のパッケージのドキュメントで案内しています。
					</p>
				</section>

				<section>
					<h2>オープンソース</h2>
					<p>
						おむすび大作戦は、OSSとして開発・公開されています。仕様の検討や実装、ドキュメントの整備などに参加してくださる開発者の方を募集しています。仕様の提案やバグ報告など、小さな貢献も歓迎します。GitHubのリポジトリで、IssueやPull
						Requestを通じて参加できます。
					</p>
					<p>
						記法に関するアイデアや改善提案も募集しています。日本語の文章を書くときに困っていることや、マークダウンで表現したいことなど、利用する方からの意見もお寄せください。
					</p>
				</section>
			</article>
		</Main>
	);
}
