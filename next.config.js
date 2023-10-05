/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"],
    },
};
const withVideos = require("next-videos");

module.exports = withVideos(nextConfig);
