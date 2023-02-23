import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
