import styles from "./Page.module.scss";
import * as React from "react";
import Head from "next/head";

export default function Page({
  title,
  children,
  adaptHeight,
}: {
  title: String;
  children: React.ReactNode;
  adaptHeight?: boolean;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Web design company that specializes in creating unique web experiences."
        />
        <meta property="og:title" content="v26 Design Co." />
        <meta
          property="og:description"
          content="Web design company that specializes in creating unique web experiences."
        />
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/1qOqBefsBSmfNUsEUa9INnpWYY6wynRXG/view?usp=sharing."
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        className={`${styles.container} ${
          adaptHeight && styles.containerTablet
        }`}
      >
        <div className={styles.flankLeft}></div>
        <div className={styles.children}>{children}</div>
        <div className={styles.flankRight}></div>
      </section>
    </>
  );
}
