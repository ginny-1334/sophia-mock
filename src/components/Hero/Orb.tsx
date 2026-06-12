"use client";

import styles from "./Orb.module.css";

export default function Orb() {
  return (
    <div className={styles.frame} aria-hidden="true">
      <div className={styles.orb}>
        <span className={`${styles.blob} ${styles.blob1}`} />
        <span className={`${styles.blob} ${styles.blob2}`} />
        <span className={`${styles.blob} ${styles.blob3}`} />
        <span className={`${styles.blob} ${styles.blob4}`} />
        <span className={styles.swirl} />
        <span className={styles.sheen} />
      </div>
    </div>
  );
}
