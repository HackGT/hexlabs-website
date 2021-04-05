import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import "../styles/normalize.css";
import "../styles/main.scss";
import Header from "../components/header";
import Footer from "../components/footer";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>HexLabs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
