"use client"

import { motion } from "motion/react"
import styles from "./button.module.css";

export default function Bio({ children }) {
  return (
    <motion.button whileHover={{ scale: 1.1 }} onHoverStart={() => console.log('hover started!')}>
        <div className={styles.container}>{children}</div>
    </motion.button>
  );
}