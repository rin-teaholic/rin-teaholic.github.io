import { ContactFormData } from '@/lib/contact-form-schema'

export interface EmailConfig {
	host: string
	port: number
	secure: boolean
	auth: {
		user: string
		pass: string
	}
}

export interface EmailData {
	to: string
	from: string
	subject: string
	html: string
	text: string
}

export interface ContactEmailData extends ContactFormData {
	to: string
}

export const subjectLabels: Record<string, string> = {
	project: 'プロジェクトのご相談',
	collaboration: 'コラボレーション',
	job: 'お仕事のご依頼',
	other: 'その他'
}
