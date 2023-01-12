import Head from "next/head";
import NavigationBar from "./navigation-bar";
import Footer from "./footer";
import React from "react";
import { MobileMenu } from "./mobile-nav-menu";
import styles from "./Layout.module.scss";

// const TIMEOUT = 2000;
const TIMEOUT = 250;
const gsapDuration = TIMEOUT / 1000;

const Layout = ({ children }) => {
  const [clicked, setClicked] = React.useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Head>
        <title>v26 Design Co.</title>
        <meta name="description" content="Web design company" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationBar clicked={clicked} setClicked={setClicked} />
      {clicked ? <MobileMenu /> : children}
      {!clicked && <Footer />}
    </div>
  );
};

export default Layout;
