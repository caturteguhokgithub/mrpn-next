/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  domains: ["res.cloudinary.com"],
  //   remotePatterns: ["res.cloudinary.com"],
 },
 compiler: {
  // Enables the styled-components SWC transform
  styledComponents: true,
 },
};

// module.exports = nextConfig;

export default nextConfig;
