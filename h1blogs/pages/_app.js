"use client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "../styles/global.css";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
  //console.log("canonical myapp", canonical);
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CPREKLS4XW"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-CPREKLS4XW');
        `,
        }}
      />

      <Provider store={store}>
        {/* <Head>
                <link rel="canonical" href={canonical} />
            </Head> */}
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
