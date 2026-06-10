import type { AppProps } from "next/app";
import Script from "next/script";
import { useEffect } from "react";
import "./globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      return;
    }

    import("react-scan").then(({ scan }) => {
      scan({
        enabled: true,
        showToolbar: true,
        trackUnnecessaryRenders: true,
      });
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

      <Component {...pageProps} />
    </>
  );
};

export default App;
