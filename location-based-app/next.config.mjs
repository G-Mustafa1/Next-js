/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //     },
  //   ]
  // }
  images: {
    domains: [
      "res.cloudinary.com", // Cloudinary ke liye (future safe)
      "images.unsplash.com",
    ],
  },
};

export default nextConfig;
