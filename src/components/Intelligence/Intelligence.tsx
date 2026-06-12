import GoldLines from "@/components/decor/GoldLines";
import { stats } from "@/data/stats";
import styles from "./Intelligence.module.css";

export default function Intelligence() {
  return (
    <section className={styles.section} id="intelligence">
      <GoldLines className={styles.lines} />
      <div className={styles.inner}>
        <h2 className={styles.heading}>The Intelligence.</h2>
        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.lede}>
              Sophia doesn&apos;t just find someone attractive.{" "}
              <em>She finds someone right for you.</em>
            </p>
            <p className={styles.copy}>
              Sophia is trained on the science of desire, attraction, and
              relational compatibility. She learns your nuances with every
              exchange, and understands you better than you understand yourself.
            </p>
            <a className={styles.link} href="#social-proof">
              Learn how Sophia thinks <span>→</span>
            </a>
          </div>
          <div className={styles.right}>
            {stats.map((stat) => (
              <div className={styles.stat} key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
