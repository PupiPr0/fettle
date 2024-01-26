import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>WildMoney System Status</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
