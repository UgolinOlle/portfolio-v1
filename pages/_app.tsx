import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

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
		<ThemeProvider
			attribute="class"
			value={{ light: "light-theme", dark: "dark-theme" }}
		>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
			</Head>
			<div className="antialiased bg-primary text-primary width-full">
				<Header />
				{getLayout(<Component {...pageProps} />)}
			</div>
		</ThemeProvider>
	);
}

export default App;
