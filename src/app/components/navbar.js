import styles from "./navbar.module.css";

export default function Nav({ children }) {
  return <div className={styles.container}>{children}</div>;
}