'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactFormSchema, subjectOptions, type ContactFormData } from '@/lib/contact-form-schema'

interface ContactFormProps {
	className?: string
}

export default function ContactForm({ className = '' }: ContactFormProps) {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | ''>('')
	const [errorMessage, setErrorMessage] = useState('')

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema)
	})

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true)
		setSubmitStatus('')
		setErrorMessage('')

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})

			const result = await response.json()

			if (response.ok) {
				setSubmitStatus('success')
				reset()
				// 3秒後にステータスをリセット
				setTimeout(() => {
					setSubmitStatus('')
				}, 3000)
			} else {
				setSubmitStatus('error')
				setErrorMessage(result.error || '送信に失敗しました')
			}
		} catch (error) {
			console.error('お問い合わせフォーム送信エラー:', error)
			setSubmitStatus('error')
			
			// より詳細なエラーメッセージを提供
			if (error instanceof TypeError && error.message.includes('fetch')) {
				setErrorMessage('ネットワークエラーが発生しました。インターネット接続を確認してください。')
			} else if (error instanceof Error) {
				setErrorMessage(`エラーが発生しました: ${error.message}`)
			} else {
				setErrorMessage('ネットワークエラーが発生しました。しばらく時間をおいて再度お試しください。')
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
					disabled={isSubmitting}
					className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{isSubmitting ? '送信中...' : '送信する'}
				</button>
			</form>
		</div>
	)
}
