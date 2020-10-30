import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from "react";

function Header() {
  function scroll1() {
    window.scrollBy(0, 560);
  }
  return (
    <>
      <header className={styles.topo}>
        <img src="/logo.png" alt="Vercel Logo" className={styles.logoBar} />

        <div className={styles.containOption}>
          <p className={styles.containOptionText}>Início</p>
        </div>

        <div className={styles.containOption} onClick={scroll1}>
          <p className={styles.containOptionText}>Quem sou</p>
        </div>
        {/* 
        <div className={styles.containOption}>
          <p className={styles.containOptionText}>Projetos</p>
        </div>

        <div className={styles.containOption}>
          <p className={styles.containOptionText}>Contato</p>
        </div> */}

        <div className={styles.containPhone}>
          <img src="/phone.png" className={styles.containPhoneLogo} />
          <p className={styles.containPhoneNumber}>69 98473-1151</p>
        </div>
      </header>
    </>
  );
}

export default Header;
