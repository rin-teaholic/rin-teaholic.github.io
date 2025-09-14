'use client'

import Image from 'next/image'
import Link from 'next/link'
import { 
	CodeBracketIcon,
	PaintBrushIcon,
	DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
// SVG icons for social media
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
								alt="Rin"
								width={50}
								height={50}
								className="rounded-full"
							/>
							<h1 className="text-2xl font-bold text-gray-900">Rin</h1>
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
							alt="Rin"
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
						<div className="rounded-lg p-8 max-w-2xl mx-auto">
							<p className="text-lg text-gray-300 mb-6">プロジェクトのご相談やお仕事のご依頼はお気軽にご連絡ください</p>
							{/* SNS Links */}
							<div className="flex justify-center space-x-6">
								<a 
									href="https://github.com/rin-teaholic" 
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-300 hover:text-white transition-colors"
									aria-label="GitHub"
								>
									<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								</a>
								<a 
									href="#" 
									className="text-gray-300 hover:text-white transition-colors"
									aria-label="LinkedIn"
								>
									<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
										<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
									</svg>
								</a>
								<a 
									href="#" 
									className="text-gray-300 hover:text-white transition-colors"
									aria-label="Instagram"
								>
									<svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49zm-7.83 1.297c-.753 0-1.418.28-1.928.753-.51.472-.753 1.137-.753 1.89s.243 1.418.753 1.89c.51.472 1.175.753 1.928.753s1.418-.28 1.928-.753c.51-.472.753-1.137.753-1.89s-.243-1.418-.753-1.89c-.51-.472-1.175-.753-1.928-.753z"/>
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="space-y-8">

						{/* Contact Form */}
						<div className="max-w-md mx-auto">
							<ContactForm />
						</div>
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
