import * as React from "react";
import styles from "./Button.module.scss";

const Button = ({
  title,
  onClick,
}: {
  title: string;
  onClick?: () => void;
}) => {
  return (
    <button className={styles.ctaButton} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
