import styles from "./Page.module.scss";
import * as React from "react";

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <section className={styles.container}>
      <div className={styles.flankLeft}></div>
      <div className={styles.children}>{children}</div>
      <div className={styles.flankRight}></div>
    </section>
  );
}
