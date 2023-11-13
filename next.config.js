/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname: "images.tennis.com"
            }
        ]
    }
}

module.exports = nextConfig
