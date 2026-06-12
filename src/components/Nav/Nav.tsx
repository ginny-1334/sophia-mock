import styles from "./Nav.module.css";

const links = [
  { href: "#process", label: "The Process" },
  { href: "#intelligence", label: "The Intelligence" },
  { href: "#footer", label: "Careers" },
];

export default function Nav() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Primary navigation">
        <a className={styles.wordmark} href="#" aria-label="Sophia home">
          Sophia
        </a>
        <div className={styles.links}>
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a className={styles.login} href="#footer">
          Log In
        </a>
      </nav>
    </header>
  );
}
