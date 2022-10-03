import Head from "next/head";
import { FC } from "react";
import { Footer, Header } from "../components";

interface Props {
  children: JSX.Element;
}

const BaseLayout: FC<Props> = ({ children }) => {
  const title = "Elijah Ohiwerei - Software Developer";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="application-name"
          content="Elijah Ohiwerei"
        />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="Elijah Ohiwerei"
        />
        <meta
          name="description"
          content="Elijah Ohiwerei - Software Developer"
        />
        <meta
          name="format-detection"
          content="telephone=no"
        />
        <meta
          name="mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="msapplication-config"
          content="/icons/browserconfig.xml"
        />
        <meta
          name="msapplication-TileColor"
          content="#2B5797"
        />
        <meta
          name="msapplication-tap-highlight"
          content="no"
        />
        <meta
          name="theme-color"
          content="#000000"
        />
        <meta
          name="twitter:card"
          content="summary"
        />
        <meta
          name="twitter:url"
          content="https://yourdomain.com"
        />
        <meta
          name="twitter:title"
          content="Elijah Ohiwerei"
        />
        <meta
          name="twitter:description"
          content="Elijah Ohiwerei - Software Developer"
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/icons/android-chrome-192x192.png"
        />
        <meta
          name="twitter:creator"
          content="@DavidWShadow"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content="Elijah Ohiwerei"
        />
        <meta
          property="og:description"
          content="Elijah Ohiwerei - Software Developer"
        />
        <meta
          property="og:site_name"
          content="Elijah Ohiwerei"
        />
        <meta
          property="og:url"
          content="https://yourdomain.com"
        />
        <meta
          property="og:image"
          content="https://yourdomain.com/icons/apple-touch-icon.png"
        />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
