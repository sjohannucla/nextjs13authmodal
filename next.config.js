/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    API_URL: "http://localhost:3000",
    MONGODB_URI: "mongodb+srv://peak5:peak5@peak5energy.mh5dm.mongodb.net/peak5energy?retryWrites=true&w=majority",
    NEXTAUTH_SECRET: "okoaksdasdokoe13",
  },
  images: {
    domains: ["res.cloudinary.com","links.papareact.com","www.google.com"]
  }
};

module.exports = nextConfig;
