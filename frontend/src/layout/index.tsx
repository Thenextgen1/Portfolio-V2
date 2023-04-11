import Head from "next/head";
import { FC } from "react";
import { Footer, Header, Aside } from "../components";

interface Props {
  children: JSX.Element;
  title: string;
  description: string;
  keywords: string;
}

const BaseLayout: FC<Props> = ({ children, title, description, keywords }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          name="keywords"
          content={keywords}
        />
        <meta
          name="author"
          content="Elijah Ohiwerei"
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
          content={description}
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
          content="summary_large_image"
        />
        <meta
          name="twitter:site"
          content="@ohimaiii"
        />
        <meta
          name="twitter:creator"
          content="@ohimaiii"
        />
        <meta
          name="twitter:title"
          content="Elijah Ohiwerei - Portfolio Website"
        />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          content="https://elijahohiwerei.netlify.app/icons/apple-touch-icon.png"
        />

        <meta
          property="og:title"
          content="Elijah Ohiwerei - Portfolio Website"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://www.elijahohiwerei.netlify.app/"
        />
        <meta
          property="og:image"
          content="https://elijahohiwerei.netlify.app/icons/apple-touch-icon.png"
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:site_name"
          content="Elijah Ohiwerei - Portfolio"
        />
        <link
          rel="canonical"
          href="https://elijahohiwerei.netlify.app/"
        />
      </Head>
      <Header />
      {children}

      <Aside />

      <Footer />
    </>
  );
};

export default BaseLayout;
