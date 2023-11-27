import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            // -- Commons
            blue: "#0171e2",
            white: "#ffffff",
            green: "#32C732",
            red: "#ff6961",
            purple: "#800080",
            yellow: "#ffbf00",

            // -- Grays
            grayPrimary: "#f8f9fa", // Lightest Gray
            graySecondary: "#e9ecef", // Light Gray
            grayThird: "#dee2e6", // Medium Light Gray
            grayFourth: "#ced4da", // Medium Gray
            grayFifth: "#adb5bd", // Medium Dark Gray
            graySixth: "#6c757d", // Dark Gray
            graySeventh: "#495057", // Darker Gray
            grayEighth: "#343a40", // Almost Black Gray

            // -- Blacks
            blackPrimary: "#282b30", // Lightest Black
            blackSecondary: "#36393e", // Light Black
            blackThird: "#424549", // Medium Black
            blackFourth: "#212529", // Dark Black
            blackFifth: "#1b1e21", // Darker Black
            blackSixth: "#121416", // Darkest Black
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
};
export default config;
