import { testimonials } from "@/data/testimonials";
import styles from "./SocialProof.module.css";

export default function SocialProof() {
  return (
    <section className={styles.section} id="social-proof">
      <div className={styles.inner}>
        <div className={styles.cards}>
          <svg
            className={styles.connectors}
            viewBox="0 0 100 62"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M20 16 C 30 30, 34 38, 45 47"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M30 13 C 50 8, 66 16, 80 24"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M52 47 C 66 51, 76 41, 81 29"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="33" cy="32" r="0.5" />
            <circle cx="55" cy="16" r="0.5" />
            <circle cx="67" cy="39" r="0.5" />
          </svg>
          {testimonials.map((testimonial) => (
            <article className={styles.card} key={testimonial.name}>
              <div className={styles.meta}>
                <span className={styles.name}>
                  {testimonial.name}, {testimonial.location}
                </span>
                <span
                  className={styles.stars}
                  aria-label={`${testimonial.stars} out of 5 stars`}
                >
                  {"★".repeat(testimonial.stars)}
                </span>
              </div>
              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
