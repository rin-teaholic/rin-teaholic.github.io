import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Rin Teaholic - Portfolio',
	description: 'Web Developer Portfolio - Rin Teaholic',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ja">
			<body className={inter.className} suppressHydrationWarning={true}>{children}</body>
		</html>
	)
}
