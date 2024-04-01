/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
  remotePatterns: [
   {
    protocol: "https",
    hostname: "res.cloudinary.com",
    pathname: "**",
   },
   //    {
   //     protocol: "https",
   //     hostname: "logoipsum.com",
   //     pathname: "**",
   //    },
  ],
 },
 compiler: {
  styledComponents: true,
 },
};

// module.exports = nextConfig;

export default nextConfig;
