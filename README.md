<!-- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# UrDish -->

<p align="center">
<img width="120" src="public/UrDish.png">
</p>

# UrDish

UrDish は現在地から距離を指定してレストランを検索できるサイトです．

https://ur-dish.vercel.app/  

## 🥗 簡易仕様書について

同リポジトリ内に保存してますのでそちらをご覧ください．

## 🥗 開発環境・使用技術・ツール

<H3>8日間(1日あたり4~10時間)</H3>

<H3>FE
<a href="https://skillicons.dev">
   <img src="https://skillicons.dev/icons?i=typescript,nextjs,tailwind"/>
</a>
<h3>環境，コード管理
<a href="https://skillicons.dev">
   <img src="https://skillicons.dev/icons?i=docker,github,git,vscode"/>
</a>
<h3>デプロイ
<a href="https://skillicons.dev">
   <img src="https://skillicons.dev/icons?i=vercel"/>
</a>
<h3>UI・ロゴ
<a href="https://skillicons.dev">
   <img src="https://skillicons.dev/icons?i=blender,figma,photoshop"/>
</a>

## 🥗 動作対象端末・OS

### 動作対象 OS

- iOS 13.2.3
- macOS Sonoma 14.2.1
- Windows 11

### ブラウザ

- safari 17.2.1
- Arc 1.27.3
- Chrome 121.0.6167.184  
(Chrome拡張機能の「Allow CORS」を導入した上で閲覧してください．safariの場合は「開発」->「デベロッパ設定...」->「クロスオリジンの制限を無効にする」にチェックをつけてください．)

## 🥗 アプリ機能

### 1. レストラン検索

検索半径とオプションを指定して，現在地からレストランを検索することができます． 
オプションは，キーワード検索(「店名かな，店名，住所，駅名，お店ジャンルキャッチ，キャッチのフリーワード」)，「おすすめ順」と「距離順」で検索結果の並び順を指定することができます．
ブラウザの位置情報をオンにしましょう．

<img style="width:500px" src="https://github.com/273Do/UrDish/assets/114457271/c9153793-67cc-4498-b7e4-09e534b20851"><img style="width:500px" src="https://github.com/273Do/UrDish/assets/114457271/3023102e-5eff-48ae-a05d-26f9d0882311">

### 2. レストラン一覧表示

検索条件をもとに得られたレストランを一覧で表示します．レストランが見つからなかった場合はNoDataページが表示されるので，検索画面まで戻りましょう．
<img src="https://github.com/273Do/UrDish/assets/114457271/b94adc6a-f3f7-43dc-98ea-61ece892c3d7">
プライバシーのためぼかし処理をしています．

### 3. レストラン詳細表示

一覧ページからレストランを選択すると，詳細な情報を閲覧することができます．予約リンクもありますので，簡単に予約を行うことも可能です．
<img src="https://github.com/273Do/UrDish/assets/114457271/748974c2-56f8-45c0-a0b8-8ea6bf1fc71c">
プライバシーのためぼかし処理をしています．

### 4. 例外処理

レストラン一覧のデータがなかったり，クエリに存在しないレストランのidが指定された場合，特定のページを返すようになっています．

<img style="width:500px" src="https://github.com/273Do/UrDish/assets/114457271/5005c1ac-1a8b-4ed2-8b23-44eeba3f9a65"><img style="width:500px" src="https://github.com/273Do/UrDish/assets/114457271/d1287e56-d0f5-4e87-8ca9-83c77401b829">

## 🥗 免責事項

この作成物および同梱物を使用したことによって生じたすべての障害・損害・不具合等に関しては，私と私の関係者および私の所属するいかなる団体・組織とも，一切の責任を負いません．各自の責任においてご使用ください．
