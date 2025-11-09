/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
    esmExternals: 'loose',
  },
  images: {
    domains: [
      'ui-avatars.com',
      's.gravatar.com',
      'lh3.googleusercontent.com',
      'coin-images.coingecko.com',
    ],
  },
  transpilePackages: ['@auth0/nextjs-auth0'],
  webpack: (config, { isServer }) => {
    // Handle ESM modules
    config.resolve.extensionAlias = {
      '.js': ['.js', '.cjs', '.mjs'],
      '.mjs': ['.mjs', '.js', '.cjs'],
      '.cjs': ['.cjs', '.js', '.mjs'],
    };

    return config;
  },
};

module.exports = nextConfig;
