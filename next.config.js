// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your other Next.js configuration options...
  
    // Replace exportPathMap with generateStaticParams
    async generateStaticParams() {
      // Specify the paths you want to export
      return [
        '/',
        // Add other paths as needed
      ];
    },
  };
  
  module.exports = nextConfig;
  