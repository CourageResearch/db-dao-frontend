/** @type {import('next').NextConfig} */


const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            fs: false, // the solution
        };
        return config;
    },
    images: {
        domains: ['storage.googleapis.com'],
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
        mySecret: 'secret',
        secondSecret: process.env.SECOND_SECRET, // Pass through env variables
      },
      publicRuntimeConfig: {
        // Will be available on both server and client
        baseUrl: "http://localhost:8000",
        PINATA_KEY: process.env.PINATA_KEY,
        PINATA_SECRET: process.env.PINATA_SECRET,
        ALCHEMY_KEY: process.env.ALCHEMY_KEY,
        FORMSPREE_KEY: process.env.FORMSPREE_KEY,
    },
};

if(process.env.NODE_ENV === 'production'){
    nextConfig.publicRuntimeConfig.baseUrl = 'https://api.dbdao.xyz'
}

module.exports = nextConfig;