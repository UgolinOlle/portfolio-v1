import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			textColor: {
				primary: "var(--gray12)",
				secondary: "var(--gray11)",
				tertiary: "var(--gray9)",
				brand: "var(--brand)",
			},
			backgroundColor: {
				primary: "var(--gray1)",
				secondary: "var(--gray4)",
				secondaryA: "var(--grayA4)",
				tertiary: "var(--gray3)",
				blur: "var(--blurBackground)",
			},
			borderColor: {
				primary: "var(--gray6)",
				secondary: "var(--gray4)",
			},
		},
	},
	plugins: [],
};
export default config;
