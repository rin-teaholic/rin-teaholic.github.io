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
				{ error: 'サーバー設定エラーが発生しました' },
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
		
		if (error instanceof Error && error.name === 'ZodError') {
			return NextResponse.json(
				{ error: '入力内容に誤りがあります。確認してください。' },
				{ status: 400 }
			)
		}

		// メール送信エラーの場合
		if (error instanceof Error && error.message.includes('SMTP')) {
			return NextResponse.json(
				{ error: 'メール送信設定に問題があります。管理者にお問い合わせください。' },
				{ status: 500 }
			)
		}

		return NextResponse.json(
			{ error: 'サーバーエラーが発生しました。しばらく時間をおいて再度お試しください。' },
			{ status: 500 }
		)
	}
}
