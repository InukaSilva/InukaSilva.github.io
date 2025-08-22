import styles from "./project_card.module.css";

export default function Bio({ children }) {
  return <div className={styles.container}>
    <div className={styles.image}>
      <div className={styles.text}>

        {children}
      </div>
    </div>
  </div>;
}