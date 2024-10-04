/** @type {import('next').NextConfig} */
const nextConfig = {
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
