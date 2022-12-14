import Head from "next/head";
import styles from "../styles/Home.module.scss";
import { gsap, Power3 } from "gsap";
import * as React from "react";
import Link from "next/link";

export default function Home() {
  const companyName = React.useRef(null);
  const ctaSection = React.useRef(null);
  const ctaButton = React.useRef(null);

  React.useEffect(() => {
    gsap.to(ctaSection.current, {
      duration: 4,
      opacity: 1,
      delay: 2.4,
    });

    gsap.to(ctaButton.current, {
      duration: 2,
      opacity: 1,
      delay: 4,
      y: 0,
      ease: Power3.easeOut,
    });

    gsap.to(companyName.current, {
      duration: 1.2,
      opacity: 1,
      y: 0,
      delay: 0.8,
      ease: Power3.easeOut,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>v26 Design Co.</title>
        <meta name="description" content="Web design company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.ctaContainer} ref={ctaSection}>
          <h3 className={styles.ctaText}>
            let's create your web presence,
            <span className={styles.highlighted}> together</span>
          </h3>

          <div className={styles.ctaAction} ref={ctaButton}>
            <Link href={"/contact"}>
              <button className={styles.ctaButton}>Get Started</button>
            </Link>
          </div>
        </div>
        <div className={styles.companyName} ref={companyName}>
          <h1 className={styles.title}>v26 Design Co.</h1>
        </div>
      </main>
    </div>
  );
}
