import * as React from "react";
import styles from "./Button.module.scss";

const Button = ({
  title,
  onClick,
  disabled,
}: {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button className={styles.ctaButton} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
