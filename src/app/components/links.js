import styles from "./links.module.css";

export default function Socials ({ children }) {
  return <div className={styles.container}>{children}</div>;
}