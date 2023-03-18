import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
      );
    </Provider>
  );
}
