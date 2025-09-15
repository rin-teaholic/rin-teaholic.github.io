// EmailJS設定
export const EMAILJS_CONFIG = {
	// EmailJSの設定値
	SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
	TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
	PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
}

// デバッグ用：環境変数の状態を確認
export function getEmailJSConfigStatus() {
	const isProduction = process.env.NODE_ENV === 'production'
	const status = {
		SERVICE_ID: {
			value: EMAILJS_CONFIG.SERVICE_ID,
			length: EMAILJS_CONFIG.SERVICE_ID?.length || 0,
			isSet: !!EMAILJS_CONFIG.SERVICE_ID
		},
		TEMPLATE_ID: {
			value: EMAILJS_CONFIG.TEMPLATE_ID,
			length: EMAILJS_CONFIG.TEMPLATE_ID?.length || 0,
			isSet: !!EMAILJS_CONFIG.TEMPLATE_ID
		},
		PUBLIC_KEY: {
			value: EMAILJS_CONFIG.PUBLIC_KEY,
			length: EMAILJS_CONFIG.PUBLIC_KEY?.length || 0,
			isSet: !!EMAILJS_CONFIG.PUBLIC_KEY
		},
		NODE_ENV: process.env.NODE_ENV,
		isProduction,
		allSet: validateEmailJSConfig()
	}
	
	// 本番環境での詳細ログ
	if (isProduction) {
		console.log('🔍 EmailJS設定状況:', {
			SERVICE_ID: status.SERVICE_ID.isSet ? '✅ 設定済み' : '❌ 未設定',
			TEMPLATE_ID: status.TEMPLATE_ID.isSet ? '✅ 設定済み' : '❌ 未設定',
			PUBLIC_KEY: status.PUBLIC_KEY.isSet ? '✅ 設定済み' : '❌ 未設定',
			NODE_ENV: status.NODE_ENV,
			allSet: status.allSet ? '✅ 完全' : '❌ 不完全'
		})
	}
	
	return status
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
