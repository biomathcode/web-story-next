import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Script from "next/script";
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5K7VWB3071"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5K7VWB3071');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  );
};

export default App;
