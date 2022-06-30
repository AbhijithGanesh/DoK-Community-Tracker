import "../styles/globals.css";
import type { AppProps } from "next/search";

let NextApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default NextApp;
