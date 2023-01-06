import styles from "./styles.module.scss";
import Link from "next/link";
import { gsap, Power3 } from "gsap";
import * as React from "react";

export const MobileMenu = () => {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    gsap.to(containerRef.current, {
      duration: 0.8,
      opacity: 1,
      delay: 0.1,
      y: 0,
      ease: Power3.easeOut,
    });
  }, []);
  return (
    <div className={styles.container} ref={containerRef}>
      <Link href={"/about"} className={styles.linkContainer}>
        <h1 className={styles.linkText}>About</h1>
      </Link>
      <Link href={"/contact"} className={styles.linkContainer}>
        <h1 className={styles.linkText}>Contact</h1>
      </Link>
    </div>
  );
};
