import React from "react";
import styles from "../styles/Home.module.css";

export default function LogoSplash() {
  return (
    <img
      src="/logo.png"
      alt="Vercel Logo"
      className={styles.logoBarInitialAnimated}
    />
  );
}
