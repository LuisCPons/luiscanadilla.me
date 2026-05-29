"use client";

import { useLang } from "./LangContext";
import styles from "./LangToggle.module.scss";

export function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <span className={styles.toggle}>
      <button
        onClick={() => setLang("en")}
        className={lang === "en" ? styles.active : styles.inactive}
        aria-label="Switch to English"
      >
        EN
      </button>
      <span className={styles.divider}>|</span>
      <button
        onClick={() => setLang("es")}
        className={lang === "es" ? styles.active : styles.inactive}
        aria-label="Cambiar a español"
      >
        ES
      </button>
    </span>
  );
}
