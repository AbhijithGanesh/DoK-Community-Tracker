/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://dok-community-tracker.vercel.app/",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value:
              "https://dok-community-tracker.vercel.app/api/profiles/get_username_or_null",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
