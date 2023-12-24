/** @type {import('next').NextConfig} */

const githubRepo = 'emiliemphotographie'
const assetPrefix = `/${githubRepo}/`
const basePath = `/${githubRepo}`

const nextConfig = {
  // Export settings for static site generation -> github pages
  output: 'export',
  assetPrefix: assetPrefix,
  basePath: basePath
}

module.exports = nextConfig
