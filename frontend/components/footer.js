import React from "react";
import styles from "../styles/Home.module.css";

function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Powered by{" "}
        <img src="/logo.png" alt="Vercel Logo" className={styles.logo} />
      </footer>
    </>
  );
}

export default Footer;
