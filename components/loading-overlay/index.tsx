import * as React from "react";
import Loader from "../loader";
import { usePrefersColorScheme } from "../../hooks/usePrefersColorScheme";
import { Overlay } from "@mantine/core";
import styles from "./LoadingOverlay.module.scss";

export default function LoadingOverlay({
  transparent = false,
}: {
  transparent?: boolean;
}) {
  const preferredColorScheme = usePrefersColorScheme();

  return (
    <div className={styles.container}>
      <Overlay
        opacity={1}
        color={
          transparent
            ? "transparent"
            : `var(--main-bg-color-${preferredColorScheme})`
        }
        zIndex={5}
        style={{ top: 0, bottom: "-12%" }}
      />
      <Loader position="absolute" />
    </div>
  );
}
