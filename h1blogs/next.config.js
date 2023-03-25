/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  redirects: async () => {
    return [
      {
        // Source Path ( from )
        source: "/admin/:path*",

        // Destination Path ( to )

        destination: "/admin",
      },
    ];
  },
};
