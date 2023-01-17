import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Router } from "next/router";
import * as React from "react";
import Loader from "../components/loader";
import Layout from "../components/Layout";
import LoadingOverlay from "../components/loading-overlay";

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showLoader, setShowLoader] = React.useState(false);
  const [completedLoading, setCompletedLoading] = React.useState(false);

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
    }, 1500);

    return () => clearInterval(interval);
  }, [isLoading, showLoader, setShowLoader]);

  const Content = () => {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };

  return showLoader ? <LoadingOverlay transparent /> : <Content />;
}
