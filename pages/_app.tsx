import "../styles/globals.css";
import type { AppProps } from "next/app";
import Router from "next/router";
import * as React from "react";
import Loader from "../components/loader";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(false);

  React.useEffect(() => {
    Router.events.on("routeChangeStart", (url) => {
      setIsLoading(true);
      setShowLoader(true);
    });

    Router.events.on("routeChangeComplete", (url) => {
      setIsLoading(false);
    });

    Router.events.on("routeChangeError", (url) => {
      setIsLoading(false);
    });
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (!isLoading && showLoader) {
        setShowLoader(false);
      }
    }, 800);

    return () => clearInterval(interval);
  }, [isLoading, showLoader, setShowLoader]);

  return (
    <>
      {showLoader && <Loader />}
      <Component {...pageProps} />
    </>
  );
}
