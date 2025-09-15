# GitHub環境シークレット設定ガイド

## 概要

このプロジェクトでは、EmailJSを使用してお問い合わせフォームを実装しています。GitHub Pagesにデプロイする際に、EmailJSの設定値をGitHub環境シークレットとして設定する必要があります。

## 必要な環境シークレット

以下の4つの環境シークレットをGitHubリポジトリの`production`環境に設定してください：

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

### 2. Environments
1. 左サイドバーの「Environments」をクリック
2. 「New environment」をクリック
3. 環境名に `production` を入力して「Configure environment」をクリック

### 3. 環境シークレットを追加
1. 「Environment secrets」セクションで「Add secret」ボタンをクリック
2. 上記の4つのシークレットをそれぞれ追加：
   - Name: `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - Secret: EmailJSのサービスID
   - 「Add secret」をクリック

### 4. すべてのシークレットを追加
同様の手順で残りの3つのシークレットも追加してください。

### 5. 環境保護ルール（オプション）
必要に応じて以下の保護ルールを設定できます：
- **Required reviewers**: 環境へのデプロイ前に承認が必要
- **Wait timer**: デプロイ前の待機時間
- **Deployment branches**: 特定のブランチからのみデプロイを許可

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

### 3. ワークフローファイルを確認
- `.github/workflows/deploy.yml` で環境シークレットが正しく参照されているか確認
- `environment: production` が設定されているか確認

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

## 環境シークレット vs リポジトリシークレット

### 環境シークレットの利点
- **環境別の管理**: 本番環境とステージング環境で異なる設定値を使用可能
- **保護ルール**: 環境ごとに承認プロセスやブランチ制限を設定可能
- **監査ログ**: 環境へのアクセス履歴を追跡可能
- **権限管理**: 環境ごとに異なるアクセス権限を設定可能

### リポジトリシークレットとの違い
- **リポジトリシークレット**: リポジトリ全体で共有されるシークレット
- **環境シークレット**: 特定の環境でのみ使用されるシークレット

## セキュリティ注意事項

- 環境シークレットの値は絶対に公開しないでください
- 定期的にシークレットを更新することを推奨します
- 不要になったシークレットは削除してください
- 環境保護ルールを適切に設定してセキュリティを強化してください

## 参考リンク

- [EmailJS公式ドキュメント](https://www.emailjs.com/docs/)
- [GitHub環境シークレット公式ドキュメント](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
