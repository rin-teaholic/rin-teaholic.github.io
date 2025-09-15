import nodemailer from 'nodemailer'
import { ContactEmailData, EmailConfig, EmailData, subjectLabels } from './email-types'

/**
 * メール送信設定を取得
 */
export function getEmailConfig(): EmailConfig {
	const config: EmailConfig = {
		host: process.env.SMTP_HOST || 'smtp.gmail.com',
		port: parseInt(process.env.SMTP_PORT || '587'),
		secure: process.env.SMTP_SECURE === 'true',
		auth: {
			user: process.env.SMTP_USER || '',
			pass: process.env.SMTP_PASS || ''
		}
	}

	// 必須環境変数のチェック
	if (!config.auth.user || !config.auth.pass) {
		throw new Error('SMTP_USER または SMTP_PASS が設定されていません')
	}

	return config
}

/**
 * お問い合わせメールのHTMLテンプレートを生成
 */
export function generateContactEmailHTML(data: ContactEmailData): string {
	const subjectLabel = subjectLabels[data.subject] || data.subject
	
	return `
		<!DOCTYPE html>
		<html lang="ja">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>お問い合わせ</title>
			<style>
				body {
					font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', 'Meiryo', sans-serif;
					line-height: 1.6;
					color: #333;
					max-width: 600px;
					margin: 0 auto;
					padding: 20px;
				}
				.header {
					background-color: #2563eb;
					color: white;
					padding: 20px;
					text-align: center;
					border-radius: 8px 8px 0 0;
				}
				.content {
					background-color: #f8fafc;
					padding: 30px;
					border-radius: 0 0 8px 8px;
					border: 1px solid #e2e8f0;
				}
				.field {
					margin-bottom: 20px;
				}
				.label {
					font-weight: bold;
					color: #374151;
					margin-bottom: 5px;
				}
				.value {
					background-color: white;
					padding: 10px;
					border-radius: 4px;
					border: 1px solid #d1d5db;
				}
				.message-value {
					background-color: white;
					padding: 15px;
					border-radius: 4px;
					border: 1px solid #d1d5db;
					white-space: pre-wrap;
				}
				.footer {
					margin-top: 30px;
					padding-top: 20px;
					border-top: 1px solid #e2e8f0;
					font-size: 14px;
					color: #6b7280;
					text-align: center;
				}
			</style>
		</head>
		<body>
			<div class="header">
				<h1>お問い合わせフォーム</h1>
			</div>
			<div class="content">
				<div class="field">
					<div class="label">お名前</div>
					<div class="value">${escapeHtml(data.name)}</div>
				</div>
				<div class="field">
					<div class="label">メールアドレス</div>
					<div class="value">${escapeHtml(data.email)}</div>
				</div>
				<div class="field">
					<div class="label">件名</div>
					<div class="value">${escapeHtml(subjectLabel)}</div>
				</div>
				<div class="field">
					<div class="label">メッセージ</div>
					<div class="message-value">${escapeHtml(data.message)}</div>
				</div>
				<div class="footer">
					<p>このメールはお問い合わせフォームから送信されました。</p>
					<p>送信日時: ${new Date().toLocaleString('ja-JP')}</p>
				</div>
			</div>
		</body>
		</html>
	`
}

/**
 * お問い合わせメールのテキスト版を生成
 */
export function generateContactEmailText(data: ContactEmailData): string {
	const subjectLabel = subjectLabels[data.subject] || data.subject
	
	return `
お問い合わせフォーム

お名前: ${data.name}
メールアドレス: ${data.email}
件名: ${subjectLabel}

メッセージ:
${data.message}

---
このメールはお問い合わせフォームから送信されました。
送信日時: ${new Date().toLocaleString('ja-JP')}
	`.trim()
}

/**
 * HTMLエスケープ関数
 */
function escapeHtml(text: string): string {
	const map: Record<string, string> = {
		'&': '&amp;',
		'<': '&lt;',
		'>': '&gt;',
		'"': '&quot;',
		"'": '&#039;'
	}
	return text.replace(/[&<>"']/g, (m) => map[m])
}

/**
 * メール送信関数
 */
export async function sendEmail(emailData: EmailData): Promise<void> {
	const config = getEmailConfig()
	
	const transporter = nodemailer.createTransport(config)
	
	// 接続テスト
	await transporter.verify()
	
	// メール送信
	await transporter.sendMail({
		from: `"お問い合わせフォーム" <${config.auth.user}>`,
		to: emailData.to,
		subject: emailData.subject,
		text: emailData.text,
		html: emailData.html
	})
}

/**
 * お問い合わせメール送信関数
 */
export async function sendContactEmail(data: ContactEmailData): Promise<void> {
	const html = generateContactEmailHTML(data)
	const text = generateContactEmailText(data)
	
	await sendEmail({
		to: data.to,
		from: data.email,
		subject: `[お問い合わせ] ${subjectLabels[data.subject] || data.subject} - ${data.name}`,
		html,
		text
	})
}
