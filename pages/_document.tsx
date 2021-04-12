import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/Roobert/Roobert-Regular.ttf"
            as="font"
            type="font/ttf"
          />
          <link
            rel="preload"
            href="/fonts/Roobert/Roobert-Medium.ttf"
            as="font"
            type="font/ttf"
          />
          <link
            rel="preload"
            href="/fonts/Roobert/Roobert-SemiBold.ttf"
            as="font"
            type="font/ttf"
          />
          <link
            rel="preload"
            href="/fonts/Roobert/Roobert-Bold.ttf"
            as="font"
            type="font/ttf"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
