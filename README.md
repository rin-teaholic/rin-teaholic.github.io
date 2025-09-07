# Rin Teaholic Portfolio

Rin Teaholicのポートフォリオサイトです。Web開発者としてのスキル、作品、連絡先情報を紹介しています。

## 特徴

- **レスポンシブデザイン**: デスクトップ、タブレット、モバイルに対応
- **モダンな技術スタック**: Next.js 15、TypeScript、Tailwind CSS
- **インタラクティブなUI**: スムーズなスクロール、アニメーション効果
- **お問い合わせフォーム**: バリデーション機能付きの連絡フォーム
- **プロジェクト紹介**: 作品の詳細とリンク

## 技術スタック

- **フロントエンド**: Next.js 15, React 18, TypeScript
- **スタイリング**: Tailwind CSS
- **アイコン**: Heroicons
- **デプロイ**: GitHub Pages

## セットアップ

1. リポジトリをクローン
```bash
git clone https://github.com/rin-teaholic/rin-teaholic.github.io.git
cd rin-teaholic.github.io
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで `http://localhost:3000` を開く

## ビルドとデプロイ

### GitHub Pages への自動デプロイ

このプロジェクトはGitHub Actionsを使用して自動デプロイが設定されています。

1. **リポジトリの設定**
   - GitHubリポジトリの「Settings」→「Pages」に移動
   - 「Source」を「GitHub Actions」に設定

2. **自動デプロイの流れ**
   - `main`ブランチにプッシュすると自動的にビルドが実行される
   - ビルドが成功するとGitHub Pagesに自動デプロイされる
   - デプロイ完了後、`https://rin-teaholic.github.io/rin-teaholic.github.io/` でアクセス可能

3. **手動でのビルド確認**
   ```bash
   # ローカルでビルドをテスト
   npm run build
   
   # ビルド結果を確認
   ls -la out/
   ```

### 手動デプロイ（非推奨）

```bash
# ビルド
npm run build

# 静的エクスポート
npm run export

# outフォルダをGitHub Pagesのルートにコピー
```

## プロジェクト構造

```
src/
├── app/
│   ├── globals.css      # グローバルスタイル
│   ├── layout.tsx       # ルートレイアウト
│   └── page.tsx         # メインページ
├── components/          # 再利用可能なコンポーネント
└── public/             # 静的ファイル
    ├── profile-image.svg
    ├── cafe-serenity-preview.svg
    └── kaikei-biz-preview.svg
```

## カスタマイズ

### プロフィール情報の更新

`src/app/page.tsx` の以下の部分を編集:

- プロフィール画像: `public/profile-image.svg`
- 技術スタック: `techStack` 配列
- プロジェクト: `projects` 配列
- 連絡先情報: お問い合わせセクション

### スタイルの変更

`src/app/globals.css` または `tailwind.config.ts` を編集してスタイルをカスタマイズできます。

## ライセンス

MIT License

## 連絡先

- Email: rin.teaholic@example.com
- GitHub: [@rin-teaholic](https://github.com/rin-teaholic)
