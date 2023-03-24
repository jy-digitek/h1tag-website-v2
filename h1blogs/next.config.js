// /** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  redirects: async () => {
    return [
      {
        // Source Path ( from )
        source: "/admin*",

        // Destination Path ( to )
        has: [
          {
            type: "host",
            key: "localhost",
            value: "",
          },
        ],
        destination: "/admin",
        permanent: true,
      },
    ];
  },
};
