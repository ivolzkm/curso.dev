/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.0.104'],
  serverExternalPackages: ['node-pg-migrate'],
};

module.exports = nextConfig;