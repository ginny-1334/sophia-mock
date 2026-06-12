import styles from "./ProcessCard.module.css";

type ProcessCardProps = {
  numeral: string;
  title: string;
  body: string;
  isOpen: boolean;
  onActivate: () => void;
  panelId: string;
};

export default function ProcessCard({
  numeral,
  title,
  body,
  isOpen,
  onActivate,
  panelId,
}: ProcessCardProps) {
  return (
    <article
      className={`${styles.card} ${isOpen ? styles.open : ""}`}
      onMouseEnter={onActivate}
    >
      <button
        className={styles.header}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onFocus={onActivate}
        onClick={onActivate}
      >
        <span className={styles.title}>
          <span className={styles.numeral}>{numeral}.</span> {title}
        </span>
        <span className={styles.indicator} aria-hidden="true" />
      </button>
      <div
        className={styles.panel}
        id={panelId}
        role="region"
        aria-hidden={!isOpen}
      >
        <div className={styles.panelInner}>
          <p>{body}</p>
        </div>
      </div>
    </article>
  );
}
