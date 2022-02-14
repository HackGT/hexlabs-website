import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "../styles/normalize.css";
import "../styles/main.css";
import Header from "../components/header";
import Footer from "../components/footer";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    fonts: {
      heading: "Roobert",
      body: "Roobert",
    },
    layerStyles: {
      card: {
        maxW: "sm",
        borderRadius: "md",
        boxShadow: "rgba(0, 0, 0, 0.2) 0 4px 16px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
      },
      "card-image": {
        height: "200px",
        width: "100%",
        objectFit: "cover",
        borderTopLeftRadius: "md",
        borderTopRightRadius: "md",
      },
    },
    styles: {
      global: {
        h1: {
          fontSize: "4.5rem",
          fontWeight: "600",
          lineHeight: "140%",
        },
        h2: {
          fontSize: "3.25rem",
          fontWeight: "500",
          lineHeight: "140%",
        },
        h3: {
          fontSize: "2.375rem",
          fontWeight: "500",
          lineHeight: "140%",
        },
        h4: {
          fontSize: "1.5rem",
          fontWeight: "500",
          lineHeight: "140%",
        },
        h5: {
          fontSize: "1.125rem",
          fontWeight: "500",
          lineHeight: "140%",
        },
        h6: {
          fontSize: "1rem",
          fontWeight: "500",
          lineHeight: "140%",
        },
      },
    },
    components: {
      // Text: {
      //   baseStyle: {
      //     fontSize: "1rem",
      //     fontWeight: "400",
      //     lineHeight: "120%",
      //   },
      // },
    },
  });

  return (
    <>
      <ChakraProvider theme={theme}>
        <Head>
          <title>HexLabs</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
      </ChakraProvider>
    </>
  );
}
