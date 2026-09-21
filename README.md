# おむすび大作戦

おむすび大作戦は、日本語の文章表記に馴染みやすいMarkdown記法を定め、その実装を提供するオープンソースプロジェクトです。

日本語の文章表現をMarkdownで扱えるようにすることを目的として、記法の仕様、各種言語およびフレームワーク向けパッケージを整備しています。꒰ UoxoU ꒱が立ち上げ、コントリビューターとともに開発しています。

- [ウェブサイト](https://omusubimd.uoxou.moe/)
- [Playground](https://omusubimd.uoxou.moe/playground)
- [GitHub Organization](https://github.com/omusubimd)
- [Discord](https://discord.gg/2xCcZnjsa)

> [!NOTE]
> おむすび大作戦は開発初期のプロジェクトです。記法の仕様やパッケージのAPIは、今後変更される可能性があります。

## 現在利用できる記法

### ルビ

Markdown上で、ルビを振る対象と読みを明示的に記述するための記法です。モノルビとグループルビに対応しています。

- [記法の仕様](https://omusubimd.uoxou.moe/syntax/ruby)
- [`@omusubimd/remark-omusubi-ruby`](https://www.npmjs.com/package/@omusubimd/remark-omusubi-ruby)

### 字下げによる段落開始

行頭の全角スペースを、日本語の文章における段落開始として扱うための記法です。

- [記法の仕様](https://omusubimd.uoxou.moe/syntax/indent)
- [`@omusubimd/remark-omusubi-indent`](https://www.npmjs.com/package/@omusubimd/remark-omusubi-indent)

より低レイヤーのmicromark / mdast向けパッケージを含む実装一覧は、[`omusubimd/packages-unified`](https://github.com/omusubimd/packages-unified)を参照してください。

## このリポジトリについて

このリポジトリには、[おむすび大作戦のウェブサイト](https://omusubimd.uoxou.moe/)と記法のドキュメントが含まれています。

主な技術構成は次のとおりです。

- TanStack Start / TanStack Router
- React
- Tailwind CSS
- Content Collections
- Cloudflare Workers

## 開発

Node.js 24とnpmを使用します。

```sh
npm install
npm run dev
```

ローカルサーバーは、デフォルトで`http://localhost:3000`に起動します。

### 主なコマンド

```sh
npm run dev      # 開発サーバーを起動
npm test         # テストを実行
npm run check    # フォーマットとLintを確認
npm run build    # 本番用にビルド
```

ドキュメントのページは`src/contents/pages/**/*.md`、ルートとUIは`src/routes`および`src/components`にあります。

## コントリビューション

記法の提案、実装、ドキュメントの改善、バグ報告などのコントリビューションを歓迎します。

- 不具合や提案は[Issue](https://github.com/omusubimd/website/issues)へお寄せください。
- 実装やドキュメントの変更はPull Requestで受け付けています。
- 記法について相談したい場合は[Discord](https://discord.gg/2xCcZnjsa)も利用できます。

## 関連リポジトリ

- [`omusubimd/website`](https://github.com/omusubimd/website) — ウェブサイトと記法ドキュメント
- [`omusubimd/packages-unified`](https://github.com/omusubimd/packages-unified) — unified / remark / micromark / mdast向け実装

## ライセンス

[MIT License](./LICENSE) © 2026 ꒰ UoxoU ꒱ and contributors
