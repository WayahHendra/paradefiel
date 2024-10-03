/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "d2kchovjbwl1tk.cloudfront.net",
            },
        ],
    },
};

export default nextConfig;
