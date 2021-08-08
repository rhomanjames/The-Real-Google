module.exports = {

  images: {
    domains: ["www.jobalign.com", "boutiquephotographer.com"],
  },
  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    if (!isServer) {
        // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
        config.resolve.fallback = {
            fs: false
        }
    }

    return config;}
}
