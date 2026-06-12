import styles from "./GoldLines.module.css";

type GoldLinesProps = {
  className?: string;
};

export default function GoldLines({ className = "" }: GoldLinesProps) {
  return (
    <svg
      className={`${styles.lines} ${className}`}
      viewBox="0 0 1440 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="sparkle-glow" x="-300%" y="-300%" width="600%" height="600%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <path
        className={styles.soft}
        d="M-20 290C210 345 310 155 550 205C810 258 950 410 1465 170"
      />
      <path
        className={styles.bright}
        d="M-25 315C240 275 315 95 585 182C845 267 1005 355 1460 112"
      />
      <path
        className={styles.fine}
        d="M-10 350C280 220 365 88 630 168C950 266 1080 286 1455 55"
      />
      <path
        className={styles.soft}
        d="M-10 170C275 70 430 235 675 190C945 140 1110 28 1455 120"
      />
      {[
        [112, 282, 2, 0],
        [328, 142, 2.5, 0.7],
        [520, 197, 1.8, 1.4],
        [742, 213, 2.4, 2.1],
        [944, 250, 1.7, 0.4],
        [1168, 183, 2.8, 1.1],
        [1340, 105, 2, 1.8],
      ].map(([cx, cy, r, delay]) => (
        <g key={`${cx}-${cy}`}>
          <circle
            className={styles.glow}
            cx={cx}
            cy={cy}
            r={r * 2.5}
            style={{ animationDelay: `${delay}s` }}
          />
          <circle
            className={styles.sparkle}
            cx={cx}
            cy={cy}
            r={r}
            style={{ animationDelay: `${delay}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
