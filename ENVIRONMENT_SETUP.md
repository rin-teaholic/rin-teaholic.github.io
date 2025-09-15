# 環境変数の設定

プロジェクトを実行する前に、`.env.local`ファイルを作成して以下の環境変数を設定してください：

```bash
# お問い合わせフォームの送信先メールアドレス
CONTACT_EMAIL=rin.teaholic@gmail.com

# SMTP設定（Gmailの場合）
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Next.jsの環境変数
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Gmailでの設定方法

### 1. アプリパスワードの作成
1. Googleアカウントの設定にアクセス
2. 「セキュリティ」→「2段階認証プロセス」を有効化
3. 「アプリパスワード」で新しいパスワードを生成
4. 生成されたパスワードを`SMTP_PASS`に設定

### 2. 環境変数の設定例
```bash
# Gmailを使用する場合
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=rin.teaholic@gmail.com
SMTP_PASS=your-16-character-app-password
```

## その他のメールサービス

### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Yahoo Mail
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### SendGrid
```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

## セキュリティについて

- `.env.local`ファイルは`.gitignore`に含まれており、Gitリポジトリにはコミットされません
- メールアドレスとSMTP認証情報は環境変数として管理され、コード内に直接記載されていません
- 本番環境では、専用のメール送信サービス（SendGrid、Mailgun等）の使用を推奨します
- アプリパスワードを使用してアカウントのセキュリティを向上させます

## お問い合わせフォームの機能

- **実際のメール送信**: Nodemailerを使用したSMTP経由でのメール送信
- **HTMLメール**: 美しいHTMLテンプレートでのメール送信
- **バリデーション**: Zodを使用した厳密な入力値検証
- **エラーハンドリング**: 適切なエラーメッセージの表示
- **レスポンシブデザイン**: モバイルファーストのデザイン
- **アクセシビリティ**: 適切なラベルとエラー表示
- **型安全性**: TypeScriptによる型チェック

## トラブルシューティング

### メール送信エラーが発生する場合
1. SMTP設定が正しいか確認
2. アプリパスワードが正しく設定されているか確認
3. 2段階認証が有効になっているか確認
4. ファイアウォールでSMTPポートがブロックされていないか確認
