import styles from "./image_card.module.css";

export default function Image_Card({ children }) {
  return <div className={styles.container}>
    {children}
    
    </div>;
}