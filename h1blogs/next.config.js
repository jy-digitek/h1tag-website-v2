module.exports = {
    trailingSlash: true,
};

module.exports = {
    ...(config, { isServer }) => {
        if (isServer) {
            require("./scripts/sitemap-generator");
        }
        return config;
    },
};
