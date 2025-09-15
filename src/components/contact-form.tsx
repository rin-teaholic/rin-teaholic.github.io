'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import emailjs from '@emailjs/browser'
import { contactFormSchema, subjectOptions, type ContactFormData } from '@/lib/contact-form-schema'
import { EMAILJS_CONFIG, EMAIL_SETTINGS, validateEmailJSConfig } from '@/lib/emailjs-config'

interface ContactFormProps {
	className?: string
}

export default function ContactForm({ className = '' }: ContactFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('')
	const [errorMessage, setErrorMessage] = useState('')
	const [isEmailJSReady, setIsEmailJSReady] = useState(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema)
	})

	// EmailJSの初期化
	useEffect(() => {
		if (EMAILJS_CONFIG.PUBLIC_KEY) {
			emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
			setIsEmailJSReady(true)
		}
	}, [])

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true)
		setSubmitStatus('')
		setErrorMessage('')

		try {
			// EmailJS設定の確認
			if (!validateEmailJSConfig()) {
				throw new Error('EmailJS設定が不完全です。管理者にお問い合わせください。')
			}

			// EmailJSの初期化確認
			if (!isEmailJSReady) {
				throw new Error('EmailJSの初期化が完了していません。しばらく待ってから再度お試しください。')
			}

			// EmailJSでメール送信
			const templateParams = {
				to_email: EMAIL_SETTINGS.TO_EMAIL,
				from_name: data.name,
				from_email: data.email,
				subject: `${EMAIL_SETTINGS.SUBJECT_PREFIX} ${subjectOptions.find(opt => opt.value === data.subject)?.label || data.subject}`,
				message: data.message,
				reply_to: data.email
			}

			const result = await emailjs.send(
				EMAILJS_CONFIG.SERVICE_ID,
				EMAILJS_CONFIG.TEMPLATE_ID,
				templateParams
			)

			if (result.status === 200) {
				setSubmitStatus('success')
				reset()
				// 3秒後にステータスをリセット
				setTimeout(() => {
					setSubmitStatus('')
				}, 3000)
			} else {
				setSubmitStatus('error')
				setErrorMessage('メール送信に失敗しました。しばらく時間をおいて再度お試しください。')
			}
		} catch (error) {
			console.error('お問い合わせフォーム送信エラー:', error)
			setSubmitStatus('error')
			
			// より詳細なエラーメッセージを提供
			if (error instanceof Error) {
				if (error.message.includes('EmailJS設定が不完全')) {
					setErrorMessage(error.message)
				} else if (error.message.includes('EmailJSの初期化が完了していません')) {
					setErrorMessage(error.message)
				} else if (error.message.includes('Invalid template')) {
					setErrorMessage('メールテンプレートの設定に問題があります。管理者にお問い合わせください。')
				} else if (error.message.includes('Invalid service')) {
					setErrorMessage('メールサービスの設定に問題があります。管理者にお問い合わせください。')
				} else if (error.message.includes('Invalid public key')) {
					setErrorMessage('EmailJSの公開キーが無効です。管理者にお問い合わせください。')
				} else if (error.message.includes('Quota exceeded')) {
					setErrorMessage('メール送信の制限に達しました。しばらく時間をおいて再度お試しください。')
				} else if (error.message.includes('network') || error.message.includes('fetch')) {
					setErrorMessage('ネットワークエラーが発生しました。インターネット接続を確認してください。')
				} else {
					setErrorMessage(`エラーが発生しました: ${error.message}`)
				}
			} else {
				setErrorMessage('メール送信に失敗しました。しばらく時間をおいて再度お試しください。')
			}
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<div className={className}>
			<h4 className="text-xl font-semibold mb-6">メッセージを送る</h4>
			{submitStatus === 'success' && (
				<div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
					メッセージを送信しました。ありがとうございます！
				</div>
			)}
			{submitStatus === 'error' && (
				<div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
					{errorMessage}
				</div>
			)}
			<form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
				<div>
					<label htmlFor="name" className="block text-sm font-medium mb-2">お名前</label>
					<input
						type="text"
						id="name"
						{...register('name')}
						className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
					{errors.name && (
						<p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
					)}
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium mb-2">メールアドレス</label>
					<input
						type="email"
						id="email"
						{...register('email')}
						className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					/>
					{errors.email && (
						<p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
					)}
				</div>
				<div>
					<label htmlFor="subject" className="block text-sm font-medium mb-2">件名</label>
					<select
						id="subject"
						{...register('subject')}
						className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					>
						<option value="">選択してください</option>
						{subjectOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					{errors.subject && (
						<p className="mt-1 text-sm text-red-400">{errors.subject.message}</p>
					)}
				</div>
				<div>
					<label htmlFor="message" className="block text-sm font-medium mb-2">メッセージ</label>
					<textarea
						id="message"
						rows={4}
						{...register('message')}
						className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					></textarea>
					{errors.message && (
						<p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
					)}
				</div>
				<button
					type="submit"
					disabled={isSubmitting || !isEmailJSReady}
					className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? '送信中...' : !isEmailJSReady ? '初期化中...' : '送信する'}
				</button>
			</form>
		</div>
	)
}
