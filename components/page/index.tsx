import styles from "./Page.module.scss";
import * as React from "react";

export default function Page({
  children,
  adaptHeight,
}: {
  children: React.ReactNode;
  adaptHeight?: boolean;
}) {
  return (
    <section
      className={`${styles.container} ${adaptHeight && styles.containerTablet}`}
    >
      <div className={styles.flankLeft}></div>
      <div className={styles.children}>{children}</div>
      <div className={styles.flankRight}></div>
    </section>
  );
}
