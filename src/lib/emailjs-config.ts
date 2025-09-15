// EmailJS設定
export const EMAILJS_CONFIG = {
	// EmailJSの設定値
	SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
	TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
	PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
}

// メール送信の設定
export const EMAIL_SETTINGS = {
	// 送信先メールアドレス
	TO_EMAIL: process.env.NEXT_PUBLIC_TO_EMAIL || 'rin.teaholic@gmail.com',
	// 送信者名
	FROM_NAME: 'ポートフォリオサイト',
	// 件名のプレフィックス
	SUBJECT_PREFIX: '[お問い合わせ]'
}

// EmailJS設定の検証
export function validateEmailJSConfig(): boolean {
	return !!(
		EMAILJS_CONFIG.SERVICE_ID &&
		EMAILJS_CONFIG.TEMPLATE_ID &&
		EMAILJS_CONFIG.PUBLIC_KEY
	)
}
