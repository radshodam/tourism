import "@/styles/globals.css";
import store from "../store/store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    //store toolkit wrapper components
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
