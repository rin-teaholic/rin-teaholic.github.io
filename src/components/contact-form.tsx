'use client'

import { useState } from 'react'

interface ContactFormProps {
	className?: string
}

export default function ContactForm({ className = '' }: ContactFormProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: ''
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsSubmitting(true)
		
		// フォーム送信のシミュレーション
		setTimeout(() => {
			setIsSubmitting(false)
			setSubmitStatus('success')
			setFormData({ name: '', email: '', subject: '', message: '' })
			
			// 3秒後にステータスをリセット
			setTimeout(() => {
				setSubmitStatus('')
			}, 3000)
		}, 1000)
	}

	return (
		<div className={className}>
			<h4 className="text-xl font-semibold mb-6">メッセージを送る</h4>
			{submitStatus === 'success' && (
				<div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
					メッセージを送信しました。ありがとうございます！
				</div>
			)}
			<form onSubmit={handleSubmit} className="space-y-4">
				<div>
					<label htmlFor="name" className="block text-sm font-medium mb-2">お名前</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleInputChange}
						className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						required
					/>
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium mb-2">メールアドレス</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleInputChange}
						className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						required
					/>
				</div>
				<div>
					<label htmlFor="subject" className="block text-sm font-medium mb-2">件名</label>
					<select
						id="subject"
						name="subject"
						value={formData.subject}
						onChange={handleInputChange}
						className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
					>
						<option value="">選択してください</option>
						<option value="project">プロジェクトのご相談</option>
						<option value="collaboration">コラボレーション</option>
						<option value="job">お仕事のご依頼</option>
						<option value="other">その他</option>
					</select>
				</div>
				<div>
					<label htmlFor="message" className="block text-sm font-medium mb-2">メッセージ</label>
					<textarea
						id="message"
						name="message"
						rows={4}
						value={formData.message}
						onChange={handleInputChange}
						className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
						required
					></textarea>
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
