# 環境変数設定ガイド

## お問い合わせフォームの設定

お問い合わせフォームを正常に動作させるために、以下の環境変数を設定してください。

### 必要な環境変数

プロジェクトのルートディレクトリに `.env.local` ファイルを作成し、以下の内容を設定してください：

```bash
# SMTP設定（Gmailを使用する場合の例）
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# お問い合わせメールの送信先
CONTACT_EMAIL=your-contact-email@gmail.com
```

### Gmailを使用する場合の設定手順

1. **Gmailアカウントで2段階認証を有効にする**
2. **アプリパスワードを生成する**
   - Googleアカウント設定 → セキュリティ → 2段階認証プロセス → アプリパスワード
   - 「メール」を選択してパスワードを生成
3. **環境変数を設定する**
   - `SMTP_USER`: あなたのGmailアドレス
   - `SMTP_PASS`: 生成したアプリパスワード
   - `CONTACT_EMAIL`: お問い合わせメールの送信先アドレス

### その他のメールサービス

#### Outlook/Hotmail
```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

#### Yahoo Mail
```bash
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### 設定後の確認

環境変数を設定した後、開発サーバーを再起動してください：

```bash
npm run dev
```

### トラブルシューティング

- **「SMTP認証情報が設定されていません」エラー**: 環境変数が正しく設定されているか確認してください
- **「お問い合わせメールの送信先が設定されていません」エラー**: `CONTACT_EMAIL`が設定されているか確認してください
- **メール送信エラー**: SMTP設定とアプリパスワードが正しいか確認してください

### セキュリティ注意事項

- `.env.local`ファイルはGitにコミットしないでください
- アプリパスワードは定期的に更新することを推奨します
- 本番環境では、環境変数を適切に管理してください