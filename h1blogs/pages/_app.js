"use client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "../styles/global.css";
import Head from "next/head";
import SEOTags from "../components/Head";
import Script from "next/script";

export default function MyApp({ Component, pageProps, canonical }) {
  //console.log("canonical myapp", canonical);
  return (
    <>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-CPREKLS4XW" />
      <Script id="google-analytics">
        {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
       
         gtag('config', 'G-CPREKLS4XW');
        `}
      </Script>
      <Provider store={store}>
        {/* <Head>
                <link rel="canonical" href={canonical} />
            </Head> */}
        <Component {...pageProps} canonical={canonical} />
      </Provider>
    </>
  );
}

MyApp.getInitialProps = ({ ctx }) => {
  // console.log("ctx", ctx);
  const base = "https://h1tags.com";
  const { pathname } = ctx;
  const canonical = base + pathname;

  return {
    canonical,
  };
};
