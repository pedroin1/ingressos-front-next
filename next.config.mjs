/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "freerangestock.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
