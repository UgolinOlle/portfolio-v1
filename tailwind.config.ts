import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            blue: "#0171e2",
            white: "#ffffff",
            green: "#32C732",
            red: "#FF6961",
            purple: "#800080",
            yellow: "#FFBF00",
        },
        extend: {
            textColor: {
                primary: "var(--gray-12)",
                secondary: "var(--gray-11)",
                tertiary: "var(--gray-9)",
                brand: "var(--brand)",
            },
            backgroundColor: {
                primary: "var(--gray-1)",
                secondary: "var(--gray-4)",
                secondaryA: "var(--grayA-4)",
                tertiary: "var(--gray-3)",
                blur: "var(--blurBackground)",
            },
            borderColor: {
                primary: "var(--gray-6)",
                secondary: "var(--gray-4)",
            },
        },
    },
    plugins: [],
};
export default config;
