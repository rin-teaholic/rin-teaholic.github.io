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

3. 環境変数を設定（お問い合わせフォームを使用する場合）
```bash
# .env.local ファイルを作成
cp .env.example .env.local
```

`.env.local` ファイルに以下の環境変数を設定してください：

```env
# お問い合わせフォーム設定
CONTACT_EMAIL=your-email@example.com

# SMTP設定（Gmailの場合）
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-app-password
```

**Gmailを使用する場合の注意事項:**
- 2段階認証を有効にしてください
- アプリパスワードを生成して `SMTP_PASS` に設定してください
- 通常のパスワードではなく、アプリパスワードを使用する必要があります

4. 開発サーバーを起動
```bash
npm run dev
```

5. ブラウザで `http://localhost:3000` を開く

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

## トラブルシューティング

### お問い合わせフォームのエラー

**ネットワークエラーが発生する場合:**

1. **環境変数の確認**
   - `.env.local` ファイルが正しく設定されているか確認
   - `CONTACT_EMAIL`、`SMTP_USER`、`SMTP_PASS` が設定されているか確認

2. **Gmail設定の確認**
   - 2段階認証が有効になっているか確認
   - アプリパスワードが正しく生成されているか確認
   - 通常のパスワードではなく、アプリパスワードを使用しているか確認

3. **SMTP設定の確認**
   - `SMTP_HOST`、`SMTP_PORT`、`SMTP_SECURE` が正しく設定されているか確認
   - ファイアウォールやプロキシがSMTP接続をブロックしていないか確認

4. **開発環境でのデバッグ**
   - ブラウザの開発者ツールでネットワークタブを確認
   - サーバーログでエラーメッセージを確認
   - `NODE_ENV=development` でより詳細なエラー情報を取得

**よくあるエラーメッセージ:**

- `メール送信設定が不完全です`: SMTP認証情報が設定されていません
- `メールサーバーに接続できません`: ネットワーク接続またはSMTP設定に問題があります
- `メール送信認証に失敗しました`: SMTP認証情報が間違っています

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
