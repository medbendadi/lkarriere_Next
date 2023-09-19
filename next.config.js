/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-EN', 'fr-FR', 'ar-MA', 'ar-AR'],
    defaultLocale: 'en-EN',
    localeDetection: false
  },
}

module.exports = nextConfig
