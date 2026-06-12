import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.inner}>
        <div className={styles.links}>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Acceptable Use</a>
        </div>
        <a className={styles.wordmark} href="#" aria-label="Sophia home">
          Sophia
        </a>
        <p>© 2026 Sophia AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
