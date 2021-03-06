import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "../styles/normalize.css";
import "../styles/main.css";
import Header from "../components/header";
import Footer from "../components/footer";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HexLabs</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
