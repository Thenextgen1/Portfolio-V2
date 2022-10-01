import type { AppProps } from "next/app";
import "../src/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
			<Component {...pageProps} />

	);
}
