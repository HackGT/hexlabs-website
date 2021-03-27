import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "../styles/main.css";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HexLabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Header</h1>
      </header>
      <Component {...pageProps} />
      <footer>
        <h1>Footer</h1>
      </footer>
    </>
  );
}
