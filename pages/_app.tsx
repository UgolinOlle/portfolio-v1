import type { AppProps } from "next/app";
import Head from "next/head";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import "@/styles/globals.css";
import { Header } from "@/components/Header";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
	const getLayout =
		Component.getLayout ??
		((page) => (
			<main className="px-6 md:px-6 pt-16 pb-24 md:pt-20 md:pb-44 max-w-[965px] mx-auto ring-offset-primary ">
				{page}
			</main>
		));
	const router = useRouter();

	return (
		<AnimatePresence mode="wait">
			<ThemeProvider
				attribute="class"
				value={{ light: "light-theme", dark: "dark-theme" }}
			>
				<Head>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<link rel="apple-touch-icon" href="apple-touch-icon.png" />
					<link
						rel="shortcut icon"
						href="/profile-pic.png"
						type="image/png"
					/>
					<meta property="og:site_name" content="Ugolin Ollé" />
					<meta name="og:title" content="Ugolin Ollé | Portfolio" />
					<meta property="og:type" content="website" />
					<meta
						property="og:image"
						content="https://ugolin-olle/profile-pic.png"
					/>
				</Head>
				<div className="antialiased bg-primary text-primary width-full">
					<Header />
					{getLayout(<Component {...pageProps} />)}
				</div>
			</ThemeProvider>
		</AnimatePresence>
	);
}

export default App;
