"use client";

import { useState } from "react";
import GoldLines from "@/components/decor/GoldLines";
import { processItems } from "@/data/process";
import ProcessCard from "./ProcessCard";
import styles from "./Process.module.css";

export default function Process() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className={styles.process} id="process">
      <GoldLines className={styles.lines} />
      <div className={styles.inner}>
        <h2>Process.</h2>
        <div className={styles.cards} onMouseLeave={() => setActiveIndex(0)}>
          {processItems.map((item, index) => (
            <ProcessCard
              key={item.numeral}
              {...item}
              panelId={`process-panel-${index}`}
              isOpen={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
