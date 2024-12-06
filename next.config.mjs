/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "smartcasuals.ru",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
