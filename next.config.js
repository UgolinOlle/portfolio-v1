/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,

	// -- Image
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "github.com",
				pathname: "/",
			},
		],
	},
};

module.exports = nextConfig;
