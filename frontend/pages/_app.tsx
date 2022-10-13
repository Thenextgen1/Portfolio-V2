import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import "../src/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <Component
        {...pageProps}
        key={router.asPath}
      />
    </AnimatePresence>
  );
}
