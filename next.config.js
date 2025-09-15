/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	trailingSlash: true,
	basePath: '',
	assetPrefix: '',
	images: {
		unoptimized: true
	},
	// 環境変数の検証
	env: {
		CUSTOM_KEY: process.env.CUSTOM_KEY,
	},
	// ビルド時の環境変数検証
	webpack: (config, { dev, isServer }) => {
		// 本番ビルド時に環境変数を検証
		if (!dev && !isServer) {
			const requiredEnvVars = [
				'NEXT_PUBLIC_EMAILJS_SERVICE_ID',
				'NEXT_PUBLIC_EMAILJS_TEMPLATE_ID',
				'NEXT_PUBLIC_EMAILJS_PUBLIC_KEY',
				'NEXT_PUBLIC_TO_EMAIL'
			]
			
			const missingVars = requiredEnvVars.filter(varName => !process.env[varName])
			
			if (missingVars.length > 0) {
				console.warn('⚠️  以下の環境変数が設定されていません:', missingVars.join(', '))
				console.warn('GitHub Secretsの設定を確認してください。')
			} else {
				console.log('✅ すべての環境変数が正しく設定されています')
			}
		}
		
		return config
	}
}

module.exports = nextConfig
