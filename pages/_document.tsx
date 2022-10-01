import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="Vidom" content="Online Course Marketplace" />
  <link rel="apple-touch-icon" sizes="180x180" href="icons/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="icons/favicon-16x16.png" />

  <link rel="manifest" href="/manifest.json" />
 
        <body>
          <Main />
          <NextScript />
        </body>
        </Head>

      </Html>
    );
  }
}

export default MyDocument;