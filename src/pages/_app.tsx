import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    (window as any)?.plugSDK?.init({
      app_id: "don:core:dvrv-us-1:devo/13GRGt258:plug_setting/1",
    });
  }, []);
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
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7971530262943091"
        crossOrigin="anonymous"
      ></Script>

      <Script
        id="devrev"
        src="https://plug-platform.devrev.ai/static/plug.js"
        type="text/javascript"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      ></Script>
      <Component {...pageProps} />
    </>
  );
};

export default App;
