const withAntdLess = require('next-plugin-antd-less');

/** @type {import('next').NextConfig} */
const nextConfig = withAntdLess({
  transpilePackages: ['kitchen-flow-editor', '@ant-design/pro-editor', 'zustand', 'leva'],
  reactStrictMode: true,
    images: {
      domains: ['fastly.picsum.photos'],
    },
})

module.exports = nextConfig
