'use client'

import { useState, useEffect } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	// モバイルメニュー開閉時にボディのスクロールを制御
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		// クリーンアップ関数
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isMenuOpen])

	// スムーズスクロールとヘッダーオフセット調整
	const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
		e.preventDefault()
		
		// モバイルメニューを閉じる
		setIsMenuOpen(false)
		
		// ヘッダーの高さを取得（固定ヘッダーの高さ）
		const headerHeight = 88 // ヘッダーの高さ（py-6 + コンテンツ高さ）
		
		// 対象要素を取得
		const targetElement = document.getElementById(targetId)
		if (targetElement) {
			// スクロール位置を計算（ヘッダーの高さ分オフセット）
			const targetPosition = targetElement.offsetTop - headerHeight
			
			// スムーズスクロール
			window.scrollTo({
				top: targetPosition,
				behavior: 'smooth'
			})
		}
	}

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="hidden md:flex space-x-8">
				<a 
					href="#about" 
					className="text-gray-600 hover:text-gray-900"
					onClick={(e) => handleSmoothScroll(e, 'about')}
				>
					About
				</a>
				<a 
					href="#projects" 
					className="text-gray-600 hover:text-gray-900"
					onClick={(e) => handleSmoothScroll(e, 'projects')}
				>
					Projects
				</a>
				<a 
					href="#skills" 
					className="text-gray-600 hover:text-gray-900"
					onClick={(e) => handleSmoothScroll(e, 'skills')}
				>
					Skills
				</a>
				<a 
					href="#contact" 
					className="text-gray-600 hover:text-gray-900"
					onClick={(e) => handleSmoothScroll(e, 'contact')}
				>
					Contact
				</a>
			</nav>

			{/* Mobile menu button */}
			<div className="md:hidden">
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="text-gray-600 hover:text-gray-900"
				>
					{isMenuOpen ? (
						<XMarkIcon className="h-6 w-6" />
					) : (
						<Bars3Icon className="h-6 w-6" />
					)}
				</button>
			</div>

			{/* Mobile Navigation - 全幅で表示 */}
			{isMenuOpen && (
				<div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-50">
					<div className="flex flex-col h-full">
						{/* Header with close button */}
						<div className="flex justify-between items-center p-4 pt-20 border-b border-gray-200">
							<h2 className="text-lg font-semibold text-gray-900">メニュー</h2>
							<button
								onClick={() => setIsMenuOpen(false)}
								className="text-gray-600 hover:text-gray-900"
							>
								<XMarkIcon className="h-6 w-6" />
							</button>
						</div>
						
						{/* Navigation links */}
						<nav className="flex flex-col flex-1">
							<a 
								href="#about" 
								className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-6 py-4 border-b border-gray-100"
								onClick={(e) => handleSmoothScroll(e, 'about')}
							>
								About
							</a>
							<a 
								href="#projects" 
								className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-6 py-4 border-b border-gray-100"
								onClick={(e) => handleSmoothScroll(e, 'projects')}
							>
								Projects
							</a>
							<a 
								href="#skills" 
								className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-6 py-4 border-b border-gray-100"
								onClick={(e) => handleSmoothScroll(e, 'skills')}
							>
								Skills
							</a>
							<a 
								href="#contact" 
								className="text-gray-600 hover:text-gray-900 hover:bg-gray-50 px-6 py-4"
								onClick={(e) => handleSmoothScroll(e, 'contact')}
							>
								Contact
							</a>
						</nav>
					</div>
				</div>
			)}
		</>
	)
}
