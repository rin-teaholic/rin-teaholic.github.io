import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/contact-form-schema'
import { sendContactEmail } from '@/lib/email-utils'

export async function POST(request: NextRequest) {
	try {
		const body = await request.json()
		
		// バリデーション
		const validatedData = contactFormSchema.parse(body)
		
		// 環境変数からメールアドレスを取得
		const contactEmail = process.env.CONTACT_EMAIL
		if (!contactEmail) {
			console.error('CONTACT_EMAIL environment variable is not set')
			return NextResponse.json(
				{ error: 'お問い合わせメールの送信先が設定されていません。管理者にお問い合わせください。' },
				{ status: 500 }
			)
		}

		// SMTP設定の確認
		const smtpUser = process.env.SMTP_USER
		const smtpPass = process.env.SMTP_PASS
		if (!smtpUser || !smtpPass) {
			console.error('SMTP認証情報が設定されていません')
			return NextResponse.json(
				{ error: 'メール送信設定が不完全です。管理者にお問い合わせください。' },
				{ status: 500 }
			)
		}

		// メール送信
		await sendContactEmail({
			...validatedData,
			to: contactEmail
		})

		console.log('お問い合わせメール送信完了:', {
			to: contactEmail,
			from: validatedData.email,
			name: validatedData.name,
			subject: validatedData.subject
		})

		return NextResponse.json(
			{ message: 'お問い合わせを受け付けました。ありがとうございます。' },
			{ status: 200 }
		)
	} catch (error) {
		console.error('お問い合わせフォームエラー:', error)
		
		// Zodバリデーションエラー
		if (error instanceof Error && error.name === 'ZodError') {
			return NextResponse.json(
				{ error: '入力内容に誤りがあります。確認してください。' },
				{ status: 400 }
			)
		}

		// SMTP接続エラー
		if (error instanceof Error && error.message.includes('ECONNREFUSED')) {
			return NextResponse.json(
				{ error: 'メールサーバーに接続できません。ネットワーク接続を確認してください。' },
				{ status: 500 }
			)
		}

		// SMTP認証エラー
		if (error instanceof Error && (error.message.includes('SMTP') || error.message.includes('認証情報') || error.message.includes('authentication'))) {
			return NextResponse.json(
				{ error: 'メール送信認証に失敗しました。管理者にお問い合わせください。' },
				{ status: 500 }
			)
		}

		// JSON解析エラー
		if (error instanceof SyntaxError) {
			return NextResponse.json(
				{ error: 'リクエストデータの形式が正しくありません。' },
				{ status: 400 }
			)
		}

		// その他のエラー
		return NextResponse.json(
			{ 
				error: 'サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。',
				details: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
			},
			{ status: 500 }
		)
	}
}
