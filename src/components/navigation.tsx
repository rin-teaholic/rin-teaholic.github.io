'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	return (
		<>
			{/* Desktop Navigation */}
			<nav className="hidden md:flex space-x-8">
				<a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
				<a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
				<a href="#skills" className="text-gray-600 hover:text-gray-900">Skills</a>
				<a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
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

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden pb-4">
					<nav className="flex flex-col space-y-2">
						<a 
							href="#about" 
							className="text-gray-600 hover:text-gray-900 py-2"
							onClick={() => setIsMenuOpen(false)}
						>
							About
						</a>
						<a 
							href="#projects" 
							className="text-gray-600 hover:text-gray-900 py-2"
							onClick={() => setIsMenuOpen(false)}
						>
							Projects
						</a>
						<a 
							href="#skills" 
							className="text-gray-600 hover:text-gray-900 py-2"
							onClick={() => setIsMenuOpen(false)}
						>
							Skills
						</a>
						<a 
							href="#contact" 
							className="text-gray-600 hover:text-gray-900 py-2"
							onClick={() => setIsMenuOpen(false)}
						>
							Contact
						</a>
					</nav>
				</div>
			)}
		</>
	)
}
