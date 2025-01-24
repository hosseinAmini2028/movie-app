/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "image.tmdb.org",
        protocol: "https",
        pathname: "/t/p/**",
      },
    ],
  },
};

export default nextConfig;
