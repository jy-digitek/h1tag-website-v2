import { Provider } from "react-redux";
import { store } from "./redux/store";
import "../styles/global.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout || ((page) => page);

    return (
        <Provider store={store}>
            <Head>
                <link
                    rel="shortcut icon"
                    href="/h1logo.png"
                    style={{
                        height: "16px",
                        width: "16px",
                    }}
                />
            </Head>
            <Component {...pageProps} />
        </Provider>
    );
}
