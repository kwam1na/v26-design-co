import * as React from "react";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.flankLeft}></div>
      <div className={styles.flankRight}></div>
    </section>
  );
}
