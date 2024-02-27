/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'br.web.img3.acsta.net',
      },
      {
        protocol: 'https',
        hostname: 'br.web.img2.acsta.net',
      },
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
};


export default nextConfig;
