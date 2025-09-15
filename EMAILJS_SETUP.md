# EmailJS設定ガイド

## EmailJSとは

EmailJSは、クライアントサイドから直接メールを送信できるサービスです。サーバーサイドの設定が不要で、フロントエンドのみでメール送信機能を実装できます。

## 設定手順

### 1. EmailJSアカウントの作成

1. [EmailJS公式サイト](https://www.emailjs.com/)にアクセス
2. 「Sign Up」でアカウントを作成
3. メールアドレスで認証を完了

### 2. メールサービスの設定

1. EmailJSダッシュボードにログイン
2. 「Email Services」を選択
3. 「Add New Service」をクリック
4. 使用したいメールサービスを選択（Gmail推奨）

#### Gmail設定の場合：
- **Service Name**: `gmail`（任意の名前）
- **Gmail Address**: 送信元のGmailアドレス
- **Gmail Password**: Gmailのアプリパスワード（2段階認証必須）

### 3. メールテンプレートの作成

1. 「Email Templates」を選択
2. 「Create New Template」をクリック
3. 以下のテンプレートを作成：

```html
件名: {{subject}}

お名前: {{from_name}}
メールアドレス: {{from_email}}
件名: {{subject}}

メッセージ:
{{message}}

---
このメールはお問い合わせフォームから送信されました。
```

### 4. 環境変数の設定

プロジェクトルートに `.env.local` ファイルを作成し、以下の環境変数を設定：

```bash
# EmailJS設定
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# 送信先メールアドレス
NEXT_PUBLIC_TO_EMAIL=rin.teaholic@gmail.com
```

### 5. 設定値の取得方法

#### Service ID
- EmailJSダッシュボードの「Email Services」で確認
- 例: `service_xxxxxxx`

#### Template ID
- EmailJSダッシュボードの「Email Templates」で確認
- 例: `template_xxxxxxx`

#### Public Key
- EmailJSダッシュボードの「Account」→「General」で確認
- 例: `xxxxxxxxxxxxxxxx`

## Gmailアプリパスワードの設定

### 1. 2段階認証の有効化
1. Googleアカウント設定にアクセス
2. 「セキュリティ」→「2段階認証プロセス」を有効化

### 2. アプリパスワードの生成
1. Googleアカウント設定の「セキュリティ」にアクセス
2. 「アプリパスワード」を選択
3. 「メール」を選択してパスワードを生成
4. 生成された16文字のパスワードをEmailJSのGmail設定で使用

## デプロイメント時の設定

### Vercel
1. Vercelダッシュボードでプロジェクトを選択
2. 「Settings」→「Environment Variables」に移動
3. 上記の環境変数を追加

### Netlify
1. Netlifyダッシュボードでサイトを選択
2. 「Site settings」→「Environment variables」に移動
3. 上記の環境変数を追加

## トラブルシューティング

### よくあるエラー

#### 1. 「EmailJS設定が不完全です」
- 環境変数が正しく設定されているか確認
- `NEXT_PUBLIC_` プレフィックスが付いているか確認

#### 2. 「Invalid template」
- Template IDが正しいか確認
- テンプレートが有効になっているか確認

#### 3. 「Invalid service」
- Service IDが正しいか確認
- メールサービスが有効になっているか確認

#### 4. Gmail認証エラー
- アプリパスワードが正しく生成されているか確認
- 2段階認証が有効になっているか確認

## セキュリティ注意事項

- 環境変数は絶対にコードに直接記述しないでください
- Public Keyはクライアントサイドで使用されるため、適切な制限を設定してください
- メール送信の制限を設定してスパムを防いでください

## テスト方法

1. 開発サーバーを起動: `npm run dev`
2. お問い合わせフォームにアクセス
3. テストデータを入力して送信
4. コンソールでエラーがないか確認
5. 送信先メールアドレスにメールが届くか確認
