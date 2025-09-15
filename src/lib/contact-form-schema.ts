import { z } from 'zod'

export const contactFormSchema = z.object({
	name: z
		.string()
		.min(1, 'お名前を入力してください')
		.min(2, 'お名前は2文字以上で入力してください')
		.max(50, 'お名前は50文字以内で入力してください'),
	email: z
		.string()
		.min(1, 'メールアドレスを入力してください')
		.email('正しいメールアドレスを入力してください')
		.max(100, 'メールアドレスは100文字以内で入力してください'),
	subject: z
		.string()
		.min(1, '件名を選択してください'),
	message: z
		.string()
		.min(1, 'メッセージを入力してください')
		.min(10, 'メッセージは10文字以上で入力してください')
		.max(1000, 'メッセージは1000文字以内で入力してください')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const subjectOptions = [
	{ value: 'project', label: 'プロジェクトのご相談' },
	{ value: 'collaboration', label: 'コラボレーション' },
	{ value: 'job', label: 'お仕事のご依頼' },
	{ value: 'other', label: 'その他' }
] as const
