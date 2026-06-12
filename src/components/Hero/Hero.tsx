import Orb from "./Orb";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Private · Intelligent · Intentional</p>
        <h1>Meet the person you&apos;ve been waiting for.</h1>
        <p className={styles.subhead}>
          Sophia is the first private date concierge and social connector.
        </p>
        <Orb />
        <a className={styles.cta} href="#process">
          Apply to Join
        </a>
        <p className={styles.caption}>Free to apply within 2 minutes</p>
      </div>
    </section>
  );
}
