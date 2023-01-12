import * as React from "react";
import Page from "../../components/page";
import styles from "./Home.module.scss";
import Head from "next/head";
import { gsap, Power3 } from "gsap";
import Link from "next/link";
import { Arrow } from "../../assets/Arrow";
import { usePrefersColorScheme } from "../../hooks/usePrefersColorScheme";

export default function Home() {
  const companyName = React.useRef(null);
  const ctaSection = React.useRef(null);
  const ctaButton = React.useRef(null);
  const preferredColorScheme = usePrefersColorScheme();

  React.useEffect(() => {
    gsap.to(ctaSection.current, {
      duration: 1.2,
      opacity: 1,
      y: 0,
      delay: 0.1,
      ease: Power3.easeInOut,
    });

    gsap.to(ctaButton.current, {
      duration: 1.2,
      opacity: 1,
      x: 0,
      delay: 1.4,
      ease: Power3.easeInOut,
    });
  }, []);

  return (
    <Page>
      <div className={styles.container}>
        <Head>
          <title>v26 Design Co.</title>
          <meta name="description" content="Web design company" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <section className={styles.main}>
          <div className={styles.ctaContainer} ref={ctaSection}>
            <div className={styles.companyName}>
              <h1 className={styles.title}>v26 Design Co.</h1>
            </div>

            <div className={styles.ctaActionContainer}>
              <Link
                href="/contact"
                className={styles.ctaAction}
                ref={ctaButton}
              >
                <p>Start a project</p>
                <div className={styles.arrow}>
                  <Arrow color={`var(--color-${preferredColorScheme})`} />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}
