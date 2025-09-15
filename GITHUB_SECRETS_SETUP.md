# GitHub Secrets設定ガイド

## 概要

このプロジェクトでは、EmailJSを使用してお問い合わせフォームを実装しています。GitHub Pagesにデプロイする際に、EmailJSの設定値をGitHub Secretsとして設定する必要があります。

## 必要なSecrets

以下の4つのSecretsをGitHubリポジトリに設定してください：

### 1. NEXT_PUBLIC_EMAILJS_SERVICE_ID
- **説明**: EmailJSのサービスID
- **取得方法**: EmailJSダッシュボード → Services → サービス名をクリック → Service IDをコピー

### 2. NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- **説明**: EmailJSのテンプレートID
- **取得方法**: EmailJSダッシュボード → Email Templates → テンプレート名をクリック → Template IDをコピー

### 3. NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
- **説明**: EmailJSの公開キー
- **取得方法**: EmailJSダッシュボード → Account → API Keys → Public Keyをコピー

### 4. NEXT_PUBLIC_TO_EMAIL
- **説明**: お問い合わせメールの送信先アドレス
- **例**: `your-email@example.com`

## 設定手順

### 1. GitHubリポジトリにアクセス
1. リポジトリのページに移動
2. 「Settings」タブをクリック

### 2. Secrets and variables → Actions
1. 左サイドバーの「Secrets and variables」をクリック
2. 「Actions」をクリック

### 3. 新しいSecretsを追加
1. 「New repository secret」ボタンをクリック
2. 上記の4つのSecretsをそれぞれ追加：
   - Name: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - Secret: EmailJSのサービスID
   - 「Add secret」をクリック

### 4. すべてのSecretsを追加
同様の手順で残りの3つのSecretsも追加してください。

## 設定確認

### 1. GitHub Actionsの実行ログを確認
1. リポジトリの「Actions」タブをクリック
2. 最新のワークフロー実行をクリック
3. 「Verify Environment Variables」ステップのログを確認
4. すべての環境変数が「設定済み」と表示されることを確認

### 2. ビルドログの確認
1. 「Build」ステップのログを確認
2. 「✅ すべての環境変数が正しく設定されています」のメッセージを確認

### 3. デプロイ後の動作確認
1. デプロイされたサイトにアクセス
2. お問い合わせフォームをテスト
3. ブラウザの開発者ツールのコンソールで「🔍 EmailJS設定状況」のログを確認

## トラブルシューティング

### 環境変数が読み込まれない場合

1. **Secretsの名前を確認**
   - 正確に `NEXT_PUBLIC_EMAILJS_SERVICE_ID` などと入力されているか確認
   - 大文字小文字を正確に入力

2. **Secretsの値を確認**
   - EmailJSダッシュボードから正しい値をコピーしているか確認
   - 余分なスペースや改行が含まれていないか確認

3. **ワークフローファイルを確認**
   - `.github/workflows/deploy.yml` でSecretsが正しく参照されているか確認

4. **キャッシュをクリア**
   - GitHub Actionsのキャッシュをクリアして再実行

### よくあるエラー

#### 「EmailJS設定が不完全です」
- すべてのSecretsが設定されているか確認
- Secretsの値が正しいか確認

#### 「Invalid public key」
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` の値が正しいか確認
- EmailJSダッシュボードから最新の公開キーを取得

#### 「Invalid service」
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID` の値が正しいか確認
- EmailJSサービスが有効になっているか確認

#### 「Invalid template」
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` の値が正しいか確認
- EmailJSテンプレートが有効になっているか確認

## セキュリティ注意事項

- Secretsの値は絶対に公開しないでください
- 定期的にSecretsを更新することを推奨します
- 不要になったSecretsは削除してください

## 参考リンク

- [EmailJS公式ドキュメント](https://www.emailjs.com/docs/)
- [GitHub Secrets公式ドキュメント](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
