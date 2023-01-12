import * as React from "react";
import { gsap, Power3 } from "gsap";
import styles from "./NavigationBar.module.scss";
import Link from "next/link";
import { Hamburger } from "../../assets/Hamburger";
import { useRouter } from "next/router";
import { usePrefersColorScheme } from "../../hooks/usePrefersColorScheme";
import { Xmark } from "../../assets/Xmark";

export default function NavigationBar({
  clicked,
  setClicked,
}: {
  clicked: boolean;
  setClicked: Function;
}) {
  const router = useRouter();
  const containerRef = React.useRef(null);
  const preferredColorScheme = usePrefersColorScheme();
  const [path, setPath] = React.useState("");

  React.useEffect(() => {
    setPath(router.pathname);
    gsap.to(containerRef.current, {
      duration: 1.2,
      opacity: 1,
      delay: 0.2,
      x: 0,
      ease: Power3.easeInOut,
    });
  }, []);

  const ButtonIcon = () => {
    return clicked ? (
      <Xmark color={`var(--color-${preferredColorScheme})`} />
    ) : (
      <Hamburger color={`var(--color-${preferredColorScheme})`} />
    );
  };

  return (
    <div
      className={clicked ? styles.opaqueContainer : styles.container}
      ref={containerRef}
    >
      <div className={styles.flankLeft}></div>
      <div className={styles.header}>
        {path != "/" ? (
          <Link href={"/"} className={styles.companyNameContainer}>
            <h1 className={styles.companyName}>v26 Design Co.</h1>
          </Link>
        ) : (
          <div className={styles.companyPlaceholder} />
        )}
        <div className={styles.links}>
          <Link href={"/about"} className={styles.linkContainer}>
            <h1 className={styles.linkText}>About</h1>
          </Link>
          <Link href={"/contact"} className={styles.linkContainer}>
            <h1 className={styles.linkText}>Contact</h1>
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setClicked((prev: boolean) => !prev)}
        >
          <ButtonIcon />
        </button>
      </div>
      <div className={styles.flankRight}></div>
    </div>
  );
}
