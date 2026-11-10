/** @type {import('next').NextConfig} */
const nextConfig = { output: 'export', trailingSlash: true, images: { unoptimized: true }, basePath: process.env.NODE_ENV === 'production' ? '/elia-v2' : '' };
export default nextConfig;
