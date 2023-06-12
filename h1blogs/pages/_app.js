import { Provider } from "react-redux";
import { store } from "./redux/store";
import "../styles/global.css";
import Head from "next/head";
import SEOTags from "../components/Head";

export default function MyApp({ Component, pageProps, canonical }) {
    //console.log("canonical myapp", canonical);
    return (
        <>
            {/* <Head>
                <link
                    rel="shortcut icon"
                    href="/h1logo.png"
                    style={{
                        height: "16px",
                        width: "16px",
                    }}
                />
                <link rel="og:canonical" href={canonical} />
            </Head> */}
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
