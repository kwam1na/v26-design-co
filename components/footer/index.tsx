import * as React from "react";
import styles from "./Footer.module.scss";
import { socialLinks } from "../../constants";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.copyright}>
        <p>2023 &copy; v26 Design Co. All rights reserved.</p>
      </div>
      <div className={styles.separator} />
      <div className={styles.socials}>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <p>Twitter</p>
        </a>
        <a
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
        >
          <p>Instagram</p>
        </a>
      </div>
    </footer>
  );
}
