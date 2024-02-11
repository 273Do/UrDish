/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgfp.hotp.jp",
      },
      {
        protocol: "http",
        hostname: "webservice.recruit.co.jp",
      },
    ],
  },
};

export default nextConfig;
