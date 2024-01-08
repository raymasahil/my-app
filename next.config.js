// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your other Next.js configuration options...
  
    // Add the following exportPathMap configuration
    exportPathMap: async function () {
      return {
        '/': { page: '/' },
        // Add other pages as needed
      }
    },
  }
  
  module.exports = nextConfig;
  