import * as React from "react";
import styles from "./GenericPage.module.scss";
import Link from "next/link";
import { Arrow } from "../../assets/Arrow";
import { gsap, Power3 } from "gsap";
import Head from "next/head";
import { usePrefersColorScheme } from "../../hooks/usePrefersColorScheme";

export default function GenericPage({
  title,
  headerText,
  body,
}: {
  title: string;
  headerText: string;
  body: string;
}) {
  const preferredColorScheme = usePrefersColorScheme();

  const content = React.useRef(null);

  const animationOptions = {
    opacity: 1,
    duration: 1.2,
    delay: 0.1,
    ease: Power3.easeInOut,
    y: 0,
  };

  React.useEffect(() => {
    gsap.to(content.current, animationOptions);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Web design company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content} ref={content}>
        <div className={styles.body}>
          <h1 className={styles.header}> {headerText}</h1>
          <p>{body}</p>
        </div>
        <div className={styles.backContainer}>
          <Link href="/" className={styles.back}>
            <div className={styles.arrow}>
              <Arrow color={`var(--color-${preferredColorScheme})`} />
            </div>
            <p>Back to homepage</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
