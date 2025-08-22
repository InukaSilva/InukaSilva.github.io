import styles from "./navbar.module.css";

export default function Bio({ children }) {
  return <div className={styles.container}>{children}</div>;
}