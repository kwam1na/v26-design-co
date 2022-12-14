import * as React from "react";
import styles from "./Loader.module.scss";

export default function Loader({
  position = "static",
}: {
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
}) {
  return (
    <div className={styles.background} style={{ position: position }}>
      <div className={styles.container}>
        <div className={styles.loader}></div>
      </div>
    </div>
  );
}
