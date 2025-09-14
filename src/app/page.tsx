'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
	CodeBracketIcon,
	PaintBrushIcon,
	DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import ContactForm from '@/components/contact-form'
import Navigation from '@/components/navigation'

export default function Home() {

	const projects = [
		{
			title: 'Café Serenity',
			description: '静寂と安らぎを提供するカフェサイト',
			url: 'https://rin-teaholic.github.io/cafe-serenity/',
			technologies: ['HTML', 'CSS', 'JavaScript'],
			image: '/cafe-serenity-preview.svg'
		},
		{
			title: 'KaikeiBizPro',
			description: '会計業務支援システム',
			url: 'https://rin-teaholic.github.io/KaikeiBizPro/',
			technologies: ['React', 'TypeScript', 'Node.js'],
			image: '/kaikei-biz-preview.svg'
		}
	]

	const techStack = [
		{ name: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'] },
		{ name: 'Backend', skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'] },
		{ name: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Figma'] },
		{ name: 'Mobile', skills: ['React Native', 'Flutter', 'PWA'] }
	]

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
			{/* Header */}
			<header className="bg-white shadow-sm">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center py-6">
						<div className="flex items-center space-x-4">
							<Image
								src="/profile-image.svg"
								alt="Rin Teaholic"
								width={50}
								height={50}
								className="rounded-full"
							/>
							<h1 className="text-2xl font-bold text-gray-900">Rin Teaholic</h1>
						</div>
						
						<Navigation />
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="flex justify-center mb-8">
						<Image
							src="/profile-image.svg"
							alt="Rin Teaholic"
							width={150}
							height={150}
							className="rounded-full border-4 border-white shadow-lg"
						/>
					</div>
					<h2 className="text-4xl md:text-6xl font-bold mb-6">
						Web Developer
					</h2>
					<p className="text-xl md:text-2xl mb-8 text-blue-100">
						美しく機能的なWebアプリケーションを創造します
					</p>
					<div className="flex justify-center space-x-4">
						<a 
							href="#projects" 
							className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
						>
							作品を見る
						</a>
						<a 
							href="#contact" 
							className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
						>
							お問い合わせ
						</a>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id="about" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h3>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							ユーザー体験を重視し、美しく機能的なWebアプリケーションの開発に情熱を注いでいます。
							フロントエンドからバックエンドまで幅広い技術を習得し、常に新しい技術の学習に取り組んでいます。
						</p>
					</div>
					<div className="grid md:grid-cols-3 gap-8">
						<div className="text-center">
							<CodeBracketIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
							<h4 className="text-xl font-semibold mb-2">Web Development</h4>
							<p className="text-gray-600">React、Next.jsを使用したモダンなWebアプリケーション開発</p>
						</div>
						<div className="text-center">
							<PaintBrushIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
							<h4 className="text-xl font-semibold mb-2">UI/UX Design</h4>
							<p className="text-gray-600">ユーザー中心のデザイン思考で使いやすいインターフェースを設計</p>
						</div>
						<div className="text-center">
							<DevicePhoneMobileIcon className="h-12 w-12 text-green-600 mx-auto mb-4" />
							<h4 className="text-xl font-semibold mb-2">Responsive Design</h4>
							<p className="text-gray-600">あらゆるデバイスで最適な体験を提供するレスポンシブデザイン</p>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section id="skills" className="py-20 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h3>
						<p className="text-lg text-gray-600">幅広い技術スタックで多様なプロジェクトに対応</p>
					</div>
					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{techStack.map((category, index) => (
							<div key={index} className="bg-white rounded-lg p-6 shadow-sm">
								<h4 className="text-lg font-semibold mb-4 text-gray-900">{category.name}</h4>
								<div className="space-y-2">
									{category.skills.map((skill, skillIndex) => (
										<span 
											key={skillIndex}
											className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2"
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section id="projects" className="py-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h3>
						<p className="text-lg text-gray-600">これまでに手がけた主要なプロジェクト</p>
					</div>
					<div className="grid md:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
								<div className="aspect-video bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
									<Image
										src={project.image}
										alt={project.title}
										width={800}
										height={450}
										className="object-contain w-full h-full"
									/>
								</div>
								<div className="p-6">
									<h4 className="text-xl font-semibold mb-2">{project.title}</h4>
									<p className="text-gray-600 mb-4">{project.description}</p>
									<div className="flex flex-wrap gap-2 mb-4">
										{project.technologies.map((tech, techIndex) => (
											<span 
												key={techIndex}
												className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded"
											>
												{tech}
											</span>
										))}
									</div>
									<a 
										href={project.url}
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
									>
										プロジェクトを見る
										<svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
										</svg>
									</a>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id="contact" className="py-20 bg-gray-900 text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h3 className="text-3xl md:text-4xl font-bold mb-4">お問い合わせ</h3>
						<p className="text-lg text-gray-300">プロジェクトのご相談やお仕事のご依頼はお気軽にご連絡ください</p>
					</div>
					<div className="grid md:grid-cols-2 gap-12">
						{/* SNS Links */}
						<div>
							<h4 className="text-xl font-semibold mb-6">SNS</h4>
							<div className="flex space-x-4">
								<a href="https://github.com/rin-teaholic" className="text-gray-300 hover:text-white transition-colors">
									GitHub
								</a>
								<a href="#" className="text-gray-300 hover:text-white transition-colors">
									LinkedIn
								</a>
								<a href="#" className="text-gray-300 hover:text-white transition-colors">
									Instagram
								</a>
							</div>
						</div>

						{/* Contact Form */}
						<ContactForm />
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-800 text-gray-300 py-8">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<p>&copy; 2025 Rin. All rights reserved.</p>
				</div>
			</footer>
		</div>
	)
}
