const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config, { webpack }) {
        config.resolve.alias["@"] = path.resolve("./src");

        return config;
    },
};

module.exports = nextConfig;
